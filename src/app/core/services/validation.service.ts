import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ValidationService {

    constructor() { }

    displayErrors(form: NgForm, er: HttpErrorResponse) {

        const errorObj = er.error.errors;



        // tslint:disable-next-line:prefer-const
        for (let key in errorObj) {
            if (errorObj.hasOwnProperty(key)) {

                const errMsg = errorObj[key].message;

                if (form.controls[key]) {
                    // form.controls[key].errors[key] = errMsg;
                    if (!form.controls[key]['serverErrors']) {
                        form.controls[key]['serverErrors'] = [];
                    }

                    form.controls[key]['serverErrors'].push(errMsg);

                }
            }
        }
    }



}
