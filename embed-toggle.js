document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("load-content");
  const embed = document.getElementById("drive-embed");

  if (button && embed) {
    button.addEventListener("click", () => {
      const folderId = button.getAttribute("data-folder-id");
      if (folderId) {
        // Animación de salida del botón
        button.animate(
          [
            { opacity: 1, transform: "scale(1)" },
            { opacity: 0, transform: "scale(0.9)" }
          ],
          { duration: 350, fill: "forwards", easing: "ease" }
        );
        setTimeout(() => {
          button.style.display = "none";
          embed.innerHTML = `
            <iframe 
              src="https://drive.google.com/embeddedfolderview?id=${folderId}#grid"
              style="width: 100%; height: 80vh; border: 0; margin-top: 1rem; opacity:0; transition:opacity 0.7s cubic-bezier(.4,2,.6,1);"
              allowfullscreen
              loading="lazy"
              title="Carpeta Google Drive"
              onload="this.style.opacity=1"
            ></iframe>
          `;
        }, 350);
      }
    });

    // Accesibilidad: activar con Enter/Espacio
    button.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        button.click();
      }
    });
  }
});
