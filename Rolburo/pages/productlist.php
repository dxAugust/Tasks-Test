<?php
$stmt = $GLOBALS["dbAdapter"]->stmt_init();

function getTree($dataset) {
    $tree = array();

    foreach ($dataset as $id => &$node) {
        if (!$node['id_parent']){
            $tree[$id] = &$node;
        }else{
            if ($node['id'] != intval($_REQUEST["group"]) &&
                $node['id_parent'] == intval($_REQUEST["group"]) ||
                $node['id'] == intval($_REQUEST["group"]) &&
                $node['id_parent'] != intval($_REQUEST["group"]))
            {
                $dataset[$node['id_parent']]['childs'][$id] = &$node;
            } 
        }
    }

    return $tree;
}

function tplMenu($category, $current = false){
    if ($current)
    {
        $color = "color: #00b50e";
    }
    
    $menu = '<li><a style="' . $color . '" href="?group=' . $category['id'] . '" title="' . $category['name'] . '">' . $category['name'] . '</a>';
    if(isset($category['childs'])) {
        $menu .= '<ul>'. showGroups($category['childs']) .'</ul>';
    }
    $menu .= '</li>';
    
    return $menu;
}

function showGroups($data){
    $string = '';
    foreach($data as $item) {
        if ($item["id"] == intval($_REQUEST["group"]))
        {
            $string .= tplMenu($item, true);
        } else {
            $string .= tplMenu($item);
        }
    }
    return $string;
}

if (isset($_REQUEST["group"]) && intval($_REQUEST["group"]) > 0)
{
    $query = "SELECT * FROM `groups`";

    $stmt->prepare($query);
    $stmt->execute();

    $result = $stmt->get_result();
    $groups = array();
    while($row = $result->fetch_assoc()){
        $groups[$row['id']] = $row;
    }

    $stmt->prepare("SELECT * FROM `products` WHERE `id_group` = ?");
    $stmt->bind_param("i", intval($_REQUEST["group"]));
    $stmt->execute();

    $result = $stmt->get_result();
    $productsList = $result->fetch_all(MYSQLI_ASSOC);
} else {

    $stmt->prepare("SELECT * FROM `groups` WHERE `id_parent` = '0'");
    $stmt->execute();

    $result = $stmt->get_result();
    $groups = array();
    while($row = $result->fetch_assoc()){
        $groups[$row['id']] = $row;
    }

    $stmt->prepare("SELECT * FROM `products`");
    $stmt->execute();

    $result = $stmt->get_result();
    $productsList = $result->fetch_all(MYSQLI_ASSOC);
}

$groupTree = getTree($groups);

//var_dump($groupTree);

Renderer::includeTemplate("layout.php", [
    "data" => Renderer::getTemplate("list.php", ["groupList" => showGroups($groupTree), "productsList" => $productsList]),
]);