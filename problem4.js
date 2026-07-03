// A CRM holds 10 contacts, and 4 of them are marked as duplicates. Write a function that returns the percentage that's clean.

let total_contact = 10;
let duplicate = 4;
function percentage (total , duplicate){
 let clean = total - duplicate;
 let percentage = (clean/total)*100
 return percentage;
}
let remaining = percentage(total_contact,duplicate);
console.log (`The percentage of the clean contact is ${remaining}%.`);