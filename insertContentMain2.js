const main2H3 = document.getElementById('main2-h3');
const main2H2 = document.getElementById('main2-h2'); 
const main2P = document.getElementById('main2-p'); 
const main2Anchor = document.getElementById('main2-a'); 
const main2H5 = document.getElementById('main2-h5'); 
const main2H6A = document.getElementById('main2-h6-a');
const main2H6B = document.getElementById('main2-h6-b'); 
const main2Img = document.getElementById('main2-img');

function insertContentMain2() {
    main2H3.textContent = praQueTerapia.h3;
    main2H2.textContent = praQueTerapia.h2;
    main2P.textContent = praQueTerapia.p;
    main2Anchor.textContent = praQueTerapia.a;
    main2H5.textContent = praQueTerapia.h5;
    main2H6A.textContent = praQueTerapia.h6A;
    main2H6B.textContent = praQueTerapia.h6B;
    main2Img.src = praQueTerapia.img;

}