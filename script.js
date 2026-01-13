/* MOBILE MENU (DAY 4) */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const input = document.getElementById("searchInput");
    const message = document.getElementById("message");

    if (input.value.trim() === "") {
        message.textContent = "Please enter something to search!";
    } else {
        message.textContent = "";
        alert("You searched for: " + input.value);
    }
});


const notification = document.getElementById("notification");
const notificationText = document.getElementById("notificationText");

function showSuccess() {
    notification.className = "notification success";
    notificationText.textContent = "✅ Action completed successfully!";
    notification.classList.remove("hidden");
    autoHide();
}

function showError() {
    notification.className = "notification error";
    notificationText.textContent = "❌ Something went wrong!";
    notification.classList.remove("hidden");
    autoHide();
}

function closeNotification() {
    notification.classList.add("hidden");
}

function autoHide() {
    setTimeout(closeNotification, 4000);
}
