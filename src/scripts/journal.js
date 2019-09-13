// this file is an independent, helper module file.
// only define functionality for how to access the data, 
// but should not immediately run it.

import API from "./data.js"
import renderJournalEntries from "./entryComponent.js"

API.getJournalEntries()
    .then(taco => {
        renderJournalEntries(taco)
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


document.querySelector("#recordButton").addEventListener("click", (event) => {
    // collect enrty data into object
    // pass object to createEntry function 

    const newEntry = createJournalEntry();

    API.createEntry(newEntry)
        .then(response => {
            console.log("response", response);
            document.querySelector("#journalDate").value = "";
            document.querySelector("#concepts").value = "";
            document.querySelector("#journalEntry").value = "";
            document.querySelector(".entryLog").innerHTML = "";
            API.getJournalEntries()
                .then(taco => {
                    renderJournalEntries(taco)
                });
        })

})

