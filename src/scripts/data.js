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
    }    
}


export default API;



