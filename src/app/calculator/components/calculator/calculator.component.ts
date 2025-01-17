import { Component, ChangeDetectionStrategy, HostListener, viewChildren } from '@angular/core';
import CalculatorButtonComponent from "../calculator-button/calculator-button.component";

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [CalculatorButtonComponent],
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)'
  },
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

 constructor(){console.log('CalculatorComponent inicializado');}

  public calculatorButtons = viewChildren(CalculatorButtonComponent);
  handleClick(key: string){
    console.log('Tecla presionada:', {key});
  }

  handleKeyboardEvent( event: KeyboardEvent){

    const keyEquivalents: Record<string, string> = {
      Escape: 'C',
      Clear: 'C',
      '*': 'x',
      '/': '÷',
      Enter: '=',
    }

    const key = event.key;
    const keyValue = keyEquivalents[key] ?? key;

    this.handleClick(keyValue);

    this.calculatorButtons().forEach((button) => {

      button.keyboardPressedStyle(keyValue);
    });
  }
}
