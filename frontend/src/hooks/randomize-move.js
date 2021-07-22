// not being used currently
function randomInt() {
    const moveDirection = ['down', 'left', 'right', 'up'];
    var randoNumber =  Math.floor(Math.random() * (4));
    // console.log(randoNumber);

    return moveDirection[randoNumber];
  }

// console.log(randomInt());

module.exports = randomInt;


