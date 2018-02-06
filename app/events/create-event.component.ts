import { EventService } from './shared/event.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/events/create-event.component.html',
    styles: [`
    em { float: right; color:#E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})

export class CreateEventComponent implements OnInit {
    isDirty: boolean = true;
    event: any;
    constructor(
        private eventService: EventService,
        private router: Router) {}

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }

    cancel() {
        this.router.navigate(['/events']);
    }

    ngOnInit() {
        this.event = {
            name: 'Peps Event',
            date: '8/12/1996',
            time: '10am',
            price: 800.99,
            location: {
                address: 'Novaliches',
                city: 'Quezon City',
                country: 'Philippines'
            },
            onlineUrl: 'http://peps.com',
            imageUrl: 'http://peps.com/logo.png'
        }
    }

}