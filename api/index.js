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

	const linksArray = links.split(',')

	res.write(`

		<style>
			@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

			* {
				padding: 0;
				margin: 0;
				font-family: 'Inter', sans-serif;
				font-size: 2.5vh;
			}

			li {
				margin: 3vh;
				list-style: none;
			}

			li:before {
				content: '->';
				color: steelblue;
			}

			a {
				color: dodgerblue;
				text-decoration: none;
			}

			a:hover {
				text-decoration: underline;
			}
		</style>

	`)

	res.write(`<ul>`)

	for (var linksArrayIndex = 0; linksArrayIndex < linksArray.length; linksArrayIndex++) {
		res.write(`
			<li>
				<a href="${linksArray[linksArrayIndex]}">
					${linksArray[linksArrayIndex]}
				</a>
			</li>
		`)
	}

	res.write(`</ul>`)

	res.end()
}
