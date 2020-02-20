/**********************************************
 * 			SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected

/**********************************************
 * 			CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).

    mapboxgl.accessToken = mapboxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: "mapbox://styles/mapbox/satellite-streets-v11",
        zoom: 10,
        center: [-98.4916, 29.4252]
        // center: [some other coords]
    });



/**********************************************
 * 					MARKERS
 *********************************************/
// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map


// TODO TOGETHER: Add a marker to the map that will mark the Alamo.


    var markerOptions = {
    //color of marker
        color: "rgb(58, 137, 148)",
    //made marker draggable
        draggable: true,
    };

    var AlamoMarker = new mapboxgl.Marker(markerOptions)
        .setLngLat([-98.486209, 29.426007])
        .addTo(map);

    var RiverstoneMarker = new mapboxgl.Marker(markerOptions)
        .setLngLat([-98.581679, 29.524028])
        .addTo(map);


/**********************************************
 * 					POPUPS
 *********************************************/
// Popups are the info boxes that appear on a map and may describe a given location.
// Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup


// TODO TOGETHER: Add a popup to the map over codeup. Set the html as a paragraph that says "Codeup Rocks!"

    // var popup = new mapboxgl.Popup()
    // //Codeup's coords
    //     .setLngLat([-98.4916, 29.4260])
    //     .setHTML("<h1>Codeup Rocks!</h1>")
    //     .addTo(map);

// TODO TOGETHER: Comment out the popup we just added. Add a popup to the alamo marker.

    var AlamoPopup = new mapboxgl.Popup()
        .setHTML("<h1>Remember the Alamo!</h1>")
        .addTo(map);

    AlamoMarker.setPopup(AlamoPopup);

// TODO: Review the popup docs. What are some additional options we can pass to the popup?
// TODO: Try setting the text by using ".setText()" instead of ".setHTML()"



/**********************************************
 * 					Geocoder
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding


// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup. Comment out previous map code.

    geocode("600 Navarro St, San Antonio, TX, 78205", mapboxToken).then(function (result){
        console.log(result);
        // map.setCenter(result);
        map.flyTo({center: result, zoom: 15});
    });

//TODO: Using the geocode method above, add a marker at Codeup to the map
//TODO: Instead of setCenter try using map.jumpTo()
//TODO: Instead of setCenter try using map.flyTo()



// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -98.4861, lat: 29.4260} to get a physical address for the alamo

    // reverseGeocode({lng: -98.4861, lat: 29.4260}, mapboxToken).then(function (result){
    //     console.log(result);
    // });


// TODO: Reverse geocode coordinates of your choice using the reverse geocode method

