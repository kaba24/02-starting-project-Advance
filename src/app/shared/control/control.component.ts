import { Component, ContentChild, ElementRef, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})
export class ControlComponent {

  label = input.required<string>();

  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  onClick(){
    console.log(this.control);
  }

}
