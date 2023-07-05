// FlipCardAnim '\r\n'
const FlipCardAnim = (i, flipCard) => {
	// eslint-disable-line
  const c = document.getElementById('flipCardSec').children;
  const topHalf = c[0];
  const bottom = c[1];
  const topFlip = document.createElement('div');
  const BottomFlip = document.createElement('div');
  topFlip.classList.add('top-flip');
  BottomFlip.classList.add('bottom-flip');
  if (i - 1 === -2) {
    // eslint-disable-next-line no-param-reassign
    i = 59;
  }
  topHalf.textContent = (i - 1 < 9) ? `0${i}` : i;
  bottom.textContent = (i < 9) ? `0${i}` : i;
  topFlip.textContent = (i - 1 < 9) ? `0${i}` : i - 1;
  BottomFlip.textContent = (i < 9) ? `0${i}` : i;
  topFlip.addEventListener('animationstart', () => {
    topHalf.textContent = (i - 1 < 9) ? `0${i}` : i - 1;
  });
  topFlip.addEventListener('animationend', () => {
    topFlip.remove();
  });
  BottomFlip.addEventListener('animationend', () => {
    bottom.textContent = (i - 1 < 9) ? `0${i}` : i - 1;
    BottomFlip.remove();
  });
  flipCard.appendChild(topFlip);
  flipCard.appendChild(BottomFlip);
};

// FlipCardAnim ends here

if (localStorage.key(0) !== 'Date') {
  localStorage.setItem('Date', 'Jul 18, 2023 00:00:00');
}

const LaunchDate = new Date(localStorage.getItem('Date')).getTime();

const SecCARD = (document.getElementById('flipCardSec'));
const MinCARD = (document.getElementById('flipCardMin'));
const HrCARD = (document.getElementById('flipCardHour'));
const DayCARD = (document.getElementById('flipCardDay'));

/* eslint-disable no-multiple-empty-lines */

// used for disabling multiple lines




/* eslint-enable no-multiple-empty-lines */

const loop = setInterval(() => {
  const date = new Date().getTime();
  const distance = LaunchDate - date;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (days < 0 || hours < 0 || minutes < 0 || seconds < 0) {
  // document.getElementById('second').style.animation = 'none';
    clearInterval(loop);

    return;
  }

/*eslint-disable */
	
  /* eslint-enable */

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

  /* eslint-disable no-unused-expressions */
  (days < 10) ? days = `0${days}` : null;
  (hours < 10) ? hours = `0${hours}` : null;
  (minutes < 10) ? minutes = `0${minutes}` : null;
  // (seconds < 10) ? seconds = '0' +  seconds: null
  /* eslint-enable no-unused-expressions */

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
