(function() {
      // Variables: Assign each button on the page to a variable.


      // Variable: The time display element.
    
      // Variable: stores the start time whenever the stopwatch
      // is started. Declared here so it's available to all functions
      // to update.

      // Variable: stores the interval id of the once-per-second
      // timer. Declared here so it can be updated or cleared in any
      // function.

      // Variable: stores the timer value (how much
      // time has passed since pressing "start"), so this can 
      // be increased or reset depending on the function.
      
      // Function: updates the contents of timeDisplay with the
      // current time.
 

      // Function: Callback for the setInterval call that fires every 
      // second when the stopwatch is running. This updates the
      // timer amount.
      

      // Function: [Stretch goal] - for enabling/disabling buttons into
      // a single function instead of each event handler.
     
    
      // Event listener: When the start button is clicked:
      // - Update the start time variable with the new start time 
      //   (as a timestamp)
      // - Start a new interval that 
      //       -- fires once per second
      //       -- invokes the callback that updates the timer amount
      //       -- the interval ID is stored in a variable available to
      //          other functions.
      // - Start button disabled
      // - Stop and reset button enabled
      


      // Event listener: When the stop button is clicked:
      // - Clear the interval updating the timer value.
      // - Start and reset button enabled
      // - Stop button disabled.
    

      // Event listener: When the reset button is clicked:
      // - Clear the interval updating the timer value.
      // - Set the timer amount back to 0
      // - Call function that updates the timer display
      // - Start button enabled
      // - Stop and reset button disabled.
    
 })();
