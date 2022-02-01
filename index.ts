const stars = document.querySelector('#stars') as HTMLDivElement

const MAX_STARS = 250

const WIN_HEIGHT = stars.offsetHeight
const WIN_WIDTH = stars.offsetWidth

for (let i = 0; i <= MAX_STARS; i++) {
  const starX = Math.floor(Math.random() * WIN_WIDTH) + 1
  const starY = Math.floor(Math.random() * WIN_HEIGHT) + 1

  const star = document.createElement('div')

  const z = Math.floor(Math.random() * 50)

  const colors = ['blue', 'yellow', 'red']

  star.classList.add(`star`)
  star.classList.add(`star-${z}`)
  star.classList.add(colors[Math.floor(Math.random() * colors.length)])
  star.style.setProperty('top', `${starY}px`)
  star.style.setProperty('left', `${starX}px`)
  stars.appendChild(star)

  star.style.setProperty('transform', `translateZ(${z}px)`)
}

window.addEventListener('wheel', e => {
  if (window.innerWidth > 700) {
    const prevScale = Number(getComputedStyle(stars).getPropertyValue('--scale'))

    if (Math.sign(e.deltaY) === 1) {
      stars.style.setProperty('--scale', `${Number(prevScale) + 0.02}`)
      return
    }

    if (prevScale <= 0.6) {
      return
    }

    stars.style.setProperty('--scale', `${Number(prevScale) + -0.02}`)
  }
})

window.addEventListener('mousemove', e => {
  // console.log('e.clientX', e.clientX / window.innerWidth)
  console.log('e.clientY', Math.floor((e.clientY / window.innerHeight) * 50))

  stars.style.setProperty(
    'perspective-origin',
    `${(e.clientX / window.innerWidth) * 100}% ${(e.clientY / window.innerHeight) * 100}%`
  )
})

// setInterval(() => {
//   const allStars = document.querySelectorAll('.star')

//   const currentStar = allStars[Math.floor(Math.random() * allStars.length)]

//   currentStar.classList.remove('blink')
//   currentStar.classList.add('blink')
// }, 250)
