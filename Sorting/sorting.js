document.addEventListener("DOMContentLoaded", function (event) {
    const inputElement = document.querySelector("#strInput");
    const resultElement = document.getElementById("result");

    inputElement.addEventListener("input", () => {
        const inputValue = inputElement.value;
        const values = inputValue.split(',').map(value => parseInt(value));
        const sortedArray = mergeSort(values);
        resultElement.textContent = sortedArray.join(" ");
    });
});

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
