// Wait for DOM to be fully loaded
$(document).ready(function() {
    // Initialize an empty array to store checked Amenity IDs
    var checkedAmenities = [];

    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(function() {
        // Get the Amenity ID from the checkbox
        var amenityId = $(this).data('id');

        // Check if the checkbox is checked
        if ($(this).is(':checked')) {
            // Add the Amenity ID to the checkedAmenities array if it's not already present
            if (checkedAmenities.indexOf(amenityId) === -1) {
                checkedAmenities.push(amenityId);
            }
        } else {
            // Remove the Amenity ID from the checkedAmenities array
            var index = checkedAmenities.indexOf(amenityId);
            if (index !== -1) {
                checkedAmenities.splice(index, 1);
            }
        }

        // Update the h4 tag inside the div Amenities with the list of Amenities checked
        var amenitiesList = checkedAmenities.join(', ');
        $('.amenities h4').text(amenitiesList);
    });
});
