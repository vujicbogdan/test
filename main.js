document.addEventListener("DOMContentLoaded", function () {
  const title = document.getElementById("naslov");
  const text = title.dataset.text;

  function animateText() {
    const span = document.createElement("span");
    span.textContent = text;
    title.innerHTML = "";
    title.appendChild(span);

    const animation = title.animate(
      [{ transform: "translateX(-150%)" }, { transform: "translateX(150%)" }],
      {
        duration: 6000,
        iterations: Infinity,
      }
    );
  }

  animateText();

  title.addEventListener("animationiteration", animateText);
});
