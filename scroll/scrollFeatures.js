function getNativeRect(selector) {
  return this.executeScript(`return document.querySelector('${selector}').getBoundingClientRect()`);
}

function getWindowHeight(selector) {
  return this.executeScript(`return window.innerHeight`);
}

async function scrollToElement(selector) {
  const { top, height } = await getNativeRect.call(this, selector);
  const windowHeight = await getWindowHeight.call(this);
  this.executeScript(`window.scrollTo({top: ${top - windowHeight / 2 + height / 2}, behavior: 'instant'})`);
}

const sleepTimeout = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function scrollAndClick(element, options = {}) {
  const { ms, ...scrollOptions } = {
    block: "center",
    ms: 1500,
    ...options,
  }

  await this.executeScript(`arguments[0].scrollIntoView(arguments[1])`, element, scrollOptions);
  await sleepTimeout(ms);
  await element.click();
}
module.exports = {scrollToElement, scrollAndClick};



