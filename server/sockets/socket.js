const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();


io.on('connection', (client) => {
    //(data,callback)
    client.on('eventClick', () => {

        let nextTicket = ticketControl.siguiente();

        //callback(nextTicket);

    });

    let ultimoTicket = ticketControl.ultimoTicket();
    let ultimos4 = ticketControl.getUltimos4();

    client.emit('lastTicket', {

        actual: ultimoTicket,
        ultimos4

    });

    client.on('atenderTicket', (data, callback) => {

        if (!data.escritorio) {
            return callback({
                msnj: 'El numero de escritorio es necesario',
                err: true
            });
        };

        let atenderTicket = ticketControl.atenderTickets(data.escritorio);

        callback(atenderTicket);

    });

    client.broadcast.emit('ultimos4', {

        ultimos4

    });


});