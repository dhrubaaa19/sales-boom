function showPopup() {
    document.getElementById("popup").classList.add("show");
}

function submitLead() {
    let name = document.getElementById("lead-name").value;
    let email = document.getElementById("lead-email").value;
    let contact = document.getElementById("lead-contact").value;

    if (name && email && contact) {
        document.getElementById("popup").classList.remove("show");
        document.getElementById("user-name").innerText = name;
        document.getElementById("thank-you").classList.add("show");

        setTimeout(() => {
            document.getElementById("thank-you").classList.remove("show");
        }, 5000);
    } else {
        alert("⚠ Please fill in all fields correctly.");
    }
}

setTimeout(showPopup, 5000);
