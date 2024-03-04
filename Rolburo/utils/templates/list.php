<a href="?">Все товары</a>

<div class="">
    <ul>
        <?php foreach($products_list as $element) { ?>
            <li><a href="<?= $element["id_parent"] ?>"><?= $element["name"] ?></a></li>
        <?php } ?>
    </ul>

    <ul>
        <?php foreach($products_list as $element) { ?>
            <li><a href="<?= $element["id_parent"] ?>"><?= $element["name"] ?></a></li>
        <?php } ?>        
    </ul>
</div>

