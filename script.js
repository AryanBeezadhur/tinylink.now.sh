const $form = document.getElementById('form')
const $addNew = document.getElementById('add-url')
const $urlInputGroup = document.getElementById('url-input-group')

$form.addEventListener('submit', (evt) => {
    evt.preventDefault()

    /*for (var i = 0; i < 5; i++) {
    }*/
})

$addNew.addEventListener('click', () => {
    $urlInputGroup.innerHTML += `<input class="url-input" type="url" placeholder="https://tinylink.now.sh" /> <br />`
})