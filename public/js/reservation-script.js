document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const service = document.getElementById('service').value;
    const branch = document.getElementById('branch').value;

    // Check if all fields are filled
    if (name && date && service && branch) {
        // Show the confirmation message
        document.getElementById('confirmation').classList.remove('hidden');
        
        // Create confirmation details
        const confirmationDetails = `Thank you, ${name}! You have reserved a ${service} service on ${date} at the ${branch} branch of BaliHalus.`;
        document.getElementById('confirmationDetails').innerText = confirmationDetails;

        // Clear the form
        document.getElementById('reservationForm').reset();
    }
});
