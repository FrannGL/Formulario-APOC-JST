const btnSend = document.getElementById('button-send');

document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   btnSend.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_z2xr16g';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Formulario enviado correctamente!',
            showConfirmButton: true,
            confirmButtonColor: '#0d6efd',
            timer: 3000
          })
        // Toastify({
        //     text: "Formulario enviado Correctamente",
        //     duration: 2000,
        //     gravity: "bottom",
        //     position: "right",
        //     style: {
        //         background: "linear-gradient(to right, #00484b, #0088b6)",
        //     },
        // }).showToast();
    }, (err) => {
      btnSend.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

const btnReset = document.getElementById('button-reset');
btnReset.addEventListener('click', () => {
    Toastify({
        text: "Formulario Reiniciado",
        duration: 2000,
        gravity: "bottom",
        position: "right",
        style: {
            background: "linear-gradient(to right, #88000b, #9200b6)",
        },
    }).showToast();
});



