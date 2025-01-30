function gebId(id) {
    return document.getElementById(id);
}
function formVisibility(){
    gebId('changeForm').style.display = 'flex';
    gebId('changeLogin').style.display = 'none';
    gebId('patrickChange').classList.add('patrickChange');
}

document.addEventListener("DOMContentLoaded", function() {
    //console.log(gebId('guestData').innerText, gebId('guestData').textContent);
    const guestData = JSON.parse(gebId('guestData').textContent);
    const time = new Date(guestData.arrival);
    if(gebId('guestData').innerText == ''){
        return
    }
    formVisibility();
    console.log(guestData);
    if(guestData.help[0]){
        gebId('help').checked = true;
        gebId('helpnot').checked = false;
        gebId('telnum').style.display = 'block';
    }
    if(guestData.parking){
        gebId('parkplatz').checked = true;
    }
    if(guestData.schlafplatz){
        gebId('schlafplatz').checked = true;
    }
    gebId('people').value = guestData.people;
    if(guestData.people != 0){
        for(let i = 0; i < guestData.people; i++){
            gebId(`peopleinfo${i+1}`).style.display = 'block';
            gebId(`peopleinfo${i+1}`).value = guestData.peopleinfo[i];
        }
    }
    gebId('guestDB_id').value = guestData.id;
    gebId('telnum').value = guestData.telnum;
    gebId('arrival').value = `${time.getHours().toString().padStart(2, "0")}:${time.getMinutes().toString().padStart(2, "0")}`;
    gebId('text').value = guestData.message;
    gebId('changeForm').addEventListener('keydown', function(event){
        if(event.key == 'Enter'){
            event.preventDefault();
        }

    });
});