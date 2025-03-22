document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("developer web").value;
    let email = document.getElementById("fajarsetiawan12322@gmail.com").value;
    let message = document.getElementById("pesan").value;

    if (name && email && message) {
        alert("Terima kasih, " + name + "! Pesan Anda telah dikirim.");
        document.getElementById("contact-form").reset();
    } else {
        alert("Harap isi semua bidang sebelum mengirim.");
    }
});
