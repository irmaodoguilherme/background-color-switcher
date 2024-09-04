const getRandomNumber = max => Math.trunc(Math.random() * max)

const getBackgroundColor = () => {
  const red = getRandomNumber(255)
  const green = getRandomNumber(255)
  const blue = getRandomNumber(255)
  const opacity = getRandomNumber(100)

  return `rgb(${red}, ${green}, ${blue}, ${opacity}%)`
}

export const switchBackgroundColor = () => {
  const newBackgroundColor = getBackgroundColor()
  const body = document.body

  body.style.backgroundColor = newBackgroundColor
}