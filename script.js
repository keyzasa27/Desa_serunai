/* =====================================================
   MENU NAVBAR
   ===================================================== */

function toggleMenu() {

    const navMenu =
        document.getElementById("navMenu");

    if (navMenu) {

        navMenu.classList.toggle("show");

    }

}


/* =====================================================
   MENUTUP MENU SETELAH LINK DIKLIK
   ===================================================== */

const navLinks =
    document.querySelectorAll("#navMenu a");


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const navMenu =
            document.getElementById("navMenu");

        if (navMenu) {

            navMenu.classList.remove("show");

        }

    });

});


/* =====================================================
   FORM KONTAK
   ===================================================== */

function sendMessage(event) {

    event.preventDefault();


    const nama =
        document.getElementById("nama").value;

    const email =
        document.getElementById("email").value;

    const pesan =
        document.getElementById("pesan").value;


    alert(
        "Terima kasih, " +
        nama +
        "!\n\n" +

        "Pesan Anda berhasil diisi." +
        "\n\n" +

        "Email: " +
        email +

        "\n\nPesan: " +
        pesan
    );


    event.target.reset();

}
