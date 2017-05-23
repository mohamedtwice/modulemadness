function createRandomNumber(min, max) {
  return String(Math.floor(Math.random() * (max - min)) + min);
}

// export a reference to the function
module.exports = createRandomNumber;
