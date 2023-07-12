var msgBox = document.getElementById("msg_box");
const clrMsg = document.getElementById("clr_Msg");
var listItem = document.createElement("div");
listItem.classList.add("list-item");
const mapkey = "map"

const retrieveJsonMap = (mapkey) => {
    return new Map(JSON.parse(localStorage.getItem(mapkey)));
}

const showEmails = () => {
    let mapList = retrieveJsonMap(mapkey);
    msgBox.innerHTML = '';
    if (mapList.size == 0) {
        let pinItem = document.createElement("p");
        pinItem.classList.add("fs-2");
        pinItem.innerText = "Nenhuma Mensagem";
        msgBox.appendChild(pinItem);
    } else {
        mapList.forEach((valor, chave) => {
            let pinItem = document.createElement("p");
            pinItem.classList.add("fs-2");
            pinItem.innerText = "De " + chave;
            listItem.appendChild(pinItem);
            let divinItem = document.createElement("div");
            divinItem.classList.add("fs-4");
            valor.forEach(element => {
                let divpinItem = document.createElement("p");
                divpinItem.innerText = element;
                divinItem.appendChild(divpinItem);
                listItem.appendChild(divinItem);
            });
        });
        msgBox.appendChild(listItem);
    }
}

showEmails();

clrMsg.addEventListener("click", () => {
    localStorage.removeItem(mapkey);
    alert("Mensagens apagadas!");
    showEmails();
});