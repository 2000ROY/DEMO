document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("send-message-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevents the default form submission
  
      const formData = new FormData(form);
      const jsonData = {};
  
      formData.forEach((value, key) => {
        jsonData[key] = value;
      });
  
      jsonData['method'] = 1;
      jsonData['dialCode'] = 91;
  
      const xOriginKey = 'gAAAAABj4fitdXGtaMIU4-VcP36xx0ylGf8mrUbBA3IV3-x0dbAbhWRVnqWUVIF62YaMar21HM-uEtg_k0cWZ7lsJ-PCpsZTgZiyevE9v95xtUaBtTPOWbc=';
  
      const local = 'http://192.168.29.168/api/resource/sendMessage';
  
      fetch(local, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Xen-Origin': xOriginKey,
              'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify(jsonData)
      })
      .then(response => {
          if (!response.ok) {
              throw new Error(response.statusText);
          }
          return response.json();
      })
      .then(data => {
          displayResponse(data);
      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
    });
  
    function displayResponse(data) {
      const popupContainer = document.createElement("div");
      popupContainer.id = "popupContainer";
  
      const closePopupBtn = document.createElement("span");
      closePopupBtn.id = "closePopupBtn";
      closePopupBtn.textContent = "×";
      closePopupBtn.addEventListener("click", function () {
          popupContainer.style.display = "none";
      });
  
      const apiResponseMessage = document.createElement("div");
      apiResponseMessage.id = "apiResponseMessage";
      apiResponseMessage.textContent = data.message;
  
      popupContainer.appendChild(closePopupBtn);
      popupContainer.appendChild(apiResponseMessage);
  
      document.body.appendChild(popupContainer);
  
      popupContainer.style.display = "block";
    }
  });