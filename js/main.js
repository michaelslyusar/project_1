
function pageLoad() {
    const data = document.getElementById('data');
    const date = document.getElementById('date');
    const time = document.getElementById('time');

    const dataError = document.getElementById('dataError');
    const dateError = document.getElementById('dateError');
    console.log("Loaded");
}

function isValid() {
    console.log("started validation");
    // const data = document.getElementById('data');
    // const date = document.getElementById('date');
    // const time = document.getElementById('time');

    data.style.border = "";
    date.style.border = "";
    dataError.innerText = "";
    dateError.innerText = "";


    if (!data.value || !date.value) {
        if (!data.value) {
            data.style.border = "red solid 2px";
            dataError.innerText = "Mendatory field";
        }
        if (!date.value) {
            date.style.border = "red solid 2px";
            dateError.innerText = "Mendatory field";
        }
        return false;
    }

    return true;
}

function addNote() {
    console.log("addNote");

    //Checking form validation
    if (!isValid()) {
        console.log("failed validation!");
        return false;
    }

    const note = {
        note: data.value,
        date: date.value,
        time: time.value
    };

    insertToLocalStorage(note);
}

function removeNote() {

}

function insertToLocalStorage(note) {
    const notes = [];

    notes.push(note);

    //Check if there are notes already in local storage
    if (localStorage.getItem('notes')) {
        const notesInLocalStorage = JSON.parse(localStorage.getItem('notes'));
        notes.push(...notesInLocalStorage);
    }
    
    //Insert notes to local storage
    localStorage.setItem("notes", JSON.stringify(notes));
}

function removeFromLocalStorage(note){

}

function loadNotes() {

}

function clearForm(){

}



{/* <i class="bi bi-x-circle"></i>
<i class="bi bi-x-circle-fill"></i> 


<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
*/}