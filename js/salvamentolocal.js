function armazenaNovodado() {
    localStorage.setItem("M4_UD02_P02", "Jose");
    console.log("Dado armazenado com sucesso!");
}

function armazenaSegundoDado() {
    const tempo = new Date().getTime();
    sessionStorage.setItem("Date", tempo);
    console.log("Segundo dado armazenado com sucesso!");
}

function imprimirDadosArmazenados() {
    const dadoLocal = localStorage.getItem("M4_UD02_P02");
    const dadoSession = sessionStorage.getItem("Date");
    console.log("Dados armazenados:");
    console.log("LocalStorage:", dadoLocal);
    console.log("SessionStorage:", dadoSession);
}