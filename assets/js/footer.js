  // Select all elements with the class play-button
  document.querySelectorAll('.play-button').forEach(function(button) {
    button.addEventListener('click', function() {
        // Get the modal and iframe
        var modal = document.getElementById('myModal');
        var iframe = document.getElementById('videoFrame');

        // Open the modal and set the video source with autoplay
        modal.style.display = 'flex';
        iframe.src = 'https://www.youtube.com/embed/AQ_rtt0uQ8A?si=bEBS4ZA1qXVm2zwX'; // Replace with your video ID
    });
});

// Close the modal when the user clicks on the close button
document.querySelectorAll('.close-1').forEach(function(span) {
    span.addEventListener('click', function() {
        var modal = document.getElementById('myModal');
        var iframe = document.getElementById('videoFrame');

        modal.style.display = 'none';
        iframe.src = ''; // Stop the video
    });
});

// Close the modal when the user clicks outside the modal content
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    var iframe = document.getElementById('videoFrame');

    if (event.target == modal) {
        modal.style.display = 'none';
        iframe.src = ''; // Stop the video
    }
}