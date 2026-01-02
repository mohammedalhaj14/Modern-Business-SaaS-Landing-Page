document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const msg = document.getElementById('userMessage').value;

    const myNumber = "9617624176"; 

    const text = `*New Lead from Website*%0A` + 
                 `*Name:* ${name}%0A` + 
                 `*Email:* ${email}%0A` + 
                 `*Message:* ${msg}`;

    window.open(`https://wa.me/${myNumber}?text=${text}`, '_blank').focus();
});