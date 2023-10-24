const markdownUrls = [ //Array com o endereço das políticas no repo.
    "https://raw.githubusercontent.com/ImMarcio/documents-translated/main/Diretrizes%20Antivírus.md",
    "https://raw.githubusercontent.com/ImMarcio/documents-translated/main/Política%20de%20Avaliação%20De%20Riscos.md",
    "https://raw.githubusercontent.com/ImMarcio/documents-translated/main/Política%20de%20Conscientização%20sobre%20Engenharia%20Social.md"];

const referenceID = window.location.href; //Lê o ID passando no endereço para saber qual a política selecionada.

    if (referenceID.includes("pol1")) {
        consumeContent(markdownUrls[0]);
    }
    else if (referenceID.includes("pol2")) {
        consumeContent(markdownUrls[1]);
    }
    else {
        consumeContent(markdownUrls[2]);
    } //Passa para a função de fetch um endereço diferente a depender da política selecionada na página anterior.

function consumeContent(referenceLink) {
    fetch(referenceLink) //Consumindo o arquivo do repo usando a API do GitHub.
    .then((response) => response.text())
    .then((markdown) => {
      document.getElementById("markdown-content").innerHTML = marked(markdown); //Usando a lib Marked para converter o md para html.
    });
}
