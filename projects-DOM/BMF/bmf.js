const form = document.querySelector('form');
// console.log(form);
// const height=parseInt( document.querySelector('#height').value); this will give empty values
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    // console.log(height);

    const weight = parseInt(document.querySelector('#weight').value);
    // console.log(weight);
    const result = document.querySelector('#result');
    // console.log(result);

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Plz give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Plz give a valid weight ${weight}`;
    }else{
       const bmi= (weight/((height*height)/10000)).toFixed(2);//toFixed for 2 decimal place
    //    showing in result
    result.innerHTML=`<span>${bmi}</span>`;
    }
})