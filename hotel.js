const countrySelect = document.getElementById('countrySelect');
const hotelList = document.getElementById('hotelList');

countrySelect.addEventListener('change', function() {
    const selectedCountry = this.value;
    let hotels = [];

    // Simulated hotel data for demonstration
    switch(selectedCountry) {
        case 'usa':
            hotels = [
                { name: 'Marriott Hotel', price: 150, image: 'img/hotel1.jpg' },
                { name: 'Hilton Hotel', price: 130, image: 'img/hotel2.jpg' },
                { name: 'Holiday Inn', price: 100, image: 'img/hotel3.jpg' }
            ];
            break;
        case 'uk':
            hotels = [
                { name: 'The Ritz', price: 200, image: 'img/hotel4.jpg' },
                { name: 'Sheraton', price: 180, image: 'img/hotel5.jpg' },
                { name: 'Premier Inn', price: 90, image: 'img/hotel6.jpg' }
            ];
            break;
        case 'france':
            hotels = [
                { name: 'Hôtel de Crillon', price: 250, image: 'img/hotel7.jpg' },
                { name: 'InterContinental', price: 200, image: 'img/hotel8.jpg' },
                { name: 'Novotel', price: 120, image: 'img/hotel9.jpg' }
            ];
            break;
        default:
            hotels = [];
    }

    displayHotels(hotels);
});

function displayHotels(hotels) {
    hotelList.innerHTML = '';

    if (hotels.length === 0) {
        hotelList.innerHTML = '<p>No hotels available for selected destination</p>';
        return;
    }

    hotels.forEach(hotel => {
        const hotelItem = document.createElement('div');
        hotelItem.classList.add('hotel-item');

        const image = document.createElement('img');
        image.src = hotel.image;
        image.alt = hotel.name;
        hotelItem.appendChild(image);

        const hotelDetails = document.createElement('div');
        hotelDetails.innerHTML = `<strong>${hotel.name}</strong><br>Harga per malam: $${hotel.price}`;
        hotelItem.appendChild(hotelDetails);

        const nightsInput = document.createElement('input');
        nightsInput.type = 'number';
        nightsInput.placeholder = 'Enter number of nights';
        nightsInput.classList.add('nights-input');
        hotelItem.appendChild(nightsInput);

        const bookBtn = document.createElement('button');
        bookBtn.classList.add('book-btn');
        bookBtn.textContent = 'Book';
        bookBtn.addEventListener('click', function() {
            const nights = parseInt(nightsInput.value);
            if (!isNaN(nights) && nights > 0) {
                const totalPrice = hotel.price * nights;
                bookHotel(hotel.name, totalPrice);
            } else {
                alert('Mohon masukkan angka yang tepat untuk pemesanan hotel.');
            }
        });
        hotelItem.appendChild(bookBtn);

        hotelList.appendChild(hotelItem);
    });
}

function bookHotel(name, totalPrice) {
    hotelList.innerHTML = `<p>Terima kasih sudah booking di ${name} seharga $${totalPrice}! Enjoy your stay!</p>`;
}
