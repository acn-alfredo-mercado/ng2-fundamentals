import { AuthService } from './user/auth.service';
import { ToastrService } from './common/toastr.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';

import { appRoutes } from './routes';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        NavBarComponent
    ],
    bootstrap: [EventsAppComponent],
    providers: [
        EventService,
        ToastrService,
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