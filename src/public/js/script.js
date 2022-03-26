// Highliht the active button in the footer when clicked
window.addEventListener('load', (event) => {
    let pageTitle = document.querySelector('.page-title').innerHTML;
    console.log(pageTitle);
    if(pageTitle === 'Hello Miguel') {
        let homeImage = document.querySelector('#home-image');
        homeImage.setAttribute('src', '/images/home_active.svg');
        document.querySelector("#home-section").setAttribute('class', 'active-navbar-sections');
    }
    else if (pageTitle === 'Transactions') {
        let homeImage = document.querySelector('#transactions_image');
        homeImage.setAttribute('src', '/images/transactions.svg');
        document.querySelector("#transaction-section").setAttribute('class', 'active-navbar-sections');
    }
    else if (pageTitle === 'Dashboard') {
        let homeImage = document.querySelector('#dashboard_image');
        homeImage.setAttribute('src', '/images/stats_active.svg');
        document.querySelector("#stats-section").setAttribute('class', 'active-navbar-sections');
    }
});
