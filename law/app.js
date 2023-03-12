let toggle = document.getElementById("toggleDark");
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
    this.classList.toggle('fa-moon');

    if (this.classList.toggle('fa-sun')) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';

    } else {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
        after.style.background = ' #301c13';

    }



})