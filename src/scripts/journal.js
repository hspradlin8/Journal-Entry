
console.log("Hey");
const journalEntries = []

journalEntries.push({
    dateOfEntry: "August 19th",
    conceptsCovered: "no class-lab day",
    moodOfTheDay: "euphoric",
    entry: "worked on the daily journal page with css. I also added css to the govtrack page.",
})

journalEntries.push({
    dateOfEntry: "August 20th",
    conceptsCovered: "C33 Demo Day",
    moodOfTheDay: "peaceful",
    entry: "We watched C33 Demos. That afternoon we were split into group and started on group projects.",
})

journalEntries.push({
    dateOfEntry: "August 21st",
    conceptsCovered: "Group Project",
    moodOfTheDay: "Pumped",
    entry: "We worked on our group project and decided how to layout our webpage. We picked an artist that we wanted to make a tribute page for.",
})

console.log("journalEntries", journalEntries);


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
    for (let i = 0; i < journalEntries.length; i++){
        console.log("loop of the array", i , journalEntries[i]);
        entryLog.innerHTML += makeJournalEntryComponent(journalEntries[i]);  
    }
}    

renderJournalEntries(journalEntries);
// example of Array Iteration
// var txt = "";
// var numbers = [45, 4, 9, 16, 25];
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//   txt = txt + value + "<br>"; 
// }