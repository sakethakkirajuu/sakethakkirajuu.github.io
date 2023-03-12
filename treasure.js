var treasureLocation = Math.floor(Math.random() * 15) //2
console.log(treasureLocation)
var bombLocation = Math.floor(Math.random() * 15) //3
console.log(bombLocation)
var clicks = 8
if (bombLocation === treasureLocation) {
    treasureLocation = treasureLocation + 1
   
}
const treasure = (location) => {
    //document.getElementById(location).innerHTML = "🍀"
    if (location === treasureLocation) {
        
        document.getElementById(location).innerHTML = "🪙"
        alert("You won!")

    } else if (location === bombLocation) {

        document.getElementById(location).innerHTML = "💣"
        alert("You lost")
    } else {
        document.getElementById(location).innerHTML = "☠️"

    }
      
}



//



