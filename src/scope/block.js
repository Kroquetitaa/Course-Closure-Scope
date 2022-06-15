
const fruits = () => {
    if ( true ) {
        var fruits1 = 'apple';
        const fruits2 = 'banana';
        let fruits3 = 'kiwi';
    }

}
fruits();

let x = 1;
{
    let x = 2;
    console.log( x );
}

console.log( x );

const anotherFunction = () => {
    for( let i = 0; i < 10; i++){
        setTimeout( () => {
            console.log( i )
        },1000);
    }
}
anotherFunction();