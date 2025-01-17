import { Component, ElementRef, HostBinding, input, output, signal, viewChild } from '@angular/core';

@Component({
  selector: 'calculator-button',
  standalone: true,
  imports: [],
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.css',
  host: {
    class  : 'w-1/4 border-r border-b border-indigo-400',
    '[class.w2/4]': 'isDoubleSize()',
    '[class.w1/4]': '!isDoubleSize()'
  }
})
export default class CalculatorButtonComponent {

  public isPressed = signal(false);

  public onClick = output<string>();
  public contentValue = viewChild<ElementRef>('button')

  public isCommand = input(false, {
    transform: (value: boolean | string ) =>
      typeof value === 'string' ? value === 'true' : value
  })

  public isDoubleSize = input(false, {
    transform: (value: boolean | string ) =>
      typeof value === 'string' ? value === 'true' : value
  })

/*   @HostBinding( 'class.w-2/4') get commandStyle(){

    return this.isDoubleSize();
  } */
/*
  @HostBinding( 'class bg-indigo-700') get commandStyle(){
    return this.isCommand();
  } */

/**
 * Emits a click event with a 'Hola mundo' message.
 */

    handleClick(){
      if (this.contentValue()!.nativeElement) {
        return;
      }
      const value = this.contentValue()!.nativeElement.innerText
      this.onClick.emit(value);
    }

    public keyboardPressedStyle(key:string){

      if(!this.contentValue()) return;

      const value = this.contentValue()!.nativeElement.innerText

      if(value !== key) return;

      this.isPressed.set(true);

      setTimeout(() => {
        this.isPressed.set(false);
      }, 100);

}
}
