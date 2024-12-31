<<<<<<< HEAD

function goTo(id) {
    let element = document.getElementById(id);

    element.scrollIntoView(true);

}


let opacity = 0;
window.addEventListener('scroll', function () {
    const fadeBox = document.querySelector('.projects-list');
    let scrollPosition = window.scrollY;

    let maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate opacity based on scroll position
    opacity += 0.3


    // Set the opacity of the fade-box
    fadeBox.style.opacity = opacity;
    // fadeBox.firstElementChild.style.marginTop = 0;
});


//   ============================================= Scrolling Features  ================================================================

function updateButtonStates(scrollContainer, leftButton, rightButton) {
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    // Disable the left button if fully scrolled to the left
    if (scrollContainer.scrollLeft <= 0) {
        leftButton.disabled = true;
    } else {
        leftButton.disabled = false;
    }

    // Disable the right button if fully scrolled to the right
    if (scrollContainer.scrollLeft >= maxScrollLeft) {
        rightButton.disabled = true;
    } else {
        rightButton.disabled = false;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const pricingItems = document.querySelector('.pricing-items');
    const btnLeft = document.querySelector('.btn-success .bi-arrow-left-short').parentElement;
    const btnRight = document.querySelector('.btn-success .bi-arrow-right-short').parentElement;

    const news_blogs = document.querySelector('.news-blogs');
    const news_btnLeft = document.querySelector('.news-scroll-left');
    const news_btnRight = document.querySelector('.news-scroll-right');



    updateButtonStates(pricingItems, btnLeft, btnRight);
    updateButtonStates(news_blogs, news_btnLeft, news_btnRight);


    const scrollAmount = () => {
        // Determine the scroll amount based on the screen size
        if (window.innerWidth > 720) {
            return pricingItems.offsetWidth / 2; // Scroll 2-3 items
        } else {
            return pricingItems.firstElementChild.offsetWidth; // Scroll 1 item
        }
    };

    btnLeft.addEventListener('click', () => {
        pricingItems.scrollBy({
            left: -scrollAmount(),
            behavior: 'smooth',
        });
    });


    btnRight.addEventListener('click', () => {
        pricingItems.scrollBy({
            left: scrollAmount(),
            behavior: 'smooth',
        });
    });


    news_btnLeft.addEventListener('click', () => {
        news_blogs.scrollBy({
            left: -scrollAmount(),
            behavior: 'smooth',
        });
    });


    news_btnRight.addEventListener('click', () => {
        news_blogs.scrollBy({
            left: scrollAmount(),
            behavior: 'smooth',
        });
    });

    // Update button states on scroll
    pricingItems.addEventListener("scroll", function () {
        updateButtonStates(pricingItems, btnLeft, btnRight);
    });

    news_blogs.addEventListener("scroll", function () {
        updateButtonStates(news_blogs, news_btnLeft, news_btnRight);
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const navblur = document.getElementById("navblur");

    const navbar = document.querySelector(".fixed-navbar");
    const stickyClass = "sticky";
    const offset = navbar.offsetHeight; // Use navbar height as the scroll offset threshold

    // Add a scroll event listener
    window.addEventListener("scroll", function () {
        if (window.scrollY > offset) {
            navbar.classList.add(stickyClass);
            navblur.classList.add("navbar-blur")
        } else {
            navbar.classList.remove(stickyClass);
            navblur.classList.remove("navbar-blur")
        }
    });
});



// ===========================================================================================
let mobileMenus = document.getElementById("mobileMenus");

window.onclick = (e) => {
    if (mobileMenus.offsetLeft > -5) {
        mobileMenus.style.left = "-40%"
    }
}

function hideSidebar() {
    mobileMenus.style.left = '-40%';
}

function showSidebar(obj){
    mobileMenus.style.left = '0%;';

}
=======

function goTo(id) {
    let element = document.getElementById(id);

    element.scrollIntoView(true);

}


let opacity = 0;
window.addEventListener('scroll', function () {
    const fadeBox = document.querySelector('.projects-list');
    let scrollPosition = window.scrollY;
    console.log("position", scrollPosition)
    let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    console.log("lskjdflk")

    // Calculate opacity based on scroll position
    opacity += 0.3


    // Set the opacity of the fade-box
    fadeBox.style.opacity = opacity;
    // fadeBox.firstElementChild.style.marginTop = 0;
});


//   ============================================= Scrolling Features  ================================================================

function updateButtonStates(scrollContainer, leftButton, rightButton) {
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    // Disable the left button if fully scrolled to the left
    if (scrollContainer.scrollLeft <= 0) {
        leftButton.disabled = true;
    } else {
        leftButton.disabled = false;
    }

    // Disable the right button if fully scrolled to the right
    if (scrollContainer.scrollLeft >= maxScrollLeft) {
        rightButton.disabled = true;
    } else {
        rightButton.disabled = false;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const pricingItems = document.querySelector('.pricing-items');
    const btnLeft = document.querySelector('.btn-success .bi-arrow-left-short').parentElement;
    const btnRight = document.querySelector('.btn-success .bi-arrow-right-short').parentElement;

    const news_blogs = document.querySelector('.news-blogs');
    const news_btnLeft = document.querySelector('.news-scroll-left');
    const news_btnRight = document.querySelector('.news-scroll-right');



    updateButtonStates(pricingItems, btnLeft, btnRight);
    updateButtonStates(news_blogs, news_btnLeft, news_btnRight);


    const scrollAmount = () => {
        console.log(news_blogs.offsetWidth, pricingItems.offsetWidth)
        // Determine the scroll amount based on the screen size
        if (window.innerWidth > 720) {
            return pricingItems.offsetWidth / 2; // Scroll 2-3 items
        } else {
            return pricingItems.firstElementChild.offsetWidth; // Scroll 1 item
        }
    };

    btnLeft.addEventListener('click', () => {
        pricingItems.scrollBy({
            left: -scrollAmount(),
            behavior: 'smooth',
        });
    });


    btnRight.addEventListener('click', () => {
        pricingItems.scrollBy({
            left: scrollAmount(),
            behavior: 'smooth',
        });
    });


    news_btnLeft.addEventListener('click', () => {
        news_blogs.scrollBy({
            left: -scrollAmount(),
            behavior: 'smooth',
        });
    });


    news_btnRight.addEventListener('click', () => {
        news_blogs.scrollBy({
            left: scrollAmount(),
            behavior: 'smooth',
        });
    });

    // Update button states on scroll
    pricingItems.addEventListener("scroll", function () {
        updateButtonStates(pricingItems, btnLeft, btnRight);
    });

    news_blogs.addEventListener("scroll", function () {
        updateButtonStates(news_blogs, news_btnLeft, news_btnRight);
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const navblur = document.getElementById("navblur");

    const navbar = document.querySelector(".fixed-navbar");
    const stickyClass = "sticky";
    const offset = navbar.offsetHeight; // Use navbar height as the scroll offset threshold

    // Add a scroll event listener
    window.addEventListener("scroll", function () {
        if (window.scrollY > offset) {
            navbar.classList.add(stickyClass);
            navblur.classList.add("navbar-blur")
        } else {
            navbar.classList.remove(stickyClass);
            navblur.classList.remove("navbar-blur")
        }
    });
});



// ===========================================================================================
let mobileMenus = document.getElementById("mobileMenus");

window.onclick = (e) => {
    if (mobileMenus.offsetLeft > -5) {
        mobileMenus.style.left = "-40%"
    }
}

function hideSidebar() {
    mobileMenus.style.left = '-40%';

}
>>>>>>> origin/main
