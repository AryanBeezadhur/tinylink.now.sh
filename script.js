// Define global variables
const $form = document.getElementById('form')
const $addURL = document.getElementById('add-url')
const $urlInputGroup = document.getElementById('url-input-group')
const $submitBtn = document.getElementById('submit-btn')
var $urlInputFields = [...document.querySelectorAll('.url-input')]

$form.addEventListener('submit', (evt) => {
    evt.preventDefault()

    // Update $urlInputFields array
    $urlInputFields = [...document.querySelectorAll('.url-input')]

    for (var i = 0; i < $urlInputFields.length; i++) {

        if ($urlInputFields[i].value.includes('#') == true) {

            // Remove # character from URL, if present
            $urlInputFields[i].value = $urlInputFields[i].value.split('#')[0]

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

    // Update $urlInputFields array
    $urlInputFields = [...document.querySelectorAll('.url-input')]
    $submitBtn.innerText = `Shorten ${$urlInputFields.length} links`

})

$submitBtn.addEventListener('click', () => {

    // Create URL containing all links entered
    var urlToShorten = 'https://tinylink.now.sh/api?links='

    // Update $urlInputFields array
    $urlInputFields = [...document.querySelectorAll('.url-input')]

    for (var i = 0; i < $urlInputFields.length; i++) {

        urlToShorten += `${$urlInputFields[i].value},`

    }

    urlToShorten = urlToShorten.replace(/,\s*$/, "") // Remove trailing comma
    alert(urlToShorten)

    /*    // Create TinyURL
        fetch(`http://tinyurl.com/api-create.php?url=https://google.com`)
            .then(res => res.blob())
            .then(res => {
                alert(res.text())
            });
    */
})