let socket = io();


/*Obteniendo parametros por los urls.  */
let searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
};

let escritorio = searchParams.get('escritorio');
let label = $('small');


$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {

    socket.emit('atenderTicket', { escritorio }, function(resp) {

        console.log(resp);

        if (resp === 'No hay tickets') {

            alert(resp);
            return;
        }

        label.text(`Ticket # ${resp.numero}`);

    });

});