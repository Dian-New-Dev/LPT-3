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