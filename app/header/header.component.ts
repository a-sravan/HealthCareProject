import { Component, OnInit, ViewChild } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ModalServiceEvent } from '../common/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  enquryInfo: any;
  modalContent = false;
  serviceList: any[];
  selectedService: any[];
  referdList: any[];
  selectedRefered: any[];
  dropdownSettings: IDropdownSettings = {};
  @ViewChild('content') content: any;
  constructor(
    private router:Router,
    private http: HttpClient,
    private modalService: NgbModal,
    private modalEventService: ModalServiceEvent,
    private toastService: ToastrService) {
    this.serviceList = [
      { item_id: 1, item_text: 'BLS Training' },
      { item_id: 2, item_text: 'Elderly Care' },
      { item_id: 3, item_text: 'Pregnancy Care' },
      { item_id: 4, item_text: 'Operative care' },
      { item_id: 5, item_text: 'Doctor Consultation' },
      { item_id: 6, item_text: 'Book Lab Test' },
      { item_id: 7, item_text: 'Inhouse Patient Care' },
      { item_id: 8, item_text: 'Medical Astrology' },
      { item_id: 9, item_text: 'Overseas Searvice' },
      { item_id: 10, item_text: 'General Wellness' }
    ];
    this.selectedService = [];

    this.referdList = [
      { item_id: 1, item_text: 'Doctor' },
      { item_id: 2, item_text: 'Friend' },
      { item_id: 3, item_text: 'Social Media' },
      { item_id: 4, item_text: 'Advertisement' },
      { item_id: 5, item_text: 'Others' },
    ]
    this.selectedRefered = [];
    this.enquryInfo = {
      name: "",
      mobile: "",
      preferedTime: "",
    }
  }

  ngOnInit(): void {

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false
    };

    this.modalEventService.opneModal.subscribe(val => {
      this.open(this.content);
    })

  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  public open(content: any) {
    this.modalService.open(content, { centered: true, ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(result);
    });
  }

  public showmenu() {
    const sidebar = document.getElementById("shownavbar");
    if (sidebar) {
      sidebar.style.transform = "translatex(0px)";
      sidebar.style.transition = ".8s"
    }
  }

  public hideMenu() {
    const hidebar = document.getElementById("shownavbar");
    if (hidebar) {
      hidebar.style.transform = "translatex(-250px)";
      hidebar.style.transition = ".8s"
    }
  }

  public showLoginModal(){
    const showLogin = document.getElementById("showlogin");
    if(showLogin){
      showLogin.style.display="block"
      showLogin.style.transition = "transition: transform .3s ease-out;"
    };
     
  }

  public hideLoginModal(){
    const hideLogin = document.getElementById("showlogin");
    if(hideLogin){
      hideLogin.style.display="none";
    };
  }

  public showSignupModal(){
    const showSignup = document.getElementById("showSignup");
    if(showSignup){
      showSignup.style.display="block"
    };
     
  }

  public hideSignupModal(){
    const hideSignup = document.getElementById("showSignup");
    if(hideSignup){
      hideSignup.style.display="none";
    };
  }

  public submitEnquery(): void {
    this.enquryInfo.services = this.selectedService.map(s => s.item_text);
    this.enquryInfo.referedBy = this.selectedRefered.map(r => r.item_text);
    if (this.enquryInfo.name === '') {
      alert("All fields are mandatory");
    } else if (this.enquryInfo.mobile === '') {
      alert("All fields are mandatory");
    } else if (this.enquryInfo.preferedTime === '') {
      alert("All fields are mandatory");
    } else if (this.enquryInfo.services.length === 0) {
      alert("All fields are mandatory");
    } else if (this.enquryInfo.referedBy.length === 0) {
      alert("All fields are mandatory");
    } else {
      this.http.post("http://54.169.176.105:4000/enquiry", this.enquryInfo).subscribe(() => {
        this.modalService.dismissAll();
        alert("Thank you, we will contact you soon!");
        this.enquryInfo = {
          name: "",
          mobile: "",
          preferedTime: "",
        }
        this.selectedService = [];
        this.selectedRefered = [];
      });
    }
  }

  public change_route(route:string):void{
    this.router.navigate([route]);
    window.scrollTo({top: 0, behavior: 'smooth'});

  }
}


