export const createWidget = (containerSelector) => {
  const container = document.querySelector(containerSelector);
  if (!container) {
    throw new Error(`Container element with selector ${containerSelector} not found.`);
  }

  const openLogin = ( { onLoginComplete } ) => {
    const iframe = document.createElement('iframe');
    iframe.src = 'http://localhost:5173/';
    container.innerHTML = '';
    container.appendChild(iframe);

    window.addEventListener('message', (event) => {
      if (event.source === iframe.contentWindow && event.data.type === 'LOGIN_COMPLETE') {
        onLoginComplete(event.data.userDetails);
      }
    });
  };

  const showInfo = () => {
    const iframe = document.createElement('iframe');
    iframe.src = 'http://localhost:5173/info';
    container.innerHTML = '';
    container.appendChild(iframe);
  };

  const sendDataToMainApp = (data) => {
    window.parent.postMessage({ type: 'DATA_FROM_WIDGET', payload: data }, '*');
  };

  return {
    openLogin,
    showInfo,
    sendDataToMainApp
  };
};
