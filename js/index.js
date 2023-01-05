import {buttonPlay, buttonPause, buttonAddMinutes, buttonMinusMinutes, minutesDisplay, secondsDisplay, buttonFlorest, buttonFireplace, buttonCoffeShop, buttonRaining, firePlaceSound, florestSound, rainSound,  coffeShopSound, kitchenTimer,
  buttonPressAudio} from "./elements.js"


let countcoffe = 0;
let countraining = 0;
let countFirePlace = 0;
let countFlorest = 0;
let isplaying = 0;
let minutes = Number(minutesDisplay.textContent);
let timerTimeOut;



function updateTimerDisplay(minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countdown () {
  timerTimeOut = setTimeout(function () {
    
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    
    updateTimerDisplay(minutes, 0)

if (minutes <= 0 && seconds <= 0){
  kitchenTimer.play()
  florestSound.pause()
  coffeShopSound.pause()
  rainSound.pause()
  firePlaceSound.pause()
    buttonRaining.classList.remove("select")
    buttonFlorest.classList.remove("select")
    buttonFireplace.classList.remove("select")
    buttonCoffeShop.classList.remove("select")

  return
}

    if (seconds <= 0){
      seconds = 60

      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))
      countdown ()

  }, 1000)
}

function addFiveMinutes() {
  buttonPressAudio.play()
  let seconds = Number(secondsDisplay.textContent);
  let minutes = Number(minutesDisplay.textContent);
  
  
    updateTimerDisplay(String(minutes + 5), seconds);
}

  function minusFiveMinutes() {
    buttonPressAudio.play()
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);
    
    if (minutes <= 5){
      alert("O contador não pode ir abaixo de 5 minutos")
    }else{
        updateTimerDisplay(String(minutes - 5), seconds)
      }
}



buttonPlay.addEventListener("click", function (){
  
  if(isplaying == 0){
    countdown()
    buttonPressAudio.play()
    isplaying = 1
  }else{
    alert("o contador já foi iniciado")
  }
})

buttonPause.addEventListener("click", function (){
  clearTimeout(timerTimeOut)
  buttonPressAudio.play()
  isplaying = 0
})

buttonAddMinutes.addEventListener("click", function (){
  addFiveMinutes ()
  buttonPressAudio.play()
})

buttonMinusMinutes.addEventListener("click", function () {
  minusFiveMinutes ()
  buttonPressAudio.play()
})



buttonFireplace.addEventListener("click", function (){
  playPauseFirePlace()
  florestSound.pause()
  coffeShopSound.pause()
  rainSound.pause()

})

buttonFlorest.addEventListener("click", function () {
 playPauseFlorest()
 firePlaceSound.pause()
 coffeShopSound.pause()
 rainSound.pause()
 
})

buttonCoffeShop.addEventListener("click", function (){
  playPauseCoffe()
  rainSound.pause()
  firePlaceSound.pause()
  florestSound.pause()
  
})

buttonRaining.addEventListener("click", function (){
  playPauseRaining()
  coffeShopSound.pause()
  firePlaceSound.pause()
  florestSound.pause()

})




function playPauseFlorest(){
  if(countFlorest == 0){
    countFlorest = 1
    florestSound.play()

    buttonCoffeShop.classList.remove("select") 
    buttonRaining.classList.remove("select")
    buttonFlorest.classList.toggle("select")
    buttonFireplace.classList.remove("select")


    countcoffe = 0
    countraining = 0
    countFirePlace = 0
  }else{
    countFlorest = 0
    florestSound.pause()

    buttonFlorest.classList.remove("select")
  }
}

function playPauseFirePlace(){
    if(countFirePlace == 0){
      countFirePlace = 1
      firePlaceSound.play()

      buttonCoffeShop.classList.remove("select") 
      buttonRaining.classList.remove("select")
      buttonFlorest.classList.remove("select")
      buttonFireplace.classList.toggle("select")

      countcoffe = 0
      countraining = 0
      countFlorest = 0
      }else{
      countFirePlace = 0
      firePlaceSound.pause()

      buttonFireplace.classList.remove("select")
      }
}

function playPauseCoffe(){
   if(countcoffe == 0){
    countcoffe = 1
    coffeShopSound.play()

    buttonCoffeShop.classList.toggle("select") 
    buttonRaining.classList.remove("select")
    buttonFlorest.classList.remove("select")
    buttonFireplace.classList.remove("select")

    countraining = 0
    countFirePlace = 0
    countFlorest = 0
   }else{
    countcoffe = 0
    coffeShopSound.pause()
    
    buttonCoffeShop.classList.remove("select")
   }
}
    
function playPauseRaining(){
  if(countraining == 0){
    countraining = 1
    rainSound.play()

    buttonRaining.classList.toggle("select")
    buttonFlorest.classList.remove("select")
    buttonFireplace.classList.remove("select")
    buttonCoffeShop.classList.remove("select")

    countcoffe = 0
    countFirePlace = 0
    countFlorest = 0
  }else{
    countraining = 0
    rainSound.pause()

    buttonRaining.classList.remove("select")
  }
}