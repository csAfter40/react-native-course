export function getRandomNumberBetween(limits) {
  const range = limits[1] - limits[0];
  const randomDistance = Math.round(range * Math.random());
  return limits[0] + randomDistance;
}

const Colors = {
  primaryText: "#ffffff",
  border: "#E9C46A",
  buttonRipple: "#793a2b",
  menuBg: "#E76F51",
};

export { Colors };