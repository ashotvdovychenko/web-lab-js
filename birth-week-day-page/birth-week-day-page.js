const source = document.querySelector("#birthdate");
const result = document.querySelector("#result");
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function handleSourceChange(source, result, daysOfWeek){
    source.addEventListener("input", (event) => {
        const birthdate = new Date(event.target.value);
        const dayOfWeek = calculateDay(birthdate);
        displayDayOfWeek(daysOfWeek, dayOfWeek, result);
    });
}

function calculateDay(birthdate) {
    const a = Math.floor((15 - birthdate.getMonth()) / 12);
    const y = birthdate.getFullYear() - a;
    const m = birthdate.getMonth() + 12 * a - 1;

    return (birthdate.getDate() + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((31 * m) / 12)) % 7;
}

function displayDayOfWeek(daysOfWeek ,dayOfWeek, result){
    result.textContent = daysOfWeek[dayOfWeek];
}

handleSourceChange(source, result, daysOfWeek);