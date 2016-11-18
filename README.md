# iGP Site Provider OpenAPI Specification
[![Build Status](https://travis-ci.org/igp-tech/igp-site-provider-doc.svg?branch=master)](https://travis-ci.org/igp-tech/igp-site-provider-doc)


![Logo](https://cloud.githubusercontent.com/assets/23325219/20082512/9d16db78-a556-11e6-828d-d22db7cb46f1.png)

## Links

- Documentation(ReDoc): https://igp-tech.github.io/igp-site-provider-doc/
- SwaggerUI: https://igp-tech.github.io/igp-site-provider-doc/swagger-ui/
- Look full spec:
    + JSON https://igp-tech.github.io/igp-site-provider-doc/swagger.json
    + YAML https://igp-tech.github.io/igp-site-provider-doc/swagger.yaml
- Preview spec version for branch `[branch]`: https://igp-tech.github.io/igp-site-provider-doc/preview/[branch]

**Warning:** All above links are updated only after Travis CI finishes deployment

## Working on specification
### Install

1. Install [Node JS](https://nodejs.org/)
2. Clone repo and `cd`
    + Run `npm install`

### Usage

1. Run `npm start`
2. Checkout console output to see where local server is started. You can use all [links](#links) (except `preview`) by replacing https://igp-tech.github.io/igp-site-provider-doc/ with url from the message: `Server started <url>`
3. Make changes using your favorite editor or `swagger-editor` (look for URL in console output)
4. All changes are immediately propagated to your local server, moreover all documentation pages will be automagically refreshed in a browser after each change
**TIP:** you can open `swagger-editor`, documentation and `swagger-ui` in parallel
5. Once you finish with the changes you can run tests using: `npm test`
6. Share you changes with the rest of the world by pushing to GitHub :smile:
