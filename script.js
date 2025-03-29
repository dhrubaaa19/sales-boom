document.addEventListener("DOMContentLoaded", () => {
    setTimeout(showPopup, 4000); // Show pop-up after 4 seconds
});

function showPopup() {
    let popup = document.getElementById("popup");
    popup.classList.add("show");
    popup.style.animation = "popupFadeIn 0.5s ease-in-out";
}

function submitLead() {
    let name = document.getElementById("lead-name").value.trim();
    let email = document.getElementById("lead-email").value.trim();
    let contact = document.getElementById("lead-contact").value.trim();

    if (name && email && contact) {
        let popup = document.getElementById("popup");
        let thankYou = document.getElementById("thank-you");

        popup.classList.remove("show");

        document.getElementById("user-name").innerText = name;
        thankYou.classList.add("show");
        thankYou.style.animation = "popupFadeIn 0.5s ease-in-out";

        setTimeout(() => {
            thankYou.classList.remove("show");
        }, 5000);
    } else {
        alert("⚠ Please fill in all fields correctly.");
    }
}
