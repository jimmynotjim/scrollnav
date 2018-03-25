export default function calculateScrollDuration(distance) {
  const halfDistance = distance / 2;
  let duration;
  if (halfDistance < 250) {
    duration = 250;
  } else if (halfDistance > 1000) {
    duration = 1000;
  } else {
    duration = halfDistance;
  }

  return duration;
}
