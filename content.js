let adList = ['.fc-ab-root', '.fc-whitelist-root'];

window.onload = function() {
  const mo = new MutationObserver(onMutation);

  observe();

  function onMutation() {
    const htmlElement = document.querySelector('html');
    const bodyElement = document.querySelector('body');

    adList.forEach(ele => {
      const adEle = document.querySelector(ele);
      if(adEle){
        adEle.remove();
        htmlElement.style.overflow = 'unset';
        bodyElement.style.overflow = 'unset';
      }
    })

  }

  function observe() {
    mo.observe(document, {
      subtree: true,
      childList: true,
    });
  }

}
