<?php

require("config.php");

/*
*   Я слегка усложнил структуру проекта
*   Сделано не с целью добавить больше избыточности лишнего или же Spaggetti кода
*   Лишь только in case to show my knowledges :)
*/

$router = new Router();
$router->add("/", "pages/productlist.php");