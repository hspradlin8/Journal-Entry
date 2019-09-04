// this file is an independent, helper module file.
// only define functionality for how to access the data, 
// but should not immediately run it.



API.getJournalEntries()
    .then(taco => {
     renderJournalEntries(taco)
    });
   
   