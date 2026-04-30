export function faqAccordion() {
 const items = document.querySelectorAll("[data-faq-item]");

  items.forEach((item) => {
    const header = item.querySelector(".faq-header");

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // закрываем все
      items.forEach((i) => i.classList.remove("active"));

      // открываем текущий если был закрыт
      if (!isOpen) {
        item.classList.add("active");
      }
    });
  });
}