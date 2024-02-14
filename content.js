let adList = ['.fc-ab-root', '.fc-whitelist-root'];
let mutationFlag = false;

window.onload = function() {
  const mo = new MutationObserver(onMutation);

  observe();

  function onMutation(mutationsList, observer) {
    if (!mutationFlag) {
      mutationFlag = true;
      window.requestAnimationFrame(() => {
        mutationFlag = false;
        processMutations(mutationsList);
      });
    }
  }

  function processMutations(mutationsList) {
    let htmlElement = document.querySelector('html');
    let bodyElement = document.querySelector('body');
    for (let mutation of mutationsList) {
      for (let adSelector of adList) {
        let ads = mutation.target.querySelectorAll(adSelector);
        ads.forEach(ad => {
          ad.remove();
          htmlElement.style.overflow = 'unset';
          bodyElement.style.overflow = 'unset';
        });
      }
    }
  }

  function observe() {
    mo.observe(document, {
      subtree: true,
      childList: true,
    });
  }
}
