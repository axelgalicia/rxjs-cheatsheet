import { Observable } from 'rxjs';


export class Creation {

    // Creating a new Observable object using RxJS
    observable$ = new Observable(subscriber => {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        setTimeout(() => {
            subscriber.next(4);
            subscriber.complete();
        }, 2000);
    });

    public startCreation(): void {
        // Subscribing to the created observable.
        console.log('Before subscribing');
        this.observable$.subscribe({
            next(x) { console.log('Got value ' + x); },
            error(err) { console.error('something wrong occurred: ' + err); },
            complete() { console.log('done'); }
        });
        console.log('Just after subscribing');
    }
    
}

