//Move the code that is responsible for modifying the DOM into this file.

const makeJournalEntryComponent = (entry) =>{
    // Create your own HTML structure for a journal entry
    return `
    <div>
        <h2>${entry.dateOfEntry}</h2>
        <p>${entry.conceptsCovered}</p>
        <p>${entry.moodOfTheDay}</p>
        <p>${entry.entry}</p>
        <button type="button" id="editButton--${entry.id}">Edit</button>
        <button type="button" id="deleteButton--${entry.id}">Delete</button>
        <input type="hidden" id="editedEntry" value="">
    </div>
    `
}
//console.log("dom");


export default makeJournalEntryComponent;



