export function getRandomNumberBetween(limits) {
  const range = limits[1] - limits[0];
  const randomDistance = Math.round(range * Math.random());
  return limits[0] + randomDistance;
}
