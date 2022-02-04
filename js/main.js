function mostrarReloj() {
  let hora = document.querySelector("#hora");
  let fecha = document.querySelector("#fecha");
  let days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  let months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();






  
  let day = days[new Date().getDay()];
  let dayNumber = new Date().getDay();
  let month = months[new Date().getMonth()];
  let myDate = `${day.slice(0, 3)}, ${dayNumber} ${month}`;

  let myHour = `${hour}:${minutes}:${seconds}`;
  hora.textContent = myHour;
  fecha.textContent = myDate;
}

setInterval(mostrarReloj,1000);
