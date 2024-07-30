var path = `M 10 100 Q 500 100 990 100`


var finalPath = `M 10 100 Q 500 100 990 100` 

var string = document.querySelector("#string")

string.addEventListener("mousemove", function(dets){
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
    gsap.to("svg path",{
        // to change attribute of the elements
        attr:
            {d: path},
            duration:0.2,
            ease:"power3.out"
            // gsap easing is used to manage the speed of the elements while animation is being performed  from initial to final position
    })
})

string.addEventListener("mouseleave", function(){

gsap.to("svg path",{
    // to change attribute of the elements
    attr:
        {d: finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
})

})

