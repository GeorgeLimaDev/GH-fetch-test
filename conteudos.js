function carregarArquivos() {
    fetch('./arquivos.json')
        .then(response => response.json()) //Carrega arquivos.json para poder iterar sobre ele.
        .then(data => {
            const urlParams = new URLSearchParams(window.location.search); //Obtem o link da página atual para saber qual o id passado nela.
            const id = urlParams.get("id"); //Separa do link apenas o id da página.

            if (!id) {
                console.error('Nenhum ID foi especificado na URL.');
                return;
            }

            const arquivoCorrespondente = data.find(arquivo => arquivo.Link === id); //Localiza no json o arquivo correspondente ao passado no link da página.

            if (arquivoCorrespondente) {
                fetch(arquivoCorrespondente.Link) //Usa a API do GitHub para consumir o arquivo do repo.
                    .then(response => response.text())
                    .then(markdown => {
                        document.getElementById("markdown-content").innerHTML = marked(markdown); // Usa a lib Marked para converter o Markdown em HTML.
                    })
                    .catch(error => {
                        console.error('Erro ao carregar o arquivo do GitHub: ' + error);
                    });
            } else {
                console.error('Nenhum arquivo correspondente encontrado para o ID especificado.');
            }
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo JSON: ' + error);
        });
}

carregarArquivos();
