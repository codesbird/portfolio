
function goTo(id){
    let element = document.getElementById(id);

    element.scrollIntoView(true);

}

function LatestNews(){
    let slick_track = document.getElementById('latestnews');
    console.log(slick_track)
    setInterval(() => {
        // slick_track.scrollWidth("230px")
        LatestNews()
    }, 2000);
}

LatestNews()

let opacity = 0;
window.addEventListener('scroll', function() {
    const fadeBox = document.querySelector('.projects-list');
    let scrollPosition = window.scrollY;
    console.log("position",scrollPosition)
    let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    console.log("lskjdflk")
    
    // Calculate opacity based on scroll position
    opacity += 0.3

    
    // Set the opacity of the fade-box
    fadeBox.style.opacity = opacity;
    // fadeBox.firstElementChild.style.marginTop = 0;
  });
  