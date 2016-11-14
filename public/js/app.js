angular.module('app', ['ngRoute'])
        .service('todoService', todoService)
        .service('articleService', articleService)
        .controller('mainController', mainController)
        .controller('articleController', articleController)
        .config(routes)
        ;
