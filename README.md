# customForm

Esta aplicação realiza chamadas a uma api que retorna dados de escolas dos Estados Unidos, e mostra um crud simples sobre essas escolas.

Inicialmente o usuário é direcionado a uma lista de escolas do estado da Califórnia retornado pela API já citada. Ao clicar em uma destas escolas o usuário é direcionado a uma tela de edição criado apartir de um formulário dinâmico e com validação. Após a edição ao salvar a escola uma API da própria aplicação é chamado para incluir ou atualizar a escola na coleção Schools.

Para executar localmente esta aplicação é necessário a instalação prévia do **Meteor**.
 
 Para executar o codigo para desenvolvimento basta acessar a pasta do projeto e executar o comando:
 
 **_`meteor`_**
 
 
 Na primeira execução pode será necessário que seja executado o comando: 
 
 **_`meteor npm install`_**
 
 
 É possível se conectar ao banco **Mongodb** da aplicação utilizando qualquer shell ou cliente através da seguinte string de conexão:
 
 **_`mongodb://localhost:3001`_**
