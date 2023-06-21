// vars

// select dom elements
  var startButton = document.querySelector('.start-button')
  var resetButton = document.querySelector('.reset-button')
  var timerEl = document.querySelector('.timer')
  var wordBlanksEl = document.querySelector('.word-blanks')
  var winsEl = document.querySelector('.win')
  var lossesEl = document.querySelector('.lose')

  // list of words
  var words = ["jellyfish" , "pancakes" , "callback" , "bacon" , "porcupine"]
  var userGuesses = []
  var answer 

  function startRound() {
    console.log('starting round...')
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
    startButton.addEventListener('click' , startRound)
    // reset
    // keydown - onKeydown