// snowpack.config.cjs

// The added "@type" comment will enable TypeScript type information via VSCode, etc.

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  // Example: expanded object notation "mount" usage
  "mount": {
    // Same behavior as the "src" example above:
    "src": { url: "/Website/dist" },
    // Mount "public" to the root URL path ("/*") and serve files with zero transformations:
    "public": { url: "/Website/", static: true, resolve: false }
  },
  plugins: [
    /* ... */
  ],
};
