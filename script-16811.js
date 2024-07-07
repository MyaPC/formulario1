document.getElementById('serviceForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz5YhWpFuFUIwdPWY8BIk92vK5ui7KAkvOl6sXpskfO97cM0YWUX1b5nE2OsAO3rYIB/exec';
    const form = document.forms['serviceForm'];
  
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        if (response.ok) {
          alert('Datos guardados correctamente');
          form.reset();
        } else {
          alert('Error al guardar los datos');
        }
      })
      .catch(error => alert('Error: ' + error.message));
  });
  