const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonAddMinutes = document.querySelector(".addMinutes")
const buttonMinusMinutes = document.querySelector(".minusMinutes")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
const buttonFlorest = document.querySelector(".florest")
const buttonFireplace = document.querySelector(".firePlace")
const buttonCoffeShop = document.querySelector(".coffeshop")
const buttonRaining = document.querySelector(".raining")
const firePlaceSound = new Audio ("./Sounds/Lareira.wav")
const florestSound = new Audio ("./Sounds/Floresta.wav")
const rainSound = new Audio("./Sounds/Chuva.wav")
const coffeShopSound = new Audio ("./Sounds/Cafeteria.wav")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")


firePlaceSound.loop=true
florestSound.loop=true
rainSound.loop=true
coffeShopSound.loop=true


export {
  buttonPlay,
  buttonPause,
  buttonAddMinutes,
  buttonMinusMinutes,
  minutesDisplay,
  secondsDisplay,
  buttonFlorest,
  buttonFireplace,
  buttonCoffeShop,
  buttonRaining,
  firePlaceSound,
  florestSound,
  rainSound,
  coffeShopSound,
  kitchenTimer,
  buttonPressAudio,

}
