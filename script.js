let calculate_btn = document.querySelector('#calculate_btn');

calculate_btn.addEventListener('click', function(event) {
    let height = Number(document.querySelector('#height').value);
    let hsq = height*height;
    let weight = Number(document.querySelector('#weight').value);
    let bmi = Number(weight/hsq);
    console.log(height);
    console.log(weight);
    document.querySelector('#result').innerText = bmi;
});