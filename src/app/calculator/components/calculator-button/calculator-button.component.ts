import { Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'calculator-button',
  standalone: true,
  imports: [],
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.css',
  host: {
    class  : 'w-1/4 border-r border-b border-indigo-400'
  }
})
export default class CalculatorButtonComponent {

  public isCommand = input(false, {
    transform: (value: boolean | string ) =>
      typeof value === 'string' ? value === 'true' : value
  })

  public isDoubleSize = input(false, {
    transform: (value: boolean | string ) =>
      typeof value === 'string' ? value === 'true' : value
  })

  @HostBinding( 'class.w-2/4') get commandStyle(){

    return this.isDoubleSize();
  }
/*
  @HostBinding( 'class bg-indigo-700') get commandStyle(){
    return this.isCommand();
  } */
}
