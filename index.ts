const stars = document.querySelector('#stars') as HTMLDivElement

const MAX_STARS = 100

const WIN_HEIGHT = document.body.offsetHeight
const WIN_WIDTH = document.body.offsetWidth

for (let i = 0; i <= MAX_STARS; i++) {
  const starX = Math.floor(Math.random() * WIN_WIDTH - 10)
  const starY = Math.floor(Math.random() * WIN_HEIGHT - 10)

  const star = document.createElement('div')

  star.classList.add('star')
  star.style.setProperty('top', `${starY}px`)
  star.style.setProperty('left', `${starX}px`)
  star.style.setProperty('transform', `translateZ(${Math.floor(Math.random() * 100)}px)`)

  // transform: translateZ(px);

  stars.appendChild(star)
}

window.addEventListener('wheel', e => {
  const prevScale = getComputedStyle(stars).getPropertyValue('--scale')

  if (Math.sign(e.deltaY) === 1) {
    stars.style.setProperty('--scale', `${Number(prevScale) + 0.01}`)
    return
  }
  stars.style.setProperty('--scale', `${Number(prevScale) + -0.01}`)
})

window.addEventListener('mousemove', e => {
  stars.style.setProperty(
    'perspective-origin',
    `${(e.clientX / 2 / window.innerWidth) * 100}% ${(e.clientY / 2 / window.innerHeight) * 100}%`
  )
})
