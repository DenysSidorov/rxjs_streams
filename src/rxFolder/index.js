import Rx from 'rxjs';

const stream$ = Rx.Observable.create((observer) => {
    observer.next('One');

    setTimeout(() => {
        observer.next('New data after 3 sec');
        /** Throw error */
        // observer.error('Baaaad');
    }, 3000)


    setTimeout(() => {
        observer.next('New data after 5 sec');
    }, 5000)


    observer.next('Two');

    /** Complete stream */
    // setTimeout(() => {
    //     observer.complete();
    // }, 3500)

});


stream$.subscribe(
    /** onData */
    (data) => {
        console.log(data);
    },
    /** error handler */
    (error) => {
        console.log('Erorr:( - ', error);
    },
    /** complete handler */
    () => {
        console.log('Observer ended his work!');
    }
)

console.log(Rx);