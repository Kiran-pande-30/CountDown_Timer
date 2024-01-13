const endDate = "13 January 2024 8:25 PM";
document.getElementById('end-date').innerText = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();

    const diff = (end - now)/ 1000;
    if(diff < 0) return;
    //calcualted the days, hours, minutes, seconds
    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor((diff/3600) % 24);
    inputs[2].value = Math.floor((diff/60) % 60);
    inputs[3].value = Math.floor((diff)%60);
}
clock();

setInterval(
    () => {
        clock();
    },1000
)