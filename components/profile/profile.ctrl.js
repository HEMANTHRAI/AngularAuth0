(function(){
    angular.module("Auth")
    .controller("profilectrl", profilectrl)
    function profilectrl(){
        var vm = this;
        vm.name = "hello world";
    }
})();