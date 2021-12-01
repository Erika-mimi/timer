
const args = process.argv.slice(2)

//check if no numbers are provided
const timer = (times) => {
  if (times.length === 0) {
    console.log("You didn't input a time. Please try that again.")   
    return    
  } 
  //check if the time is a negative number or a non-number.
  for(let time of times){
    if(time < 0 || isNaN(time)) {
      console.log(`This is not a valid input:${(time)}. Please try that again.`)
    } else {

  setTimeout(() => {
    
    process.stdout.write('\007');
    process.stdout.write('.');
    process.stdout.write("\n")
  //ie 3 second = 3 * 1000 millisecond
  }, time * 1000);
}
}
}

timer(args)