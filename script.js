const poga = document.querySelector('.js-poga')
const bilde = document.querySelector('img')
const audio = document.querySelector('audio')

const pogasTexti = ["Catch me", "Nenoķersi!", "Tu esi zābaks", "Suffer!", "Samaini pelīti, tev nesanāk"]
let textuIndex = 0
let movesTillScare = 6

//() => {}
poga.addEventListener('mouseover', function() {
    if (movesTillScare === 0){
        bilde.style.display = "flex"
        audio.currentTime = 0
        audio.play()
    }

    movesTillScare = movesTillScare - 1

    poga.innerHTML = pogasTexti[textuIndex]

    if(textuIndex === pogasTexti.length - 1){
        textuIndex = 0
    } else {
        textuIndex = textuIndex + 1 
    }

    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    const buttonWidth = poga.offsetWidth
    const buttonHeight = poga.offsetHeight

    const maxX = windowWidth - buttonWidth
    const maxY = windowHeight - buttonHeight

    const randomX = Math.random() * maxX
    const randomY = Math.random() * maxY

    poga.style.left = randomX + 'px'
    poga.style.top = `${randomY}px`
})