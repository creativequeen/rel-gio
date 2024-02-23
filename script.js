let is24HourFormat = true; // Inicialmente, use o formato de 24 horas

function updateTime() {
  const now = new Date();
  let hours, timeString;

  if (is24HourFormat) {
    hours = String(now.getHours()).padStart(2, '0');
  } else {
    hours = ((now.getHours() + 11) % 12 + 1); // Converter para 12 horas
    hours = String(hours).padStart(2, '0');
  }

  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  if (!is24HourFormat) {
    const amPm = now.getHours() < 12 ? 'AM' : 'PM';
    timeString = `${hours}:${minutes}:${seconds} ${amPm}`;
  } else {
    timeString = `${hours}:${minutes}:${seconds}`;
  }
  
  document.getElementById('time').textContent = timeString;
}

document.getElementById('toggleFormat').addEventListener('click', function() {
  is24HourFormat = !is24HourFormat; // Alternar entre 24 horas e 12 horas
  updateTime(); // Atualizar a exibição de hora
});

// Atualize o relógio a cada segundo
setInterval(updateTime, 1000);

// Chame updateTime pela primeira vez para evitar atrasos
updateTime();