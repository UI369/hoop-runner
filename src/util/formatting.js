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
