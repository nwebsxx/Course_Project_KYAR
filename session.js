 let filmsData = {
                'fightclub' : {
                    'пятница, 15 мая': ['15.40', '18:00', '20:30'],
                    'суббота, 16 мая': ['14:15', '17:00'],
                    'воскресенье, 17 мая': ['12:00', '16:30', '19.25'],
                    'понедельник, 18 мая' : ['11.30', '17.50'],
                    'вторник, 19 мая' : ['12.40', '15.30', '19.00'],
                    'среда, 20 мая' : ['13.25', '16.40', '19.40'],
                    'четверг, 21 мая' : ['12.00', '17.30']
                }, 
                'meangirls' : {
                    'среда, 13 мая' : ['12.00', '15.30', '19.00'],
                    'четверг, 14 мая' : ['14.00', '17.00'],
                    'пятница, 15 мая' : ['12.40', '18.30'],
                    'суббота, 16 мая' : ['11.30', '14.40', '18.50'],
                    'воскресенье, 17 мая' : ['13.15', '17.40'],
                    'понедельник, 18 мая' : ['12.30', '15.45', '19.20'],
                    'вторник, 19 мая' : ['13.00', '16.40', '19.50']
                },
                'requiem' : {
                    'воскресенье, 17 мая' : ['11.30', '16.00', '19.25'],
                    'понедельник, 18 мая' : ['14.30', '17.30'],
                    'вторник, 19 мая' : ['12.20', '15.30', '18.30'],
                    'среда, 20 мая' : ['11.40', '16.00', '19.20'],
                    'четверг, 21 мая' : ['13.00', '17.30'],
                    'пятница, 22 мая' : ['12.20', '15.10', '18.00'],
                    'суббота, 23 мая' : ['11.30', '15.00', '19.00']
                },
                'ratatui' : {
                    'четверг, 14 мая' : ['13.30', '15.50'],
                    'пятница, 15 мая' : ['12.30', '16.00'],
                    'суббота, 16 мая' : ['14.00', '16.00', '18.30'],
                    'воскресенье, 17 мая' : ['12.40', '17.40'],
                    'понедельник, 18 мая' : ['13.50', '18.00'],
                    'вторник, 19 мая' : ['14.00', '17.30'],
                    'среда, 20 мая' : ['11.00', '14.40', '18.00']
                },
                'titanik' : {
                    'понедельник, 18 мая' : ['13.00', '15.30', '19.00'],
                    'вторник, 19 мая' : ['14.00', '16.20'],
                    'среда, 20 мая' : ['14.40', '17.00', '19.30'],
                    'четверг, 21 мая' : ['12.00', '15.10', '18.20'],
                    'пятница, 22 мая' : ['12.30', '17.40'],
                    'суббота, 23 мая' : ['11.50', '14.30', '19.00'],
                    'воскресенье, 24 мая' : ['13.15', '17.00']
                },
                'oyshen' : {
                    'четверг, 21 мая' : ['12.00', '14.30'],
                    'пятница, 22 мая' : ['13.45', '16.00', '18.30'],
                    'суббота, 23 мая' : ['11.45', '14.00', '17.30'],
                    'воскресенье, 24 мая' : ['12.00', '16.40'],
                    'понедельник, 25 мая' : ['13.40', '18.00'],
                    'вторник, 26 мая' : ['12.00', '15.00', '18.45'],
                    'среда, 27 мая' : ['13.10', '15.20', '18.50']
                },
                'monsters' : {
                    'среда, 20 мая' : ['16.00', '19.00'],
                    'четверг, 21 мая' : ['12.15', '15.30', '18.30'],
                    'пятница, 22 мая' : ['14.50', '18.00'],
                    'суббота, 23 мая' : ['11.50', '15.00', '19.10'],
                    'воскресенье, 24 мая' : ['13.50', '18.00'],
                    'понедельник, 25 мая' : ['12.10', '15.40', '19.20'],
                    'вторник, 26 мая' : ['14.00', '17.30']
                },
                'pirati' : {
                    'вторник, 19 мая' : ['11.50', '14.20', '17.00'],
                    'среда, 20 мая' : ['12.00', '15.00'],
                    'четверг, 21 мая' : ['13.30', '16.00', '18.30'],
                    'пятница, 22 мая' : ['14.50', '18.30'],
                    'суббота, 23 мая' : ['12.10', '16.30', '19.50'],
                    'воскресенье, 24 мая' : ['14.30', '18.40'],
                    'понедельник, 25 мая' : ['12.20', '17.00']
                },
                'collectioner' : {
                    'суббота, 23 мая' : ['12.40', '15.10'],
                    'воскресенье. 24 мая' : ['13.00', '16.15', '19.25'],
                    'понедельник, 25 мая' : ['14.00', '17.00'],
                    'вторник, 26 мая' : ['11.30', '14.20', '17.40'],    
                    'среда, 27 мая' : ['12.00', '15.30', '18.45'],      
                    'четверг, 28 мая' : ['13.15', '16.00', '19.30'],
                    'пятница, 29 мая' : ['12.00', '15.00', '18.50']
                },
                'gordost' : {
                    'пятница, 22 мая' : ['13.30', '16.40'],
                    'суббота, 23 мая' : ['12.45', '16.30', '19.40'],
                    'воскресенье, 24 мая' : ['15.00', '18.30'],
                    'понедельник, 25 мая' : ['13.20', '16.30', '19.10'],
                    'вторник, 26 мая' : ['12.00', '14.50', '18.30'],
                    'среда, 27 мая' : ['14.30', '18.40'],
                    'четверг, 28 мая' : ['13.40', '17.20']
                },
                'sumerki' : {
                    'суббота, 23 мая' : ['11.50', '15.00', '18.40'],
                    'воскресенье, 24 мая' : ['13.00', '16.00'],
                    'понедельник, 25 мая' : ['15.30', '19.00'],
                    'вторник, 26 мая' : ['12.30', '14.50', '19.00'],
                    'среда, 27 мая' : ['11.30', '17.30'],
                    'четверг, 28 мая' : ['13.50', '19.00'],
                    'пятница, 29 мая' : ['11.00', '15.00', '18.50']
                },
                'psycho' : {
                    'вторник, 26 мая' : ['14.40', '17.50'],
                    'среда, 27 мая' : ['13.00', '16.00', '19.00'],
                    'четверг, 28 мая' : ['15.45', '19.30'],
                    'пятница, 29 мая' : ['14.30', '18.50'],
                    'суббота, 30 мая' : ['13.00', '15.30', '19.00'],
                    'воскресенье, 31 мая' : ['12.10', '14.40', '18.00'],
                    'понедельник, 1 июня' : ['13.45', '17.50']
                },
                'jenifer' : {
                    'понедельник, 25 мая' : ['11.30', '15.45', '18.30'],
                    'вторник, 26 мая' : ['14.00', '16.40', '19.10'],
                    'среда, 27 мая' : ['13.30', '17.00'],
                    'четверг, 28 мая' : ['12.00', '15.10', '18.40'],
                    'пятница, 29 мая' : ['14.50', '19.00'],
                    'суббота, 30 мая' : ['13.10', '16.20', '19.40'],
                    'воскресенье, 31 мая' : ['15.30', '18.50']
                },
                'diary' : {
                    'вторник, 26 мая' : ['12.30', '16.00'],
                    'среда, 27 мая' : ['15.00', '19.00'],
                    'четверг, 28 мая' : ['14.00', '17.00'],
                    'пятница, 29 мая' : ['13.10', '17.40'],
                    'суббота, 30 мая' : ['12.00', '14.40', '19.00'],
                    'воскресенье, 31 мая' : ['13.50', '18.00'],
                    'понедельник, 1 июня' : ['15.00', '18.40']
                },
                'joeblack' : {
                    'пятница, 22 мая' : ['11.00', '14.30', '18.00'],
                    'суббота, 23 мая' : ['13.00', '16.00', '19.20'],
                    'воскресенье, 24 мая' : ['12.30', '15.40'],
                    'понедельник, 25 мая' : ['14.35', '18.00'],
                    'вторник, 26 мая' : ['13.10', '16.30', '19.40'],
                    'среда, 27 мая' : ['11.40', '15.00', '18.30'],
                    'четверг, 28 мая' : ['12.50', '15.10', '18.30']
                },
                'interrupted' : {
                    'четверг, 21 мая' : ['15.00', '19.00'],
                    'пятница, 22 мая' : ['11.40', '14.30', '18.00'],
                    'суббота, 23 мая' : ['12.00', '15.00', '18.20'],
                    'воскресенье, 24 мая' : ['13.00', '16.10', '19.20'],
                    'понедельник, 25 мая' : ['15.10', '18.40'],
                    'вторник, 26 мая' : ['14.20', '18.00'],
                    'среда, 27 мая' : ['13.00', '15.05', '18.15']
                 },
                 'shrek' : {
                    'воскресенье, 24 мая' : ['15.00', '18.20'],
                    'понедельник, 25 мая' : ['13.00', '15.40', '19.30'],
                    'вторник, 26 мая' : ['12.00', '15.20', '18.00'],
                    'среда, 27 мая' : ['13.00', '15.40', '19.00'],
                    'четверг, 28 мая' : ['11.30', '15.40', '18.50'],
                    'пятница, 29 мая' : ['12.50', '17.40'],
                    'суббота, 30 мая' : ['11.30', '15.00', '18.40']
                 },
                 'punkt' : {
                    'понедельник, 18 мая' : ['11.00', '14.00', '19.00'],
                    'вторник, 19 мая' : ['11.40', '14.50', '18.00'],
                    'среда, 20 мая' : ['14.00', '18.20'],
                    'вторник, 21 мая' : ['12.20', '15.10', '18.30'],
                    'четверг, 22 мая' : ['15.45', '19.00'],
                    'пятница, 23 мая' : ['13.00', '16.00', '19.10'],
                    'суббота, 24 мая' : ['11.40', '14.40', '18.20']
                 },
                 'emily' : {
                    'четверг, 21 мая' : ['15.00', '19.20'],
                    'пятница, 22 мая' : ['12.00', '15.30', '18.50'],
                    'суббота, 23 мая' : ['13.00', '15.40', '18.20'],
                    'воскресенье, 24 мая' : ['15.20', '18.30'],
                    'понедельник, 25 мая' : ['15.40', '19.00'],
                    'вторник, 26 мая' : ['12.30', '17.40'],
                    'среда, 27 мая' : ['13.00', '17.00']
                 },
                  'siyanie' : {
                    'пятница, 22 мая' : ['14.00', '19.00'],
                    'суббота, 23 мая' : ['11.50', '14.30', '19.00'],
                    'воскресенье, 24 мая' : ['12.30', '15.30', '18.50'],
                    'понедельник, 25 мая' : ['15.45', '19.00'],
                    'вторник, 26 мая' : ['14.30', '18.00'],
                    'среда, 27 мая' : ['13.45', '17.00'],
                    'четверг, 28 мая' : ['12.00', '14.50', '18.20']
                 },
                 'trup' : {
                    'вторник, 26 мая' : ['15.00', '19.00'],
                    'среда, 27 мая' : ['11.50', '14.30', '18.00'],
                    'четверг, 28 мая' : ['12.00', '15.00', '18.30'],
                    'пятница, 29 мая' : ['13.00', '15.50', '19.00'],
                    'суббота, 30 мая' : ['11.30', '16.50'],
                    'воскресенье, 31 мая' : ['14.00', '17.40'],
                    'понедельник, 1 июня' : ['15.45', '19.10']
                 },
                 'pila' : {
                    'среда, 20 мая' : ['14.00', '19.30'],
                    'четверг, 21 мая' : ['12.00', '14.50', '18.30'],
                    'пятница, 22 мая' : ['12.00', '15.50', '19.00'],
                    'суббота, 23 мая' : ['15.40', '19.00'],
                    'воскресенье, 24 мая' : ['14.30', '18.00'],
                    'понедельник, 25 мая' : ['15.50', '19.30'],
                    'вторник, 26 мая' : ['11.40', '14.30', '18.50']
                 }
            };
            function initFilm(filmId, datesId, timeId, periodId) {
    let datesDiv = document.getElementById(datesId);
    let timeContainer = document.getElementById(timeId);
    let periodDiv = document.getElementById(periodId);

    function createdate() {
        for (let date in filmsData[filmId]) {
            let dateButton = document.createElement('button');
            dateButton.textContent = date;
            dateButton.className = 'date-btn';
            dateButton.onclick = function() {
                let allButtons = datesDiv.querySelectorAll('.date-btn');
                for(let btn of allButtons) {
        btn.style.backgroundColor = '';
        btn.style.border = '';
    }
    this.style.backgroundColor = 'darkred';
    this.style.border = '2px solid darkred';
    
    showtime(date);
};
            datesDiv.appendChild(dateButton);
        }
    }
    function showtime(selectedDate) {
        timeContainer.innerHTML = '';
        periodDiv.innerHTML = '';
        timeContainer.parentElement.querySelector('.timecontainer').style.display = 'block';
        
        let times = filmsData[filmId][selectedDate];  
        
        for (let time of times) {
            let timeButton = document.createElement('button');
            timeButton.textContent = time;
            timeButton.className = 'time-btn';
            timeButton.onclick = function() {
                let allButtons = timeContainer.querySelectorAll('.time-btn');
                for(let btn of allButtons) {
        btn.style.backgroundColor = '';
        btn.style.border = '';
    }
    this.style.backgroundColor = 'darkred';
    this.style.border = '2px solid darkred';
    
    periodDiv.textContent = 'Дата: ' + selectedDate + ' | Время: ' + time;
};
            timeContainer.appendChild(timeButton);
        }
        periodDiv.textContent = 'Дата: ' + selectedDate;
    }
    
    createdate();
}

