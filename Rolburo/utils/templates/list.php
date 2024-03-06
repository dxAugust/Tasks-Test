<a href="?">Все товары</a>

<div class="groups">
    <div>
        <ul>
            <?= $groupList ?>
        </ul>
    </div>

    <ul>
        <?php foreach($productsList as $element) { ?>
            <li><?= $element["name"] ?></li>
        <?php } ?>        
    </ul>
</div>