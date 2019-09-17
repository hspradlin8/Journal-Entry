// this file is an independent, helper module file.
// only define functionality for how to access the data, 
// but should not immediately run it.

import API from "./data.js"
import entriesDOM from "./entriesDOM.js"

API.getJournalEntries()
    .then(data => {
        entriesDOM.renderJournalEntries(data)
    });

function createJournalEntry() {
    const entryDate = document.querySelector("#journalDate").value;
    const conceptsCovered = document.querySelector("#concepts").value;
    const journalEntryBox = document.querySelector("#journalEntry").value;
    const moodDrop = document.querySelector("#moods").value;
    return {
        "dateOfEntry": entryDate,
        "conceptsCovered": conceptsCovered,
        "moodOfTheDay": moodDrop,
        "entry": journalEntryBox
    };
}


document.querySelector("#recordButton").addEventListener("click", (event) => {
    //validate code .includes method- only takes one thng at a time. Will have to call it multiple times.
    // collect enrty data into object
    // pass object to createEntry function 
    const entryDate = document.querySelector("#journalDate").value;
    const conceptsCovered = document.querySelector("#concepts").value;
    const journalEntryBox = document.querySelector("#journalEntry").value;
    const moodDrop = document.querySelector("#moods").value;
    var re = new RegExp("^([a-z0-9]{5,})$");
    if (entryDate === "" || conceptsCovered === "" || journalEntryBox === "" || moodDrop === "") {
        alert("code is invalid");
        //put validation here://
        //} else if (re.test(entryDate)){ //(entryDate === !letters || conceptsCovered === !letters || journalEntryBox === !letters || moodDrop === !letters){
        alert("code is extermely invalid");
    }
    const newEntry = createJournalEntry();

    API.createEntry(newEntry)
        .then(response => {
            console.log("response", response);
            document.querySelector("#journalDate").value = "";
            document.querySelector("#concepts").value = "";
            document.querySelector("#journalEntry").value = "";
            document.querySelector(".entryLog").innerHTML = "";
            API.getJournalEntries()
                .then(data => {
                    renderJournalEntries(data)
                });
        })

})

const moodArray = document.getElementsByName("drone");


moodArray.forEach(radioButton => {
    radioButton.addEventListener("click", event => {
        const moodName = event.target.value;
        console.log(moodName);
        API.getJournalEntries()
            .then(data => {
                entriesDOM.filterMood(data, moodName);
            });
    })
});

// 1. click on the button
//2. save the button value into a variable
//3. fetch all the entries
//4. filter entries to see if mood matches the variable containing the button value 
//5. then print it to the DOM 

// get container that is holding my delete and edit button 
document.querySelector(".entryLog").addEventListener("click", (event) => {
    if (event.target.id.startsWith("deleteButton--")) {  // if the id starts with deleteButton--
        // clear donut-container before adding new donut
        console.log(event.target.id.split("--")[1]);
        document.querySelector(".entryLog").innerHTML = "";
        // Extract delete button id from button's id attribute
        API.deleteEntry(event.target.id.split("--")[1]) // refers to the deleteEntry from data.js 
            .then(() => {
                //  get all the donuts again
                API.getJournalEntries().then(entry => entriesDOM.renderJournalEntries(entry));
                //entries.forEach(entry => {  // might NOT need this foreach
                //  needs to send donut to DOM
            })
    } else if (event.target.id.startsWith("editButton")) {  //Editing a single Donut 
        editForm(event.target.id.split("--")[1])  // Invoke the editForm function from editForm.js, slpitting the content between -- and passing only the second [1] "element" 
    }
});

// We will create an eventListener for the saveDonut button if you modify a donut

// document.querySelector("#saveDonut").addEventListener("click", (event) => {
//     API.editDonut(document.querySelector("#donutId").value)
//         .then((response => {
//             document.querySelector("#donutName").value = "";
//             document.querySelector("#donut-results").innerHTML = "";
//             API.getDonuts().then((allDonuts) => {
//                 allDonuts.forEach(donut => {
//                     addDonutToDOM(donut)
//                 })
//             })

//         }))
// })

