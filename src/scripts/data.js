//  Move the code that deals with getting the data into this file.

//data manager 

// fetch("http://localhost:3000/entries") 
//     .then(entries => entries.json())  
//     .then(parsedEntries => {       
//         console.log(parsedEntries);
//         renderJournalEntries(parsedEntries);
//     });
//     console.log("data");
let url = "http://localhost:3000/entries";

const API = {
    getJournalEntries() {
        return fetch(url)
            .then(response => response.json())
    },
    createEntry(newEntry) {
        //console.log(newEntry);
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        }).then(response => response.json())
    }, // deletes journal entry 
    deleteEntry: (id) => {
        return fetch(`${url}/${id}`, {
            method: "DELETE",
        }).then(response => response.json())
        .then(entry => console.log(entry))
    },
    editEntry: (id) => {
        return fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        }).then(response => response.json())
    },
    getSpecificEntry: (id) => {
        console.log();
        return fetch(`${url}/${id}`)
            .then(response => response.json())
    },
}


export default API;


//fetch - edit and delete (one of each)
//create button event listener
//call the API in journal.js- same as the save

