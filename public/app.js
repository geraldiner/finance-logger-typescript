import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// ListTemplate instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let transaction;
    if (type.value.toLowerCase() === 'invoice') {
        transaction = new Invoice(...values);
    }
    else {
        transaction = new Payment(...values);
    }
    list.render(transaction, type.value, "end");
    form.reset();
});
