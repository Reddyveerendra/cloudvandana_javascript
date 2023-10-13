document.addEventListener("DOMContentLoaded", function (event) {
    const inputElement = document.querySelector("#strInput");
    const resultElement = document.getElementById("result");
    document.addEventListener('keydown', function (e) { if (e.keyCode === 13) { e.stopPropagation(); } }, true);
    inputElement.addEventListener("change", () => {
        const inputValue = inputElement.value;
        const reversedString = inputValue.split('').reverse().join('');
        resultElement.textContent = reversedString;
    });
});
