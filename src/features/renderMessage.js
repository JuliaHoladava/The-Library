export const renderMessage = (container, message) => {
  container.textContent = '';
  const messageElement = document.createElement('p');
  messageElement.textContent = message;

  container.appendChild(messageElement);
};
