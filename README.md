# sw-api

Api de consulta de planetas desenvolvida em Node.js (v10) / express utilizando MongoDB como base de dados.<br>
Para iniciar a aplicação, executar comandos:
npm install (para instalar as dependências).
npm start (para iniciar)

OBS: A aplicação requer o MongoDB mapeado na variável de ambiente SWAPI_DB. Caso ela não exista, a aplicação utiliza sua configuração padrão.

<b>API Endponts</b>

<ul>
  <li>Listagem de Planetas<br>
    <p><code>Method GET</code> ./v1/swapi/planetas<br>
      QUERY PARAMETER : nome <br>
      <i>(Permite buscar planetas pelo nome ex: ./v1/swapi/planetas?nome=abc )</i> </p>
  </li>
  <hr>
  <li>Buscar planeta por ID<br>
    <p><code>Method GET</code> ./v1/swapi/planetas/:id<br>
    PATH PARAMETERS : id</p>
  </li>
  <hr>
  <li>Adicionar Planeta <br>
    <p><code>Method POST</code> ./v1/swapi/planetas<br>
    DATA PARAMETERS : nome; clima; terreno<br>
    ex: {
	  "nome" : "valorNome",
	  "terreno" : "valorTerreno",
	  "clima" : "valorClima"
    }</p>
  </li>
  <hr>
  <li>Remover planeta<br>
    <p><code>Method DELETE</code> ./v1/swapi/planetas/:id<br>
    PATH PARAMETERS : id (id do planeta que deverá ser removido)</p>
  </li>
  <hr>
  <li>Atualizar Planeta<br>
    <p><code>Method PUT</code> ./v1/swapi/planetas/:id<br>
    PATH PARAMETERS : id (id do planeta que deverá ser atualizado)<br>
      DATA PARAMETERS : nome; clima; terreno<br>
    ex: {
	  "nome" : "valorNome",
	  "terreno" : "valorTerreno",
	  "clima" : "valorClima"
    }</p>
  </li>
  <hr>
</ul>
