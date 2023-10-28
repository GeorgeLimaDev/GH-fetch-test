# Serviço para disponibilizar os documentos traduzidos
O código neste repositório serve para exibir no front-end os arquivos obtidos diretamente do [repositório de documentos traduzidos](https://github.com/GeorgeLimaDev/Documentos_traduzidos). Dessa forma os demais times podem utilizar os arquivos traduzidos independente do estado em que estejam, uma vez que o consumo irá sempre acompanhar a versão atualizada disponível no repositório. Abaixo segue uma breve explicação de como o código funciona.

## Fluxo do código:
- O código conta com uma estrutura HTML básica para listagem e exibição dos documentos disponíveis.
- O primeiro código javaScript gera dinamicamente a lista de arquivos disponíveis de acordo com o arquivo json.
- O segundo código javaScript faz o consumo dos arquivos utilizando a **api do GitHub**, e na sequência utiliza a **biblioteca marked** para converter o conteúdo de markdown para HTML, que é então exibido na tela.

## Disponibilidades para as demais equipes:
**- Front-end:** Pode utilizar o código para exibir a lista de arquivos para os usuários. É necessário aplicar estilização css.

**- Back-end:** Pode utilizar o código como um substituto para um banco de dados. É necessário aplicar as regras de negócio adequadas.
