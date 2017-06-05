import $ from 'jquery'
import fullCalendar from 'fullcalendar'



//Obtener data
$.post('/events/all', {}, (events) => {
    $('.calendario').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        defaultDate: '2016-11-01',
        navLinks: true,
        editable: true,
        eventLimit: true,
        droppable: true,
        dayClick: function(ev) {
            guardarEvento(ev)
        },
        events: events
    })
})

function guardarEvento(evento) {
    $.post('/new', evento, (response) => {
        fullCalendar.renderEvent(evento)
    })
}



