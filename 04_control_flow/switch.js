/*
Switch statement Syntax

switch(key){

case value: code; break;

default: code; break;
}
 */

let month = 3;

switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("Mar");
    break;
  case 4:
    console.log("Apr");
    break;
  default:
    console.log("Invalid");
    break;
}

month = "3";

switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("Mar");
    break;
  case 4:
    console.log("Apr");
    break;
  default:
    console.log("Invalid");
    break;
}
