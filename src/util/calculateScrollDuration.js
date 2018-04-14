export default function calculateScrollDuration(distance) {
  const halfDistance = Math.abs(distance / 2);

  return Math.min(Math.max(halfDistance, 250), 1200);
}
