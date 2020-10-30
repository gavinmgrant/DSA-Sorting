// 7. Sort in place
// Write an algorithm to shuffle an array into a random order in place (i.e., without creating a new array).

const dataset = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const shuffleArray = array => {
    let lastIndex = array.length-1;

    // solution is based on the Fisher-Yates algorithm
    for (let i = lastIndex; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

console.log(shuffleArray(dataset));