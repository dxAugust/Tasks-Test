<?php

require("utils/includes.php");

/* Просто смените константы на свои */
define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASS", "");
define("DB_NAME", "server");

define("PROJECT_NAME", "Test Task");

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

/* Подготовка адаптера */
$GLOBALS["dbAdapter"] = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);