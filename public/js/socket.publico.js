let socket = io();

let labelsTickets = ['#lblTicket1', '#lblTicket2', '#lblTicket3', '#lblTicket4'];
let labelsDesks = ['#lblEscritorio1', '#lblEscritorio2', '#lblEscritorio3', '#lblEscritorio4'];


socket.on('lastTicket', function(resp) {
    //console.log(resp);
    updateHTML(resp.ultimos4);
});

socket.on('ultimos4', function(resp) {
    //console.log(resp)
    let audio = new Audio('audio/new-ticket.mp3');
    //audio.play();
    updateHTML(resp.ultimos4);
});

function updateHTML(ultimos4) {
    for (let i = 0; i <= ultimos4.length - 1; i++) {
        $(labelsTickets[i]).text('Ticket ' + ultimos4[i].numero);
        $(labelsDesks[i]).text('Escritorio ' + ultimos4[i].escritorio);
    };
};