
const disorderAll = document.getElementById('all');
const disorderVeget = document.getElementById('veget');
const disorderVegan = document.getElementById('vegan');
const disorderAlerg = document.getElementById('alerg');
const disorderSpezi = document.getElementById('spezi');


disorderAll.addEventListener('change', function() {
    if (disorderAll.checked) {
        gebId('veget').checked = false;
        gebId('vegan').checked = false;
        gebId('alerg').checked = false;
        gebId('spezi').checked = false;
    }
});
disorderVeget.addEventListener('change', function() {
    if (disorderVeget.checked) {
        gebId('all').checked = false;
    }
});
disorderVegan.addEventListener('change', function() {
    if (disorderVegan.checked) {
        gebId('all').checked = false;
    }
});
disorderAlerg.addEventListener('change', function() {
    if (disorderAlerg.checked) {
        gebId('all').checked = false;
    }
});
disorderSpezi.addEventListener('change', function() {
    if (disorderSpezi.checked) {
        gebId('all').checked = false;
    }
});

document.getElementById("mainForm").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Verhindert das Absenden mit Enter
    }
  });
  function updateCountdown() {
    const timeDifference = new Date("2025-08-28T15:00:00") - new Date();

    const days = Math.floor(timeDifference / (1000 * 3600 * 24));
    const hours = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600));
    const minutes = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("daysAnzeige").innerHTML=days;
    document.getElementById("hoursAnzeige").innerHTML=hours;
    document.getElementById("minAnzeige").innerHTML=minutes;
    document.getElementById("secAnzeige").innerHTML=seconds;
    /*document.getElementById("countdown").innerHTML = 
        days + " Tage " + hours + " Stunden " + minutes + " Minuten " + seconds + " Sekunden ";*/
}
const interval = setInterval(updateCountdown, 1000);
updateCountdown();