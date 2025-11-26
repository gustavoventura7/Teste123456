/*PARTE DE SCRIPT E LÓGICA DE BUSCA DA API*/
        function consultarCEP(){       
        var cep = document.getElementById("cep").value.replace(/\D/g, '');

        if (cep.length !== 8){
            document.getElementById("resultado").innerHTML = "Digitou com 8 dígitos mesmo???";

            return; //Para e retorna o código para entrada do usuário para ele poder digitar de novo
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`) //faz a requisição do site dos arquivos json
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                document.getElementById("resultado").innerHTML = "Cep não encontrado";
            } else {
                document.getElementById("resultado").innerHTML = `<strong>Entrega disponpivel em:</strong> <br>
                ${data.logradouro}, ${data.bairro}, <br>
                ${data.localidade} - ${data.uf}<br>
                CEP: ${data.cep}`;
            }
        })
        .catch (error => {
        document.getElementById("resultado").innerHTML = "Não foi possível localizar o seu CEP"
        });
    }