document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("popup").classList.add("active");
        document.getElementById("overlay").classList.add("active");
    }, 2000); // Muncul setelah 2 detik
});

function closePopup() {
    document.getElementById("popup").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}
