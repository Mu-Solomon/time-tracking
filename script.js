let daily,weekly,monthly;

let workHours,workPrevious,playHours,playPrevious,studyHours,
studyPrevious,exerciseHours,exercisePrevious,socialHours,
socialPrevious,selfHours,selfPrevious;

workHours = document.getElementById('workHours');
workPrevious = document.getElementsByClassName('workPrevious')[0];

playHours = document.getElementById('playHours');
playPrevious = document.getElementsByClassName('playPrevious')[0];

studyHours = document.getElementById('studyHours');
studyPrevious = document.getElementsByClassName('studyPrevious')[0];

exerciseHours = document.getElementById('exerciseHours');
exercisePrevious = document.getElementsByClassName('exercisePrevious')[0];

socialHours = document.getElementById('socialHours');
socialPrevious = document.getElementsByClassName('socialPrevious')[0];

selfHours = document.getElementById('selfHours');
selfPrevious = document.getElementsByClassName('selfPrevious')[0];

daily = document.getElementById('daily');
daily.addEventListener('click', dailySwicth)
function dailySwicth() {

    /*daily.style.color = 'hsl(0, 0%, 97%)';
    weekly.style.color = 'hsl(236, 100%, 87%)';
    monthly.style.color = 'hsl(236, 100%, 87%)';*/

    daily.classList.add("activate");
    weekly.classList.remove("activate");
    monthly.classList.remove("activate");

    workHours.innerHTML = '5hrs';
    workPrevious.innerHTML = 'Yesterday - 7hrs';

    playHours.innerHTML = '1hr';
    playPrevious.innerHTML = 'Yesterday - 2hrs';

    studyHours.innerHTML = '0hrs';
    studyPrevious.innerHTML = 'Yesterday - 1hr';

    exerciseHours.innerHTML = '1hr';
    exercisePrevious.innerHTML = 'Yesterday - 1hr';

    socialHours.innerHTML = '1hr';
    socialPrevious.innerHTML = 'Yesterday - 3hrs';

    selfHours.innerHTML = '0hrs';
    selfPrevious.innerHTML = 'Yesterday - 1hr';

}

weekly = document.getElementById('weekly');
weekly.addEventListener('click', weeklySwicth)
function weeklySwicth() {
    /*daily.style.color = 'hsl(236, 100%, 87%)';
    weekly.style.color = 'hsl(0, 0%, 97%)';
    monthly.style.color = 'hsl(236, 100%, 87%)';*/

    weekly.classList.add("activate");
    daily.classList.remove("activate");
    monthly.classList.remove("activate");

    workHours.innerHTML = '32hrs';
    workPrevious.innerHTML = 'Last week - 36hrs';

    playHours.innerHTML = '10hrs';
    playPrevious.innerHTML = 'Last week - 8hrs';

    studyHours.innerHTML = '4hrs';
    studyPrevious.innerHTML = 'Last week - 7hrs';

    exerciseHours.innerHTML = '4hrs';
    exercisePrevious.innerHTML = 'Last week - 5hrs';

    socialHours.innerHTML = '5hrs';
    socialPrevious.innerHTML = 'Last week - 10hrs';

    selfHours.innerHTML = '2hrs';
    selfPrevious.innerHTML = 'Last week - 2hrs';
}

monthly = document.getElementById('monthly');
monthly.addEventListener('click', monthlySwicth)
function monthlySwicth() {

    /*daily.style.color = 'hsl(236, 100%, 87%)';
    weekly.style.color = 'hsl(236, 100%, 87%)';
    monthly.style.color = 'hsl(0, 0%, 97%)';*/

    monthly.classList.add("activate");
    weekly.classList.remove("activate");
    daily.classList.remove("activate");

    workHours.innerHTML = '103hrs';
    workPrevious.innerHTML = 'Last month - 128hrs';

    playHours.innerHTML = '23hrs';
    playPrevious.innerHTML = 'Last month - 29hrs';

    exerciseHours.innerHTML = '11hrs';
    exercisePrevious.innerHTML = 'Last month - 18hrs';

    socialHours.innerHTML = '21hrs';
    socialPrevious.innerHTML = 'Last month - 23hrs';

    studyHours.innerHTML = '13hrs';
    studyPrevious.innerHTML = 'Last month - 19hrs';

    selfHours.innerHTML = '7hrs';
    selfPrevious.innerHTML = 'Last month - 11hrs';

}