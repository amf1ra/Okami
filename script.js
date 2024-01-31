document.addEventListener("DOMContentLoaded", function () {
    // Muestra la notificación de cookies
    showCookieNotification();
});

function showCookieNotification() {
    var notification = document.getElementById("cookie-notification");
    notification.style.display = "block";
}

function closeCookieNotification() {
    // Oculta la notificación
    var notification = document.getElementById("cookie-notification");
    notification.style.display = "none";
}
