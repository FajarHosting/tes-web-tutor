document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Terima kasih, " + name + "! Pesan Anda telah dikirim.");
        document.getElementById("contact-form").reset();
    } else {
        alert("Harap isi semua bidang sebelum mengirim.");
    }
});
