(function() {
    // chat with us button
    const button = document.createElement('button');
    button.innerHTML = 'Chat with us';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.backgroundColor = '#007bff';
    button.style.color = '#ffffff';
    button.style.border = 'none';
    button.style.borderRadius = '20px';
    button.style.padding = '10px 20px';
    button.style.cursor = 'pointer';
    button.style.fontSize = '16px';
    button.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.1)';
    button.style.zIndex = '1000';

    document.body.appendChild(button);

    // iframe
    const iframeContainer = document.createElement('div');
    iframeContainer.style.position = 'fixed';
    iframeContainer.style.bottom = '20px';
    iframeContainer.style.right = '20px';
    iframeContainer.style.width = '400px';
    iframeContainer.style.height = '500px';
    iframeContainer.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.1)';
    iframeContainer.style.borderRadius = '10px';
    iframeContainer.style.display = 'none';
    iframeContainer.style.zIndex = '1000';
    iframeContainer.style.overflow = 'hidden';

    const iframe = document.createElement('iframe');
    iframe.src = 'https://chatbot-frontend-mu.vercel.app/';  
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';

    // Close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '✖';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.backgroundColor = 'transparent';
    closeButton.style.border = 'none';
    closeButton.style.color = '#333';
    closeButton.style.fontSize = '20px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.zIndex = '1001';

    iframeContainer.appendChild(iframe);
    iframeContainer.appendChild(closeButton);
    document.body.appendChild(iframeContainer);

    // Chatbox visibility toggle
    button.addEventListener('click', () => {
        iframeContainer.style.display = iframeContainer.style.display === 'none' ? 'block' : 'none';
    });
    closeButton.addEventListener('click', () => {
        iframeContainer.style.display = 'none';
    });
})();
