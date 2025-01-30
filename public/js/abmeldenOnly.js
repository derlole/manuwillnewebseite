const beSureWord = "APFELSTRUDEL";
let guestDB_id = null;
async function abmelden(){
    let inputValue = document.getElementById("beSure").value.trim().toUpperCase();
        if (inputValue === beSureWord && guestDB_id != null) {
            await fetch('/deleteEntryFinal', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ guestDB_id })
            });
            var peopleGes = 1;
            var dataGuests = JSON.parse(document.getElementById('randomDiv'));
            var worked = "Anmeldung erfolgreich revidiert";

            dataGuests.forEach(mitbringsel =>{ 
                peopleGes += mitbringsel.people
            })
            gebId('minusGuests').textContent = "- " + peopleGes;
            gebId('rueckmeldungAbmeldung').textContent = worked;

            gebId('comment').style.display = 'block';
            setTimeout(function() {
                gebId('comment').style.display = 'display';
            }, 200);
            
        } else {
            var err = "Etwas hat nicht geklappt. Versuche es erneut";
            gebId('rueckmeldungAbmeldung').textContent = err;
        }
    
}

function showAbmeldenBody(){
    gebId('abmeldenBody').style.display = 'flex';
    var placeholder = beSureWord + " hier";
    var anweisung = "Wenn du dich wirklich abmelden willst, gib das Wort >" + beSureWord + "< hier ein.";
    gebId('beSureAnweisung').textContent = anweisung;
    gebId('beSure').setAttribute("placeholder", placeholder);
}

document.addEventListener("DOMContentLoaded", function() {
    var suc = JSON.parse(document.getElementById('nonrandomDiv').textContent);
    console.log(suc);
    if(suc != ''){
        console.log('success'); 
        showAbmeldenBody();
        guestDB_id = suc;

    }
});

