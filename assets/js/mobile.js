document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      // Simple validation check
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

      // Format WhatsApp message
      const formattedMessage =
        `📝 *New GYM Inquiry*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📧 *Email:* ${email}\n` +
        `📌 *Subject:* ${subject}\n` +
        `💬 *Message:* ${message}`;

      const whatsappURL = `https://wa.me/918975484038?text=${encodeURIComponent(formattedMessage)}`;

      // Use window.location.href instead of window.open for better mobile compatibility
      window.location.href = whatsappURL;
    });
  }
});
