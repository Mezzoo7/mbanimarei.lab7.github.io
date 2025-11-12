// Wait until the entire page (HTML + CSS) is fully loaded
window.addEventListener("load", function() {
  const button = document.getElementById("entrybutton");
  const input = document.getElementById("entryinput");
  const output = document.getElementById("textoutput");

  // Safety check: make sure all elements exist
  if (!button || !input || !output) {
    console.error("One or more elements not found in the DOM!");
    return;
  }

  // Handle button click
  button.addEventListener("click", function() {
    const text = input.value.trim();

    if (text === "") {
      alert("Please enter something first!");
      return;
    }

    // Optional alert popup
    alert(text);

    // Display text below
    output.textContent = text;
  });
});
