// Return a random decimal between low (inclusive) and high (exclusive)
function randomDec(low, high) {
    return Math.random() * (high - low) + low;
}

// Return a random integer between low (inclusive) and high (exclusive)
function randomInt(low, high) {
    return Math.floor(randomDec(low, high));

}

