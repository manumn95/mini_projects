const firstName = document.getElementById('first-Name')
const lastName = document.getElementById('last-Name');
const address = document.getElementById('address');
const pincode = document.getElementById('pincode');
const gender = document.getElementById('gender');
const choice = document.getElementById('choice');
const state = document.getElementById('state');
const country = document.getElementById('country');
const forms = document.querySelector('form');

const checkboxes = document.querySelectorAll('.choice1')
let checkedData ='';
for(let checkbox of checkboxes)
{
    checkbox.addEventListener('click',function()
    {
    if(this.checked == true)
    {
        checkedData +=` ${this.value}`;
    }
    })
}
console.log(checkedData);

const tab = document.querySelector('table')
const tableData = document.createElement('tr')  
//Button Action
const submitButton = document.getElementById('btn');
submitButton.addEventListener('click',function()
{
            tableData.innerHTML=`<tr>
            <td>${firstName.value}</td>
            <td>${lastName.value}</td>
            <td>${address.value}</td>
            <td>${pincode.value}</td>
            <td>${gender.value}</td>
            <td>${checkedData}</td>
            <td>${state.value}</td>
            <td>${country.value}</td>
            </tr>` 
            
            tab.appendChild(tableData);
            forms.reset();    
})




