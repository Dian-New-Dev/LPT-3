const main5H3 = document.getElementById('main5-h3');
const main5H2 = document.getElementById('main5-h2');

const main5H5s = document.querySelectorAll('.main5-h5');
const main5H4s = document.querySelectorAll('.main5-h4');
const main5Ps = document.querySelectorAll('.main5-p');
const main5Lis = document.querySelectorAll('.main5-li');

const main5H5sArray = [areas.h5A, areas.h5B, areas.h5C];
const main5H4sArray = [areas.h4A, areas.h4B, areas.h4C];
const main5psArray = [areas.pA, areas.pB, areas.pC];
const main5LisArray = [areas.li1, areas.li2, areas.li3, areas.li4, areas.li5, areas.li6, areas.li7, areas.li8, areas.li9]

const main5H6 = document.getElementById('main5-h6');
const main5Button = document.getElementById('main5-button');

function insertContentMain5() {
    main5H3.textContent = areas.h3;
    main5H2.textContent = areas.h2;

    for (let i = 0; i < main5H5s.length; i++) {
        main5H5s[i].textContent = main5H5sArray[i];
        main5H4s[i].textContent = main5H4sArray[i];
        main5Ps[i].textContent = main5psArray[i];
    }

    for (let i = 0; i < main5Lis.length; i++) {
        main5Lis[i].textContent = main5LisArray[i] ;
    }

    main5H6.textContent = areas.h6;
    main5Button.textContent = areas.button;

}