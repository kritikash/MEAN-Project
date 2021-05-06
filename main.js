angular.module("studentPortal", ['ui.router']).config(function ($stateProvider) {
  console.log("mainLoaded")

  $stateProvider
      .state('listOfStudents', {
          url: "/",
          templateUrl: "Frontend/listOfStudents/listOfStudents.html",
          controller: "listController"
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
     
  
});










 

   
   

