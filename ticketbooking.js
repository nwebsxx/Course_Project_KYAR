const modal       = document.getElementById('seatModal');
const closeBtn    = document.querySelector('.close-btn');
const seatGrid    = document.getElementById('seatGrid');
const confirmBtn  = document.getElementById('confirmBooking');
const bookingInfo = document.getElementById('bookingInfo');
 
let currentFilm   = '';
let currentDate   = '';
let currentTime   = '';
let selectedSeats = [];
 
const occupiedSeats = {};
 
function getKey() {
    return currentFilm + '|' + currentDate + '|' + currentTime;
}
 
function getOccupied() {
    return occupiedSeats[getKey()] || [];
}
 
function saveOccupied(indices) {
    const key = getKey();
    if (!occupiedSeats[key]) occupiedSeats[key] = [];
    indices.forEach(i => {
        if (!occupiedSeats[key].includes(i)) occupiedSeats[key].push(i);
    });
}
 
function buildGrid() {
    seatGrid.innerHTML = '';
    selectedSeats = [];
    const occupied = getOccupied();
 
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const idx  = r * 8 + c;
            const seat = document.createElement('div');
            seat.classList.add('seat');
            seat.textContent = (r + 1) + '-' + (c + 1);
            seat.dataset.index = idx;
 
            if (occupied.includes(idx)) {
                seat.classList.add('occupied');
                seat.style.cursor = 'not-allowed';
            } else {
                seat.addEventListener('click', () => toggleSeat(seat, idx));
            }
 
            seatGrid.appendChild(seat);
        }
    }
}
 
function toggleSeat(seat, idx) {
    if (seat.classList.contains('selected')) {
        seat.classList.remove('selected');
        selectedSeats = selectedSeats.filter(i => i !== idx);
    } else {
        seat.classList.add('selected');
        selectedSeats.push(idx);
    }
    refreshInfo();
}
 
function refreshInfo() {
    if (selectedSeats.length === 0) {
        bookingInfo.innerHTML =
            '<p>Фильм: <strong>' + currentFilm + '</strong></p>' +
            '<p>Сеанс: ' + currentDate + ' ' + currentTime + '</p>' +
            '<p>Вы ещё не выбрали места.</p>';
    } else {
        const labels = [...selectedSeats]
            .sort((a, b) => a - b)
            .map(i => `${Math.floor(i / 8) + 1} ряд ${(i % 8) + 1} место`)
            .join(', ');
        bookingInfo.innerHTML =
            '<p>Фильм: <strong>' + currentFilm + '</strong></p>' +
            '<p>Сеанс: ' + currentDate + ' ' + currentTime + '</p>' +
            '<p>Выбрано: ' + labels + '</p>';
    }
}
 
function openModal(film, date, time) {
    currentFilm = film;
    currentDate = date;
    currentTime = time;
    buildGrid();
    refreshInfo();
    modal.style.display = 'flex';
}
 
function closeModal() {
    modal.style.display = 'none';
    document.querySelectorAll('.date-btn').forEach(b => {
        b.style.backgroundColor = '';
        b.style.border = '';
    });
    document.querySelectorAll('.time-btn').forEach(b => {
        b.style.backgroundColor = '';
        b.style.border = '';
    });
    document.querySelectorAll('.period').forEach(p => {
        p.innerHTML = '';
    });
}
 
function confirmBooking() {
    if (selectedSeats.length === 0) {
        alert('Вы не выбрали ни одного места!');
        return;
    }
 
    saveOccupied(selectedSeats);
 
    const labels = [...selectedSeats]
        .sort((a, b) => a - b)
        .map(i => `${Math.floor(i / 8) + 1} ряд ${(i % 8) + 1} место`)
        .join('\n  ');
 
    alert(
        'Бронирование подтверждено!\n\n' +
        'Оплата осуществляется офлайн в кассах кинотеатра перед сеансом.\n\n' +
        'Фильм: ' + currentFilm + '\n' +
        'Сеанс: ' + currentDate + ' ' + currentTime + '\n' +
        'Места:\n  ' + labels
    );
 
    closeModal();
}
 
document.querySelectorAll('.button').forEach(btn => {
    btn.addEventListener('click', () => {
        const container = btn.closest('.container');
        if (!container) return;
 
        const filmTitle = container.querySelector('h3').innerText.trim();
        const periodDiv = container.querySelector('.period');
        const text      = periodDiv ? periodDiv.innerText.trim() : '';
 
        let date = '', time = '';
        if (text.includes('|')) {
            const parts = text.split('|');
            date = parts[0].replace('Дата:', '').trim();
            time = parts[1].replace('Время:', '').trim();
        } else if (text.includes('Дата:')) {
            date = text.replace('Дата:', '').trim();
        }
 
        if (!date || !time) {
            alert('Сначала выберите дату и время сеанса!');
            return;
        }
 
        openModal(filmTitle, date, time);
    });
});
 
closeBtn.addEventListener('click', closeModal);
confirmBtn.addEventListener('click', confirmBooking);
 
window.addEventListener('click', e => {
    if (e.target === modal) closeModal();
});





    