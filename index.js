// FlipCardAnim
const FlipCardAnim = (i, flipCard) => {
  const c = document.getElementById('flipCardSec').children;
  const topHalf = c[0];
  const bottom = c[1];
  const topFlip = document.createElement('div');
  const BottomFlip = document.createElement('div');
  topFlip.classList.add('top-flip');
  BottomFlip.classList.add('bottom-flip');
  let tempI = i;
  if (i - 1 === -2) {
    tempI = 59;
  }
  topHalf.textContent = (tempI - 1 < 9) ? `0${tempI}` : tempI;
  bottom.textContent = (tempI < 9) ? `0${tempI}` : tempI;
  topFlip.textContent = (tempI - 1 < 9) ? `0${tempI}` : tempI - 1;
  BottomFlip.textContent = (tempI < 9) ? `0${tempI}` : i;
  topFlip.addEventListener('animationstart', () => {
    topHalf.textContent = (tempI - 1 < 9) ? `0${tempI}` : tempI - 1;
  });
  topFlip.addEventListener('animationend', () => {
    topFlip.remove();
  });
  BottomFlip.addEventListener('animationend', () => {
    bottom.textContent = (tempI - 1 < 9) ? `0${tempI}` : tempI - 1;
    BottomFlip.remove();
  });
  flipCard.appendChild(topFlip);
  flipCard.appendChild(BottomFlip);
};

// FlipCardAnim ends here

if (localStorage.key(0) !== 'Sep 8, 2023 00:00:00') {
  localStorage.setItem('Date', 'Sep 8, 2023 00:00:00');
}

const LaunchDate = new Date(localStorage.getItem('Date')).getTime();

const SecCARD = (document.getElementById('flipCardSec'));
const MinCARD = (document.getElementById('flipCardMin'));
const HrCARD = (document.getElementById('flipCardHour'));
const DayCARD = (document.getElementById('flipCardDay'));

const loop = setInterval(() => {
  const date = new Date().getTime();
  const distance = LaunchDate - date;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (days < 0 || hours < 0 || minutes < 0 || seconds < 0) {
    clearInterval(loop);

    return;
  }

  if (minutes !== 0 && seconds === 59) {
    FlipCardAnim(minutes + 1, MinCARD);
  }
  if (hours !== 0 && minutes === 59 && seconds === 59) {
    FlipCardAnim(hours + 1, HrCARD);
  }
  if (days !== 0 && hours === 59 && minutes === 59 && seconds === 59) {
    FlipCardAnim(days + 1, DayCARD);
  }

  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    setTimeout(() => {
      document.getElementById('timer').style.display = 'none';
      document.getElementById('first').style.display = 'none';
    }, 100);
    document.getElementById('launced').style.display = 'block';
    document.getElementById('second').innerHTML = '00';
  }

  if (days < 10) {
    days = `0${days}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  document.getElementById('secTop').innerHTML = seconds;
  document.getElementById('secBottom').innerHTML = seconds;
  FlipCardAnim(seconds, SecCARD);
  document.getElementById('minBottom').innerHTML = minutes;
  document.getElementById('minTop').innerHTML = minutes;
  document.getElementById('hourTop').innerHTML = hours;
  document.getElementById('hourBottom').innerHTML = hours;
  document.getElementById('dayTop').innerHTML = days;
  document.getElementById('dayBottom').innerHTML = days;
}, 1000);
