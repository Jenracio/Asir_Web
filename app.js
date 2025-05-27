// Scroll suave para anclas internas
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Botón "ir arriba" con animación de aparición/desaparición
document.addEventListener("DOMContentLoaded", () => {
  const upBtn = document.createElement("button");
  upBtn.textContent = "⬆️";
  upBtn.id = "scrollTopBtn";
  upBtn.setAttribute("aria-label", "Volver arriba");
  upBtn.style.position = "fixed";
  upBtn.style.bottom = "30px";
  upBtn.style.right = "30px";
  upBtn.style.display = "none";
  upBtn.style.background = "#21262d";
  upBtn.style.color = "#58a6ff";
  upBtn.style.border = "none";
  upBtn.style.borderRadius = "50%";
  upBtn.style.width = "48px";
  upBtn.style.height = "48px";
  upBtn.style.fontSize = "2rem";
  upBtn.style.cursor = "pointer";
  upBtn.style.boxShadow = "0 2px 8px #000a";
  upBtn.style.zIndex = "1000";
  upBtn.style.opacity = "0";
  upBtn.style.transition = "opacity 0.4s cubic-bezier(.4,2,.6,1)";

  upBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      upBtn.style.display = "block";
      setTimeout(() => (upBtn.style.opacity = "1"), 10);
    } else {
      upBtn.style.opacity = "0";
      setTimeout(() => (upBtn.style.display = "none"), 400);
    }
  });

  upBtn.addEventListener("mouseenter", () => {
    upBtn.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.15)" },
        { transform: "scale(1)" }
      ],
      { duration: 300 }
    );
  });

  document.body.appendChild(upBtn);
});

// Mostrar última fecha de modificación
document.addEventListener("DOMContentLoaded", () => {
  const updateEl = document.getElementById("last-update");
  if (updateEl) {
    updateEl.textContent = new Date(document.lastModified).toLocaleDateString(
      "es-ES"
    );
    updateEl.animate(
      [
        { opacity: 0, transform: "translateY(10px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: 800, fill: "forwards" }
    );
  }
});

// Resaltado dinámico del enlace activo en la barra lateral con animación
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".sidebar a").forEach((link) => {
    if (link.href === window.location.href) {
      link.style.fontWeight = "bold";
      link.style.color = "#00ff99";
      link.animate(
        [
          { background: "rgba(0,255,153,0)", color: "#c9d1d9" },
          { background: "rgba(0,255,153,0.15)", color: "#00ff99" }
        ],
        { duration: 700, fill: "forwards" }
      );
    }
  });
});

// Efecto máquina de escribir en bienvenida (requiere <div id="terminal"></div>)
document.addEventListener("DOMContentLoaded", () => {
  const terminal = document.getElementById("terminal");
  if (terminal) {
    let i = 0;
    const text = "Iniciando sistema ASIR_1...";
    terminal.textContent = "";
    function type() {
      if (i < text.length) {
        terminal.textContent += text.charAt(i++);
        terminal.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(type, 55 + Math.random() * 40);
      } else {
        terminal.classList.add("loaded");
      }
    }
    type();
  }
});

// Animación cuando los iframes cargan (para todos los iframes)
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("iframe").forEach((iframe) => {
    iframe.classList.remove("loaded");
    iframe.addEventListener("load", () => {
      iframe.classList.add("loaded");
      iframe.animate(
        [
          { opacity: 0, transform: "translateY(30px) scale(0.98)" },
          { opacity: 1, transform: "translateY(0) scale(1)" }
        ],
        { duration: 600, fill: "forwards", easing: "cubic-bezier(.4,2,.6,1)" }
      );
    });
  });
});

// Animación de entrada para el título principal
document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector(".main h1");
  if (h1) {
    h1.animate(
      [
        { opacity: 0, letterSpacing: "0.5rem", filter: "blur(4px)" },
        { opacity: 1, letterSpacing: "0.05rem", filter: "blur(0)" }
      ],
      { duration: 900, fill: "forwards", easing: "cubic-bezier(.4,2,.6,1)" }
    );
  }
});
