//  Move the code that deals with getting the data into this file.

// fetch("http://localhost:3000/entries") 
//     .then(entries => entries.json())  
//     .then(parsedEntries => {       
//         console.log(parsedEntries);
//         renderJournalEntries(parsedEntries);
//     });
//     console.log("data");


const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    }
}
console.log("Hey");