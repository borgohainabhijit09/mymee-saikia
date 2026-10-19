/**
 * Mymee Saikia - Medical Travel & Patient Support
 * Main Client Script
 */

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  // Single-open FAQ accordion behavior
  const faqs = document.querySelectorAll(".faq-item");
  faqs.forEach((faq) => {
    faq.addEventListener("toggle", () => {
      if (faq.open) {
        faqs.forEach((otherFaq) => {
          if (otherFaq !== faq && otherFaq.open) {
            otherFaq.removeAttribute("open");
          }
        });
      }
    });
  });

  // Quick Enquiry Form submission to WhatsApp
  const quickForm = document.getElementById("quick-enquiry-form");
  if (quickForm) {
    quickForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = (document.getElementById("user-name")?.value || "").trim();
      const phone = (document.getElementById("user-phone")?.value || "").trim();
      const city = (document.getElementById("user-city")?.value || "").trim();
      const message = (document.getElementById("user-message")?.value || "").trim();

      let text = `Hello Mymee, I need medical travel assistance.\nName: ${name}\nPhone: ${phone}`;
      if (city) text += `\nDestination/Hospital: ${city}`;
      if (message) text += `\nDetails: ${message}`;

      const waUrl = `https://wa.me/919678226441?text=${encodeURIComponent(text)}`;
      window.open(waUrl, "_blank", "noopener");
    });
  }
});
