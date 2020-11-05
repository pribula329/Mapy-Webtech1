var mymap = L.map('mapid').setView([48.1519638, 17.0729841], 20);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibHVreTMyOSIsImEiOiJja2d3MnY5cnIwNjQxMnlxaDBzM2t5MjZqIn0.HS1KhMOKpzwDwVnmsWtX3w'
}).addTo(mymap);

var popup = L.popup();

var blokA ={
    "type": "FeatureCollection",
    "features": [
    {
        "type": "Feature",
        "properties": {"Description":"ahoj"},
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [
                        17.07253932952881,
                        48.15182898379371
                    ],
                    [
                        17.073885798454285,
                        48.15182898379371
                    ],
                    [
                        17.073885798454285,
                        48.1519685614724
                    ],
                    [
                        17.07253932952881,
                        48.1519685614724
                    ],
                    [
                        17.07253932952881,
                        48.15182898379371
                    ]
                ]
            ]
        }
    }
]
}
/*
blokA.bindPopup("Blok A<br> Na tomto bloku sa nachadzaju:<br>" +
    "IKAL");

*/

var styleA = {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
};
L.geoJSON(blokA, {
    style: styleA,
    onEachFeature: function (feature,layer){
        layer.bindPopup("Blok A<br> Na tomto bloku sa nachadzaju:<br>" +
            "IKAL")
    }
}).addTo(mymap);


var blokB = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            17.072996646165848,
                            48.15246826434394
                        ],
                        [
                            17.072995975613594,
                            48.15233047746686
                        ],
                        [
                            17.074099704623222,
                            48.152325109139504
                        ],
                        [
                            17.07410104572773,
                            48.15230229374191
                        ],
                        [
                            17.074174806475636,
                            48.15230274110272
                        ],
                        [
                            17.074174135923386,
                            48.15232376705756
                        ],
                        [
                            17.074353843927383,
                            48.15232555650014
                        ],
                        [
                            17.07435518503189,
                            48.15246513282811
                        ],
                        [
                            17.072996646165848,
                            48.15246826434394
                        ]
                    ]
                ]
            }
        }
    ]
}

var styleB = {
    color: 'green',
    fillColor: '#1AFF00',
    fillOpacity: 0.5,
};
L.geoJSON(blokB, {
    style: styleB,
    onEachFeature: function (feature,layer) {
        layer.bindPopup("Blok B<br> Na tomto bloku sa nachadzaju:<br>" +
            "ÚJFI, ÚMIKT")
    }
}).addTo(mymap);

/*
blokB.bindPopup("Blok B<br> Na tomto bloku sa nachadzaju:<br>" +
    "ÚJFI, ÚMIKT");
*/
var blokC ={
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            17.073872722685337,
                            48.152829282101585
                        ],
                        [
                            17.073876410722733,
                            48.152969751769454
                        ],
                        [
                            17.07255408167839,
                            48.15297690944925
                        ],
                        [
                            17.072556763887405,
                            48.15283643980097
                        ],
                        [
                            17.073872722685337,
                            48.152829282101585
                        ]
                    ]
                ]
            }
        }
    ]
}

var styleC = {
    color: 'blue',
    fillColor: '#004DFF',
    fillOpacity: 0.5,
};
L.geoJSON(blokC, {
    style: styleC,
    onEachFeature: function (feature,layer) {
        layer.bindPopup("Blok C<br> Na tomto bloku sa nachadzaju:<br>" +
            "ÚEAE, ÚE, ÚIM")
    }
}).addTo(mymap);

/*blokC.bindPopup("Blok C<br> Na tomto bloku sa nachadzaju:<br>" +
    "ÚEAE, ÚE, ÚIM");*/
var blokD ={
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            17.073193788528442,
                            48.15347704985201
                        ],
                        [
                            17.073193788528442,
                            48.153340160387316
                        ],
                        [
                            17.074111104011536,
                            48.153336581572866
                        ],
                        [
                            17.07411378622055,
                            48.15331063516076
                        ],
                        [
                            17.07418486475944,
                            48.15331152986483
                        ],
                        [
                            17.07418486475944,
                            48.15333389746188
                        ],
                        [
                            17.074368596076965,
                            48.15333479216555
                        ],
                        [
                            17.074369601905346,
                            48.15347145796925
                        ],
                        [
                            17.073193788528442,
                            48.15347704985201
                        ]
                    ]
                ]
            }
        }
    ]
}

var styleD = {
    color: 'yellow',
    fillColor: '#E6FF00',
    fillOpacity: 0.5,
};
L.geoJSON(blokD, {
    style: styleD,
    onEachFeature: function (feature,layer){
        layer.bindPopup("Blok D<br> Na tomto bloku sa nachadzaju:<br>" +
            "UAMT, URK")
    }
}).addTo(mymap);

