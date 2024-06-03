// Wait for the DOM to be fully loaded
$(document).ready(function() {
    // Define a function to make the places_search API request with the list of amenities, cities, and states
    function searchPlaces() {
        // Array to store the checked amenities, cities, and states
        var amenities = [];
        var cities = [];
        var states = [];
        // Loop through all the checkboxes with the class 'amenity'
        $('.amenity input[type="checkbox"]').each(function() {
            // If the checkbox is checked, add its data-id to the amenities array
            if ($(this).is(':checked')) {
                amenities.push($(this).data('id'));
            }
        });
        // Loop through all the checkboxes with the class 'city'
        $('.city input[type="checkbox"]').each(function() {
            // If the checkbox is checked, add its data-id to the cities array
            if ($(this).is(':checked')) {
                cities.push($(this).data('id'));
            }
        });
        // Loop through all the checkboxes with the class 'state'
        $('.state input[type="checkbox"]').each(function() {
            // If the checkbox is checked, add its data-id to the states array
            if ($(this).is(':checked')) {
                states.push($(this).data('id'));
            }
        });
        // Make a POST request to the places_search API endpoint
        $.ajax({
            type: 'POST',
            url: 'http://0.0.0.0:5001/api/v1/places_search/',
            contentType: 'application/json',
            data: JSON.stringify({
                amenities: amenities,
                cities: cities,
                states: states
            }),
            success: function(data) {
                // Clear the existing places
                $('.places').empty();
                // Loop through the retrieved places and add them to the DOM
                data.forEach(function(place) {
                    $('.places').append('<article><div class="title_box"><h2>' + place.name + '</h2><div class="price_by_night">$' + place.price_by_night + '</div></div><div class="information"><div class="max_guest">' + place.max_guest + ' Guest' + (place.max_guest != 1 ? 's' : '') + '</div><div class="number_rooms">' + place.number_rooms + ' Bedroom' + (place.number_rooms != 1 ? 's' : '') + '</div><div class="number_bathrooms">' + place.number_bathrooms + ' Bathroom' + (place.number_bathrooms != 1 ? 's' : '') + '</div></div><div class="description">' + place.description + '</div></article>');
                });
            }
        });
    }

    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(function() {
        // Call the searchPlaces function when any checkbox is changed
        searchPlaces();
    });

    // Listen for clicks on the Search button
    $('#search_button').click(function() {
        // Call the searchPlaces function when the Search button is clicked
        searchPlaces();
    });

    // Call the searchPlaces function initially to load the places based on the default filters
    searchPlaces();
});
