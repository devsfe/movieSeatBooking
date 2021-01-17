const seats = document.querySelectorAll('.seat');
const tickets = document.getElementById('tickets');
const total = document.getElementById('total');
const select = document.getElementById('select');

var totalSeats = document.getElementById('totalSeats');


// Update count & total
function update() {

    var selectedSeats = document.querySelectorAll('.selected');

    const seatsIndex = [...selectedSeats].map((seat) =>
        [...seats].indexOf(seat)
    );


    tickets.innerText = seatsIndex.length - 1;

    var ticketsValue = tickets.innerText;

    var ticketsNumber = parseInt(ticketsValue,10);

    totalValue = ticketsNumber * select.value;

    total.innerText = `R$ ${totalValue}`;
    totalSeats.innerText = 49 - ticketsNumber
    
}


// Selecionar Seat
seats.forEach(element => {
    element.addEventListener('click', (e) => {
        if(e.target.classList.contains('available')) {
            e.target.classList.toggle('selected');    
        } 

        update();
    });
});

// Selecionar Filme
select.addEventListener('change', (e) => {

    update();
});







