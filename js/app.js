const buttonColorSwitcher = document.querySelector('[data-js="button-color-switcher"]')

const handleButtonClick = async () => {
  const { switchBackgroundColor } = await import('./switchBackgroundColor.js')
  switchBackgroundColor()
}

buttonColorSwitcher.addEventListener('click', handleButtonClick)