const peopleBar = document.getElementById('people');
const billWrongNumber = document.getElementById('billWrongNumber');
const wrongNumber = document.getElementById('wrongNumber');

const billBar = document.getElementById('bill');

const billCheck = () => {
    const billAmount = parseInt(bill.value) || 0;
    if (billAmount != 0) {
        billWrongNumber.innerHTML = '';
        billBar.classList.add('barRight');
        billBar.classList.remove('barWrong');
    } else {
        billWrongNumber.innerHTML = "Can't Be Zero";

        billBar.classList.add('barWrong');
        billBar.classList.remove('barRight');
    }
};
billBar.addEventListener('input', billCheck);

const peopleCheck = () => {
    const peopleAmount = parseInt(peopleBar.value) || 0;
    if (peopleAmount === 0) {
        wrongNumber.innerHTML = "Can't Be Zero";
        peopleBar.classList.add('barWrong');
        peopleBar.classList.remove('barRight');
    } else {
        wrongNumber.innerHTML = '';
        peopleBar.classList.add('barRight');
        peopleBar.classList.remove('barWrong');
    }
};

peopleBar.addEventListener('input', peopleCheck);

const reset = document.getElementById('reset');

const clear = () => {
    totalCalculated.innerHTML = '$0.00';
    tipCalculated.innerHTML = '$0.00';

    if (peopleBar != '') {
        peopleBar.value = '';
        peopleBar.classList.remove('barWrong');
        peopleBar.classList.remove('barRight');
        wrongNumber.innerHTML = '';
    }
    if (billBar != '') {
        billBar.value = '';
        billBar.classList.remove('barWrong');
        billBar.classList.remove('barRight');
        billWrongNumber.innerHTML = '';
    }
};

reset.addEventListener('click', clear);

const tipCalculated = document.getElementById('tipCalculated');
const totalCalculated = document.getElementById('totalCalculated');

const calculateTotal = () => {
    const billAmount = parseInt(billBar.value) || 0;
    const peopleAmount = parseInt(peopleBar.value) || 0;

    if (billAmount > 0 && peopleAmount > 0) {
        const totalCalculating = billAmount / peopleAmount;
        totalCalculated.innerHTML = '$' + totalCalculating.toFixed(2);
    }
};
billBar.addEventListener('input', calculateTotal);
peopleBar.addEventListener('input', calculateTotal);

const tipPercent = document.querySelectorAll('.tipPercent');
const tipPercent5 = document.getElementById('tipPercent5');
const tipPercent10 = document.getElementById('tipPercent10');
const tipPercent15 = document.getElementById('tipPercent15');
const tipPercent25 = document.getElementById('tipPercent25');
const tipPercent50 = document.getElementById('tipPercent50');
const tipPercentCustom = document.getElementById('tipPercentCustom');

let tipSelected = 0;

const calculateTip = () => {
    const billAmount = parseInt(billBar.value) || 0;
    const peopleAmount = parseInt(peopleBar.value) || 1;

    if (billAmount > 0 && peopleAmount > 0 && tipSelected > 0) {
        const tipAmount = (billAmount * tipSelected) / 100;
        const tipPerPerson = tipAmount / peopleAmount;
        tipCalculated.innerHTML = '$' + tipPerPerson.toFixed(2);
    }
};

const selectTipPercent = (percent) => {
    tipSelected = percent;

    tipPercent.forEach((btn) => btn.classList.remove('active'));

    if (percent === 5) tipPercent5.classList.add('active');
    else if (percent === 10) tipPercent10.classList.add('active');
    else if (percent === 15) tipPercent15.classList.add('active');
    else if (percent === 25) tipPercent25.classList.add('active');
    else if (percent === 50) tipPercent50.classList.add('active');

    calculateTip();
};

tipPercent5.addEventListener('click', () => selectTipPercent(5));
tipPercent10.addEventListener('click', () => selectTipPercent(10));
tipPercent15.addEventListener('click', () => selectTipPercent(15));
tipPercent25.addEventListener('click', () => selectTipPercent(25));
tipPercent50.addEventListener('click', () => selectTipPercent(50));

tipPercentCustom.addEventListener('input', () => {
    const customPercent = parseInt(tipPercentCustom.value) || 0;
    if (customPercent > 0) {
        tipSelected = customPercent;
        tipPercent.forEach((btn) => btn.classList.remove('active'));
        calculateTip();
    }
});
