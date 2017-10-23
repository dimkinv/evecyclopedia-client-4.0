import { expect } from 'chai';
import { MockBackend } from '@angular/http/testing';
import { ConnectionBackend, Http } from '@angular/http'
import { ReflectiveInjector } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { ShipsService } from './ships.service';
import { BaseRequestOptions, Response, ResponseOptions, RequestOptions } from '@angular/http';

describe('ships tests', () => {
    let backend: MockBackend;
    let service: any;

    beforeEach(() => {
        const injector = ReflectiveInjector.resolveAndCreate([
            {provide: ConnectionBackend, useClass: MockBackend},
            {provide: RequestOptions, useClass: BaseRequestOptions},
            Http,
            ShipsService
        ]);

        backend = injector.get(ConnectionBackend);
        service = injector.get(ShipsService);
    });

    it('should return correct json for getGroups request', fakeAsync(() => {

    }));

    it('should return an error if 500 status code returns from server', fakeAsync(() => {


    }));
});


