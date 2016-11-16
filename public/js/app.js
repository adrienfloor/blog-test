angular.module('app', ['ngRoute','ngSanitize','ui.tinymce'])
        .service('todoService', todoService)
        .service('articleService', articleService)
        .controller('mainController', mainController)
        .controller('articleController', articleController)
        .config(routes)
        ;
