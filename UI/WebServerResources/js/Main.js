!function(){"use strict";function n(n,o,t,e,i,a){var l=this;this.$onInit=function(){this.creds={username:o.cookieUsername,password:null,rememberLogin:angular.isDefined(o.cookieUsername)&&0<o.cookieUsername.length},/\blanguage=/.test(o.location.search)&&(this.creds.language=o.language),this.loginState=!1,this.showLogin=!1,t(function(){l.showLogin=!0},100)},this.login=function(){return l.loginState="authenticating",a.login(l.creds).then(function(n){l.loginState="logged",l.cn=n.cn,t(function(){o.location.href===n.url?o.location.reload(!0):o.location.href=n.url},1e3)},function(n){l.loginState="error",l.errorMessage=n.error}),!1},this.showAbout=function(n){function o(n){this.closeDialog=function(){n.hide()}}i.show({targetEvent:n,templateUrl:"aboutBox.html",controller:o,controllerAs:"about"}),o.$inject=["$mdDialog"]},this.changeLanguage=function(n){o.location.href=ApplicationBaseURL+"login?language="+this.creds.language}}angular.module("SOGo.MainUI",["SOGo.Common","SOGo.Authentication"]),n.$inject=["$scope","$window","$timeout","Dialog","$mdDialog","Authentication"],angular.module("SOGo.MainUI").controller("LoginController",n)}();
//# sourceMappingURL=Main.js.map