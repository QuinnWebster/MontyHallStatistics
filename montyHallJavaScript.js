document.addEventListener('DOMContentLoaded', () => {
    let numTimesPlayedInput = document.getElementById('amount');
    let submitButton = document.getElementById('submitButton');
    let numTimesPlayed; // Declare the variable outside the event listener
  
    submitButton.addEventListener('click', () => {
      numTimesPlayed = parseInt(numTimesPlayedInput.value, 10); // Assign the value
      console.log(`User input: ${numTimesPlayed}`);

      let switchRadio = document.getElementById('switch')
      let dontSwitchRadio = document.getElementById('dont_switch')

      if(dontSwitchRadio.checked){
  
        let timesWon = 0;
        let timesLost = 0;
        let percentTimesWon = 0;
        let percentTimesLost = 0;
    
        for (let i = 0; i < numTimesPlayed; i++) {
          let goodDoor = Math.floor(Math.random() * 3) + 1;
          let chosenDoor = Math.floor(Math.random() * 3) + 1;
    
          if (chosenDoor === goodDoor) {
            timesWon++;
          } else {
            timesLost++;
          }
        }
    
        if (timesWon === 0) {
          percentTimesWon = 0;
        } else {
          percentTimesWon = (timesWon / numTimesPlayed) * 100;
        }
    
        if (timesLost === 0) {
          percentTimesLost = 0;
        } else {
          percentTimesLost = (timesLost / numTimesPlayed) * 100;
        }

        
       
        let percentTimesWonResult = document.getElementById("resultForPercentTimesWonDontSwitch");
        let percentTimesLostResult = document.getElementById("resultForPercentTimesLostDontSwitch");
        //let resultForSwitch = document.getElementById("resultForSwitch");

        resultForPercentTimesWon.textContent =  `The number of times won is ${percentTimesWon.toFixed(3)}`;
        resultForPercentTimesLost.textContent =  `The number of times lost is ${percentTimesLost.toFixed(3)}`;

        let percent1 = percentTimesWon;
        let percent2 = percentTimesLost;

        let barSegment1 = document.getElementById("bar_segment_1")
        let barSegment2 = document.getElementById("bar_segment_2")

        barSegment1.style.width = `${percent1}%`;
        barSegment2.style.width = `${percent2}%`;


        /*
        console.log(`The percentage of times won is ${percentTimesWon}%`);
        console.log(`The percentage of times lost is ${percentTimesLost}%`);
        */
      }

      if(switchRadio.checked){

        let timesWon = 0;
        let timesLost = 0;
        let percentTimesWon = 0;
        let percentTimesLost = 0;
    
        for (let i = 0; i < numTimesPlayed; i++) {
          let goodDoor = Math.floor(Math.random() * 3) + 1;
          let chosenDoor = Math.floor(Math.random() * 3) + 1;
    
          if (chosenDoor === goodDoor) {
            timesWon++;
          } else {
            timesLost++;
          }
        }
    
        if (timesWon === 0) {
          percentTimesWon = 0;
        } else {
          percentTimesWon = (timesWon / numTimesPlayed) * 100;
        }
    
        if (timesLost === 0) {
          percentTimesLost = 0;
        } else {
          percentTimesLost = (timesLost / numTimesPlayed) * 100;
        
        }

        let percentTimesWonResult = document.getElementById("resultForPercentTimesWon");
        let percentTimesLostResult = document.getElementById("resultForPercentTimesLost");
        //let resultForSwitch = document.getElementById("resultForSwitch");

        resultForPercentTimesWon.textContent =  `The number of times won is ${percentTimesLost.toFixed(3)}`;
        resultForPercentTimesLost.textContent =  `The number of times lost is ${percentTimesWon.toFixed(3)}`;

        let percent1 = percentTimesLost;
        let percent2 = percentTimesWon;

        let barSegment1 = document.getElementById("bar_segment_1")
        let barSegment2 = document.getElementById("bar_segment_2")

        barSegment1.style.width = `${percent1}%`;
        barSegment2.style.width = `${percent2}%`;


        /*
        console.log(`The percentage of times won is ${percentTimesLost}%`);
        console.log(`The percentage of times lost is ${percentTimesWon}%`);
        */
      }

      else{
        console.log('Please Select a choice')
      }
    })
  });

function openDoor(doorNumber) {    
  var doorImage = document.getElementsByClassName('door-img')[doorNumber - 1];
  doorImage.src = 'car.jfif';
  doorImage.onclick = null; // Remove the click event handler after the door is opened
}
  