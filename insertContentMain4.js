const main4H3 = document.getElementById('main4-h3');
const main4H2 = document.getElementById('main4-h2');

const slidePs = document.querySelectorAll('.slide-p');
const slideh4s = document.querySelectorAll('.slide-h4');
const slideh5s = document.querySelectorAll('.slide-h5');



const slidePsArray = [testemunhos.p1, testemunhos.p2, testemunhos.p3, testemunhos.p4, testemunhos.p5];
const slideH4sArray = [testemunhos.h4A, testemunhos.h4B, testemunhos.h4C, testemunhos.h4D, testemunhos.h4E];
const slideH5sArray = [testemunhos.h5A, testemunhos.h5B, testemunhos.h5C, testemunhos.h5D, testemunhos.h5E];

function insertContentMain4() {
    main4H3.textContent = testemunhos.h3;
    main4H2.textContent = testemunhos.h2;

    for (let i = 0; i < slideH4sArray.length; i++) {
        slidePs[i].textContent = slidePsArray[i];
        slideh4s[i].textContent = slideH4sArray[i];
        slideh5s[i].textContent = slideH5sArray[i];
    }
}

// abaixo, função para mouse: grab behavior

(function() {
    const scrollableDiv = document.getElementById('grabbable-div');
    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function(e) {
        pos = {
            // The current scroll
            left: scrollableDiv.scrollLeft,
            top: scrollableDiv.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        scrollableDiv.style.cursor = 'grabbing';

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function(e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        scrollableDiv.scrollLeft = pos.left - dx;
        scrollableDiv.scrollTop = pos.top - dy;
    };

    const mouseUpHandler = function() {
        scrollableDiv.style.cursor = 'grab';

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    scrollableDiv.addEventListener('mousedown', mouseDownHandler);
})();

//

(function() {
    const scrollableDiv = document.getElementById('grabbable-div');

    // Function to center the scrollable content
    function centerScroll() {
        scrollableDiv.scrollLeft = (scrollableDiv.scrollWidth - scrollableDiv.clientWidth) / 2;
        scrollableDiv.scrollTop = (scrollableDiv.scrollHeight - scrollableDiv.clientHeight) / 2;
    }

    // Call the function after the content has loaded
    window.addEventListener('load', centerScroll);
    // Call the function if the window is resized
    window.addEventListener('resize', centerScroll);
})();