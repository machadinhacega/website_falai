// IMPLEMENTAÇÃO EM DESENVOLVIMENTO


const handleFormSubmit = event => {
    event.preventDefaut();  

    // Procura a ID formularioContato e pega os dados
    const form = document.getElementById('formularioContato');
    // Cria um novo formData a partir dos dados obtios anteriomente para ter diferentes entradas
    const formData = new FormData(form).entries(); 
    
    // PASSAR OS DADOS PARA O BACK END
    // Solicitação HTTP
    var xmlhttp = new XMLHttpRequest();
    // URL da API contruída para o back end
    var url = "https://<URL_website>/<caminho>";
    // De acordo com a CRUD esta sendo executado um POST. Precisamos especificá-lo porque estamos criando dados novos.
    // CRUD (acrónimo do inglês Create, Read, Update and Delete) são as quatro operações básicas (criação, consulta, atualização e destruição de dados) utilizadas em bases de dados relacionais (RDBMS) fornecidas aos utilizadores do sistema.
    xmlhttp.open("POST", url);
    // O Header aqui faz parte do texto que será enviado para o servidor.
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // Por fim, transformamos os nossos dados em JSON, para que eles sejam recebidos da forma desejada no servidor.
    xmlhttp.send(JSON.stringify(Object.fromEntries(FormData)));
}