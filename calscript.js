const date = new Date();
const to = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");
  const eventDays = document.querySelector(".eves");



  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
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
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().getFullYear();

  document.querySelector(".events h2").innerHTML = to.toDateString();



  let days = "";
  let eves = "";
  let e = "JSOP";


  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      if(i==24|| i==6 || i===26){
      days += `<div class="today">${i} ${e}</div>`;
      document.querySelector(".events h3").innerHTML = e;
      }
      else{
        days += `<div class="today">${i}</div>`;
      document.querySelector(".events h3").innerHTML = "none";
      }
      monthDays.innerHTML = days;

    }

    else {
      if (i === 24) {
        days += `<div>${i} ${e}</div>`;
        monthDays.innerHTML = days;
      }

      else if (i === 6) {
        days += `<div>${i} ${e}</div>`;
        monthDays.innerHTML = days;
      }
      else if (i === 26) {
        days += `<div>${i} ${e}</div>`;
        monthDays.innerHTML = days;
      }
      else {
        days += `<div>${i}</div>`;
        monthDays.innerHTML = days;
      }

    }

  }





  for (let j = 1; j <= nextDays; j++) {

    days += `<div class="next-date"> ${j}</div> `;
    monthDays.innerHTML = days;


  }

};



document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});


renderCalendar();
