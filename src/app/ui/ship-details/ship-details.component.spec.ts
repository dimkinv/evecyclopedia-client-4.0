import { NO_ERRORS_SCHEMA }          from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';

import {ShipDetailsComponent} from './ship-details.component';

let shipData = {
    "group":"Test group 1",
    "race":"Test race 1",
    "name":"Test Ship 1",
    "description":"some desc...",
    "volume":1,
    "capacity":2,
    "mass":3,
    "attributes":[{"description":"","icon_path":"56_64_5.png","value":75},
                    {"description":"","icon_path":"56_64_5.png","value":75}]
};

describe('Zippy component shallow tests', ()=>{
    let fixture:ComponentFixture<ShipDetailsComponent>,
        component: ShipDetailsComponent;

    //TestBed.compileComponents returns a promise, so use async to wait for resolving
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ShipDetailsComponent],
            // Tells the compiler not to error on unknown elements and attributes
            schemas: [NO_ERRORS_SCHEMA]
        });

        TestBed.compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShipDetailsComponent);
        component = fixture.componentInstance;

        // setup input/output here

        fixture.detectChanges(); // trigger initial data binding
    });

});
