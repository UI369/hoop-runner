export function formatDate(dateString, includeTime = false) {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  if (includeTime) {
    options.hour = "numeric";
    options.minute = "2-digit";
    options.hour12 = true;
  }

  return new Date(dateString).toLocaleDateString(undefined, options);
}

export function inchesToFeet(number) {
  let feet = Math.floor(number / 12);
  let inches = number % 12;
  return feet + '" ' + inches + " '";
}

export function birthdateToAge(dateString) {
  let age = Math.floor(Date.now() - new Date(dateString));
  return Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
}

export function formatGameTime(game_time) {
  const date = new Date(game_time);

  // Format hours in 12-hour format with AM/PM
  let hours = date.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // 12-hour format should show 12:00 instead of 00:00

  // Extract minutes and pad with 0 if needed
  const minutes = ("0" + date.getMinutes()).slice(-2);

  // Days array to get day of the week
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Construct the final formatted string
  const formattedTime = `${hours}:${minutes}${ampm}`;
  const formattedDate = `${days[date.getDay()]}, ${
    date.getMonth() + 1
  }/${date.getDate()}`;

  return [formattedTime, formattedDate];
}
