'use strict'
let accountInfoList = [];
let accountModule = function () {

    let account = {
        name:'',
        balance: 0
    }

    let display = function () {
        let lineOutput = '';
        for (let i = 0; i < accountInfoList.length; i++) {
            lineOutput += 'Account Name: ' + accountInfoList[i].name + ' Balance: ' + accountInfoList[i].balance + '\n ';
        }
        document.getElementById('canvas').value = lineOutput;
    }

    let get = function () {
        let name= document.getElementById('account_name').value;
        let balance=document.getElementById('balance').value;
        account.name =name;
        account.balance = balance;
        name='';
        balance='';
    }

    let save = function () {
        accountInfoList.push(account);

    }


    return {
        create: function () {
            get();
            save();
            display();

        }
    }
}


document.getElementById('create').onclick = accountModule().create;
