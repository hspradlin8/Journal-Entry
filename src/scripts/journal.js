const makeJournalEntryComponent = (entry) =>{
    // Create your own HTML structure for a journal entry
    return `
    <div>
        <h2>${entry.dateOfEntry}</h2>
        <p>${entry.conceptsCovered}</p>
        <p>${entry.moodOfTheDay}</p>
        <p>${entry.entry}</p>
    </div>
    `
}

const entryLog = document.querySelector(".entryLog");

const renderJournalEntries = (entries) =>{
    console.log("hey");
    for (let i = 0; i < entries.length; i++){
        console.log("loop of the array", i , entries[i]);
        entryLog.innerHTML += makeJournalEntryComponent(entries[i]);  
    }
}    

fetch("http://localhost:3000/entries") 
    .then(entries => entries.json())  
    .then(parsedEntries => {       
        console.log(parsedEntries);
        renderJournalEntries(parsedEntries);
    });
