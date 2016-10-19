import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { WelcomeComponent } from './home/welcome.component';


@Component ({
    selector: 'mp-app',
    template: `
        <div>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <a class="navbar-brand" [routerLink] = "['Welcome']">
                    <img src="app/assets/images/logo.png" class="img-responsive"></a>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a [routerLink] = "['Welcome']">Home</a></li>
                        <li><a [routerLink] = "['Contacts']">Contact List</a></li>
                    </ul>
                 </div>
            </nav>
            <div class="container">
                <router-outlet></router-outlet>
            </div>
        </div>


     `,
    directives: [ ROUTER_DIRECTIVES ],
    providers: [ HTTP_PROVIDERS, ROUTER_PROVIDERS ]
    // providers: [ ContactService ]
})

@RouteConfig([ 
    {path:'/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true }
    // {path:'/contacts', name: 'Contacts', component: ContactListComponent }
])

export class AppComponent {
    pageTitle:string = 'Premier Logic';
}
