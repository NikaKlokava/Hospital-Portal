import { Component } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'hp-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  constructor(public loader: LoaderService) {}
}
