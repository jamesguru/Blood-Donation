const Donor = require("../models/Donor");

// Create donor 

const createDonor = async (req, res) => {
    try {
      const newDonor = Donor(req.body);
      const donor = await newDonor.save();
      res.status(201).json(donor);
    } catch (error) {
      res.status(500).json(error);
    }
  };

// Get all donors
const getAllDonors = async (req, res) => {
    try {
      const donors = await Donor.find().sort({ createdAt: -1 });
      res.status(200).json(donors);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  // Update the donor

const updateDonor = async (req, res) => {
    try {
      const donor = await Donor.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(201).json(donor);
    } catch (error) {
      res.status(500).json(error);
    }
  };


  // Get one donor

const getOneDonor = async (req, res) => {
    try {
      const donor = await Donor.findById(req.params.id);
      res.status(200).json(donor);
    } catch (error) {
      res.status(500).json(error);
    }
  };


  // Delete a donor

const deleteDonor = async (req, res) => {
    try {
      await Donor.findByIdAndDelete(req.params.id);
      res.status(201).json("donor has been deleted successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  };

  const getBloodGroupStatistics = async (req, res) => {
    try {
      const statistics = await Donor.aggregate([
        {
          $group: {
            _id: "$bloodgroup",
            count: { $sum: 1 }
          }
        }
      ]);
      res.status(200).json(statistics);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  module.exports = {
    deleteDonor,
    getOneDonor,
    updateDonor,
    getAllDonors,
    createDonor,
    getBloodGroupStatistics
  };
  