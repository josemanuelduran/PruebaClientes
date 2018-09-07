/* tslint:disable */

import { Pipe, PipeTransform } from '@angular/core';

export const TranslateServiceStub = {
    instant: (key: string | Array<string>, interpolateParams?: Object): string | any => key
};

@Pipe({ name: 'translate' })
export class TranslatePipeMock implements PipeTransform {
    transform(key: string): string {
        return key;
    }
}
