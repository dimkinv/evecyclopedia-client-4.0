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
        //given
        backend.connections.subscribe(conn => {
            conn.mockRespond(new Response(new ResponseOptions({body: GROUPS_RESPONSE, status: 200})));
        });
        //when
        let result: any;
        service.getGroups().subscribe(res => result = res);

        //then

        expect(result.length).to.be.eq(3);
    }));

    it('should return an error if 500 status code returns from server', fakeAsync(() => {
        //given
        backend.connections.subscribe(conn => {
            conn.mockRespond(new Response(new ResponseOptions({body: null, status: 500})));
        });
        //when
        let result: any;
        let error: any;
        service.getGroups().subscribe(res => result = res, err => error = err);

        //then

        expect(error).to.be.ok;
        expect(result).to.be.undefined;
    }));
});

const GROUPS_RESPONSE = '[{"name":"Assault Frigate"},{"name":"Battleship"},{"name":"Black Ops"}]';
