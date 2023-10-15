Shery.imageEffect("#back", { 
    style: 5, 
    config: { 
        "a": { "value": 1.49, "range": [0, 30] }, 
        "b": { "value": -0.97, "range": [-1, 1] }, 
        "aspect": { "value": 1.839080459770115 }, 
        "gooey": { "value": true }, 
        "infiniteGooey": { "value": true }, 
        "durationOut": { "value": 1, 
        "range": [0.1, 5] }, 
        "durationIn": { "value": 0.99, "range": [0.1, 5] }, 
        "displaceAmount": { "value": 0.5 }, 
        "masker": { "value": true }, 
        "maskVal": { "value": 1.3, "range": [1, 5] }, 
        "scrollType": { "value": 0 }, 
        "geoVertex": { "range": [1, 64], 
        "value": 1 }, "noEffectGooey": { "value": false }, 
        "onMouse": { "value": 1 }, 
        "noise_speed": { "value": 1.57, "range": [0, 10] }, 
        "metaball": { "value": 0.21, "range": [0, 2] }, 
        "discard_threshold": { "value": 0.49, "range": [0, 1] }, 
        "antialias_threshold": { "value": 0, "range": [0, 0.1] }, 
        "noise_height": { "value": 0.46, "range": [0, 2] }, 
        "noise_scale": { "value": 12.4, "range": [0, 100] } 
    }, 
    gooey: true 
})

var elems = document.querySelectorAll(".elem");
elems.forEach(function (elem) {
    var h1s = elem.querySelectorAll("h1");
    var index = 1;
    var animating=false;
    function showNextH1() {
        gsap.set(h1s, { top: "100%" });
        gsap.to(h1s[index], {
            top: "0",
            ease: Expo.easeInOut,
            duration: 1,
        });
        index = (index + 1) % h1s.length;
    }
    if(!animating){
        animating=true;
        document.querySelector("#main").addEventListener("click", showNextH1);
        if (index === 0) {
            gsap.set(h1s, { top: "100%" });
            gsap.set(h1s[index], { top: "0" });
        }
        animating=false;
    }
});