document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    submitBtn.innerText = "Sending...";
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerText = "Message Sent ✅";

      const utter = new SpeechSynthesisUtterance("CONTACT successfully!");
      speechSynthesis.speak(utter);

      alert("Your message has been sent!");

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerText = "Send Message";
      }, 2000);
    }, 1000);
  });
});
