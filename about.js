// I declared a constant variable named message, and assigned it to a string value ''.
const message = "Let's Get Into It!";
//This function takes in two parameters, message and timeout, which are used to control the typing effect delay. I then used the arrow function syntax to define the function.
const aboutMe = (message, timeout) =>
  //I used the spread operator to convert the message string into an array to iterate over each character
  [...message].map(
    //This is an arrow function within the map() method that takes each character ch and its corresponding index i.
    (ch, i) =>
      //Lastly, I set a timeout for each character based on  the index i multiplied by the timeout value. After the timeout, the Promise (an Object that links Producing code and Consuming code) resolves with a portion of the message up to the current index.
      new Promise(resolve => {
        setTimeout(() => {
          resolve(message.substring(0, i + 1));
        }, timeout * i);
      })
  );
//I also did a callback function to handle the completion of the typing effect using the .then() method. 
aboutMe(message, 140).forEach(promise => {
  promise.then(portion => {
    document.querySelector('p').innerHTML = portion;
  });
});
