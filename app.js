angular.module("Auth",['auth0', 'angular-storage', 'angular-jwt', 'ngMaterial', 'ui.router'])
.config(function($provide, authProvider,$urlRouterProvider,$stateProvider,$httpProvider,jwtInterceptorProvider){
    
    //authProvider.init({
    //    domain : "hemanthauth.auth0.com",
     //   clientID : "Q_HKwkAhTB85j8BS5FjYqKD2_xDXckER"
    //});
    
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state("home",
               {
                url : "/home",
                templateUrl: "components/home/home-tpl.html",

        })
        .state("profile",
              {
                url : "/profile",
                templateUrl : "components/profile/profile.tpl.html",
                controller:"profilectrl as user"
        })
    
})




