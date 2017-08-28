import { ValueAccessorBase } from './value-accessor-base';
// https://blog.thoughtram.io/angular/2016/07/27/custom-form-controls-in-angular-2.html

// http://blog.rangle.io/angular-2-ngmodel-and-custom-form-components/

import { NgForm, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, OnInit, Input, forwardRef } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bootstrap-text',
  templateUrl: './bootstrap-text.component.html',
  styleUrls: ['./bootstrap-text.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BootstrapTextComponent),
      multi: true
    }
  ]
})
export class BootstrapTextComponent extends ValueAccessorBase<string> implements OnInit {
  @Input() label: String;
  @Input() id: String;
  @Input() name: String;
  @Input() placeholder: String;
  @Input() requiredErrorMsg: String;




  constructor() {
    super();
  }

  ngOnInit() {
    //defaults


  }

  onChange(event) {
    //this.propagateChange(event.target.value);
  }
}
