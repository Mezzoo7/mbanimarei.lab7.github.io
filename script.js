document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("alertButton");
  const input = document.getElementById("userInput");
  const headline = document.getElementById("headline");

  button.addEventListener("click", function() {
    const text = input.value.trim();

    if (text === "") {
      alert("Please enter something first!");
      return;
    }

    // Replace "YourName" with your actual name
    alert("YourName: " + text);

    headline.textContent = text;
  });
});
