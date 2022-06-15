

const helloWorld = () => {
    const hello = 'Hello World';
    console.log( hello );
}

helloWorld();

let scope = 'I am global';

const functionScope = () => {
    let scope = 'i am just a local';
    const func = () => {
        return scope;
    }
    console.log( func() );
}

functionScope();
console.log( scope );