import { Component, Input, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { TestService } from "../test.service";

@Component ({
    selector : 'app-second-comp',
    templateUrl : './second-comp.component.html',
    styleUrls : ['./second-comp.component.css'],
})

export class SecondCompComponent implements OnInit{
    public enteredText : string = "";
    constructor(
        private testService : TestService
    ) {}

    ngOnInit() {
        // Souscrire
        this.testService.dataEmitter.subscribe((data) => {
            this.enteredText = data;
        });
    }
}