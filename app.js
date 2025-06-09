const body = document.body
const inputBackgroundColor = document.querySelector('[data-input="background-color"]')
const buttonSwitchBackgroundColor =
    document.querySelector('[data-button="switch-background-color"]')

const getRandomInt = () => Math.ceil(Math.random() * 100)
const switchBackgroundColor = (el, color) => el.style.backgroundColor = color
const getNewBackgroundColorTemplate = () =>
    `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`

const handleButtonClick = () => {
    const newBackgroundColorTemplate = getNewBackgroundColorTemplate()
    switchBackgroundColor(body, newBackgroundColorTemplate)
}

buttonSwitchBackgroundColor.addEventListener('click', handleButtonClick)
inputBackgroundColor.addEventListener('input', e =>
    switchBackgroundColor(body, e.target.value))