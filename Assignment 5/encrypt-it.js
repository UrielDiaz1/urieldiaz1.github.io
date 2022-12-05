/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * Initializes event handlers for UI elements on the page and performs actions needed to
   * take place during page load.
   */
  function init() {
    console.log("Window loaded!");
    const encryptButtonClicked = document.getElementById("encrypt-it");
    const resetButtonClicked = document.getElementById("reset");
    encryptButtonClicked.addEventListener('click', setupCipher);
    resetButtonClicked.addEventListener('click', resetOutput);
  }

  /**
   * Gathers all user input to be applied on top of the cipher output.
   */
  function setupCipher() {
    console.log("Button Clicked!");
    let text = document.getElementById("input-text").value;
    let allCapsCheckbox = document.getElementById("all-caps").checked;

    text = determineCaps(text, allCapsCheckbox);
    let result = "";

    if (allCapsCheckbox) {
      result = cipherInput(text, 'A', 'Z');
    }
    else {
      result = cipherInput(text, 'a', 'z');
    }
    
    showResult(result);
  }

  /**
   * Transforms a user text input into fully lowercase or uppercase based on their selected option.
   * @param {string} text 
   * @param {boolean} allCapsChecked
   * @returns Transformed input.
   */
  function determineCaps(text, allCapsChecked) {
    if (allCapsChecked) {
      return text.toUpperCase();
    }
    return text.toLowerCase();
  }

  /**
   * Ciphers the user's text input.
   * @param {string} text 
   * @param {char} a 
   * @param {char} z 
   * @returns A ciphered text input.
   */
  function cipherInput(text, a, z) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < a || text[i] > z) {
        result += text[i];
      } else if (text[i] == z) {
        result += a;
      // Letter is between 'a' and 'y' or 'A' and 'Z'.
      } else {
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

  /**
   * Updates the result field with the ciphered text.
   * @param {string} result 
   */
  function showResult(result) {
    let resultArea = document.getElementById("result");
    resultArea.textContent = result;
    resultArea.style.fontSize = determineFontSize();
  }

  /**
   * Determines which font size to use based on user's selected option.
   * @returns Returns the font size selected by the user.
   */
  function determineFontSize() {
    const radioButton12 = document.getElementById("radio12");
    if (radioButton12.checked) {
      return '12pt';
    }
    else {
      return '24pt';
    }
  }

  /**
   * Clears the result output field.
   */
  function resetOutput() {
    showResult("");
  }

})();
