//import { OpenStreetMapProvider } from 'leaflet-geosearch';

$(document).ready(function () {
    var mymap = L.map('mapid').setView([48.153288, 17.073555], 16);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZGFuaWVsajk4IiwiYSI6ImNrZ3VweHZkeDBxZDUydW5hZDJ1ajJ0OHcifQ.QljGSRHBoGnD_YsGC6PwVg'
    }).addTo(mymap);

    var myPoints = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                17.072550058364868,
                                48.151807510271
                            ],
                            [
                                17.073869705200195,
                                48.151807510271
                            ],
                            [
                                17.073869705200195,
                                48.1519685614724
                            ],
                            [
                                17.072550058364868,
                                48.1519685614724
                            ],
                            [
                                17.072550058364868,
                                48.151807510271
                            ]
                        ]
                    ]
                },
                "properties": {
                    "blok": "Blok A",
                    "ustav":"Ústav automobilovej mechatroniky"

                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                17.07299530506134,
                                48.15232645122139
                            ],
                            [
                                17.074357867240906,
                                48.15232645122139
                            ],
                            [
                                17.074357867240906,
                                48.15246602754695
                            ],
                            [
                                17.07299530506134,
                                48.15246602754695
                            ],
                            [
                                17.07299530506134,
                                48.15232645122139
                            ]
                        ]
                    ]
                },
                "properties": {
                    "blok": "Blok B",
                    "ustav":"Ústav elektroenergetiky a aplikovanej elektrotechniky"

                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                17.072812914848328,
                                48.152831071526535
                            ],
                            [
                                17.073875069618225,
                                48.152831071526535
                            ],
                            [
                                17.073875069618225,
                                48.15297780415916
                            ],
                            [
                                17.072812914848328,
                                48.15297780415916
                            ],
                            [
                                17.072812914848328,
                                48.152831071526535
                            ]
                        ]
                    ]
                },
                "properties": {
                    "blok": "Blok C",
                    "ustav":"Ústav elektrotechniky"

                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                17.073199152946472,
                                48.15333926568372
                            ],
                            [
                                17.074379324913025,
                                48.15333926568372
                            ],
                            [
                                17.074379324913025,
                                48.15348241805886
                            ],
                            [
                                17.073199152946472,
                                48.15348241805886
                            ],
                            [
                                17.073199152946472,
                                48.15333926568372
                            ]
                        ]
                    ]
                },
                "properties": {
                    "blok": "Blok D",
                    "ustav":"Ústav telekomunikácií"

                }
            },{
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                17.072812914848328,
                                48.153847454807824
                            ],
                            [
                                17.073896527290344,
                                48.153847454807824
                            ],
                            [
                                17.073896527290344,
                                48.153983448226825
                            ],
                            [
                                17.072812914848328,
                                48.153983448226825
                            ],
                            [
                                17.072812914848328,
                                48.153847454807824
                            ]
                        ]
                    ]
                },
                "properties": {
                    "blok": "Blok E",
                    "ustav":"Technologický inštitút športu"

                }
            }
        ]
    };



    var myLayer = L.geoJSON(myPoints, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<b>FEI STU</b><br>"+feature.properties.blok+"<br>"+feature.properties.ustav);
        }
    }).addTo(mymap);
    myLayer.addData(myPoints);


    var busIcon = L.icon({
        iconUrl: 'bus.png',

        iconSize:     [30, 30], // size of the icon
        iconAnchor:   [0, 30], // point of the icon which will correspond to marker's location
        popupAnchor:  [15, -20] // point from which the popup should open relative to the iconAnchor
    });

    var trolleyIcon = L.icon({
        iconUrl: 'trolley.png',

        iconSize:     [30, 30], // size of the icon
        iconAnchor:   [0, 30], // point of the icon which will correspond to marker's location
        popupAnchor:  [15, -20] // point from which the popup should open relative to the iconAnchor
    });

    L.marker([48.1540634,17.0750543],{icon:busIcon}).addTo(mymap).bindPopup("<b>ZOO</b><br>Autobusy: 31 , 39");
    L.marker([48.1546324,17.0743121],{icon:busIcon}).addTo(mymap).bindPopup("<b>ZOO</b><br>Autobusy: 31 , 39");
    L.marker([48.1546337,17.0756473],{icon:busIcon}).addTo(mymap).bindPopup("<b>ZOO</b><br>Autobusy: 30, 32, 37, 92, 192");
    L.marker([48.1541187,17.0767499],{icon:busIcon}).addTo(mymap).bindPopup("<b>ZOO</b><br>Autobusy: 30, 32, 37, 92, 192");
    L.marker([48.1483037,17.0718782],{icon:busIcon}).addTo(mymap).bindPopup("<b>Botanická Záhrada</b><br>Autobusy: 29, 32, N29, N33, N34");
    L.marker([48.1479472,17.0723412],{icon:busIcon}).addTo(mymap).bindPopup("<b>Botanická Záhrada</b><br>Autobusy: 29, 32, N29, N33, N34");

    L.marker([48.1480948,17.0715477],{icon:trolleyIcon}).addTo(mymap).bindPopup("<b>Botanická Záhrada</b><br>Električky: 4, 9");
    L.marker([48.1482257,17.0722769],{icon:trolleyIcon}).addTo(mymap).bindPopup("<b>Botanická Záhrada</b><br>Električky: 4, 9");



    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
    L.Control.geocoder().addTo(mymap);

    L.Routing.control({
        waypoints: [
            L.latLng(),
            L.latLng(48.1518239,17.0734078)
        ],
        routeWhileDragging: true,
        geocoder: L.Control.Geocoder.nominatim()
    }).addTo(mymap);


});