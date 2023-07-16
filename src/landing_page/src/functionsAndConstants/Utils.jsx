export const deviceType = () => {
  const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

export const scrollToBottom = (distanceFromBottom = 0) => {
  window.scrollTo({
    top: document.body.scrollHeight - distanceFromBottom,
    left: 0,
    behavior: 'smooth'
  });
}

export const getCurrentURL = () => {
  return window.location.href
};

