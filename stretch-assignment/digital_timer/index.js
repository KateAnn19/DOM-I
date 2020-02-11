

let allDigits = document.getElementsByClassName('digits'); //this stores digits

let allDigitClasses = document.getElementsByClassName('digit');


let secondTens = document.getElementById('secondTens');

let secondOnes = document.getElementById('secondOnes');

let semiColon = document.getElementById('colon');

let msHundreds = document.getElementById('msHundreds');

let msTens = document.getElementById('msTens');


//console.log(semiColon);




// Algorithm:
// Create a function that executes every second using setInterval.
// Get the total number of minutes.
// Convert that into seconds and store in a global variable.
// Decrement the seconds by “1” for each second.
// Check if the seconds reaches 0. If true then alert the user and clear the timer.
// Coding time! Ready→ Set → Go. Start coding 🤩

// var seconds = 0;
// var interval ;
// function pomodoro(mins) {
//    seconds = mins*60 || 0;     
//    interval = setInterval(function() {
 
//         seconds--;
//         if(!seconds){
//              clearInterval(interval); 
//              alert("🚨 It is Cool 😎. I wish you could share ");
//         }
//    },1000)
// }


// var minutesLabel = document.getElementById("minutes");
// var secondsLabel = document.getElementById("seconds");
// var totalSeconds = 0;
// setInterval(setTime, 1000);

// function setTime() {
//   ++totalSeconds;
//   secondsLabel.innerHTML = pad(totalSeconds % 60);
//   minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
// }

// function pad(val) {
//   var valString = val + "";
//   if (valString.length < 2) {
//     return "0" + valString;
//   } else {
//     return valString;
//   }
// }
// <label id="minutes">00</label>:<label id="seconds">00</label>






// class Timer {
//     constructor(startTimeMS, maxTimeMS, semiColon, digit1, digit2, digit3, digit4) {
//        console.log('Timer constructed');
//        this.currentMS = startTimeMS;
//        this.maxTimeMS = maxTimeMS;
//        this.digits = [semiColon, digit1, digit2, digit3, digit4];
 
//        //Used by button to stop the timer
//        this.stopTimer = false;
 
//        //Update the timer at the start to current value
//        this.updateDigits(this.currentMS);
//     }
 
//     increaseTimer(durationMS) {
//        this.currentMS += durationMS;
//        this.updateDigits();
//        return this.currentMS;
//     }
 
//     updateDigits() {
//        let tempCurrentMS = this.currentMS;
//        if (this.currentMS >= this.maxTimeMS) {
//           this.digits.forEach((digit) => digit.classList.add('hit-max'));
//           tempCurrentMS = this.maxTimeMS;
//        }
 
//        let tenThousands = Math.floor(tempCurrentMS / 10000);
//        this.digits[1].textContent = tenThousands;
//        tempCurrentMS -= tenThousands * 10000;
 
//        let thousands = Math.floor(tempCurrentMS / 1000);
//        this.digits[2].textContent = thousands;
//        tempCurrentMS -= thousands * 1000;
 
//        let hundreds = Math.floor(tempCurrentMS / 100);
//        this.digits[3].textContent = hundreds;
//        tempCurrentMS -= hundreds * 100;
 
//        let tens = Math.floor(tempCurrentMS / 10);
//        this.digits[4].textContent = tens;
//        tempCurrentMS -= tens * 10;
//     }
 
//     startTimer(incrementMS = 10, startButton) {
//        this.stopTimer = false;
//        startButton.disabled = true;
 
//        const interval = setInterval(() => {
//           if (this.currentMS > this.maxTimeMS || this.stopTimer) {
//              clearInterval(interval);
//              startButton.disabled = false;
//           } else {
//              this.increaseTimer(incrementMS);
//           }
//        }, incrementMS);
//     }
 
//     resetTimer(resetMS = 0, startButton) {
//        this.currentMS = resetMS;
//        this.updateDigits(this.currentMS);
//        this.stopTimer = true;
//        this.digits.forEach((digit) => digit.classList.remove('hit-max'));
//        startButton.disabled = false;
//     }
//  }
 
// //  const secondTens = document.getElementById('secondTens');
// //  const secondOnes = document.getElementById('secondOnes');
// //  const semiColon = document.getElementById('colon');
// //  const msHundreds = document.getElementById('msHundreds');
// //  const msTens = document.getElementById('msTens');
 
//  const maxTimeMS = 10000;
 
//  const myTimer = new Timer(0, maxTimeMS, semiColon, secondTens, secondOnes, msHundreds, msTens);
 
//  const startButton = document.getElementById('start');
//  const resetButton = document.getElementById('reset');
 
//  startButton.addEventListener("click", function () {
//     myTimer.resetTimer(0, startButton);
//     myTimer.startTimer(10, startButton);
//  });
 
//  resetButton.addEventListener("click", function () {
//     myTimer.resetTimer(0, startButton);
//  });
 