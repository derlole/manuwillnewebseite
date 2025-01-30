function gebId(id) {
    return document.getElementById(id);
}

var i = 0;
const helpCheckbox = document.getElementById('help');
const helpNotCheckbox = document.getElementById('helpnot');
const changeForm = document.getElementById('changeForm');
const peopleCount = document.getElementById('people');

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
            gebId('abmelden').style.marginRight = '0px';
        }else{
            gebId('abmelden').style.marginLeft = '0px';
            gebId('abmelden').style.marginRight = '100px';
        }
        return
    }else{
        window.location.href = "/abmelden";
    }
}



function autoGrow(element) {
    element.style.height = "auto";  // Setzt die Höhe auf "auto", um die Größe zurückzusetzen
    element.style.height = (element.scrollHeight) + "px";  // Setzt die Höhe auf die Höhe des Inhalts
  }

  gebId('submit').addEventListener('click', function() {
    
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