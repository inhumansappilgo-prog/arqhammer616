(() => {
  "use strict";

  const root = document.documentElement;
  const radios = [...document.querySelectorAll('input[name="dash-tabs"]')];
  const headers = [...document.querySelectorAll(".accordion-header")];
  const externalLinks = document.querySelectorAll(".back-btn");

  let scrollFrame = 0;

  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
    root.style.setProperty("--read-progress", progress.toFixed(4));
    scrollFrame = 0;
  };

  const requestProgressUpdate = () => {
    if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateProgress);
  };

  const syncAccordionState = () => {
    headers.forEach((header) => {
      const input = document.getElementById(header.htmlFor);
      const expanded = Boolean(input?.checked && input.id !== "reset-tabs");
      header.setAttribute("aria-expanded", String(expanded));
    });
  };

  headers.forEach((header) => {
    header.tabIndex = 0;
    header.setAttribute("role", "button");

    header.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();

      const input = document.getElementById(header.htmlFor);
      if (!input) return;

      if (input.checked) {
        document.getElementById("reset-tabs")?.click();
      } else {
        input.click();
      }

      syncAccordionState();
    });
  });

  radios.forEach((radio) => radio.addEventListener("change", syncAccordionState));
  externalLinks.forEach((link) => link.setAttribute("target", "_top"));

  window.addEventListener("scroll", requestProgressUpdate, { passive: true });
  window.addEventListener("resize", requestProgressUpdate, { passive: true });
  window.addEventListener("pageshow", () => {
    syncAccordionState();
    updateProgress();
  });
})();
