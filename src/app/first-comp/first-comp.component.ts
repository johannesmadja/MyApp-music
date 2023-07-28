import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, NgForm } from "@angular/forms";
import { TestService } from "../test.service";

@Component ({
    selector : 'app-first-comp',
    templateUrl : './first-comp.component.html',
    styleUrls : ['./first-comp.component.css'],
})

export class FirstCompComponent {
    constructor(
        private testService : TestService
    ) {}

    texte : string = 'toto';

    onSubmit (form : NgForm) {
        const Input = form.value['text']
        // Envoie d'une notification aux abonnés
        this.testService.sendData(Input);
    }
}