let main = document.querySelector('.main')
let wrapper = document.createElement('div');
wrapper.className = 'wrapper';
let button = document.querySelector('button');

function getNumber() {
    wrapper.innerHTML = "";
    for (let i = 0; i < 6; i++) {
    let circleContainer = document.createElement('div');
    circleContainer.className = 'circle';
    circleContainer.innerText = getRandomNumber();
    wrapper.appendChild(circleContainer);
}
    main.appendChild(wrapper);
}
getNumber();

function getRandomNumber () {
    let randomNum = Math.floor(Math.random() * (99-1) + 1);
    return randomNum.toString().padStart(2, '0');

}

button.addEventListener('click', getNumber);






























