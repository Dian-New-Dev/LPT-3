const logo = document.getElementById('logo');
const headerAnchors = document.querySelectorAll('.header-a');
headerAnchorsArray = [navBar.a1, navBar.a2, navBar.a3, navBar.a4, navBar.a5, navBar.a6, ]

function insertContentHeader() {
    logo.src = navBar.logo;
    for (let i = 0; i < headerAnchors.length; i++) {
        headerAnchors[i].textContent = headerAnchorsArray[i]
    }

}