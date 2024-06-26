import { Component } from '@angular/core';
import { CONTACTS } from './contacts';
import { Contact } from './contact.model';

@Component({
  selector: 'hp-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  contacts: Contact[] = CONTACTS;
}
