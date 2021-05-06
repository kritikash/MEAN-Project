var search = angular.module("studentPortal", []);

search.controller('searchController', function($http) {

    this.students = [
        {"rollNumber":1,"name":"Kritika","age":22,"email":"kritika@gmail.com "},
        {"rollNumber":2,"name":"Animesh","age":22,"email":"animesh@gmail.com "},
        {"rollNumber":3,"name":"Sarthak","age":21,"email":"sarthak@gmail.com "},
        {"rollNumber":4,"name":"Raghav","age":18,"email":"raghav@gmail.com "}
    ];

    $http({
        method: 'POST',
        url: 'http://localhost:3000/api/student/show'})
        .then(function(response){
            this.students = response.data;
        })
        .catch(error =>{
            console.log(error);
        })
});



