function TimeStamp(current_time, cureent_date, timestamp) {
  let dateTime = new Date();
  let hours = dateTime.getHours();
  let minutes = dateTime.getMinutes();
  let seconds = dateTime.getSeconds();
  let month = dateTime.getMonth();
  let day = dateTime.getDay();
  let year = dateTime.getFullYear();
  let date = dateTime.getDate();

  let session = hours >= 12 ? "PM" : "AM";
  hours = hours > 12 ? hours - 12 : hours;
  hours = hours ? hours : 12;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let strDay = days[day];
  let strMonth = months[month];

  if (current_time) {
    return `<span class="time">${hours}:${minutes}:${seconds} ${session} (BST)</span>`;
  }
  if (cureent_date) {
    return `<span class="date">${day}-${month}-${year}</span>`;
  }
  if (timestamp) {
    return `<span class="date">${strDay}, ${strMonth} ${date}, ${year}</span> | <span class="time"> Current Time: ${hours}:${minutes}:${seconds} ${session} (BST)</span>`;
  }
}