function searchmovie() {
    const query = document.getElementById('Input').value.trim().toLowerCase();
    const containers = document.querySelectorAll('.container');
    let found = 0;

    containers.forEach(container => {
        const title = container.querySelector('h3').textContent.toLowerCase();
        if (query === '' || title.includes(query)) {
            container.style.display = 'flex';
            found++;
        } else {
            container.style.display = 'none';
        }
    });

    document.getElementById('noResults').style.display = found === 0 ? 'block' : 'none';
}

    document.getElementById('Input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchmovie();
    }
})

    initFilm('fightclub', 'Dates-fightclub', 'Timecontainer-fightclub', 'Period-fightclub');
    initFilm('meangirls', 'Dates-meangirls', 'Timecontainer-meangirls', 'Period-meangirls');
    initFilm('requiem', 'Dates-requiem', 'Timecontainer-requiem', 'Period-requiem');
    initFilm('ratatui', 'Dates-ratatui', 'Timecontainer-ratatui', 'Period-ratatui');
    initFilm('titanik', 'Dates-titanik', 'Timecontainer-titanik', 'Period-titanik');
    initFilm('oyshen', 'Dates-oyshen', 'Timecontainer-oyshen', 'Period-oyshen');
    initFilm('monsters', 'Dates-monsters', 'Timecontainer-monsters', 'Period-monsters');
    initFilm('pirati', 'Dates-pirati', 'Timecontainer-pirati', 'Period-pirati');
    initFilm('collectioner', 'Dates-collectioner', 'Timecontainer-collectioner', 'Period-collectioner');
    initFilm('gordost', 'Dates-gordost', 'Timecontainer-gordost', 'Period-gordost');
    initFilm('sumerki', 'Dates-sumerki', 'Timecontainer-sumerki', 'Period-sumerki');
    initFilm('psycho', 'Dates-psycho', 'Timecontainer-psycho', 'Period-psycho');
    initFilm('jenifer', 'Dates-jenifer', 'Timecontainer-jenifer', 'Period-jenifer');
    initFilm('diary', 'Dates-diary', 'Timecontainer-diary', 'Period-diary');
    initFilm('joeblack', 'Dates-joeblack', 'Timecontainer-joeblack', 'Period-joeblack');
    initFilm('interrupted', 'Dates-interrupted', 'Timecontainer-interrupted', 'Period-interrupted');
    initFilm('shrek', 'Dates-shrek', 'Timecontainer-shrek', 'Period-shrek');
    initFilm('punkt', 'Dates-punkt', 'Timecontainer-punkt', 'Period-punkt');
    initFilm('emily', 'Dates-emily', 'Timecontainer-emily', 'Period-emily');
    initFilm('siyanie', 'Dates-siyanie', 'Timecontainer-siyanie', 'Period-siyanie');
    initFilm('trup', 'Dates-trup', 'Timecontainer-trup', 'Period-trup');
    initFilm('pila', 'Dates-pila', 'Timecontainer-pila', 'Period-pila');

