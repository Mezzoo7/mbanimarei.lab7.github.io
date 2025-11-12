document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("entrybutton");
  const input = document.getElementById("entryinput");
  const output = document.getElementById("textoutput");

  button.addEventListener("click", function() {
    const text = input.value.trim();

    if (text === "") {
      alert("Please enter something first!");
      return;
    }

    // Optional: show an alert
    alert(text);

    // Display text below
    output.textContent = text;
  });
});
