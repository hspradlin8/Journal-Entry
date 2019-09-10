// this file is an independent, helper module file.
// only define functionality for how to access the data, 
// but should not immediately run it.

import API from "./data.js"
import renderJournalEntries from "./entryComponent.js"

API.getJournalEntries()
    .then(taco => {
     renderJournalEntries(taco)
    });
   
   