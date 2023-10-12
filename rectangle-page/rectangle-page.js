const rectangle = document.querySelector("#rectangle")

function calculateRectangle() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    const area = length * width;
    const perimeter = 2 * (length + width);
    const diagonal = Math.sqrt(length ** 2 + width ** 2);

    if(!validate(length, width)){
        return;
    }

    displayRectangleCalculation(area, perimeter, diagonal);
    setLengthWidthLabels(length, width)
}

function validate(length, width){
    if (isNaN(length) || isNaN(width)) {
        document.getElementById("area-result").textContent = "";
        document.getElementById("perimeter-result").textContent = "";
        document.getElementById("diagonal-result").textContent = "";
        document.getElementById("error-message").textContent = "";
        return false;
    }

    if(length <= 0 || width <= 0){
        document.getElementById("error-message").textContent = "Values must be greater than 0";
        return false;
    }

    return true;
}

function displayRectangleCalculation(area, perimeter, diagonal){
    document.getElementById("area-result").textContent = area.toFixed(2);
    document.getElementById("perimeter-result").textContent = perimeter.toFixed(2);
    document.getElementById("diagonal-result").textContent = diagonal.toFixed(2);
}

function setLengthWidthLabels(length, width) {
    rectangle.dataset.length = length;
    rectangle.dataset.width = width;
}

document.getElementById("length").addEventListener("input", calculateRectangle);
document.getElementById("width").addEventListener("input", calculateRectangle);