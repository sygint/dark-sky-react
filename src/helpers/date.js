export function formatDate(date) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]

  const dayOfWeek = date.getDay();
  const dayOfMonth = date.getDate();
  const monthOfYear = date.getMonth();
  const year = date.getFullYear();

  return `${dayNames[dayOfWeek]}, ${monthNames[monthOfYear]} ${dayOfMonth}, ${year}`
}