document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("admissionForm");
  const submitBtn = document.getElementById("submitBtn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const speech = new SpeechSynthesisUtterance(
      "Form submitted successfully"
    );
    speechSynthesis.speak(speech);

    alert("Form submitted successfully!");
    form.reset();
  });
});
