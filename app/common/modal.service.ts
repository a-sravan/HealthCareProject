import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn:"root"
})

export class ModalServiceEvent {
  public opneModal = new Subject();
  constructor() {

  }

  public openModalEvent(){
    this.opneModal.next(true);
  }
}