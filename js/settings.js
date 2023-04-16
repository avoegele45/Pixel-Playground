import { Savers } from "./user-savers.js";

const link = document.querySelector('link[rel="stylesheet"]');

if (Savers.SettingsTheme.get() != null) {
  link.href = Savers.SettingsTheme.get();
}

const standardBtn = document.getElementById('standard');
const lightBtn = document.getElementById('light');
const frogBtn = document.getElementById('frog');
const tronBtn = document.getElementById('tron');

if (Savers.Theme.get() != null) {
  link.href = Savers.Theme.get();
}

standardBtn.addEventListener('click', function() {
  link.href = 'styles/dashboard-styles.css';
  Savers.Theme.save('styles/dashboard-styles.css');
  Savers.InfoTheme.save('styles/info.css');
  Savers.SettingsTheme.save('styles/dashboard-styles.css');
});

lightBtn.addEventListener('click', function() {
  link.href = 'styles/retro-lightmode-style.css';
  Savers.Theme.save('styles/retro-lightmode-style.css');
  Savers.InfoTheme.save('styles/info-light.css');
  Savers.SettingsTheme.save('styles/retro-lightmode-style.css');
});

frogBtn.addEventListener('click', function() {
  link.href = 'styles/frog-theme-style.css';
  Savers.Theme.save('styles/frog-theme-style.css');
  Savers.InfoTheme.save('styles/info-frog.css');
  Savers.SettingsTheme.save('styles/frog-theme-style.css');
});

tronBtn.addEventListener('click', function() {
  link.href = 'styles/tron-theme-style.css';
  Savers.Theme.save('styles/tron-theme-style.css');
  Savers.InfoTheme.save('styles/info-tron.css');
  Savers.SettingsTheme.save('styles/tron-theme-style.css');
});