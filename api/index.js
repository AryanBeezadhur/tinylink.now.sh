module.exports = (req, res) => {
    const {
        links
    } = req.query

    res.setHeader('Content-Type', 'text/html')

    if (!links) {
        return res.send(`
        <!DOCTYPE html>
        <html lang="en">

        <head>

            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <!-- Browser tab -->
            <title>TinyLink.now.sh - Shorten multiple links into one short URL</title>
            <link rel="shortcut icon" type="image/x-icon" href="assets/icon.svg" />

            <!-- SEO -->
            <meta name="description" content="Shorten multiple links into one short URL" />
            <meta name="title" content="TinyLink.now.sh" />
            <meta name="robots" content="index, follow" />

            <!-- OpenGraph -->
            <meta property="og:title" content="TinyLink.now.sh" />
            <meta property="og:image" content="https://tinylink.now.sh/assets/icon.svg" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://tinylink.now.sh" />
            <meta property="og:site_name" content="tinylink.now.sh" />
            <meta property="og:description" content="Shorten multiple links into one short URL" />

            <!-- Twitter -->
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@AryanBeezadhur" />
            <meta name="twitter:creator" content="@AryanBeezadhur" />
            <meta name="twitter:domain" content="tinylink.now.sh" />
            <meta name="twitter:title" content="TinyLink.now.sh" />
            <meta name="twitter:description" content="Shorten multiple links into one short URL" />
            <meta name="twitter:image" content="https://tinylink.now.sh/assets/icon.svg" />
            <meta name="twitter:image:alt" content="Shorten multiple links into one short URL" />
            <meta name="twitter:url" content="https://tinylink.now.sh" />

            <!-- CSS -->
            <link rel="stylesheet" href="style.css">

            <!-- Panelbear Analytics - We respect your privacy -->
            <script async src="https://cdn.panelbear.com/analytics.js?site=F0EY1FcEatt"></script>
            <script>
                window.panelbear = window.panelbear || function () { (window.panelbear.q = window.panelbear.q || []).push(arguments); };
                panelbear('config', { site: 'F0EY1FcEatt' });
            </script>

        </head>

        <body>

            <!-- Import JS -->
            <script src="https://cdn.jsdelivr.net/npm/sweetalert@2.1.2/dist/sweetalert.min.js"></script>
            <script>
                swal('400', 'Bad request', 'error').then(() => window.location.replace('/'))
            </script>

        </html>
        `)
    }

    const linksArray = links.split(',')

    function htmlEscape(text) {
        return (
            text.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;')
                .replace(/:/g, '&#58;')
        )
    }

    res.write(`
    <!DOCTYPE html>
    <html lang="en">

    <head>

        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <!-- Browser tab -->
        <title>TinyLink.now.sh|Shorten multiple links into one short URL</title>
        <link rel="shortcut icon" type="image/x-icon" href="../assets/icon.svg" />

        <!-- SEO -->
        <meta name="description" content="Shorten multiple links into one short URL" />
        <meta name="title" content="TinyLink.now.sh" />
        <meta name="robots" content="index, follow" />

        <!-- OpenGraph -->
        <meta property="og:title" content="TinyLink.now.sh" />
        <meta property="og:image" content="https://tinylink.now.sh/assets/icon.svg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tinylink.now.sh" />
        <meta property="og:site_name" content="tinylink.now.sh" />
        <meta property="og:description" content="Shorten multiple links into one short URL" />

        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AryanBeezadhur" />
        <meta name="twitter:creator" content="@AryanBeezadhur" />
        <meta name="twitter:domain" content="tinylink.now.sh" />
        <meta name="twitter:title" content="TinyLink.now.sh" />
        <meta name="twitter:description" content="Shorten multiple links into one short URL" />
        <meta name="twitter:image" content="https://tinylink.now.sh/assets/icon.svg" />
        <meta name="twitter:image:alt" content="Shorten multiple links into one short URL" />
        <meta name="twitter:url" content="https://tinylink.now.sh" />

        <!-- Stylesheet -->
        <link rel="stylesheet" href="style.css">

        <!-- Panelbear Analytics - We respect your privacy -->
        <script async src="https://cdn.panelbear.com/analytics.js?site=F0EY1FcEatt"></script>
        <script>
            window.panelbear = window.panelbear || function () { (window.panelbear.q = window.panelbear.q || []).push(arguments); };
            panelbear('config', { site: 'F0EY1FcEatt' });
        </script>

    </head>

    <body>

        <div id="container">
            <h1 class="api-page-element">
                <img src="assets/icon.svg" alt="Logo">
                <a onclick="panelbear('track', 'APIpageHeaderClicked');" href="https://tinylink.now.sh">TinyLink.now.sh</a>
            </h1>

            <h2 class="api-page-element">Saved links</h2>

            <ol>
	`)

    for (var i = 0; i < linksArray.length; i++) {
        res.write(`
            <li>
                <a onclick="panelbear('track', 'APIpageLinkClicked');" class="api-page-saved-link" href="${htmlEscape(linksArray[i])}">
                    ${htmlEscape(linksArray[i])}
                </a>
            </li>
		`)
    }

    res.write(`
            </ol>

            <footer class="api-page-element">
                <p>
                    Created by <a onclick="panelbear('track', 'APIpageFooterLinkClicked');" href="https://aryanbeezadhur.com">Aryan Beezadhur</a>
                </p>
            </footer>
        </div>

    </body>

    </html>
	`)

    res.end()
}
