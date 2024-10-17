const button = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ul');
const permissionButton = document.querySelector('.permission-button');

button.addEventListener('click', (e) => {
  e.preventDefault();
  const notificationText = input.value;
  input.value = '';
  showNotification(notificationText);

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(notificationText));
  list.appendChild(li);
})

permissionButton.addEventListener('click', (e) => {
  e.preventDefault();
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
        showNotification();
    }
  });
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
    const notification = new Notification('hi, this is from me, Tim!', {
        body: notificationText ? notificationText : 'have a good day! (empty message)',
        // icon: 'icon.png' // Optional icon
    });
    
    notification.onclick = function () {
        window.open('https://timu-ryan.github.io/notifications'); // Open a link on click
    };
    console.log(notification)
}
