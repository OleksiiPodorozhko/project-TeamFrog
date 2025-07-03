(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelector("[data-menu-close]"),
    modal: document.querySelector("[data-menu]"),
    navLinks: document.querySelectorAll(".mob-nav-link"), // Все ссылки меню
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  refs.navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (refs.modal.classList.contains("is-open")) {
        refs.modal.classList.remove("is-open");
      }
    });
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
})();