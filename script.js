let notButtonClickCount = 0;

function getRandomCoordinate(max) {
    return Math.floor(Math.random() * max);
}

function changePosition() {
    notButtonClickCount++;

    if (notButtonClickCount % 2 === 0) {
        document.getElementById('notButton').style.order = '0';
    } else {
        const maxX = window.innerWidth - 150; // Adjust the value as needed
        const maxY = window.innerHeight - 50; // Adjust the value as needed

        const newX = getRandomCoordinate(maxX);
        const newY = getRandomCoordinate(maxY);

        const notButton = document.getElementById('notButton');
        notButton.style.position = 'absolute';
        notButton.style.left = `${newX}px`;
        notButton.style.top = `${newY}px`;
        notButton.style.transition = 'left 0.5s ease-in-out, top 0.5s ease-in-out'; // Smooth transition
    }
}

function changeImage() {
    const image = document.getElementById('image');
    const loveMessage = document.getElementById('loveMessage');
    const yesButton = document.getElementById('yesButton');
    const notButton = document.getElementById('notButton');

    // Replace the image and show the "I love you" message
    image.src = 'sticker_17.jpg'; // Replace with the actual URL of the new image
    loveMessage.style.display = 'block';

    // Optionally, you can hide the buttons after a few seconds
    setTimeout(() => {
        yesButton.style.display = 'none';
        notButton.style.display = 'none';
        
    }, 1000); // Hide the buttons and message after 5 seconds (adjust as needed)
}
