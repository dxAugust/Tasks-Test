<?php

$stmt = $GLOBALS["dbAdapter"]->stmt_init();

if (isset($_REQUEST["group"]))
{
    $stmt->prepare("SELECT * FROM `groups` WHERE `id_parent` = '0'");
    $stmt->execute();

    $result = $stmt->get_result();
    $rows = $result->fetch_all(MYSQLI_ASSOC);
} else {
    $stmt->prepare("SELECT * FROM `products`");
    $stmt->execute();

    $result = $stmt->get_result();
    $products = $result->fetch_all(MYSQLI_ASSOC);
}

$groupList = [];
$productList = [];

Renderer::includeTemplate("layout.php", [
    "data" => Renderer::getTemplate("list.php", ["list" => $groupList, "products_list" => $products]),
]);