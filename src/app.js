
const menuBar = document.getElementById("bar");
const sideBar = document.getElementById("sidebar");
const imageID = document.getElementById("barpic");
const pageBody = document.querySelector("body");
const box = document.getElementById("box");

var scrollNav = $(document).scroll(function() {
    $("#navbar").toggleClass("nav-scrolled", $(document).scrollTop() >= 1);
});

var openCloseNav =  (e)=> {
    e.stopPropagation();
    if (sideBar.style.left < "0") {
        sideBar.style.left = "0";
        imageID.src = 'img/close.svg';
    } else {
        sideBar.style.left = "-200px";
        imageID.src = 'img/bars.svg';
    }
}

var closeNav = (e)=> {
    e.stopPropagation();
    sideBar.style.left = "-200px";
    imageID.src = 'img/bars.svg';
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fuck');
        }
    });
});

// observer.observe(box);
menuBar.onclick = openCloseNav;
pageBody.onclick = closeNav;