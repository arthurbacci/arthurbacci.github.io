let light_mode = 0;
let storage = true;

if (localStorage === null) {
  light_mode = 1;
  storage = false;
}

if (storage && localStorage.theme !== 'dark') {
  light_mode = 1;
}

function setMode() {
  let r = document.querySelector('body');
  if (light_mode) {
    r.style.setProperty('--bg1', '#ECEFF4');
    r.style.setProperty('--bg2', '#E5E9F0');

    r.style.setProperty('--fg1', '#2E3440');
    r.style.setProperty('--fg2', '#3B4252');
  } else {
    r.style.setProperty('--bg1', '#2E3440');
    r.style.setProperty('--bg2', '#3B4252');

    r.style.setProperty('--fg1', '#ECEFF4');
    r.style.setProperty('--fg2', '#E5E9F0');
  }
}

setMode();

document
  .getElementById('toggle-theme')
  .addEventListener('click', () => {
    light_mode = !light_mode;
    if (storage)
      localStorage.theme = light_mode ? 'light' : 'dark';
    setMode();
});


