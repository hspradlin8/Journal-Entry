//  Move the code that deals with getting the data into this file.

//data manager 

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
    },
    createEntry (newEntry) {
        //console.log(newEntry);
        return fetch(`http://localhost:3000/entries`, {
            method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEntry)
        }).then(response => response.json())
    }, // deletes journal entry 
    deleteEntry: (id) => {
        return fetch(`http://localhost:3000/entries/${id}`, {
            method: "DELETE"
        }).then(response => response.json())
    }, 
    editEntry: (id) => {
        return fetch(`http://localhost:3000/entries/${id}`, {
            method: "EDIT"
        }).then(response => response.json())
    }, 
    getSpecificEntry: (id) => {
        console.log();
        return fetch(`http://localhost:3000/entries${id}`)
            .then(response => response.json())
    },  
}


export default API;


//fetch - edit and delete (one of each)
//create button event listener
//call the API in journal.js- same as the save

