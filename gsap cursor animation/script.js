var main = document.querySelector('#main')
var cursor = document.querySelector('#cursor')
var image = document.querySelector('#image')
main.addEventListener('mousemove', function(dets){
    gsap.to(cursor,{
        x: dets.x ,
        y: dets.y,
        duration:1,
        // to add ease go to to gsap ease
    
    })
})

image.addEventListener('mouseenter', function(){
    cursor.innerHTML = "View More"
    gsap.to(cursor,{
        scale:4,
        backgroundColor: "#ffffff5c",
    })
})
    image.addEventListener('mouseleave', function(){
        cursor.innerHTML = "",
        gsap.to(cursor,{
            scale:1,
            backgroundColor: "#fff", 
        })
})