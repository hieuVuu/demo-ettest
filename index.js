//Problem01
const listLocations = [{
        img: './resources/img/pic1.png',
        title: 'Maecenas a pharetra tellus',
        descriptions: ' Nulla et magna vitae est consectetur pharetra ac vel tellus. Pellentesque habitant morbi tristique senectus et netus 13 '
    },
    {
        img: './resources/img/pic2.png',
        title: 'Donec scelerisque sollicit',
        descriptions: ' Nulla et magna vitae est consectetur pharetra ac vel tellus. Pellentesque habitant morbi tristique senectus et netus 21 '
    },
    {
        img: './resources/img/pic3.png',
        title: 'Lorem ipsum dolor sit amet',
        descriptions: ' Nulla et magna vitae est consectetur pharetra ac vel tellus. Pellentesque habitant morbi tristique senectus et netus 12 '
    },
]

window.onload = listLocations.map((location) => {
    const locationWrapper = document.createElement('div');
    locationWrapper.classList.add('list-location--item');
    locationWrapper.innerHTML = `
    <img src="${location.img}" alt="" class="image-location">
    <div class="title-location">${location.title}</div>
    <i class="descriptions-location">
        ${location.descriptions} 
    </i>`
    document.querySelector('#list-location').appendChild(locationWrapper);
})



//Problem02
function arrayGenerator() {
    //Query get element;
    const btnGenerate = document.querySelector('#btn-generate');
    const resultElement = document.querySelector('#result');
    const inputArrayElement = document.querySelector('#array-input');
    var inputValue = ``;
    //Listen input changing
    inputArrayElement.addEventListener('change', (e) => {
        inputValue = e.target.value;
        if (inputValue[0] === '0') {
            return alert('Zero is not alow first!')
        };
    })

    //Validate press input
    inputArrayElement.onkeypress = function(e) {
        if (e.keyCode >= 48 && e.keyCode <= 57) {
            e.returnValue = true;
        } else {
            e.returnValue = false;
        }
    }

    //Handle click event
    if (btnGenerate) {
        btnGenerate.addEventListener('click', (e) => {
            e.preventDefault();
            var arrayLength = 0;
            var arrayResult = [];
            arrayLength = parseInt(inputValue);
            if (arrayLength > 999999) {
                return alert('Please retype a length less than one million');
            } else {
                for (let i = 1; i <= arrayLength; i++) {
                    arrayResult.push(Math.floor(Math.random() * arrayLength + 1))
                }
                //Inner result
                if (arrayLength > 1600) {
                    resultElement.style.fontSize = '5px';
                    resultElement.innerHTML = `[${arrayResult}]`;
                } else {
                    resultElement.style.fontSize = '13px';
                    resultElement.innerHTML = `[${arrayResult}]`;
                }
            }

        })
    }
}
arrayGenerator();