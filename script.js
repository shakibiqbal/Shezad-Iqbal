
// Get DOM elements
const generateBtn = document.getElementById("generateBtn");
const Businesscard = document.getElementById("profileCard");

// Event listener for button
generateBtn.addEventListener("click", () => {
    Businesscard.classList.remove("hidden");
});
