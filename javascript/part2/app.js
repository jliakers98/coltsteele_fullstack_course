let command = prompt("Enter command:")
const listArray = []

while (command !== "quit") {
    if (command === "new") {
        let newEntry = prompt("Entry? :")
        listArray.push(newEntry)
        console.log(`"${newEntry}" added to list.`)
    }
    if (command === "list") {
        console.log("********")
        let tally = 0
        for (i of listArray) {
            tally++
            console.log(`${tally}: ${i}`)
        }
        console.log("********")
    }
    if (command === "del") {
        let newDel = parseInt(prompt("Entry to delete? :"));
        if (listArray[newDel - 1]) {
            console.log(`Deleted "${listArray[newDel - 1]}"`)
            listArray.splice(newDel - 1, 1)
        }
        else {
            console.log("Invalid selection")
        }
    }
    command = prompt("Enter command:")
}

console.log("You quit.")