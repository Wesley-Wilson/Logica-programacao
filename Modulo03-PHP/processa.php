<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="stylephp.css">
</head>
<body>
    
    <main class="container">
        <h1>Dados Enviados</h1>

        <?php 

            // echo var_dump($_POST["nome"]);

            $nome = $_POST["nome"];
            $sobrenome = $_POST["sobreNome"];
            $email = $_POST["email"];
            $senha = $_POST["senha"];

            echo "<p id='campoNome'><strong>O seu nome é </strong> $nome </p>";
            echo "<p><strong>O seu sobrenome é </sobrenome> $sobrenome </p>";
            echo "<p><strong>O seu email é </sobrenome> $email </p>";
            echo "<p><strong>A sua senha é </sobrenome> $senha </p>";

            //Percorrer dois Arrays Associativos
            $notasArividades = [
                "Caio" => 10,
                "Marcos" => 8,
                "Diego" => 10
            ];

            foreach ($notasAtividades as $nome => $nota) {
                $prova = $notasProvas[$nome];

                echo $nome . " nota " . $nota . "<br>";
                echo $nome . " nota " . $prova . "<br>";
            }


            ?>
    </main>
</body>
</html>


