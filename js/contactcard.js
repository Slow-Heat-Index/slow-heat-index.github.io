const el = document.getElementsByClassName("contact-card")

function mouseUpdate(event, element) {
    let width = element.offsetWidth
    let height = element.offsetHeight
    let xRel = event.pageX - element.offsetLeft
    let yRel = event.pageY - element.offsetTop

    let yAngle = -(0.5 - xRel / width) * 40;
    let xAngle = (0.5 - yRel / height) * 40;

    element.style.setProperty('--dy', `${yAngle}deg`)
    element.style.setProperty('--dx', `${xAngle}deg`)
}

for (let element of el) {
    element.addEventListener("mousemove", e => mouseUpdate(e, element))
    element.addEventListener("mouseenter", e => mouseUpdate(e, element))
    element.addEventListener("mouseleave", e => {
        element.style.setProperty('--dy', '0')
        element.style.setProperty('--dx', '0')
    })
}