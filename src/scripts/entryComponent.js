// Move the code that is responsible for creating the journal entry HTML component into this file.

import makeJournalEntryComponent from "./entriesDOM.js"


const renderJournalEntries = (entries) =>{
    let entryLog = document.querySelector(".entryLog");
    console.log("hey");
    for (let i = 0; i < entries.length; i++){
        console.log("loop of the array", i , entries[i]);
        entryLog.innerHTML += makeJournalEntryComponent(entries[i]);  
    }
}    
console.log("component");

export default renderJournalEntries; 