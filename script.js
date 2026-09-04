function toggleMenu() {
    const nav = document.getElementById("navMenu");

    nav.classList.toggle("show");
}


// Menutup menu setelah memilih halaman
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navMenu").classList.remove("show");
    });
});
