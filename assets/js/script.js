// vars

// select dom elements
  // start button
  // reset button
  // count down timer
  // word-blanks
  // wins
  // losses

  // list of words
  // userGuesses = [] list of letters guessed by user
  // answer = "function"

  function startRound() {
    // start timer
    // pick a random word
    // set word-blanks to have _'s
  }

  function onKeydown(event) {
    // check if letter pressed is in the answer string
      // if yes
        // reveal letter in word-blanks
  }

  function tick() {
    // check if userGuesses has all letters that are in answer string
      // if has guess all letters
        // end round
        // increment wins
        // display "you won!"
      // else
        // is our timer count at 0?
          // if yes
            // diplay "lost round"
            // increment losses
          // else
            // decrement timer count
  }

  // Event Listeners
    // start - startRound()
    // reset
    // keydown - onKeydown