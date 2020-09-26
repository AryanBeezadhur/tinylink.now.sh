module.exports = (req, res) => {
	const {
		links
	} = req.query

	res.setHeader('Content-Type', 'text/html')

	if (links == undefined) {
		return res.send(`
			<script>
				alert('Error 502: Bad Gateway')
				window.location.replace('./')
			</script>
		`)
	}

	// Sanitise links
	var sanitisedLinks = links
	while (sanitisedLinks.includes('<') == true) {
		sanitisedLinks = sanitisedLinks.replace('<', '')
	}
	while (sanitisedLinks.includes('>') == true) {
		sanitisedLinks = sanitisedLinks.replace('>', '')
	}
	while (sanitisedLinks.includes('"') == true) {
		sanitisedLinks = sanitisedLinks.replace('"', '')
	}
	while (sanitisedLinks.toLowerCase().includes('javascript:') == true) {
		sanitisedLinks = sanitisedLinks.toLowerCase().replace('javascript:', '')
	}

	const linksArray = sanitisedLinks.split(',')

	res.write(`
		<!DOCTYPE html>
		<html lang="en">

		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			<!-- Browser tab -->
			<title>TinyLink.now.sh|Shorten multiple links into one short URL</title>
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

			<!-- Stylesheet -->
			<link rel="stylesheet" href="style.css">

			<!-- GoSquared analytics -->
			<script>
				!function (g, s, q, r, d) {
					r = g[r] = g[r] || function () {
						(r.q = r.q || []).push(
							arguments)
					}; d = s.createElement(q); q = s.getElementsByTagName(q)[0];
					d.src = '//d1l6p2sc9645hc.cloudfront.net/tracker.js'; q.parentNode.
						insertBefore(d, q)
				}(window, document, 'script', '_gs');

				_gs('GSN-777257-T');
				_gs('set', 'anonymizeIP', true);
			</script>

		</head>

		<body>

			<div id="container">

				<h1 class="api-page-element">
					<img src="assets/icon.svg" alt="Logo">
					<a href="https://tinylink.now.sh">TinyLink.now.sh</a>
				</h1>

				<h2 class="api-page-element">Saved links</h2>

				<ol>
	`)

	for (var linksArrayIndex = 0; linksArrayIndex < linksArray.length; linksArrayIndex++) {
		res.write(`
			<li>
				<a class="api-page-saved-link" href="${linksArray[linksArrayIndex]}">
					${linksArray[linksArrayIndex]}
				</a>
			</li>
		`)
	}

	res.write(`
				</ol>

				<footer class="api-page-element">
					<p>
						Created by <a href="https://aryanbeezadhur.com">Aryan Beezadhur</a>
					</p>
				</footer>
			</div>
	`)

	res.write(`
		</body>

		</html>
	`)

	res.end()
}
