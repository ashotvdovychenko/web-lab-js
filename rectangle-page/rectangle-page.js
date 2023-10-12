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
}

function validate(length, width){
    if (isNaN(length) || isNaN(width)) {
        document.getElementById("areaResult").textContent = "";
        document.getElementById("perimeterResult").textContent = "";
        document.getElementById("diagonalResult").textContent = "";
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
    document.getElementById("areaResult").textContent = area.toFixed(2);
    document.getElementById("perimeterResult").textContent = perimeter.toFixed(2);
    document.getElementById("diagonalResult").textContent = diagonal.toFixed(2);
}

document.getElementById("length").addEventListener("input", calculateRectangle);
document.getElementById("width").addEventListener("input", calculateRectangle);