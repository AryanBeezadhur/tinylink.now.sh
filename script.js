const $form = document.getElementById('form')
const $addURL = document.getElementById('add-url')
const $urlInputGroup = document.getElementById('url-input-group')
const $submitBtn = document.getElementById('submit-btn')
var $urlInputFields = [...document.querySelectorAll('.url-input')]

function updateURLInputFields() {
    $urlInputFields = [...document.querySelectorAll('.url-input')]
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

    if (!urlToShorten) {
        return swal('Something went wrong', 'Please enter at least one link', 'error')
    }

    urlToShorten = `https://tinylink.now.sh/api?links=${urlToShorten}`
    urlToShorten = urlToShorten.replace(/,\s*$/, '')
    if (urlToShorten.includes('undefined') == true) {
        urlToShorten = urlToShorten.replace('undefined', '')
    }

    try {
        var res = await fetch(`https://tinyurl.com/api-create.php?url=${urlToShorten}`)
        var shortenedLink = await res.text()
        swal({
            title: 'Shortened!',
            text: shortenedLink,
            icon: '/assets/icon.svg',
            buttons: {
                copy: {
                    text: 'Copy',
                    value: 'copy'
                },
                close: {
                    text: 'Close',
                    value: null
                }
            }
        }).then((value) => {
            if (value === 'copy') {
                const hiddenBtn = document.createElement('button')
                hiddenBtn.style = 'opacity: 0'
                hiddenBtn.className = 'hiddenBtn'
                hiddenBtn.dataset.clipboardText = shortenedLink
                document.body.appendChild(hiddenBtn)
                new ClipboardJS('.hiddenBtn')
                hiddenBtn.click()
                document.body.removeChild(hiddenBtn)
            }
        })
    } catch (error) {
        swal('Something went wrong!', error.message, 'error')
    }
})
