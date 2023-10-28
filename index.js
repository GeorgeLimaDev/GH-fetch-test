function carregarListaDeArquivos() {
    fetch('./arquivos.json') //Carrega os dados de arquivos.json
        .then(response => response.json())
        .then(data => {
            const ul = document.getElementById('arquivos-list');

            data.forEach(arquivo => { //Cria dinamicamente um li com link para cada um dos objetos lidos do json.
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.textContent = arquivo.Nome;
                a.href = "conteudos.html" + '?id=' + encodeURIComponent(arquivo.Link); //Define como destino do link a página interna + o link do objeto lido como id, para a página interna saber qual arquivo deve ser injetado nela a partir do id passado no link.
                li.appendChild(a);
                ul.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo JSON: ' + error);
        });
}

carregarListaDeArquivos();
