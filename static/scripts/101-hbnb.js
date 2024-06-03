// Wait for the DOM to be fully loaded
$(document).ready(function() {
    // Function to toggle reviews visibility
    function toggleReviews() {
        // Get the reviews container
        var reviewsContainer = $('.reviews-container');
        // Check if reviews are currently visible
        if (reviewsContainer.is(':visible')) {
            // Hide reviews and change the text to "show"
            reviewsContainer.hide();
            $('#toggle-reviews').text('show');
        } else {
            // Show reviews and change the text to "hide"
            reviewsContainer.show();
            $('#toggle-reviews').text('hide');
            // Fetch and display reviews
            fetchReviews();
        }
    }

    // Function to fetch and display reviews
    function fetchReviews() {
        // Make a GET request to fetch reviews
        $.ajax({
            type: 'GET',
            url: 'http://0.0.0.0:5001/api/v1/places/101/reviews/',
            success: function(data) {
                // Clear the existing reviews
                $('.review').remove();
                // Loop through the retrieved reviews and add them to the DOM
                data.forEach(function(review) {
                    $('.reviews-container').append('<div class="review">' + review.text + '</div>');
                });
            }
        });
    }

    // Listen for clicks on the toggle reviews button
    $('#toggle-reviews').click(function() {
        // Toggle reviews visibility
        toggleReviews();
    });

    // Call toggleReviews initially to hide reviews by default
    toggleReviews();
});
