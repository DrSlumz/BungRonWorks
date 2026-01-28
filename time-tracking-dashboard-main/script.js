const workNow = document.getElementById('work-current');
const workThen = document.getElementById('work-previous');
const playNow = document.getElementById('play-current');
const playThen = document.getElementById('play-previous');
const studyNow = document.getElementById('study-current');
const studyThen = document.getElementById('study-previous');
const exerciseNow = document.getElementById('exercise-current');
const exerciseThen = document.getElementById('exercise-previous');
const socialNow = document.getElementById('social-current');
const socialThen = document.getElementById('social-previous');
const selfcareNow = document.getElementById('selfcare-current');
const selfcareThen = document.getElementById('selfcare-previous');

const elementMap = {
    Work: { current: workNow, previous: workThen },
    Play: { current: playNow, previous: playThen },
    Study: { current: studyNow, previous: studyThen },
    Exercise: { current: exerciseNow, previous: exerciseThen },
    Social: { current: socialNow, previous: socialThen },
    'Self Care': { current: selfcareNow, previous: selfcareThen },
};
const updateTimeFrame = (timeframe) => {
    fetch('./data.json')
        .then((response) => response.json())
        .then((data) => {
            Object.values(elementMap).forEach((el) => {
                el.current.textContent = '';
                el.previous.textContent = '';
            });
            data.forEach((post) => {
                if (elementMap[post.title]) {
                    const currentHours = post.timeframes[timeframe].current;
                    const previousHours = post.timeframes[timeframe].previous;
                    elementMap[post.title].current.textContent =
                        `${currentHours}hrs`;
                    elementMap[post.title].previous.textContent =
                        `Previous-${previousHours}hrs`;
                }
            });
        })
        .catch((error) => console.error('Error loading JSON:', error));
};

const dailyBtn = document.getElementById('daily');
const weeklyBtn = document.getElementById('weekly');
const monthlyBtn = document.getElementById('monthly');

dailyBtn.addEventListener('click', () => updateTimeFrame('daily'));
weeklyBtn.addEventListener('click', () => updateTimeFrame('weekly'));
monthlyBtn.addEventListener('click', () => updateTimeFrame('monthly'));
