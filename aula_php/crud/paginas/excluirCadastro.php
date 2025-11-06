if ($stmt) {
    $stmt->bind_param("i", $id);
    // Executa a query
    $stmt->executa();
    header("Location: verificarUsuario.php");
    // Encerra a consulta
    $stmt->close();
}

