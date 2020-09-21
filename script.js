const $form = document.getElementById('form')
const $addURL = document.getElementById('add-url')
const $urlInputGroup = document.getElementById('url-input-group')
const $submitBtn = document.getElementById('submit-btn')

$form.addEventListener('submit', (evt) => {
    evt.preventDefault()

    /*for (var i = 0; i < 5; i++) {
    }*/
})

$addURL.addEventListener('click', () => {
    $urlInputGroup.innerHTML += `<input class="url-input" type="url" placeholder="https://tinylink.now.sh" /> <br />`
    $submitBtn.innerText = `Shorten `;
})