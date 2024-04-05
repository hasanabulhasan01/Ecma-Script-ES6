// We use switch statement to select one of many code blocks to be executed. 

// switch(expression){
//     case value1: 
//       statement to be executed when result of expression 
//       matches value1
//       break;
//     case value2: 
//       statement to be executed when result of expression 
//       matches value2
//       break;
//     case value3: 
//       statement to be executed when result of expression 
//       matches value3
//       break;
//       default;
//       break;
// }

example:

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  console.log(day);