const show = (el, side) => {
  const faces = document.getElementsByClassName("active");
  if (faces) {
    console.log(faces);
    Array.from(faces).forEach((face) => {
      face.classList.remove("active");
    });
  }
  el.classList.add("active");
  document.getElementById("cube").className = "show" + side;
};
