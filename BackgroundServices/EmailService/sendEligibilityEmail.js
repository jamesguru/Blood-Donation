const ejs = require("ejs");
const dotenv = require("dotenv");
const sendMail = require("../helpers/sendMail");
const Prospect = require("../models/Prospect");

dotenv.config();

const sendElibilityEmail = async () => {
  const prospects = await Prospect.find();
  for (let prospect of prospects) {
    if (prospect.age < 18 || prospect.weight < 50) {
      ejs.renderFile(
        "templates/BloodDonationEligibility.ejs",
        { name: prospect.name, age: prospect.age, weight: prospect.weight },
        async (err, data) => {
          let messageoption = {
            from: process.env.EMAIL,
            to: prospect.email,
            subject: "Blood Bridge, Blood Donation Eligibility.",
            html: data,
          };

          try {
            sendMail(messageoption);
            await Prospect.findByIdAndDelete(prospect._id);
          } catch (error) {
            console.log(err);
          }
        }
      );
    }
  }
};

module.exports = { sendElibilityEmail };
