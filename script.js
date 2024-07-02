function calcularHoras() {
    var horaEntrada = document.getElementById('horaEntrada').value;
    var horaSalida = document.getElementById('horaSalida').value;
    var desplazamiento = parseInt(document.getElementById('desplazamiento').value, 10); // Obtener el desplazamiento en minutos
  
    // Convertir las horas a objetos Date para calcular la diferencia
    var dateEntrada = new Date('1970-01-01T' + horaEntrada + 'Z');
    var dateSalida = new Date('1970-01-01T' + horaSalida + 'Z');
  
    // Calcular la diferencia en milisegundos
    var diff = dateSalida.getTime() - dateEntrada.getTime();
  
    // Convertir la diferencia de milisegundos a minutos y agregar el desplazamiento
    var diffMinutos = Math.round(diff / 1000 / 60) + desplazamiento;
  
    // Calcular horas y minutos
    var horas = Math.floor(diffMinutos / 60);
    var minutos = diffMinutos % 60;
  
    // Mostrar el resultado en el campo "Total Horas" en formato hh:mm
    document.getElementById('totalHoras').value = horas.toString().padStart(2, '0') + ':' + minutos.toString().padStart(2, '0');
  }
  