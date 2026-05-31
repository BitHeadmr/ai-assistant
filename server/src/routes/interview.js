const express = require("express");
const {
  startInterview,
  submitAnswer,
  getInterviews,
  getInterview,
} = require("../controllers/interviewController");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.use(protect); // all routes require auth

router.post("/start", startInterview);
router.post("/submit-answer", submitAnswer);
router.get("/", getInterviews);
router.get("/:id", getInterview);

module.exports = router;
