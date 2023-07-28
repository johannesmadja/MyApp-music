import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable ({
    providedIn : 'root'
})
export class TestService {
    /**
     * Forme d'observable 
     * 
     * Observable de type Subject.Permet émettre des données
     */
    dataEmitter : Subject<string> = new Subject(); 

    sendData(data : string) {
        // envoyez des données
        this.dataEmitter.next(data);
    }
}