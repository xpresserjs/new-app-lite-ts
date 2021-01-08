# Xpresser Typescript App (No Views) Boilerplate

![Alt text](https://cdn.jsdelivr.net/npm/xpresser/xpresser-logo-black.png "Xpresser Logo")

Example app with no views just an index routes that has a message for you.

### Use

1. Clone Or Download
2. Run `yarn` or `npm` install.
3. Run `npm run ts-dev` or `yarn run ts-dev`
4. check config in [config.ts](./config.ts)
5. Read [Xpresser Documentation](https://xpresserjs.com/typescript)

### Package Commands

```json
{
  "build": "xjs @stack tsc",
  "ts-watch": "tsc --watch",
  "ts-dev": "ts-node-dev --respawn --transpile-only app.ts",
  "start": "npm run build && node build/app.js",
  "start-dev": "nodemon build/app.js"
}
```

- **build**: Build Typescript files
- **ts-watch**: Compile typescript in realtime while watching or changes.
- **ts-dev**: Start app in typescript mode.
- **start**: Builds file and runs built file.
- **js-dev**: Uses `nodemon` to run the built file. This is useful when using tsc watch.

#### What next?

Please, Star Project :)
Thank you so much.
