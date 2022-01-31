const stars = document.querySelector('#stars') as HTMLDivElement

const MAX_STARS = 200

const WIN_HEIGHT = document.body.offsetHeight
const WIN_WIDTH = document.body.offsetWidth

for (let i = 0; i <= MAX_STARS; i++) {
  const starX = Math.floor(Math.random() * WIN_WIDTH) + 1
  const starY = Math.floor(Math.random() * WIN_HEIGHT) + 1

  const star = document.createElement('div')

  star.classList.add('star')
  star.style.setProperty('top', `${starY}px`)
  star.style.setProperty('left', `${starX}px`)
  star.style.setProperty('transform', `translateZ(${Math.floor(Math.random() * 100)}px)`)

  stars.appendChild(star)
}

window.addEventListener('wheel', e => {
  const prevScale = Number(getComputedStyle(stars).getPropertyValue('--scale'))

  console.log(prevScale)

  if (Math.sign(e.deltaY) === 1) {
    stars.style.setProperty('--scale', `${Number(prevScale) + 0.02}`)
    return
  }

  if (prevScale <= 0.6) {
    return
  }

  stars.style.setProperty('--scale', `${Number(prevScale) + -0.02}`)
})

window.addEventListener('mousemove', e => {
  stars.style.setProperty(
    'perspective-origin',
    `${(e.clientX / window.innerWidth) * 100}% ${(e.clientY / window.innerHeight) * 100}%`
  )
})
