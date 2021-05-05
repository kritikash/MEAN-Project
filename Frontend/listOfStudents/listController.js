var listController = angular.module("studentPortal", ['ui.bootstrap']);

listController.controller('listController', function($http) {
    this.students = [
        {"rollNumber":1,"name":"Kritika","age":22,"email":"kritika@gmail.com "},
        {"rollNumber":2,"name":"Animesh","age":22,"email":"animesh@gmail.com "},
        {"rollNumber":3,"name":"Sarthak","age":21,"email":"sarthak@gmail.com "},
        {"rollNumber":4,"name":"Raghav","age":18,"email":"raghav@gmail.com "}
    ];

    this.edit = function(){
        this.x = {"display": "block"};
        var index = this.$index;
        this.edit.index = index;

        this.edit.rollNumber  = this.students[index].rollNumber;

        this.edit.updatename  = this.students[index].name;
        this.edit.age = this.students[index].age;
        this.edit.email = this.students[index].email;
    }

    this.delete = function(){
        var index = this.$index;
        this.students.splice(index,1);
    }

    this.updateUser = function(){

        var index = this.edit.index;

        this.students[index]= {
            "rollNumber": this.edit.rollNumber,
            "name": this.edit.updatename,
            "age": this.edit.age,
            "email": this.edit.email 
        };
        
    };

    this.sendForm = function () {

        this.msg = "Form Validated";
        
    };

    this.openModal = function(){
        this.modalInstance = $uibModal.open({
        
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
            this.students = response.data;
        })
        .catch(error =>{
            console.log(error);
        })


    //update
    $http({
        method: 'POST',
        url: 'http://localhost:3000/api/student/update'})
        .then(function(response){
            this.students = response.data;
        })
        .catch(error =>{
            console.log(error);
        })

    //delete
    $http({
        method: 'POST',
        url: 'http://localhost:3000/api/student/destroy'})
        .then(function(response){
            this.students = response.data;
        })
        .catch(error =>{
            console.log(error);
        })

})
