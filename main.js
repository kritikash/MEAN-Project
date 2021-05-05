var app = angular.module("studentPortal", 
[ 
  
  'ui.router'
  
]);





app.config(function ($stateProvider) {
  

  $stateProvider
      .state('listOfStudents', {
          url: "/",
          templateUrl: "Frontend/listOfStudents/listOfStudents.html",
          controller: 'listController'
      })
      .state('store', {
          url: "/store",
          templateUrl: "Frontend/addStudent/addStudent.html",
          controller: 'addController'
          
      })
     
  
})






 

   
   

