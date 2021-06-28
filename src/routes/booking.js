const express = require ("express");
const router = express.Router();
const bookingController = require("../controllers/booking/booking");


router.get("/booking/", bookingController.renderBookingPage);

router.post("/booking/", bookingController.createBooking);

router.get("/booking/:id/delete", bookingController.deleteBooking)


module.exports = router;