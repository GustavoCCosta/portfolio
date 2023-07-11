const email_form = document.getElementById("email_form");
const debug = false;

/**
 * Return the list from LocalStorage with idInput id.
 * 
 * @param {string} idInput - ID of the list in LocalStorage
 * @returns {string} Return the list with id idInput from localStorage
 */
const retrieveJsonList = (idInput) => {
    return JSON.parse(localStorage.getItem(idInput)) ?? [];
}


/**
 * Save the listInput as Json in LocalStorage
 * 
 * @param {string} id - ID of list in LocalStorage
 * @param {string} listInput - List to save in LocalStorage ID
*/
const saveJsonList = (id, listInput) => {
    localStorage.setItem(id, JSON.stringify(listInput));
}

const retrieveJsonMap = (mapkey) => {
    return new Map(JSON.parse(localStorage.getItem(mapkey)));
}

const psJsonMap = (mapList, mapkey, idInput, msgInput) => {
    // Add new msg to the map
    try {
        mapList.get(idInput).push(msgInput);
        console.log("GET");
    } catch {
        mapList.set(idInput, [msgInput]);
        console.log("SET");
    }

    // Saves map with JSON format in LocalStorage
    localStorage.setItem(mapkey, JSON.stringify(Array.from(mapList.entries())));
}

email_form.addEventListener("submit", (e) => {
    //Não permite o comportamento padrão do evendo submit
    e.preventDefault();

    let idInput = document.getElementById("email").value.toLowerCase();
    let msgInput = document.getElementById("mensagem").value;
    let kvInput = [idInput, msgInput]
    let key = "chat"
    let mapkey = "map"

    //Retrieves List of localStorage with id
    //let msgList = retrieveJsonList(key);
    //Add new email to the list
    //msgList.push(kvInput);
    //Saves List with JSON format in LocalStorage
    //saveJsonList(key, msgList);
    
    // Retrieves the map
    let mapList = retrieveJsonMap(mapkey);
    // Push new msg and save the map as JSON in LocalStorage
    psJsonMap(mapList, mapkey, idInput, msgInput);
    
    //Debug Print mapList
    if (debug) {
        console.log(mapList);
    }
    
    //reset forms
    email_form.reset();
})