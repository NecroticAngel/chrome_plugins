(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/chunk-d8251103.js")
    );
  })().catch(console.error);

})();
