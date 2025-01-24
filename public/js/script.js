function gebId(id) {
    return document.getElementById(id);
}

const helpCheckbox = document.getElementById('help');
const helpNotCheckbox = document.getElementById('helpnot');
const disorderAll = document.getElementById('all');
const disorderVeget = document.getElementById('veget');
const disorderVegan = document.getElementById('vegan');
const disorderAlerg = document.getElementById('alerg');
const disorderSpezi = document.getElementById('spezi');
const peopleCount = document.getElementById('people');

helpCheckbox.addEventListener('change', function() {
    if (helpCheckbox.checked) {
        gebId('helpnot').checked = false;
        gebId('telnum').required = true;
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
peopleCount.addEventListener('change', function() {
    gebId('peopleinfo1').style.display = 'none';
    gebId('peopleinfo2').style.display = 'none';
    gebId('peopleinfo3').style.display = 'none';
    gebId('peopleinfo4').style.display = 'none';

    switch (peopleCount.value) {
        case '4':
            gebId('peopleinfo4').style.display = 'block';
        case '3':
            gebId('peopleinfo3').style.display = 'block';
        case '2':
            gebId('peopleinfo2').style.display = 'block';
        case '1':
            gebId('peopleinfo1').style.display = 'block';
    }
});
function redirectAndmelden() {
    window.location.href = "/";
}
function redirectUmmelden() {
    window.location.href = "/ummelden";
}
function redirectAbmelden() {
    window.location.href = "/abmelden";
}
