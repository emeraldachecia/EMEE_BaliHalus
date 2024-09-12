document.getElementById('service').addEventListener('change', function () {
    const service = this.value;
    const spaOptions = document.getElementById('spa-options');
    const massageOptions = document.getElementById('massage-options');

    // Hide all options initially
    spaOptions.classList.add('hidden');
    massageOptions.classList.add('hidden');

    // Show relevant options based on selected service
    if (service === 'spa') {
        spaOptions.classList.remove('hidden');
    } else if (service === 'body-massage') {
        massageOptions.classList.remove('hidden');
    }
});

document.getElementById('reservationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const service = document.getElementById('service').value;
    const branch = document.getElementById('branch').value;

    let details = `Thank you, ${name}! You have reserved a ${service} service on ${date} at the ${branch} branch of BaliHalus.`;

    // Add additional options based on service
    if (service === 'spa') {
        const masker = document.getElementById('masker').value;
        const scrub = document.getElementById('scrub').value;
        details += ` You have chosen the ${masker} masker and ${scrub} scrub.`;
    } else if (service === 'body-massage') {
        const oil = document.getElementById('oil').value;
        details += ` You have chosen the ${oil} massage oil.`;
    }

    // Show the confirmation message
    document.getElementById('confirmation').classList.remove('hidden');
    document.getElementById('confirmationDetails').innerText = details;

    // Clear the form
    document.getElementById('reservationForm').reset();

    // Hide optional fields again after submission
    document.getElementById('spa-options').classList.add('hidden');
    document.getElementById('massage-options').classList.add('hidden');
});
