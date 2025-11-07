<?php


// Percorrer o array
$nomes = ["Caio","Marcos","Diego"];

foreach($nomes as $nome) {
    echo $nome . "<br>";
}

// Percorrer o array associativo
$notasAtividades = [
        "Caio" => 10,
        "Marcos" => 8,
        "Diego" => 9
];

foreach($notasAtividades as $nome => $nota) {
    echo $nome . " nota " . $nota . "<br>";
}

// Percorrer dois arrays associativos
$notasAtividades = [
    "Caio" => 10,
    "Marcos" => 8,
    "Diego" => 9
];

$notasProvas = [
        "Caio" => 10,
        "Marcos" => 8,
        "Diego" => 9
];

foreach($notasAtividades as $nome => $nota) {
echo $nome . " nota " . $nota . "<br>";
}

?>