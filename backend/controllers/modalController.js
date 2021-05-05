var studentPortal = angular.module("studentPortal", ['ui.bootstrap']);


studentPortal.controller("ModalController",function($scope,$uibModalInstance){
 
    $scope.cancelModal = function(){
        
        $uibModalInstance.dismiss();
    }

    $scope.ok = function(){

        $uibModalInstance.close('save');
    
    }
    
   });