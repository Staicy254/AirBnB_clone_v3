// Wait for the DOM to be fully loaded
$(document).ready(function() {
    // Make a POST request to the places_search API endpoint
    $.ajax({
        type: 'POST',
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        contentType: 'application/json',
        data: JSON.stringify({}),
        success: function(response) {
            // Loop through the places returned from the API
            response.forEach(function(place) {
                // Create an article tag representing each place and append it to the section.places
                var article = $('<article></article>');
                article.append('<div class="title_box"><h2>' + place.name + '</h2><div class="price_by_night">$' + place.price_by_night + '</div></div>');
                article.append('<div class="information"><div class="max_guest">' + place.max_guest + ' Guest' + (place.max_guest !== 1 ? 's' : '') + '</div><div class="number_rooms">' + place.number_rooms + ' Bedroom' + (place.number_rooms !== 1 ? 's' : '') + '</div><div class="number_bathrooms">' + place.number_bathrooms + ' Bathroom' + (place.number_bathrooms !== 1 ? 's' : '') + '</div></div>');
                article.append('<div class="description">' + place.description + '</div>');
                $('.places').append(article);
            });
        }
    });
});
