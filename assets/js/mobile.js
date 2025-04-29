document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      // Validation check for empty fields
      if (!name || !email || !subject || !message) {
        alert("Please fill in all the fields.");
        return;
      }

      // Optional: Validate email format
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Format the WhatsApp message
      const formattedMessage = `
        📝 *New GYM Inquiry*\n
        👤 *Name:* ${name}\n
        📧 *Email:* ${email}\n
        📌 *Subject:* ${subject}\n
        💬 *Message:* ${message}
      `;

      // WhatsApp link with encoded message
      const whatsappURL = `https://wa.me/918975484038?text=${encodeURIComponent(formattedMessage)}`;

      // Check if the platform is mobile or desktop and handle accordingly
      if (window.innerWidth <= 800) {
        // Mobile: Open WhatsApp using window.location.href
        window.location.href = whatsappURL;
      } else {
        // Desktop: Open in a new tab
        window.open(whatsappURL, "_blank");
      }
    });
  }
});
