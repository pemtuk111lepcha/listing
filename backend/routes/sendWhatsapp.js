// Add Nodemailer for sending booking details to drivers via email

const nodemailer = require('nodemailer');

// Configure your SMTP transport (update with your real SMTP/email details)
const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'gmail'
    auth: {
        user: process.env.NOTIFY_EMAIL_USER || 'pemtuk.lepcha@msu.edu.in',
        pass: process.env.NOTIFY_EMAIL_PASS || 'mjrx amqp rhet tyuy'
    }
});



// Export a function for programmatic notification sending (Email via Nodemailer)
module.exports.sendBookingToDriver = async function (booking) {
    const DRIVER_EMAIL = process.env.DRIVER_EMAIL || 'pemtuk2002@gmail.com';

    // Debug: log the booking object to verify what is received from frontend
    console.log('Booking received for email sending:', booking);

    // --- FIX: Log all keys to see what is actually present ---
    console.log('All booking keys:', Object.keys(booking));

    // --- FIX: Accept email from booking.contactEmail as well ---
    let USER_EMAIL = '';
    if (
        typeof booking.email === 'string' &&
        booking.email.trim() &&
        booking.email.trim().toLowerCase() !== 'undefined' &&
        booking.email.trim().toLowerCase() !== 'null'
    ) {
        USER_EMAIL = booking.email.trim();
    } else if (
        typeof booking.contactEmail === 'string' &&
        booking.contactEmail.trim() &&
        booking.contactEmail.trim().toLowerCase() !== 'undefined' &&
        booking.contactEmail.trim().toLowerCase() !== 'null'
    ) {
        USER_EMAIL = booking.contactEmail.trim();
    } else if (
        typeof booking.userEmail === 'string' &&
        booking.userEmail.trim() &&
        booking.userEmail.trim().toLowerCase() !== 'undefined' &&
        booking.userEmail.trim().toLowerCase() !== 'null'
    ) {
        USER_EMAIL = booking.userEmail.trim();
    }

    console.log('Resolved USER_EMAIL:', USER_EMAIL);

    // Message for driver
    const driverMsg =
        `New Cab Booking Received!\n\n` +
        `Customer Name: ${booking.name}\n` +
        `Customer Email: ${booking.email || ''}\n` +
        `Pickup: ${booking.pickup}\n` +
        `Dropoff: ${booking.dropoff}\n` +
        `Date: ${booking.date}\n` +
        `Time: ${booking.time}\n` +
        `Vehicle: ${booking.vehicleModel}\n` +
        `Seats Booked: ${booking.seats ? booking.seats.length : booking.passengerCount}\n` +
        `Fare: ₹${booking.fare}\n` +
        `Please contact the customer for confirmation.`;

    // Message for user
    const userMsg =
        `Thank you for booking with us!\n\n` +
        `Your booking is confirmed.\n` +
        `Pickup: ${booking.pickup}\n` +
        `Dropoff: ${booking.dropoff}\n` +
        `Date: ${booking.date}\n` +
        `Time: ${booking.time}\n` +
        `Vehicle: ${booking.vehicleModel}\n` +
        `Seats: ${booking.seats ? booking.seats.length : booking.passengerCount}\n` +
        `Fare: ₹${booking.fare}\n` +
        `We look forward to serving you!`;

    try {
        console.log(`Attempting to send booking email to driver (${DRIVER_EMAIL})...`);
        const infoDriver = await transporter.sendMail({
            from: process.env.NOTIFY_EMAIL_USER || 'pemtuk.lepcha@msu.edu.in',
            to: DRIVER_EMAIL,
            subject: 'New Cab Booking Received',
            text: driverMsg
        });

        let infoUser = null;
        if (
            USER_EMAIL &&
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(USER_EMAIL)
        ) {
            try {
                console.log(`Attempting to send booking email to user (${USER_EMAIL})...`);
                infoUser = await transporter.sendMail({
                    from: process.env.NOTIFY_EMAIL_USER || 'pemtuk.lepcha@msu.edu.in',
                    to: USER_EMAIL,
                    subject: 'Your Cab Booking Confirmation',
                    text: userMsg
                });
                console.log(`Email sent successfully to user (${USER_EMAIL}). MessageId: ${infoUser.messageId}`);
            } catch (userErr) {
                console.error(`Error sending email to user (${USER_EMAIL}):`, userErr);
            }
        } else {
            console.warn('No valid user email provided, skipping user email send.');
        }

        console.log(`Email sent successfully to driver (${DRIVER_EMAIL}). MessageId: ${infoDriver.messageId}`);
        return { success: true, driver: infoDriver, user: infoUser };

    } catch (error) {
        console.error('Error sending email:', error);
        return {
            success: false,
            error: error.message
        };
    }
};
