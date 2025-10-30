<?php

    $servername = "localhost"; // ip ou domínio do server
    $username = "root"; // usuário no banco de dados
    $password = ""; // senha do usuário no banco de dados
    $dbname = "faculdade"; // nome do banco de dados

    // Criar conexão
    $conn = new mysqli($servername, $username, 
    $password ,$dbname);

    // Verificar conexão
    if ($conn->connect_error){
        die("Conexão falhou");
    }
?>