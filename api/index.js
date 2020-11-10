module.exports = (req, res) => {
    const {
        links
    } = req.query

    res.setHeader('Content-Type', 'text/html')

    if (links == undefined || links == '') {
        return res.send(`
			<script>
				alert('Error 502: Bad Gateway')
				window.location.replace('/')
			</script>
		`)
    }

    const linksArray = links.split(',')

    function htmlEscape(text) {
        return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/:/g, '&#58;')
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

			<!-- GoSquared -->
			<script>
				!function (g, s, q, r, d) {
					r = g[r] = g[r] || function () {
						(r.q = r.q || []).push(
							arguments)
					}; d = s.createElement(q); q = s.getElementsByTagName(q)[0];
					d.src = '//d1l6p2sc9645hc.cloudfront.net/tracker.js'; q.parentNode.
						insertBefore(d, q)
				}(window, document, 'script', '_gs');
		
				_gs('GSN-586832-N');
				_gs('set', 'useCookies', false);
			</script>

		</head>

		<body>

			<div id="container">

				<h1 class="api-page-element">
					<img src="assets/icon.svg" alt="Logo">
					<a onclick="_gs('event', 'TinyLink.now.sh visited from API page');" href="https://tinylink.now.sh">TinyLink.now.sh</a>
				</h1>

				<h2 class="api-page-element">Saved links</h2>

				<ol>
	`)

    for (var i = 0; i < linksArray.length; i++) {
        res.write(`
					<li>
						<a onclick="_gs('event', 'Saved link on API page clicked');" class="api-page-saved-link" href="${htmlEscape(linksArray[i])}">
							${htmlEscape(linksArray[i])}
						</a>
					</li>
		`)
    }

    res.write(`
				</ol>

				<footer class="api-page-element">
					<p>
						Created by <a onclick="_gs('event', 'AryanBeezadhur.com visited');" href="https://aryanbeezadhur.com">Aryan Beezadhur</a>
					</p>
				</footer>

			</div>

		</body>

		</html>
	`)

    res.end()
}
