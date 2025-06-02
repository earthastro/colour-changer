function changeColour() {
  const colours = ['#ffadad', '#caffbf', '#9bf6ff', '#ffd6a5', '#bdb2ff'];
  const random = colours[Math.floor(Math.random() * colours.length)];
  document.body.style.backgroundColor = random;
}
