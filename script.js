function changeColour() {
  const colours = ['#ffadad', '#caffbf', '#9bf6ff', '#ffd6a5', '#bdb2ff', '#fefae0', '#a0c4ff', '#fdffb6'];
  const random = colours[Math.floor(Math.random() * colours.length)];
  document.body.style.backgroundColor = random;
}
