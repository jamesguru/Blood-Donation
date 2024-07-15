const express = require("express");
const router = express.Router();
const {
  createDonor,
  getAllDonors,
  updateDonor,
  getOneDonor,
  deleteDonor,
} = require("../controllers/donors");

const {
  verifyToken,
  verifyTokenAndAuthorization,
} = require("../middlewares/verifyToken");

// ADD DONOR
router.post("/", createDonor);

// GET ALL DONORS

router.get("/", getAllDonors);

// UPDATE DONOR
router.put("/:id", updateDonor);

// GET ONE DONOR

router.get("/find/:id", getOneDonor);


// DELETE DONOR

router.delete("/:id", deleteDonor);

module.exports = router;