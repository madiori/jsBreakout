<?php 
session_start();

if ($_SESSION['name'] == null){
    header('Location: index.php');
}


?>
<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Let's play!!!</title>
    <link rel="stylesheet" href="css/style.css" type="text/css" />
</head>
<body>
    
    <h1>Welcome to my game <?= $_SESSION['name'] ?>!!!</h1>
    
    <canvas id="hud" width=800 height=600></canvas>
    <canvas id="barreBalle" width=800 height=600></canvas>
    <canvas id="briques" width=800 height=600></canvas>
    
    <script type="text/javascript" src="js/casseBrique.js"></script>
    <script type="text/javascript" src="js/stages.js"></script>
    <script type="text/javascript" src="js/Briques.js"></script>
    <script type="text/javascript" src="js/Barre.js"></script>
    <script type="text/javascript" src="js/Balle.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
</body>
</html>