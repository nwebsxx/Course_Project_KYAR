(function () {
    const track = document.getElementById('sliderTrack');
    const arrowLeft = document.getElementById('arrowLeft');
    const arrowRight = document.getElementById('arrowRight');
    const dotsContainer = document.getElementById('sliderDots');

    if (!track || !arrowLeft || !arrowRight) return;

    const cards = Array.from(track.querySelectorAll('.movie-card'));
    let currentIndex = 0;
    let visibleCount = getVisibleCount();
    let totalPages = Math.ceil(cards.length / visibleCount);
    let isDragging = false;
    let startX = 0;
    let currentX = 0;

    function getVisibleCount() {
        const w = window.innerWidth;
        if (w <= 540)  return 1;
        if (w <= 768)  return 2;
        if (w <= 1024) return 3;
        if (w <= 1200) return 5;
        return 6;
    }

    function getCardWidth() {
        const gap = 24;
        const card = cards[0];
        return card.offsetWidth + gap;
    }

    function clampIndex() {
        const max = cards.length - visibleCount;
        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex > max) currentIndex = max;
    }

    function render(instant = false) {
        const offset = -currentIndex * getCardWidth();
        if (instant) {
            track.style.transition = 'none';
        } else {
            track.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        }
        track.style.transform = `translateX(${offset}px)`;

        arrowLeft.disabled = currentIndex <= 0;
        arrowRight.disabled = currentIndex >= cards.length - visibleCount;

        updateDots();
    }

    arrowLeft.addEventListener('click', () => {
        currentIndex -= visibleCount;
        clampIndex();
        render();
    });

    arrowRight.addEventListener('click', () => {
        currentIndex += visibleCount;
        clampIndex();
        render();
    });

    function onPointerStart(e) {
        isDragging = true;
        startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
        track.style.transition = 'none';
    }

    function onPointerMove(e) {
        if (!isDragging) return;
        currentX = (e.type === 'touchmove' ? e.touches[0].clientX : e.clientX) - startX;
        const baseOffset = -currentIndex * getCardWidth();
        track.style.transform = `translateX(${baseOffset + currentX}px)`;
    }

    function onPointerEnd() {
        if (!isDragging) return;
        isDragging = false;
        const threshold = 60;
        if (currentX < -threshold) {
            currentIndex += visibleCount;
        } else if (currentX > threshold) {
            currentIndex -= visibleCount;
        }
        clampIndex();
        render();
        currentX = 0;
    }

    track.addEventListener('touchstart', onPointerStart, { passive: true });
    track.addEventListener('touchmove', onPointerMove, { passive: true });
    track.addEventListener('touchend', onPointerEnd);
    track.addEventListener('mousedown', onPointerStart);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerEnd);

    track.addEventListener('click', e => {
        if (Math.abs(currentX) > 5) e.preventDefault();
    }, true);

    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') {
            currentIndex -= visibleCount;
            clampIndex();
            render();
        } else if (e.key === 'ArrowRight') {
            currentIndex += visibleCount;
            clampIndex();
            render();
        }
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const newVisible = getVisibleCount();
            if (newVisible !== visibleCount) {
                visibleCount = newVisible;
                currentIndex = 0;
                buildDots();
            }
            clampIndex();
            render(true);
        }, 120);
    });

    visibleCount = getVisibleCount();
    buildDots();
    render(true);

})();
