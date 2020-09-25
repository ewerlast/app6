document.querySelector('.push').onclick = function () {
    // данные из input type = text
    console.log(document.querySelector('.text-input').value);


    // данные из input type = password
    console.log(document.querySelector('.pass-input').value);


    // данные из input type = range
    let renge = document.querySelector('.range-input');
   let rangeValue = document.querySelector('.range-input').value;
   if(rangeValue){
       document.body.style.fontSize = rangeValue+'px';
           
   }
   document.querySelector('span').innerHTML = rangeValue;

    // данные из input type = date
    console.log(document.querySelector('.calendar-input').value);

    // данные из input type = color
    let color = document.querySelector('.color-input').value;
    if(color){
        document.body.style.backgroundColor = color;
    }

    // данные из input type = color - text
    let colorText = document.querySelector('.color-text').value;
    if(colorText){
        document.body.style.color = colorText;
        
    }



    // данные из input type = checkbox
    console.log(document.querySelector('#checkbox-input').checked);
    if (document.querySelector('#checkbox-input').checked) {
        console.log('Даааааа!');
    }
    else {
        console.log('Heeeeeт');
    }

    console.log('----------------Radio------------');

    // данные из input type = radio
    // console.log(document.querySelector('.radio-input[checked="checked"]').value);

}

// My cod

