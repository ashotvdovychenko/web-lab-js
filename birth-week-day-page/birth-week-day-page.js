function calculateDay() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const a = 14 - Math.floor(birthdate.getUTCMonth() / 12);
    const y = birthdate.getUTCFullYear() - a;
    const m = birthdate.getUTCFullYear() - a;

    const dayOfWeek = (birthdate.getUTCDay() + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((31 * m) / 12)) % 7;

    document.getElementById("result").textContent = daysOfWeek[dayOfWeek];
}