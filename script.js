const $form = document.getElementById('form')
const $addURL = document.getElementById('add-url')
const $urlInputGroup = document.getElementById('url-input-group')
const $submitBtn = document.getElementById('submit-btn')

$form.addEventListener('submit', (evt) => {
    evt.preventDefault()

    var $urlInputFields = [...document.querySelectorAll('.url-input')]

    for (var i = 0; i < $urlInputFields.length; i++) {
        if ($urlInputFields[i].value.includes('#') == true) {
            alert("'#'' found inside your string");
        }
    }
})

$addURL.addEventListener('click', () => {
    const newURLInput = document.createElement('input')
    newURLInput.classList = 'url-input'
    newURLInput.type = 'url'
    newURLInput.placeholder = 'https://tinylink.now.sh'
    $urlInputGroup.appendChild(newURLInput)

    const newBR = document.createElement('br')
    $urlInputGroup.appendChild(newBR)

    $submitBtn.innerText = `Shorten `;
})