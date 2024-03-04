<?php

/**
*   renderer.php
*   Класс для рендеринга HTML объектов на страницу  
*   ПрОстата в передаче данных и уменьшение лишней избыточности.
*
*   @author fet1sov (t.me/seehis) <prodaugust21@gmail.com>
*/

class Renderer { 
    /**
    * Подключает шаблон, передает туда данные и возвращает итоговый HTML контент
    * @param string $path Путь к файлу шаблона относительно папки templates
    * @param array $data Ассоциативный массив с данными для шаблона
    * @return string Итоговый HTML
    */
    public static function getTemplate($path, array $data = []) : ?string
    {
        extract($data);
        ob_start();
        try {
            require __DIR__ . "/templates/" . $path;
        } catch(Throwable $trow) {
            return null;
        } finally {
            return ob_get_clean(); 
        }
    }

    /**
    * Подключает шаблон, передает туда данные, затем выводит его
    * @param string $path Путь к файлу шаблона относительно папки templates
    * @param array $data Ассоциативный массив с данными для шаблона
    * @return string Итоговый HTML
    */
    public static function includeTemplate($path, array $data = []) : void
    {
        extract($data);
        ob_start();
        try {
            require __DIR__ . "/templates/" . $path;
        } catch(Throwable $trow) {
            
        } finally {
            print(ob_get_clean()); 
        }
    }
}