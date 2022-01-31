const stars = document.querySelector('#stars') as HTMLDivElement

const MAX_STARS = 200

const WIN_HEIGHT = stars.offsetHeight
const WIN_WIDTH = stars.offsetWidth

for (let i = 0; i <= MAX_STARS; i++) {
  const starX = Math.floor(Math.random() * WIN_WIDTH) + 1
  const starY = Math.floor(Math.random() * WIN_HEIGHT) + 1

  const star = document.createElement('div')

  const z = Math.floor(Math.random() * 100)

  star.classList.add(`star`)
  star.classList.add(`star-${z}`)
  star.style.setProperty('top', `${starY}px`)
  star.style.setProperty('left', `${starX}px`)
  stars.appendChild(star)

  star.style.setProperty('transform', `translateZ(${z}px)`)
}

window.addEventListener('wheel', e => {
  const prevScale = Number(getComputedStyle(stars).getPropertyValue('--scale'))

  console.log(prevScale)

  if (Math.sign(e.deltaY) === 1) {
    stars.style.setProperty('--scale', `${Number(prevScale) + 0.02}`)
    return
  }

  if (prevScale <= 0.3) {
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
setInterval(() => {
  const currentStar = document.querySelector(
    `.star-${Math.floor(Math.random() * 100)}`
  ) as HTMLDivElement

  if (!currentStar) return

  currentStar.classList.remove('blink')
  currentStar.classList.add('blink')
}, 250)
