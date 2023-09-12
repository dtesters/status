document.addEventListener("DOMContentLoaded", function () {
    const statusList = document.getElementById("status-list");

    // Function to fetch and display status updates
    function fetchStatusUpdates() {
        // Replace 'YOUR_API_URL' with the actual URL of your status API
        fetch('YOUR_API_URL')
            .then(response => response.json())
            .then(data => {
                // Clear previous updates
                statusList.innerHTML = '';

                // Display each status update
                data.forEach(update => {
                    const updateItem = document.createElement('div');
                    updateItem.classList.add('update-item');
                    updateItem.innerHTML = `<p>${update.message}</p><p>${update.timestamp}</p>`;
                    statusList.appendChild(updateItem);
                });
            })
            .catch(error => {
                console.error('Error fetching status updates:', error);
            });
    }

    // Fetch status updates initially and refresh every 30 seconds
    fetchStatusUpdates();
    setInterval(fetchStatusUpdates, 30000);
});
