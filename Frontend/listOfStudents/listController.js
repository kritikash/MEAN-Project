var list = angular.module("studentPortal", ['ui.bootstrap']);

list.controller('listController', function($scope,$http) {
    $scope.students = [
        {"rollNumber":1,"name":"Kritika","age":22,"email":"kritika@gmail.com "},
        {"rollNumber":2,"name":"Animesh","age":22,"email":"animesh@gmail.com "},
        {"rollNumber":3,"name":"Sarthak","age":21,"email":"sarthak@gmail.com "},
        {"rollNumber":4,"name":"Raghav","age":18,"email":"raghav@gmail.com "}
    ];

    $scope.edit = function(){
        $scope.x = {"display": "block"};
        var index = $scope.$index;
        $scope.edit.index = index;

        $scope.edit.rollNumber  = $scope.students[index].rollNumber;

        $scope.edit.updatename  = $scope.students[index].name;
        $scope.edit.age = $scope.students[index].age;
        $scope.edit.email = $scope.students[index].email;
    }

    $scope.delete = function(){
        var index = $scope.$index;
        $scope.students.splice(index,1);
    }

    $scope.updateUser = function(){

        var index = $scope.edit.index;

        $scope.students[index]= {
            "rollNumber": $scope.edit.rollNumber,
            "name": $scope.edit.updatename,
            "age": $scope.edit.age,
            "email": $scope.edit.email 
        };
        
    };

    $scope.sendForm = function () {

        $scope.msg = "Form Validated";
        
    };

    $scope.openModal = function(){
        $scope.modalInstance = $uibModal.open({
        
        templateUrl: "/modalWindow.html",
        controller :'ModalController',
        size: ' ',
        
        });
       
    };

    //List Of Students
    $http({
        method: 'GET',
        url: 'http://localhost:3000/api/student/'})
        .then(function(response){
            $scope.students = response.data;
        })
        .catch(error =>{
            console.log(error);
        })


    //update
    $http({
        method: 'POST',
        url: 'http://localhost:3000/api/student/update'})
        .then(function(response){
            $scope.students = response.data;
        })
        .catch(error =>{
            console.log(error);
        })

    //delete
    $http({
        method: 'POST',
        url: 'http://localhost:3000/api/student/destroy'})
        .then(function(response){
            $scope.students = response.data;
        })
        .catch(error =>{
            console.log(error);
        })

})
