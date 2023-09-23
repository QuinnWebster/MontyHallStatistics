let goodDoor = Math.floor(Math.random() * 3) + 1;
let chosenDoor;
let doorsOpened = 0;
let ourChosenDoorIsOpened = 0;
let remainingDoor;
let newDoorImage;
let finalDoorImage;
let chosenDoorImage;
let ourOpenedDoor;
let numTimesWon = 0;
let numTimesLost = 0;
let numTimesPlayed = 0;
let percentTimesWon;
let percentTimesLost;
let firstChosenDoor;

let numTimesWonSwitched = 0;
let numTimesLostSwitched = 0;
let numTimesPlayedSwitched = 0;
let percentTimesWonSwitched;
let percentTimesLostSwitched;

let numTimesWonNotSwitched = 0;
let numTimesLostNotSwitched = 0;
let numTimesPlayedNotSwitched = 0;
let percentTimesWonNotSwitched;
let percentTimesLostNotSwitched;

function resetGame() {
    goodDoor = Math.floor(Math.random() * 3) + 1;
    chosenDoor = undefined;
    doorsOpened = 0;
    ourChosenDoorIsOpened = 0;
  
    // Reset door images to initial state
    const doorImages = document.getElementsByClassName('door-img');
    for (let i = 0; i < doorImages.length; i++) {
      doorImages[i].src = `door${i + 1}.jfif`;
      doorImages[i].style.pointerEvents = 'auto'; // Re-enable clickability

    }
  }

  function replaceDoorWithChosenDoor(doorNumber) {
   
    chosenDoor = doorNumber;
  
    if (doorsOpened === 0) {

    firstChosenDoor = doorNumber
      chosenDoorImage = document.getElementsByClassName('door-img')[doorNumber - 1];
      chosenDoorImage.src = 'theChosenDoor.jpg';
  
      doorsOpened++;
  
      setTimeout(() => {
        revealFirstDoor();
      }, 600);

    } else if (doorsOpened > 0) {

        let secondChosenDoor = doorNumber;

        var newDoorImage = document.getElementsByClassName('door-img')[doorNumber - 1];
    
        if (doorNumber === goodDoor) {
          newDoorImage.src = 'car.jfif';
          newDoorImage.style.pointerEvents = 'none'; // Disable pointer events

            do{
                remainingDoor = Math.floor(Math.random() * 3) + 1;
            }while(remainingDoor === chosenDoor || remainingDoor === ourOpenedDoor)
  
          console.log('The remaining door is ' + remainingDoor);
  
          setTimeout(() => {
            finalDoorImage = document.getElementsByClassName('door-img')[remainingDoor - 1];
            finalDoorImage.src = 'donkey.jfif';
            finalDoorImage.style.pointerEvents = 'none'; // Disable pointer events

          }, 600);

          if(firstChosenDoor === secondChosenDoor){
            numTimesWonNotSwitched++
        }else{
            numTimesWonSwitched++
        }

          numTimesWon++
          console.log('You won')

        } else {
          newDoorImage.src = 'donkey.jfif';
          newDoorImage.style.pointerEvents = 'none'; // Disable pointer events


          do{
                remainingDoor = Math.floor(Math.random() * 3) + 1;
            }while(remainingDoor === chosenDoor || remainingDoor === ourOpenedDoor)

            console.log('The remaining door is ' + remainingDoor);

            setTimeout(() => {
                finalDoorImage = document.getElementsByClassName('door-img')[remainingDoor - 1];
                finalDoorImage.src = 'car.jfif';
                finalDoorImage.style.pointerEvents = 'none'; // Disable pointer events

            }, 600);

            if(firstChosenDoor === secondChosenDoor){
                numTimesLostNotSwitched++
            }else{
                numTimesLostSwitched++
            }

            numTimesLost++;
            console.log('You lost')


        }
  
        doorsOpened++;
        numTimesPlayed++;

        if(firstChosenDoor === secondChosenDoor){
            numTimesPlayedNotSwitched++
           giveDataWhenNotSwitched();
        }else{
            numTimesPlayedSwitched++
            giveDataWhenSwitched();
        }


       // giveData();

    }

  }

function revealFirstDoor() {

  do {
    ourOpenedDoor = Math.floor(Math.random() * 3) + 1;
  } while (ourOpenedDoor === chosenDoor || ourOpenedDoor === goodDoor);

  console.log('Good door ' + goodDoor)
  console.log('Chosen door ' + chosenDoor)
  console.log('Our opened door ' + ourOpenedDoor)


  let doorImage = document.getElementsByClassName('door-img')[ourOpenedDoor - 1];

  if (ourChosenDoorIsOpened === 0) {
    doorImage.src = 'donkey.jfif';
    doorImage.style.pointerEvents = 'none'; // Disable pointer events
    ourChosenDoorIsOpened++;
    
  }
}

