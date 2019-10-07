// this file is an independent, helper module file.
// only define functionality for how to access the data, 
// but should not immediately run it.

import API from "./data.js"
import entriesDOM from "./entriesDOM.js"

API.getJournalEntries()
    .then(data => {
        entriesDOM.renderJournalEntries(data)
    });

function createJournalEntry() {
    const entryDate = document.querySelector("#journalDate").value;
    const conceptsCovered = document.querySelector("#concepts").value;
    const journalEntryBox = document.querySelector("#journalEntry").value;
    const moodDrop = document.querySelector("#moods").value;
    return {
        "dateOfEntry": entryDate,
        "conceptsCovered": conceptsCovered,
        "moodOfTheDay": moodDrop,
        "entry": journalEntryBox
    };
}


let entryId = ""
document.addEventListener("click", (event) => {
    if (event.target.id.startsWith === "recordButton") {

        //validate code .includes method- only takes one thng at a time. Will have to call it multiple times.
        // collect enrty data into object
        // pass object to createEntry function 
        const entryDate = document.querySelector("#journalDate").value;
        const conceptsCovered = document.querySelector("#concepts").value;
        const journalEntryBox = document.querySelector("#journalEntry").value;
        const moodDrop = document.querySelector("#moods").value;
        // var re = new RegExp("^([a-z0-9]{5,})$");
        // if (entryDate === "" || conceptsCovered === "" || journalEntryBox === "" || moodDrop === "") {
        //     alert("code is invalid");
        //     //put validation here://
        //     //} else if (re.test(entryDate)){ //(entryDate === !letters || conceptsCovered === !letters || journalEntryBox === !letters || moodDrop === !letters){
        //     alert("code is extermely invalid");
        // }
        const newEntry = createJournalEntry();

        API.createEntry(newEntry)
            .then(response => {
                console.log("response", response);
                document.querySelector("#journalDate").value = "";
                document.querySelector("#concepts").value = "";
                document.querySelector("#journalEntry").value = "";
                document.querySelector(".entryLog").innerHTML = "";
                API.getJournalEntries()
                    .then(data => {
                        entriesDOM.renderJournalEntries(data)
                    });
            })
    } else if (event.target.id.startsWith("filterMood")) {
        let moody = event.target.value;
        API.getJournalEntries().then(data => {
            entriesDOM.filterMood(data, moody);
        })
    } else if (event.target.id.startsWith("deleteButton--")) {  // if the id starts with deleteButton--

        // 1. click on the button
        //2. save the button value into a variable
        //3. fetch all the entries
        //4. filter entries to see if mood matches the variable containing the button value 
        //5. then print it to the DOM 

        // get container that is holding my delete and edit button 
        // clear entry-container before adding new entry
        console.log(event.target.id.split("--")[1]);
        document.querySelector(".entryLog").innerHTML = "";
        // Extract delete button id from button's id attribute
        API.deleteEntry(event.target.id.split("--")[1]) // refers to the deleteEntry from data.js 
            .then((entry) => {
                console.log(entry)
                document.querySelector(".entryLog").innerHTML = "";
                //  get all the entries again
                API.getJournalEntries()
                    .then(entry => entriesDOM.renderJournalEntries(entry));
                //entries.forEach(entry => {  // might NOT need this foreach
                //  needs to send entries to DOM
            })
    } else if (event.target.id.startsWith("editButton")) {
        //      console.log(editButton);  //Editing a single entry 
        entryId = event.target.id.split("--")[1]
        let entryIdtoEdit = event.target.id.split("--")[1]
        editFormFields(entryIdtoEdit)
        // doc.innerHTML = ""
    } else if (event.target.className === "editRecordButton") {
        saveEditEntry(entryId)
        // Invoke the editForm function from editForm.js, splitting the content between -- and passing only the second [1] "element" 
    }
})
//defining the edit form fields
const editFormFields = entryIdtoEdit => {
    let hiddenId = document.querySelector("#editedEntry")
    let dateInput = document.querySelector("#eJournalDate")
    let moodInput = document.querySelector("#eMood")
    let conceptsInput = document.querySelector("#eConcepts")
    let entryInput = document.querySelector("#eJournalEntry")
    //calling the API and passing through the entries to edit
    API.getSpecificEntry(entryIdtoEdit).then(entry => {
        let entryId = entry.id;
        hiddenId.value = entryId;
        moodInput.value = entry.moodOfTheDay;
        dateInput.value = entry.dateOfEntry;
        conceptsInput.value = entry.conceptsCovered;
        entryInput.value = entry.entry;
    })
}
//saving the entries after they have been edited 
function saveEditEntry(entryId) {
    let dateInput = document.querySelector("#eJournalDate")
    let moodInput = document.querySelector("#eMood")
    let conceptsInput = document.querySelector("#eConcepts")
    let entryInput = document.querySelector("#eJournalEntry")
    let newEntry = {
        dateOfEntry: dateInput.value,
        entry: entryInput.value,
        conceptsCovered: conceptsInput.value,
        moodOfTheDay: moodInput.value
    }
    API.editEntry(entryId, newEntry).then(response => response)
        .then(() => // calling the API and passing through both the entryID and the newEntry- this is what is passed through on the API page as well.
            document.querySelector(".entryLog").innerHTML = "")
        .then(() => //making sure that when the edit button is hit that the current entries do not duplicate on the page.
            API.getJournalEntries()
        ) // calling the journals API and editing the entry.
        .then(data => entriesDOM.renderJournalEntries(data))
    // postingt the new edit version of the entry to the page. 
}

//function to call keypress
//use an eventlistener
//search through the list of arrays of the entries when typing in key words
//will need to use a for loop
//const searchEntries = document.querySelector("#searchEntries")
// function searchEntries() {
//     console.log("search entries", searchEntries);
// }
const searchBox = document.querySelector("#searchBox");
searchBox.addEventListener("keypress", (keyPressEvent) => {
    if (keyPressEvent.charCode === 13) {
        API.getJournalEntries()
            .then(res => res.filter(entry =>
                entry.conceptsCovered.includes(keyPressEvent.target.value)))
            .then(res =>
                entriesDOM.entriesFilter(res)
            )
    }
})

// API.getJournalEntries().then(res 
//     => res.filter(entry => 
//         entry.concepts.includes(keyPressEvent.target.value))).then(res 
//             =>
//     entriesDOM.conceptFilter(res)


// make new obj, then pull obj from that API

// Editing entries: 
// 1.Add edit button to journal entry- added it to data.js 
// 2.Add hidden input field to form to store id value of edited entry- added it to entryComponent.js 
// 3.Add event listener to button. Give unique id which includes id property of entry
// 4.When clicked, get the individual entry and populate the form fields with text content.
// 5.When user clicks the save button, determine if editing or creating (does hidden input field have a value?)
// 6.If editing, perform a PUT request to the API
// 7.Get all entries and display again

