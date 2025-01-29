function gebId(id) {
    return document.getElementById(id);
}

var i = 0;
const helpCheckbox = document.getElementById('help');
const helpNotCheckbox = document.getElementById('helpnot');
const disorderAll = document.getElementById('all');
const disorderVeget = document.getElementById('veget');
const disorderVegan = document.getElementById('vegan');
const disorderAlerg = document.getElementById('alerg');
const disorderSpezi = document.getElementById('spezi');
const peopleCount = document.getElementById('people');
const changeForm = document.getElementById('changeForm');

helpCheckbox.addEventListener('change', function() {
    if (helpCheckbox.checked) {
        gebId('helpnot').checked = false;
        gebId('telnum').required = true;
        telnum.style.display = 'block';
        console.log(document.getElementById('telnum').require);
    } else {
        gebId('telnum').required = false
        gebId('helpnot').checked = true;
        
    }
});
helpNotCheckbox.addEventListener('change', function() {
    if (helpNotCheckbox.checked) {
        gebId('help').checked = false;
        gebId('telnum').required = false;
        telnum.style.display = 'none';
    } else {
        gebId('telnum').required = true
        gebId('helpnot').checked = false;
    }
});
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
peopleCount.addEventListener('input', function() {
    gebId('peopleinfo1').style.display = 'none';
    gebId('peopleinfo2').style.display = 'none';
    gebId('peopleinfo3').style.display = 'none';
    gebId('peopleinfo4').style.display = 'none';
    gebId('tooMuchPeople').style.display = 'none';
    var num = Number(peopleCount.value)
    switch (num) {
        case 4:
            gebId('peopleinfo4').style.display = 'block';
        case 3:
            gebId('peopleinfo3').style.display = 'block';
        case 2:
            gebId('peopleinfo2').style.display = 'block';
        case 1:
            gebId('peopleinfo1').style.display = 'block';
            break;
        case 0:
            break;
        default:
            gebId('tooMuchPeople').style.display = 'block';
    }
});
function redirectAndmelden() {
    window.location.href = "/";
}
function redirectUmmelden() {
    window.location.href = "/ummelden";
}
function redirectAbmelden() {
    i++
    if(i < 4){
        if(i%2 == 1){
            gebId('abmelden').style.marginLeft = '100px';
        }else{
            gebId('abmelden').style.marginLeft = '0px';
        }
        return
    }else{
        window.location.href = "/abmelden";
    }
}

function formVisibility(){
    gebId('changeForm').style.display = 'flex';
}

function autoGrow(element) {
    element.style.height = "auto";  // Setzt die Höhe auf "auto", um die Größe zurückzusetzen
    element.style.height = (element.scrollHeight) + "px";  // Setzt die Höhe auf die Höhe des Inhalts
  }

  gebId('submit').addEventListener('click', function() {
    
  });
  
  document.getElementById("mainForm").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Verhindert das Absenden mit Enter
    }
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    var urlParams = new URLSearchParams(window.location.search);
    var message = urlParams.get("message"); // Holen des Parameters 'message'

    if (message) {
        gebId('message').innerHTML = decodeURIComponent(message); // Falls vorhanden, anzeigen
    

    const patrick = document.getElementById('patrick');
    
    setTimeout(function() {
      patrick.src = '/img/mid1.png'; 
    }, 80+400);
  
    setTimeout(function() {
      patrick.src = '/img/mid2.png'; 
    }, 160+400);
  
    setTimeout(function() {
      patrick.src = '/img/todo_bem.png';
    }, 240+400);
}
});

function updateCountdown() {
    const timeDifference = new Date("2025-08-28T14:00:00") - new Date();

    const days = Math.floor(timeDifference / (1000 * 3600 * 24));
    const hours = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600));
    const minutes = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        days + " Tage " + hours + " Stunden " + minutes + " Minuten " + seconds + " Sekunden ";
}
const interval = setInterval(updateCountdown, 1000);
updateCountdown();