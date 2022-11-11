
function myBubbleSort(args) {

    sorted = false;

    while (!sorted) {
        sorted = true
        for(i=0; i<args.length-1; i++) {

            if (args[i] > args[i+1]) {
                sorted = false;
                temp = args[i];
                args[i] = args[i+1];
                args[i+1] = temp;
            }
        }
    }
}

// arr1 = [3, 5, 1, 4, 6, 8, 2];

// console.log(arr1);

// myBubbleSort(arr1);

// console.log(arr1);

module.exports = myBubbleSort;