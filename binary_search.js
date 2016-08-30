Array.prototype.binarySearchFast = function(search) {
    // Your code here
    var arrMin = 0;
    var arrMax = this.length - 1;

    while (1) {
        if (search == this[Math.floor(((arrMax - arrMin) / 2)) + arrMin]) {
            return Math.floor(((arrMax - arrMin) / 2)) + arrMin;
        } else if (search == this[Math.ceil(((arrMax - arrMin) / 2)) + arrMin]) {
            return Math.ceil(((arrMax - arrMin) / 2)) + arrMin;
        } else if (arrMax == arrMin) {
            return -1;
        } else if (search <= this[Math.ceil((arrMax - arrMin) / 2) + arrMin]) {
            arrMax = Math.ceil((arrMax - arrMin) / 2) + arrMin;

            // Test to see arrMin arrMax changes
            // console.log("arrMin: " + arrMin + ", arrMax: " + arrMax);
        } else if (search > this[Math.ceil((arrMax - arrMin) / 2) + arrMin]) {
            arrMin = Math.ceil((arrMax - arrMin) / 2) + arrMin;

            // Test to see arrMin arrMax changes
            // console.log("arrMin: " + arrMin + ", arrMax: " + arrMax);
        }
    }
};

var testArray = [1, 2, 3, 4, 5];
console.log(testArray.binarySearchFast(4));
