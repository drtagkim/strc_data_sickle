function sleep(ms) {
    return new Promise(resolve=>setTimeout(resolve, ms));
  }
(async function() {
    await sleep(2000);
})();
  