# FONT GEN

Generate WEB fonts from .ttf / .otf files

## Requires

1. MacOs
2. Node v18.12.1
3. [Brew](https://brew.sh/)
4. `brew install fontforge ttfautohint ttf2eot bat Caskroom/cask/xquartz`
5. `brew install --cask phantomjs`

Place `.ttf / .otf` fonts in `./src` run `yarn gen`. Fonts generated in `./dest`.
