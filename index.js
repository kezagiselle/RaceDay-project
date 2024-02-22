let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const runnerAge = 16;
if(runnerAge == 18 && registeredEarly == true){
  console.log('you are an adult.');
    raceNumber += 1000;
} else {
  console.log('not in your range');
}

if(runnerAge >= 18 && registeredEarly == true){
  console.log('your race time is 9:30 and your race number is 100');
} else if(runnerAge > 18 && registeredEarly == false ) {
  console.log('your race time is 11:00am and your racenumber is 99');  
}else if(runnerAge < 18 && registeredEarly == true){
  console.log('your racing time is 12:30pm and your racenumber is below 1000');
} else  {
  console.log('see the registration desk');
}