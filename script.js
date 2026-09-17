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

    link.addEventListener(
        "click",
        function() {

            const navMenu =
                document.getElementById("navMenu");

            if (navMenu) {

                navMenu.classList.remove("show");

            }

        }
    );

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



/* =====================================================
   FORM PENGADUAN
   ===================================================== */

function sendComplaint(event) {

    event.preventDefault();


    const nama =
        document.getElementById(
            "complaint-name"
        ).value;


    const telepon =
        document.getElementById(
            "complaint-phone"
        ).value;


    const kategori =
        document.getElementById(
            "complaint-category"
        ).value;


    const lokasi =
        document.getElementById(
            "complaint-location"
        ).value;


    const pesan =
        document.getElementById(
            "complaint-message"
        ).value;


    if (
        nama === "" ||
        telepon === "" ||
        kategori === "" ||
        lokasi === "" ||
        pesan === ""
    ) {

        alert(
            "Silakan lengkapi semua data pengaduan."
        );

        return;

    }


    alert(
        "PENGADUAN BERHASIL DIKIRIM\n\n" +

        "Nama: " +
        nama +

        "\nJenis: " +
        kategori +

        "\nLokasi: " +
        lokasi +

        "\n\nTerima kasih telah menyampaikan " +
        "pengaduan kepada Desa Serunai."
    );


    document
        .getElementById("complaintForm")
        .reset();

}
