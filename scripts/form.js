// Initialize EmailJS with YOUR PUBLIC KEY
(function() {
    emailjs.init("4FgevdoxJ7q7O-eIl"); // Replace with your EmailJS User ID (Public Key)
})();

document.getElementById('consultationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;

    // Send email
    emailjs.send("service_hqw6nyy", "template_xbj9f1e", {
        name: name,
        email: email,
        phone: phone,
        date: date
    })
    .then(() => {
        document.getElementById('consultSuccess').classList.remove('hidden');
        document.getElementById('consultationForm').reset();
        setTimeout(() => {
            document.getElementById('consultSuccess').classList.add('hidden');
        }, 3000);
    }, (error) => {
        alert('Error sending message: ' + JSON.stringify(error));
    });
});