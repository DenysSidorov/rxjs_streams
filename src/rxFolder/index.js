import Rx from 'rxjs';

const stream$ = Rx.Observable.create((observer)=>{
    observer.next('One');

    setTimeout(()=>{
        observer.next('New data after 3 sec');
    },3000)


    setTimeout(()=>{
        observer.next('New data after 5 sec');
    },5000)


    observer.next('Two');
});


stream$.subscribe((data)=>{
    console.log(data);
})

console.log(Rx);