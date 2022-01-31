<?php

$servidor = "localhost";
$usuario = "root";
$senha = "";
$baseDados = "agrispar.ao";

$conn = mysqli_connect($servidor, $usuario, $senha, $baseDados) or die("Falha ao conectar se ao servidor");
$banco = mysqli_select_db($conn,$baseDados) or die("Falha interna, retomamos brevemente");
?>