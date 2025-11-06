/* script.js
   - Mobile menu toggle
   - Simple contact form demo handler
   - Sets current year in footer
*/

document.addEventListener("DOMContentLoaded", function () {
  // Year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Mobile menu toggle (single button present per page)
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const openIcon = document.getElementById("hamburger-open");
  const closeIcon = document.getElementById("hamburger-close");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", function () {
      const isHidden = mobileMenu.classList.contains("hidden");
      mobileMenu.classList.toggle("hidden", !isHidden);
      if (openIcon && closeIcon) {
        openIcon.classList.toggle("hidden", !isHidden);
        closeIcon.classList.toggle("hidden", isHidden);
      }
    });
  }

  // Click outside mobile menu closes it
  document.addEventListener("click", function (e) {
    const target = e.target;
    if (!menuButton || !mobileMenu) return;
    if (mobileMenu.classList.contains("hidden")) return;
    // if click inside menu or on button, ignore
    if (mobileMenu.contains(target) || menuButton.contains(target)) return;
    // else hide
    mobileMenu.classList.add("hidden");
    if (openIcon && closeIcon) {
      openIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  });

  // Optional: collapse mobile menu on link click (nice UX)
  document.querySelectorAll("#mobile-menu a").forEach((a) => {
    a.addEventListener("click", () => {
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
        if (openIcon && closeIcon) {
          openIcon.classList.remove("hidden");
          closeIcon.classList.add("hidden");
        }
      }
    });
  });
});

// Demo contact form handler (no backend)
function handleContactSubmit(e) {
  e.preventDefault();
  const result = document.getElementById("contact-result");
  if (!result) return;
  // simple validation
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!name || !email || !message) {
    result.textContent = "Please fill all fields.";
    result.classList.remove("hidden");
    result.classList.remove("text-green-600");
    result.classList.add("text-red-600");
    return;
  }
  // show demo success
  result.textContent = "Message sent (demo). We will contact you soon.";
  result.classList.remove("hidden");
  result.classList.remove("text-red-600");
  result.classList.add("text-green-600");

  // reset form after a short delay (demo)
  setTimeout(() => {
    const form = document.getElementById("contact-form");
    if (form) form.reset();
  }, 800);
}
