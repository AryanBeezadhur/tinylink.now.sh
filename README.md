# TinyLink.now.sh
Shorten multiple links into one short URL. Powered by [TinyURL](https://tinyurl.com).

## How it works

Built on [Node.js](https://nodejs.org) and [Express](https://expressjs.com).

Powered by [Vercel Serverless Functions](https://vercel.com/docs/serverless-functions/introduction), which runs on [AWS Lambda](https://aws.amazon.com/lambda).

## Try it locally

You need [Node.js](https://nodejs.org) and [Git](https://git-scm.com) installed and a [Vercel account](https://vercel.com/signup).

Install the Vercel CLI from npm:

```bash
npm i -g vercel
```

Log in to your Vercel account from the CLI:

```bash
vercel login
```

Clone this repository:

```bash
git clone https://github.com/AryanBeezadhur/tinylink.now.sh.git
```

Start a local development server on port `localhost:3000`:

```bash
vercel dev
```

Go to [localhost:3000](http://localhost:3000) and try it out locally!

## License

The [GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0).

Summary:

> GNU GPLv3
>
> Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.

Read full license at [LICENSE](LICENSE).
