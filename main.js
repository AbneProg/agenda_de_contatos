document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const countryCode = document.getElementById('countryCode').value;
    const phoneInput = document.getElementById('phone');
    const name = nameInput.value.trim();
    const email = emailInput.value.trim().toLowerCase();
    const phone = phoneInput.value.trim();
    const fullPhoneNumber = countryCode + ' ' + phone;

    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = '';

    const table = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const existingName = rows[i].getElementsByTagName('td')[0].textContent.trim().toLowerCase();
        const existingEmail = rows[i].getElementsByTagName('td')[1].textContent.trim().toLowerCase();
        const existingPhone = rows[i].getElementsByTagName('td')[2].textContent.trim();

        if (existingName === name.toLowerCase()) {
            errorMessage.textContent = 'Este nome já está cadastrado!';
            nameInput.focus();
            return;
        }

        if (existingEmail === email) {
            errorMessage.textContent = 'Este e-mail já está cadastrado!';
            emailInput.focus();
            return;
        }

        if (existingPhone === fullPhoneNumber) {
            errorMessage.textContent = 'Este número de telefone já está cadastrado!';
            phoneInput.focus();
            return;
        }
    }

    const newRow = table.insertRow();
    const nameCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);
    const phoneCell = newRow.insertCell(2);

    nameCell.textContent = name;
    emailCell.textContent = email;
    phoneCell.textContent = fullPhoneNumber;

    document.getElementById('contactForm').reset();
});