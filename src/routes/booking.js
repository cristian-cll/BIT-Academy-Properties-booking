const express = require ("express");
const router = express.Router();
const bookingController = require("../controllers/booking/booking");


onclick="window.location.href= window.location.search + '&<%= property.__t %>=<%= property._id%>-booking'" 

router.get("/booking/", bookingController.renderBookingPage);

router.post("/booking/", bookingController.createBooking);


module.exports = router;