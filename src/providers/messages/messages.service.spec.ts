import { TestBed, inject } from '@angular/core/testing';
import { ToastController, Toast, ToastOptions } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { MessagesService } from './messages.service';

describe('MessagesService', () => {

    let messagesService: MessagesService;
    let toastCtrl: ToastController;

    let toastOptions = {
        dismissOnPageChange: false,
        cssClass: '',
        showCloseButton: true,
        message: 'Title:\nMessage',
        closeButtonText: 'TOAST.CLOSE'
    };

    let toastOptions2 = {
        dismissOnPageChange: false,
        cssClass: '',
        showCloseButton: true,
        message: 'Message',
        closeButtonText: 'TOAST.CLOSE'
    };

    let toastOptions3 = {
        dismissOnPageChange: false,
        cssClass: '',
        showCloseButton: true,
        closeButtonText: 'TOAST.CLOSE',
        message: 'Title:\nMessage',
        duration: 2500
    };

    let toastOptions4 = {
        dismissOnPageChange: false,
        cssClass: '',
        showCloseButton: true,
        closeButtonText: 'TOAST.CLOSE',
        message: 'Message',
        duration: 2500
    };

    const TranslateServiceStub = {
        instant: (key: string | Array<string>, interpolateParams?: Object): string | any => key
    };

    const toast: Toast = <Toast>{
        present: (): Promise<any> => undefined
    };

    const toastControllerStub = {
        create: (opts?: ToastOptions): Toast => toast
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                MessagesService,
                {provide: ToastController, useValue: toastControllerStub},
                {provide: TranslateService, useValue: TranslateServiceStub},
            ]
        });
    });

    beforeEach(inject([MessagesService, ToastController], (service: MessagesService, toastService: ToastController) => {
        messagesService = service;
        toastCtrl = toastService;
    }));

    it('should create the service', () => {
        expect(messagesService).toBeTruthy();
    });

    describe('info toast', () => {

        beforeEach(() => {
            toastOptions3.cssClass = 'toast-info';
            toastOptions4.cssClass = 'toast-info';
        });

        it('should show an info toast with a title, a message and a close button', () => {
            spyOn(toastCtrl, 'create').and.callThrough();
            spyOn(toast, 'present');
            messagesService.showInfo('Message', 'Title');
            expect(toastCtrl.create).toHaveBeenCalledWith(toastOptions3);
            expect(toast.present).toHaveBeenCalled();
        });

        it('should show a info toast with a message, a close button and without a title', () => {
            spyOn(toastCtrl, 'create').and.callThrough();
            spyOn(toast, 'present');
            messagesService.showInfo('Message');
            expect(toastCtrl.create).toHaveBeenCalledWith(toastOptions4);
            expect(toast.present).toHaveBeenCalled();
        });

    });

    describe('success toast', () => {

        beforeEach(() => {
            toastOptions3.cssClass = 'toast-success';
            toastOptions4.cssClass = 'toast-success';
        });

        it('should show a success toast with a title, a message and a close button', () => {
            spyOn(toastCtrl, 'create').and.callThrough();
            spyOn(toast, 'present');
            messagesService.showSuccess('Message', 'Title');
            expect(toastCtrl.create).toHaveBeenCalledWith(toastOptions3);
            expect(toast.present).toHaveBeenCalled();
        });

        it('should show a success toast with a message, a close button and without a title', () => {
            spyOn(toastCtrl, 'create').and.callThrough();
            spyOn(toast, 'present');
            messagesService.showSuccess('Message');
            expect(toastCtrl.create).toHaveBeenCalledWith(toastOptions4);
            expect(toast.present).toHaveBeenCalled();
        });

    });

    describe('warning toast', () => {

        beforeEach(() => {
            toastOptions.cssClass = 'toast-warning';
            toastOptions2.cssClass = 'toast-warning';
        });

        it('should show a warning toast with a title, a message and a close button', () => {
            spyOn(toastCtrl, 'create').and.callThrough();
            spyOn(toast, 'present');
            messagesService.showWarning('Message', 'Title');
            expect(toastCtrl.create).toHaveBeenCalledWith(toastOptions);
            expect(toast.present).toHaveBeenCalled();
        });

        it('should show a warning toast with a message, a close button and without a title', () => {
            spyOn(toastCtrl, 'create').and.callThrough();
            spyOn(toast, 'present');
            messagesService.showWarning('Message');
            expect(toastCtrl.create).toHaveBeenCalledWith(toastOptions2);
            expect(toast.present).toHaveBeenCalled();
        });

    });

    describe('error toast', () => {

        beforeEach(() => {
            toastOptions.cssClass = 'toast-error';
            toastOptions2.cssClass = 'toast-error';
        });

        it('should show an error toast with a title, a message and a close button', () => {
            spyOn(toastCtrl, 'create').and.callThrough();
            spyOn(toast, 'present');
            messagesService.showError('Message', 'Title');
            expect(toastCtrl.create).toHaveBeenCalledWith(toastOptions);
            expect(toast.present).toHaveBeenCalled();
        });

        it('should show an error toast with a message, a close button and without a title', () => {
            spyOn(toastCtrl, 'create').and.callThrough();
            spyOn(toast, 'present');
            messagesService.showError('Message');
            expect(toastCtrl.create).toHaveBeenCalledWith(toastOptions2);
            expect(toast.present).toHaveBeenCalled();
        });

    });
});
