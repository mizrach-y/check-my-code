const getSleepHours = (day) => {
 switch (day) {
    case 'Sunday': return 7;
    case 'Monday': return 7;
    case 'Tuesday': return 7;
    case 'Wednesday': return 7;
    case 'Thursday': return 7;
    case 'Friday': return 8;
    case 'Saturday': return 6;
  }
};


let getActualSleepHours = () => {
  getSleepHours('Sunday'); +
  getSleepHours('Monday'); +
  getSleepHours('Tuesday'); +
  getSleepHours('Wednesday'); +
  getSleepHours('Thursday'); +
  getSleepHours('Friday'); +
  getSleepHours('Saturday')
};

const getIdealSleepHours = () => {
  let idealHours = 10
  return idealHours * 7
};

const calculateSleepDebt = () =>{
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours){
  console.log('You got good sleep routine');
  }

    if(actualSleepHours > idealSleepHours){
    console.log('You are sleeping too much' + actualSleepHours - idealSleepHours);
  }
    if(actualSleepHours < idealSleepHours){
    console.log('You need more sleep' + actualSleepHours - idealSleepHours);
  }
};
console.log(calculateSleepDebt());
