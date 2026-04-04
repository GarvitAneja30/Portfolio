document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("themeToggle");
    const isDark = document.documentElement.classList.contains("dark");
    toggle.textContent = isDark ? "☀️" : "🌙";

    toggle.onclick = () => {
      document.documentElement.classList.toggle("dark");

      if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        toggle.textContent = "☀️";
      } else {
        localStorage.setItem("theme", "light");
        toggle.textContent = "🌙";
      }
    };
  });