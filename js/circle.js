const circle = () => {
  const radius = 400;
  const borderCircle = document.getElementById("circle");
  borderCircle.setAttribute(
    "style",
    `width: ${radius * 2}px; height: ${radius * 2}px`
  );
};
circle();
