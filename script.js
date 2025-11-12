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

    // Optionally, show an alert as well
    alert(text);

    // Display the text in the "Show results here" area
    output.textContent = text;
  });
});
