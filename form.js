document.getElementById('serviceForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const priority = document.getElementById('priority').value;
    const service = document.getElementById('service').value;

    // Email and phone validation
    if (!validateEmail(email)) {
        alert('Bitte eine gültige E-Mail-Adresse eingeben.');
        return;
    }
    if (!validatePhone(phone)) {
        alert('Bitte eine gültige Telefonnummer eingeben.');
        return;
    }

    // Calculate completion date
    const startDate = new Date();
    const additionalDays = {
        tief: 5,
        standard: 0,
        express: -2,
    };
    const totalDays = 7 + additionalDays[priority];
    const completionDate = new Date(startDate);
    completionDate.setDate(startDate.getDate() + totalDays);

    document.getElementById('completion-date').value = completionDate.toISOString().split('T')[0];

    // Simulate sending to server
    console.log({
        name,
        email,
        phone,
        priority,
        service,
        completionDate: document.getElementById('completion-date').value,
    });

    alert('Service erfolgreich angemeldet!');
});

// Validation Functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[+][0-9]{1,3}[ ][0-9]{3,}$/;
    return re.test(phone);
}