<!DOCTYPE html>
<html lang="ru">
<head>
    <?php
    Renderer::includeTemplate("head.php");
    ?>
</head>
<body>
    
    <?php
    print($data);
    ?>

    <?php
    Renderer::includeTemplate("footer.php");
    ?>
</body>
</html>