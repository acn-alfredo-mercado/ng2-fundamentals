import { AuthService } from './user/auth.service';
import { 
    TOASTR_TOKEN, 
    Toastr,
    JQ_TOKEN,
    CollapsibleWellComponent } from './common/index';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';

import { appRoutes } from './routes';

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        NavBarComponent,
        CollapsibleWellComponent,
        DurationPipe
    ],
    bootstrap: [EventsAppComponent],
    providers: [
        EventService,
        {
            provide: TOASTR_TOKEN, useValue: toastr
        },
        EventRouteActivator,
        EventListResolver,
        AuthService,
        {
            provide: 'canDeactivateCreateEvent', useValue: checkDirtyState
        }
    ]
})

export class AppModule {}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) 
        return window.confirm('You have not saved this event, do you really want to cancel?');
    return true;
}