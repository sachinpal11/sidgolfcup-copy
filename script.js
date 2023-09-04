var cursorblur = document.querySelector("#cursor-blur")
var cursor = document.querySelector("#cursor")
document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x - 10 + "px"
    cursor.style.top = dets.y - 10 + "px"
    cursorblur.style.left = dets.x - 200 + "px"
    cursorblur.style.top = dets.y - 200 + "px"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        cursor.style.scale = 3
        cursor.style.border = "1px solid #fff"
        cursor.style.backgroundColor = "transparent"
    })
})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function (elem) {
    elem.addEventListener("mouseleave", function () {
        cursor.style.scale = 1
        cursor.style.border = "0px solid #fff"
        cursor.style.backgroundColor = "#96c11e"
    })
})



gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "85px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers:true,
        start: "top -30%",
        end: "top -80%",
        scrub: 2
    }
})


gsap.from("#about-us img,#about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1,
    // stagger:0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 60%",
        scrub: 3
    }
})


gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    // stagger:0.4,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }
})
gsap.from("#colon1", {
    top: "25%",
    left: "10%",
    duration: 1,
    scrollTrigger: {
        trigger: "#colon-container",
        scroller: "body",
        // markers:true,
        start: "top 50%",
        end: "top 55%",
        scrub: 1
    }
})

gsap.from("#colon2", {
    bottom: "25%",
    right: "10%",
    duration: 1,
    scrollTrigger: {
        trigger: "#colon-container",
        scroller: "body",
        //  markers:true,
        start: "top 50%",
        end: "top 55%",
        scrub: 1
    }
})
gsap.from("#wait-container", {
    top: "60px",
    duration:1,
    scrollTrigger: {
        trigger: "#wait-container h2",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "top 85%",
        scrub:1
    }
})

var image = document.getElementById("image");
var images = ["https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-5.jpg?strip=all&lossy=1&sharp=1&fit=1002%2C1024&ssl=1","https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-menu.jpg?strip=all&lossy=1&sharp=1&fit=682%2C1024&ssl=1","https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-about-1.jpg?strip=all&amp;lossy=1&amp;sharp=1&amp;fit=682%2C1024&amp;ssl=1"]


setInterval(function(){
    var random = Math.floor(Math.random() * 4);
    image.src = image[random];
},800);
