//comando para establecer la comunicacion activa 

let socket = io();
let label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('conectado al server');
});

socket.on('disconnect', function() {
    console.log('disconnect')
});

socket.on('lastTicket', function(resp) {
    console.log(resp);
    label.text(resp.actual);
});

$('button').on('click', function() {

    socket.emit('eventClick', function() {
        //label.text(nextTicket);
    });

    socket.on('eventClick', function() {
        //console.log(obj)
    });


});