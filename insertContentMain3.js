const main3H3 = document.getElementById('main3-h3');
const main3H2 = document.getElementById('main3-h2');
const main3Img = document.getElementById('main3-img');
const main3H4A = document.getElementById('main3-h4A');
const main3P1 = document.getElementById('main3-p1'); 
const main3P2 = document.getElementById('main3-p2');
const main3H4B = document.getElementById('main3-h4B');
const main3P3 = document.getElementById('main3-p3');
const main3P4 = document.getElementById('main3-p4');

function insertContentMain3() {
    main3H3.textContent = sobreMim.h3 ;   
    main3H2.textContent = sobreMim.h2 ;
    main3Img.src = sobreMim.img ;
    main3H4A.textContent = sobreMim.h4A ;
    main3P1.textContent = sobreMim.p1 ;
    main3P2.textContent = sobreMim.p2 ;
    main3H4B.textContent = sobreMim.h4B;
    main3P3.textContent = sobreMim.p3;
    main3P4.textContent = sobreMim.p4;

}