var add = angular.module("studentPortal", []);

add.controller('addController', function($scope,$http) {
    console.log("add controller")

    $scope.students = [
        {"rollNumber":1,"name":"Kritika","age":22,"email":"kritika@gmail.com "},
        {"rollNumber":2,"name":"Animesh","age":22,"email":"animesh@gmail.com "},
        {"rollNumber":3,"name":"Sarthak","age":21,"email":"sarthak@gmail.com "},
        {"rollNumber":4,"name":"Raghav","age":18,"email":"raghav@gmail.com "}
    ];

    $scope.addUser = function(){
        console.log('abc');
        $scope.students.push({
            "rollNumber": $scope.data.rollNumber,
            "name": $scope.data.name,
            "age": $scope.data.age,
            "email": $scope.data.email 
        });

        $scope.data.rollNumber=" ";
        $scope.data.name=" ";
        $scope.data.age=" ";
        $scope.data.email=" ";

    }

    $http({
        method: 'POST',
        url: 'http://localhost:3000/api/student/store'})
        .then(function(response){
            $scope.students = response.data;
        })
        .catch(error =>{
            console.log(error);
        })
});




