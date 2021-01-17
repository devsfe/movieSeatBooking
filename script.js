const seats = document.querySelectorAll('.seat');
var availableSeats = document.querySelectorAll('.available');

count = 0;
disponivel = 46;



//Selecionar Seat
seats.forEach(element => {
    element.addEventListener('click', (e) => {
        if(e.target.classList.contains('available')) {
            e.target.classList.toggle('selected');
            var selectedSeats = document.querySelectorAll('.selected'); 
            
            var SelectedSeatsArr = Array.prototype.slice.call(selectedSeats);

            
            console.log(SelectedSeatsArr)

            console.log(disponivel);
        } 
    });
});






