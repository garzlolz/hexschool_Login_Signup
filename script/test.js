var send = document.querySelector('#send');
send.addEventListener('click',signup,false);

function signup(){
    var acc  = document.querySelector('#acc').value;
    var pwd = document.querySelector('#pwd').value;
    var data = {};
    data.email = acc;
    data.password = pwd;
    var SendData = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
    xhr.setRequestHeader('Content-type','application/json');
    xhr.send(SendData);
    xhr.onload = function(){
        document.querySelector('.formtest').innerHTML = '<h1>'+ JSON.parse(xhr.responseText).message+'</h1>';
    }
}

var login = document.querySelector('#login');
login.addEventListener('click',logAcc,false);
function logAcc(){
    var acc = document.querySelector('#acc').value;
    var pwd = document.querySelector('#pwd').value;
    var data={};
    data.email = acc;
    data.password = pwd;
    var SendData = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signin',true);
    xhr.setRequestHeader('Content-type','application/json');
    xhr.send(SendData);
    xhr.onload = function(){
       var getdata = JSON.parse(xhr.responseText);
       document.querySelector('.formtest').innerHTML = '<h1>'+ getdata.message+'</h1>';
    };

}