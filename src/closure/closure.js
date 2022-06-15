
const moneyBox = coins => {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $ ${ saveCoins }`);
}

moneyBox( 5 );
moneyBox( 10 );

const moneyBox2 = () => {
    let saveCoins = 0;
    const countCoins = coins => {
        saveCoins += coins;
        console.log(`MoneyBox2: $ ${ saveCoins }`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox2();
myMoneyBox( 4 );
myMoneyBox( 6 );
myMoneyBox( 10 );