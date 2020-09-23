const $form = document.getElementById('form')
const $addURL = document.getElementById('add-url')
const $urlInputGroup = document.getElementById('url-input-group')
const $submitBtn = document.getElementById('submit-btn')
var $urlInputFields = [...document.querySelectorAll('.url-input')]

var updateURLInputFields = () => {
    $urlInputFields = [...document.querySelectorAll('.url-input')]
}

var copyText = (textToCopy) => {
    const tempTextarea = document.createElement('textarea')
    tempTextarea.value = textToCopy
    document.body.appendChild(tempTextarea)
    tempTextarea.select()
    document.execCommand('copy')
    document.body.removeChild(tempTextarea)
}

$form.addEventListener('submit', (evt) => {

    evt.preventDefault()
    updateURLInputFields()

    for (var i = 0; i < $urlInputFields.length; i++) {

        if ($urlInputFields[i].value.includes('#') == true) {
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

    const newLineBreak = document.createElement('br')
    $urlInputGroup.appendChild(newLineBreak)

    updateURLInputFields()
    $submitBtn.innerText = `Shorten ${$urlInputFields.length} links`

})

$submitBtn.addEventListener('click', async () => {

    var urlToShorten
    updateURLInputFields()

    for (var i = 0; i < $urlInputFields.length; i++) {

        if ($urlInputFields[i].value != '') {
            urlToShorten += `${$urlInputFields[i].value},`
        }

    }

    // Abort if urlToShorten is still undefined
    if (urlToShorten == undefined) {
        return alert('Please enter at least 1 link')
    }

    // Add Tinylink API URL, remove trailing comma if present
    urlToShorten = 'https://tinylink.now.sh/api?links=' + urlToShorten
    urlToShorten = urlToShorten.replace(/,\s*$/, "")

    try {

        var res = await fetch(`https://tinyurl.com/api-create.php?url=${urlToShorten}`)
        var TinyURL = await res.text()
        $submitBtn.style = 'height: 60px'
        $submitBtn.innerHTML = `${TinyURL} <br /><br /> - Link copied to clipboard!`
        copyText(TinyURL)

    } catch (error) {
        alert(error)
    }
})
