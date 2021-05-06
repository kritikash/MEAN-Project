// angular.module('studentPortal')
//   .config(function ($stateProvider) {
//     $stateProvider
//       .state('listOfStudents', {
//         url: "/",
//         templateUrl: 'Frontend/listOfStudents/listOfStudents.html',
//         controller: 'listController'
//       })
//     })
var myApp = angular.module('studentPortal', ['ui.router']);
        myApp.config(['$stateProvider','$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) { 
                console.log("file Loaded")
                $stateProvider.
                state('listOfStudents', {
                    url: '/',
                    templateUrl: 'Frontend/listOfStudents/listOfStudents.html',
                    controller: 'listController'

                })
                .state('store', {
                    url: "/store",
                    templateUrl: "Frontend/addStudent/addStudent.html",
                    controller: "addController"
                })
                .state('show', {
                  url: "/show",
                  templateUrl: "Frontend/search/search.js",
                  controller: "searchController"
                })
                 
            }]);
        