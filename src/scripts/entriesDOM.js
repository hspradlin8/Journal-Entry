// Move the code that is responsible for creating the journal entry HTML component into this file.

import makeJournalEntryComponent from "./entryComponent.js"

const entriesDOM = {

    renderJournalEntries: (entries) => {
        let entryLog = document.querySelector(".entryLog");
        for (let i = 0; i < entries.length; i++) {
            entryLog.innerHTML += makeJournalEntryComponent(entries[i]);
        }
    },

    filterMood: (entries, mood) => { //entries all journal entries from API fetch; mood is coming from the eventlistener 
        let entryLog = document.querySelector(".entryLog");
        entryLog.innerHTML = ""; // setting it to an empty string
        entries.forEach(entry => { // going through all the entries and for each loop there is one entry
            if (entry.moodOfTheDay === mood) { //checking to see if the mood matches the mood selected; if not move to the next mood. 
                entryLog.innerHTML += makeJournalEntryComponent(entry);
            }
        });
    },

    entriesFilter: (entries, concept) => {
        let searchBox = document.querySelector("#searchBox");
        searchBox.innerHTML = "";
        entries.forEach(entry => {
            if (entry.conceptsCovered === concept) {
                searchBox.innerHTML += makeJournalEntryComponent(entry);
            }
        });
    }
}




// recreate the const entriesDOM for the entryComponent
//console.log("component");

export default entriesDOM; 