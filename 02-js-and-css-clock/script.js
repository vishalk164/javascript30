const hourHand = document.getElementById('hours');
const minuteHand = document.getElementById('minutes');
const secondHand = document.getElementById('seconds');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 180;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 180;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 180;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
};

setInterval(setDate, 1000);