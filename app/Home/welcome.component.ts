import { Component } from 'angular2/core';

@Component({
    templateUrl: 'app/home/welcome.component.html',
    styleUrls: ['app/home/welcome.component.css']
})
export class WelcomeComponent {
    public pageTitle: string = "Welcome";
}