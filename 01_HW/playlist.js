// List of available skins (paths)
const SKINS = ["SKINS/basic.css", "SKINS/dark.css", "SKINS/modern.css"];
const link = document.getElementById("skin-css");

// Get saved index from localStorage (default to 0)
let index = Number(localStorage.getItem("skinIndex") || 0);
if (index < 0 || index >= SKINS.length) index = 0;

// Apply saved skin on page load
link.href = SKINS[index];

// Change skin when button is clicked
function changeTheme() {
  index = (index + 1) % SKINS.length; // move to next
  link.href = SKINS[index];
  localStorage.setItem("skinIndex", index);
}
