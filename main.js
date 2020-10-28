const secondHand = document.querySelector('.second-hand')
console.log(secondHand)
const setDate = () => {
  const now = new Date()
  const seconds = now.getSeconds()
  const secondsDegrees = ((seconds / 60) * 360 +90)
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  // secondHand.setAttribute('style', "background: red;")
  console.log(seconds)

}
setInterval(setDate, 1000)
