
let names = [];
let phoneNumbers = [];
load();
 
function render() {
    document.body.innerHTML = "";
    document.body.innerHTML += `<h1>Kontakte</h1>`;
    document.body.innerHTML += `
    <div class="form">
    <input id="name" type="text" placeholder="Naame"> 
    <input id="phoneNumber" type="text" placeholder="Telefonummer"> 
    <button onclick="addContact()">speichern</button>
    </div>
    `;
    document.body.innerHTML += `<div id="content"></div>
    `
    
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const phoneNumber = phoneNumbers[i];
        document.getElementById("content").innerHTML += `
        <div  id="card" class="card">
            <span>
               <b>Name:</b> ${name}
         </span>
         <span>
             <b>Telefonnummer: </b> ${phoneNumber}
         </span>
         <button onclick="deleteContact(${i})">löschen</button>
        </div>
        `
    }
 }


 function addContact() {
     name = document.getElementById("name").value;
     phoneNumber = document.getElementById("phoneNumber").value;

     if (name && phoneNumber) {
        names.push(name);
        phoneNumbers.push(phoneNumber);
     } else {
         alert("Bitte gib einen Namen und eine Telefonnummer ein")
     }

     save();
     render();
 }


 function deleteContact(i) {
    names.splice( i, 1);
    phoneNumbers.splice(i,1);

    save();
    render();
 }


 function save() {
    let namesAsString = JSON.stringify(names);
    let PhoneNumbersAsString = JSON.stringify(phoneNumbers);

    localStorage.setItem("names", namesAsString);
    localStorage.setItem("phoneNumbers", PhoneNumbersAsString);
 }


 function load(){
    let namesAsString = localStorage.getItem("names");
    let PhoneNumbersAsString = localStorage.getItem("phoneNumbers");

    if (namesAsString && PhoneNumbersAsString) {
        names = JSON.parse(namesAsString);
        phoneNumbers = JSON.parse(PhoneNumbersAsString);
    }
 }
