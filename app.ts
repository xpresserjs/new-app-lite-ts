// Import Xpresser
const xpresser = require("xpresser");

/**
 * Boot Xpresser with your config
 *
 * Get config from config.ts
 * See https://xpresserjs.com/configuration/
 */
const config = require("./config");

// Initialize Xpresser
const $ = xpresser(config)

// Initialize Typescript
$.initializeTypescript(__filename)


// Boot Xpresser
$.boot();

// END File
