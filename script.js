/**
 * Sakura Sushi Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Handle Reservation Form Submission
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('resName').value;
            const guests = document.getElementById('resGuests').value;
            
            // Show a simple confirmation (In a real app, this would send to a server)
            alert(`Thank you, ${name}! Your table for ${guests} has been reserved. We will email you the confirmation shortly.`);
            
            reservationForm.reset();
        });
    }

    // 2. Handle "Order Now" Button Clicks
    const orderButtons = document.querySelectorAll('.order-btn');
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.parentElement.querySelector('.card-title').innerText;
            alert(`${itemName} has been added to your order! Please proceed to checkout.`);
        });
    });

    // 3. Search Bar Interaction
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = searchForm.querySelector('input').value;
            if(query) {
                alert(`Searching our kitchen for: ${query}...`);
            }
        });
    }

});