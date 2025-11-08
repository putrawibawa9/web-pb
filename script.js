// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Ambil elemen-elemen yang kita butuhkan
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconOpen = document.getElementById("hamburger-open");
  const iconClose = document.getElementById("hamburger-close");

  // Tambahkan 'event listener' ke tombol hamburger
  menuButton.addEventListener("click", () => {
    // Toggle (ganti) class 'hidden' pada menu mobile
    // Jika ada 'hidden', hapus. Jika tidak ada, tambahkan.
    mobileMenu.classList.toggle("hidden");

    // Toggle ikon hamburger (buka/tutup)
    iconOpen.classList.toggle("hidden");
    iconClose.classList.toggle("hidden");
  });
});
