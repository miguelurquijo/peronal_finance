// Highliht the active button in the footer when clicked
window.addEventListener('load', (event) => {
    let pathName = window.location.pathname;
    if (pathName === '/') {
        let homeImage = document.querySelector('#home-image');
        homeImage.setAttribute('src', '/images/home_active.svg');
        document.querySelector("#home-section").setAttribute('class', 'active-navbar-sections');
    }
    else if (pathName === '/dashboard') {
        let homeImage = document.querySelector('#dashboard_image');
        homeImage.setAttribute('src', '/images/stats_active.svg');
        document.querySelector("#stats-section").setAttribute('class', 'active-navbar-sections');
    }
    else if (pathName === '/transactions') {
        let homeImage = document.querySelector('#transactions_image');
        homeImage.setAttribute('src', '/images/transactions.svg');
        document.querySelector("#transaction-section").setAttribute('class', 'active-navbar-sections');
    }
});