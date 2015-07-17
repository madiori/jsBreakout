<!doctype html>
<php session_start() ?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mon jeu</title>
    <link rel="stylesheet" href="css/style.css" type="text/css" />
</head>
<body>
    <form method="POST" action="php/action.php">
        <fieldset>
            <label for="name">Enter your name:</label>
            <input type="text" name="name" placeholder="your name..."/>
            <input type="submit" value="SUBMIT"/>
        </fieldset>
    </form>
</body>
</html>