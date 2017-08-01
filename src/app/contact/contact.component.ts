import { Component, OnInit, Input } from '@angular/core';
import{ Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact: Contact;
  @Input() indent = 2;
  @Input() expanded;

  constructor() { }

  ngOnInit() {}

  hasChildrens() {
    if(this.contact.contacts) {
      return true;
    }
    return false;
  }

  expand() {
    this.expanded = !this.expanded;
  }
}
