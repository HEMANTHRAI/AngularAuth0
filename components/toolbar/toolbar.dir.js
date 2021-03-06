(function(){
    
    
    angular.module("Auth")
    .directive("toolbardir",toolbarDir)
    function toolbarDir(){
        return {
            templateUrl : "components/toolbar/toolbar.tpl.html",
            ontroller : toolbarctrl,
            controllerAs: 'toolbar'
        }
    }
    function toolbarctrl(auth,store,$location){
        var vm = this;
        vm.login = login;
        vm.logout = logout;
        vm.auth = auth;
        function login(){
            auth.signin({},function(profile,token){
                store.set("profile",profile);
                store.set("id_token", token);
                $location.path("/home");
            },function(error){
                console.log(error)
            });
        }
        function logout(){
            store.remove("profile");
            store.remove("id_token");
            auth.signout();
            $location.path("/home");
        }
    }
    
})();