# Doc Article Styles [![Build Status](https://travis-ci.org/helpscout/doc-article-styles.svg?branch=master)](https://travis-ci.org/helpscout/doc-article-styles)

Doc Article CSS for Web/Android/iOS

## Install

```
npm install @helpscout/doc-article-styles
```


## Get Started

After cloning this repo down, run:

```
npm install
```

Once everything is installed, run:

```
npm start
```

Check it out http://localhost:7008/ in your browser!


## Publishing

To publish and release a new version of Blue, run the following command:

```
npm run release
```

That's it! The script will take care of the rest (from testing to publishing). This will patch bump the version on Github and npm.

#### Additional options

| Command | Description|
| --- | --- |
| `npm run release:major` | Publish with a major version bump. `1.0.0` -> `2.0.0` |
| `npm run release:minor` | Publish with a minor version bump. `0.1.0` -> `0.2.0`|
| `npm run release:patch` | Publish with a patch version bump. `0.0.1` -> `0.0.1` |
