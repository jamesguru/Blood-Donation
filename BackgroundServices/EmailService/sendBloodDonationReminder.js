const ejs = require("ejs");
const dotenv = require("dotenv");
const sendMail = require("../helpers/sendMail");
const Donor = require("../models/Donor");

dotenv.config();

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
};

const sendBloodDonationReminder = async () => {
  const donors = await Donor.find();

  if (donors.length > 0) {
    for (let donor of donors) {
      // Calculate the difference between donor.date and today's date
      const donorDate = new Date(donor.date);
      const today = new Date();
      const diffTime = Math.abs(today - donorDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      // Check if the difference is more than 60 days
      if (diffDays > 60) {
        ejs.renderFile(
          "templates/BloodDonationReminder.ejs",
          {
            name: donor.name,
            date: donor.date
          },
          async (err, data) => {
            if (err) {
              console.log("Error rendering EJS template:", err);
              return;
            }

            let messageoption = {
              from: process.env.EMAIL,
              to: donor.email,
              subject: "Hello, Blood Bridge Donor.",
              html: data,
            };

            try {
              await sendMail(messageoption);

              // Format the current date before updating
              const formattedDate = formatDate(today);
              await Donor.findByIdAndUpdate(donor._id, {
                $set: { status: 1, date: formattedDate },
              });
            } catch (error) {
              console.log("Error sending email or updating donor status:", error);
            }
          }
        );
      }
    }
  }
};

module.exports = { sendBloodDonationReminder };
