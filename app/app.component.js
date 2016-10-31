"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
require('rxjs/Rx');
var router_1 = require('angular2/router');
var welcome_component_1 = require('./home/welcome.component');
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'My Stuff';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'mp-app',
            template: "\n        <div>\n        \n        <div> testing app comp </div>\n            <nav class=\"navbar navbar-default\">\n                <div class=\"container-fluid\">\n                    <a class=\"navbar-brand\" [routerLink] = \"['Welcome']\">\n                    <img src=\"app/assets/images/logo.png\" class=\"img-responsive\"></a>\n                    <ul class=\"nav navbar-nav navbar-right\">\n                        <li><a [routerLink] = \"['Welcome']\">Home</a></li>\n                    </ul>\n                 </div>\n            </nav>\n            <div class=\"container\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n\n\n     ",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS]
        }),
        router_1.RouteConfig([
            { path: '/welcome', name: 'Welcome', component: welcome_component_1.WelcomeComponent, useAsDefault: true }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map