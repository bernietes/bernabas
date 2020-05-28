
function big_decoration(){
    let textbox = document.getElementById('text_area');
    textbox.style.fontSize = parseInt(textbox.style.fontSize) + 2 + "pt";

}


function bling() {

    var checkbox=document.getElementById('bling')
    var textarea= document.getElementById('text_area');
    if (checkbox.checked) {
        textarea.style.fontWeight = 'bold';
        textarea.style.color = 'green';
        textarea.style.textDecoration = 'underline';
    }
    else{
        textarea.style.fontWeight='normal';
        textarea.style.color='black';
        textarea.style.textDecoration='none';
}

}
