document.addEventListener("DOMContentLoaded", function () {
  const collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach((collapsible) => {
    collapsible.addEventListener("click", function () {
      const details = this.nextElementSibling;

      if (details && details.classList.contains("details")) {
        details.classList.toggle("show");
        
        if (details.classList.contains("show")) {
          this.textContent = "Hide Details";
        } else {
          this.textContent = "Show Details";
        }
      }
    });
  });
});