/*blokD.bindPopup("Blok D<br> Na tomto bloku sa nachadzaju:<br>" +
    "UAMT, URK");*/
var blokE = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            17.073887139558792,
                            48.153837613164825
                        ],
                        [
                            17.073885798454285,
                            48.15397718537991
                        ],
                        [
                            17.072818279266357,
                            48.153982553534455
                        ],
                        [
                            17.072819620370865,
                            48.153841191944316
                        ],
                        [
                            17.073887139558792,
                            48.153837613164825
                        ]
                    ]
                ]
            }
        }
    ]
}

var styleE = {
    color: 'brown',
    fillColor: '#663300',
    fillOpacity: 0.5,
};
L.geoJSON(blokE, {
    style: styleE,
    onEachFeature: function (feature,layer){
        layer.bindPopup("Blok E<br> Na tomto bloku sa nachadzaju:<br>" +
            "ÚEF")
    }
}).addTo(mymap);
/*
blokE.bindPopup("Blok E<br> Na tomto bloku sa nachadzaju:<br>" +
    "ÚEF");
*/



var autobusIcon = L.icon({
    iconUrl: 'imagine/autobus.png',

    iconSize:     [45, 50], // size of the icon

    iconAnchor:   [22, 50], // point of the icon which will correspond to marker's location


});

var zooTV = L.marker([48.1546, 17.07456], {icon: autobusIcon}).addTo(mymap);
zooTV.bindPopup("<h6>Zoo</h6> <div ><p id='zoo'>39<br>31</p><p>N31</p></div> ");
var zooSkola = L.marker([48.15412, 17.07512], {icon: autobusIcon}).addTo(mymap);
zooSkola.bindPopup("<h6>Zoo</h6> <div ><p id='zoo'>39<br>31</p><p>N31</p></div> ");
var zooZoo = L.marker([48.15465, 17.07578], {icon: autobusIcon}).addTo(mymap);
zooZoo.bindPopup("<h6>Zoo</h6> <div ><p id='zoo'>30<br>32<br>37<br>92<br></p><p>N29</p></div> ");
var zooD1 = L.marker([48.15405, 17.07692], {icon: autobusIcon}).addTo(mymap);
zooD1.bindPopup("<h6>Zoo</h6> <div ><p id='zoo'>30<br>32<br>37<br>92<br></p><p>N29</p></div> ");

var botanickaD = L.marker([48.14792, 17.07231], {icon: autobusIcon}).addTo(mymap);
botanickaD.bindPopup("<h6>Botanická Záhrada</h6> <div ><p id='zoo'>29<br>32</p><p>N29<br>N33<br>N34</p></div> ");
var botanickaSkola = L.marker([48.14833, 17.07203], {icon: autobusIcon}).addTo(mymap);
botanickaSkola.bindPopup("<h6>Botanická Záhrada</h6> <div ><p id='zoo'>29<br>32</p><p>N29<br>N33<br>N34</p></div>");


var elektrickaIcon = L.icon({
    iconUrl: 'imagine/elektricka.png',

    iconSize:     [35, 55], // size of the icon

    iconAnchor:   [17, 50], // point of the icon which will correspond to marker's location


});

var botanickaE1 = L.marker([48.14813, 17.07247], {icon: elektrickaIcon}).addTo(mymap);
botanickaE1.bindPopup("<h6>Botanická Záhrada</h6> <div ><p id='elektricka'>4<br>9</p></div> ");
var botanickaE2 = L.marker([48.14813, 17.07177], {icon: elektrickaIcon}).addTo(mymap);
botanickaE2.bindPopup("<h6>Botanická Záhrada</h6> <div ><p id='elektricka'>4<br>9</p></div> ");
/*
function skuska(){
L.Routing.control({
    waypoints: [
        L.latLng(49.17135,20.9119327),
        L.latLng(48.1519638, 17.0729841)

    ],
    routeWhileDragging: true,
    geocoder:  L.Control.Geocoder.nominatim()

}).addTo(mymap);
}
*/

function hladaj(){
    L.Routing.control({
        waypoints: [
            L.latLng(),
            L.latLng(48.1519638, 17.0729841)

        ],
        routeWhileDragging: true,
        geocoder:  L.Control.Geocoder.nominatim()

    }).addTo(mymap);
}



var autobusy = L.layerGroup([zooTV, zooD1, zooZoo, zooSkola,botanickaSkola,botanickaD]);
var elektricky = L.layerGroup([botanickaE2,botanickaE1]);
var MHD = L.layerGroup([botanickaE2,botanickaE1,zooTV, zooD1, zooZoo, zooSkola,botanickaSkola,botanickaD]);


var overlayMaps = {
    "Autobusy": autobusy,
    "Elektricky": elektricky,
    "MHD": MHD
};

L.control.layers(overlayMaps).addTo(mymap);



function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Vaše súradnice sú " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);