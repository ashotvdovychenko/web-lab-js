function calculateRectangle() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);

    if (isNaN(length) || isNaN(width)) {
        document.getElementById("areaResult").textContent = "";
        document.getElementById("perimeterResult").textContent = "";
        document.getElementById("diagonalResult").textContent = "";
        return;
    }

    if(length <= 0 || width <= 0){
        document.getElementById("areaResult").textContent = "Values must be greater than 0";
        document.getElementById("perimeterResult").textContent = "Values must be greater than 0";
        document.getElementById("diagonalResult").textContent = "Values must be greater than 0";
        return;
    }

    const area = length * width;
    const perimeter = 2 * (length + width);
    const diagonal = Math.sqrt(length ** 2 + width ** 2);

    document.getElementById("areaResult").textContent = area.toFixed(2);
    document.getElementById("perimeterResult").textContent = perimeter.toFixed(2);
    document.getElementById("diagonalResult").textContent = diagonal.toFixed(2);
}

document.getElementById("length").addEventListener("input", calculateRectangle, false);
document.getElementById("width").addEventListener("input", calculateRectangle, false);