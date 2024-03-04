<?php

$modules = glob(__DIR__ . '/*.php');
foreach ($modules as $module) {
    require_once($module);
}