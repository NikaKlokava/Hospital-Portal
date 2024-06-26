import { Component } from '@angular/core';
import { Contact, CONTACTS } from 'src/assets/mocks/contacts';

@Component({
  selector: 'hp-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  contacts: Contact[] = CONTACTS;
}
