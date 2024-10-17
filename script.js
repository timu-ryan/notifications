const button = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ul');

button.addEventListener('click', (e) => {
  e.preventDefault();
  const notificationText = input.value;
  console.log(notificationText)
  input.value = '';
  showNotification(notificationText);

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(notificationText));
  list.appendChild(li);
})



if (Notification.permission === 'default') {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            showNotification();
        }
    });
} else if (Notification.permission === 'granted') {
    showNotification();
}

// Step 2: Show the notification
function showNotification(notificationText) {
    const notification = new Notification('hi, this is from me', {
        body: notificationText ? notificationText : 'have a good day',
        icon: 'icon.png' // Optional icon
    });
    
    notification.onclick = function () {
        window.open('https://timu-ryan.github.io/notifications'); // Open a link on click
    };
    console.log(notification)
}
