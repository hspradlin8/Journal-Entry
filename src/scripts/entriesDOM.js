//Move the code that is responsible for modifying the DOM into this file.

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
console.log("dom");


export default makeJournalEntryComponent;