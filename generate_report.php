<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Rapport Médical Généré</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php
    $nom = $_POST['nom'];
    $date = $_POST['date'];
    $medecin = $_POST['medecin'];
    $remarques = $_POST['remarques'];
    
    // Génération du rapport médical
    $rapport = "
    <center>
    <div class='rapport'>
    <h1>Rapport Médical</h1>
    <img src='logo.png' class='logo' alt='Image Médicale'><img src='lspd.png' class='lspd' alt='Image Médicale'>
    <p class='texte'>Je soussigné <strong>Dr $medecin</strong>, médecin de l'hopital EMS Sud, certifie avoir examiné physiquement et psycologiquement <strong>M. $nom</strong>, dans le cadre d'un rendez vous préalablement prévu par la <strong>LSPD</strong>.</p>
    <p>Son état de santé a résulté d'une aptitude complète aux tests prévus.</p>
    <p><strong>Remarques:</strong> $remarques</p>
    <p><strong>Date du rapport:</strong> $date</p>
    <p class='signature'>$medecin</p>
    </div>
    </center>
    ";

    echo $rapport;
    ?>
</body>
</html>