function giveData(){

    console.log("The number of times played is " + numTimesPlayed)
    console.log("The number of times won is " + numTimesWon)
    console.log("The number of times lost is " + numTimesLost)

    if (numTimesWon === 0) {
        percentTimesWon = 0;
      } else {
        percentTimesWon = (numTimesWon / numTimesPlayed) * 100;
      }
  
      if (numTimesLost === 0) {
        percentTimesLost = 0;
      } else {
        percentTimesLost = (numTimesLost / numTimesPlayed) * 100;
      }


      console.log('Percent Times won ' + percentTimesWon)
      console.log('Percent Times lost ' + percentTimesLost)

      let percentTimesWonResult = document.getElementById("resultForPercentTimesWon");
      let percentTimesLostResult = document.getElementById("resultForPercentTimesLost");
      //let resultForSwitch = document.getElementById("resultForSwitch");

      resultForPercentTimesWon.textContent =  `The percent times won is${percentTimesWon.toFixed(3)}`;
      resultForPercentTimesLost.textContent =  `The percent times lost is ${percentTimesLost.toFixed(3)}`;

      let percent1 = percentTimesLost;
      let percent2 = percentTimesWon;

      let barSegment1 = document.getElementById("bar_segment_1")
      let barSegment2 = document.getElementById("bar_segment_2")

      barSegment1.style.width = `${percent1}%`;
      barSegment2.style.width = `${percent2}%`;
}


function giveDataWhenSwitched(){

    if (numTimesWonSwitched === 0) {
        percentTimesWonSwitched = 0;
      } else {
        percentTimesWonSwitched = (numTimesWonSwitched / numTimesPlayedSwitched) * 100;
      }
  
      if (numTimesLostSwitched === 0) {
        percentTimesLostSwitched = 0;
      } else {
        percentTimesLostSwitched = (numTimesLostSwitched / numTimesPlayedSwitched) * 100;
      }


      let percentTimesWonResult = document.getElementById("resultForPercentTimesWonSwitched");
      let percentTimesLostResult = document.getElementById("resultForPercentTimesLostSwitched");
      //let resultForSwitch = document.getElementById("resultForSwitch");

      resultForPercentTimesWonSwitched.textContent =  `The percent times won is ${percentTimesWonSwitched.toFixed(2)}%`;
      resultForPercentTimesLostSwitched.textContent =  `The percent times lost is ${percentTimesLostSwitched.toFixed(2)}%`;

      let percent1 = percentTimesLostSwitched;
      let percent2 = percentTimesWonSwitched;

      let barSegment1 = document.getElementById("bar_segment_1_switched")
      let barSegment2 = document.getElementById("bar_segment_2_switched")

      barSegment1.style.width = `${percent1}%`;
      barSegment2.style.width = `${percent2}%`;

}


function giveDataWhenNotSwitched(){

    if (numTimesWonNotSwitched === 0) {
        percentTimesWonNotSwitched = 0;
      } else {
        percentTimesWonNotSwitched = (numTimesWonNotSwitched / numTimesPlayedNotSwitched) * 100;
      }
  
      if (numTimesLostNotSwitched === 0) {
        percentTimesLostNotSwitched = 0;
      } else {
        percentTimesLostNotSwitched = (numTimesLostNotSwitched / numTimesPlayedNotSwitched) * 100;
      }


      let percentTimesWonResult = document.getElementById("resultForPercentTimesWonNotSwitched");
      let percentTimesLostResult = document.getElementById("resultForPercentTimesLostNotSwitched");
      //let resultForSwitch = document.getElementById("resultForSwitch");

      resultForPercentTimesWonNotSwitched.textContent =  `The percent times won is ${percentTimesWonNotSwitched.toFixed(2)}%`;
      resultForPercentTimesLostNotSwitched.textContent =  `The percent times lost is ${percentTimesLostNotSwitched.toFixed(2)}%`;

      let percent1 = percentTimesLostNotSwitched;
      let percent2 = percentTimesWonNotSwitched;

      let barSegment1 = document.getElementById("bar_segment_1_notSwitched")
      let barSegment2 = document.getElementById("bar_segment_2_notSwitched")

      barSegment1.style.width = `${percent1}%`;
      barSegment2.style.width = `${percent2}%`;

}


