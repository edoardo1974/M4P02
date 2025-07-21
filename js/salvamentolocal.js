/**
 * Stores the value "Jose" in localStorage under the key "M4_UD02_P02" if it does not already exist.
 * Logs a success message if the value is stored.
 * If the key already exists, logs an error and shows an alert to the user.
 */
function armazenaNovodado() {
    if (localStorage.getItem("M4_UD02_P02") === null) {
        localStorage.setItem("M4_UD02_P02", "Jose");
        console.log("Dado armazenado com sucesso!");
    }
    else{
        console.error("LocalStorage já contém um valor.");
        alert("O valor já foi armazenado.");
        return; 
    }
}

/**
 * Stores the current timestamp in sessionStorage under the key "Date" if it does not already exist.
 * If the key already exists, logs an error and shows an alert to the user.
 */
function armazenaSegundoDado() {
    if (sessionStorage.getItem("Date") === null) {
        const tempo = new Date().getTime();
        sessionStorage.setItem("Date", tempo);
        console.log("Segundo dado armazenado com sucesso!");
    }
    else{   
        console.error("SessionStorage já contém um valor.");
        alert("O valor já foi armazenado.");
        return;
    }
}

/**
 * Retrieves and displays stored data from localStorage and sessionStorage.
 * - Gets the key "M4_UD02_P02" from localStorage and its associated value.
 * - Gets the key "Date" from sessionStorage and its associated value.
 * - Logs the retrieved data to the console.
 * - Appends the data to the HTML element with id 'output'.
 */
function imprimirDadosArmazenados() {
    const nome = localStorage.key("M4_UD02_P02");
    const dadoLocal = localStorage.getItem(nome);
    const dadoSession = sessionStorage.key("Date");
    const dadoSessionValue = sessionStorage.getItem(dadoSession);
    console.log("Dados armazenados:");
    console.log("LocalStorage:", dadoLocal);
    document.getElementById('output').innerHTML += `LocalStorage -- key: ${nome} value: ${dadoLocal}  <br>`;
    document.getElementById('output').innerHTML += `SessionStorage -- key: ${dadoSession} value: ${dadoSessionValue}<br>`;
}