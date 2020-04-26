/********************* Main function part of the app *********************/

/********************* Define variables and any constants ****      ******/

var mymap;

// Mapping Africa
var fieldOn = false;
var featuresSelected = [];
var arrayBounds = [];
var info;
var dlIcon;
var fieldGroup;

var bug;
var vectorTiles_0;
var tilelink = 'https://tiles.rasterfoundry.com/a02b6e1f-56b7-4f46-974d-73ac6cb5fc89/{z}/{x}/{y}/?tag=1587581006391&token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9ETkRPREF4T1RsRVFVSTFPREl5T0RFNU16UTJORGN5T0RBNE5qbEJRa1l4UXpNeU4wTkRPQSJ9.eyJodHRwczovL2FwcC5yYXN0ZXJmb3VuZHJ5LmNvbTtwbGF0Zm9ybSI6IjMxMjc3NjI2LTk2OGItNGU0MC04NDBiLTU1OWQ5YzY3ODYzYyIsImh0dHBzOi8vYXBwLnJhc3RlcmZvdW5kcnkuY29tO29yZ2FuaXphdGlvbiI6ImRmYWM2MzA3LWI1ZWYtNDNmNy1iZWRhLWI5ZjIwOGJiNzcyNiIsImh0dHBzOi8vYXBwLnJhc3RlcmZvdW5kcnkuY29tO2Fubm90YXRlQXBwIjp0cnVlLCJodHRwczovL2FwcC5yYXN0ZXJmb3VuZHJ5LmNvbTtzY29wZXMiOiJwbGF0Zm9ybVVzZXIiLCJuaWNrbmFtZSI6Imx5bmRvbi5lc3RlcyIsIm5hbWUiOiJseW5kb24uZXN0ZXNAZ21haWwuY29tIiwicGljdHVyZSI6Imh0dHBzOi8vcy5ncmF2YXRhci5jb20vYXZhdGFyL2YxZTQwNzU3MTQ4OGY2Y2Q2NjA4ZjhhM2E0MjQwYTJkP3M9NDgwJnI9cGcmZD1odHRwcyUzQSUyRiUyRmNkbi5hdXRoMC5jb20lMkZhdmF0YXJzJTJGbHkucG5nIiwidXBkYXRlZF9hdCI6IjIwMjAtMDQtMjJUMTg6NDM6MDIuMzQ4WiIsImVtYWlsIjoibHluZG9uLmVzdGVzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL3Jhc3Rlci1mb3VuZHJ5LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZDBhNTk4Yzk5MjlkYjBkYmFkMTRkOTciLCJhdWQiOiJ4MkgwazJBbUtaYWp0ZlZRVDJkSUZ4cDlyUnVvNHc4byIsImlhdCI6MTU4NzU4MDk4MiwiZXhwIjoxNTg3NjE2OTgyLCJhdF9oYXNoIjoiSVkxWjhQZGFPRWl2Tkd4T254eHNrdyIsIm5vbmNlIjoibFVjYnlrOGRjZEFMSi1iMi1CVGxCYzN0b3pWaHF4ZzYifQ.Asvdz0Tbgf17EzasMt32O7W-MjocnbvkH9W7wDw-mTbeCfL79QQufji1Ote2o5rQMgSlrkhIHWU0_zglgVFz7MPoPLc6PyZHyq-FJJPcl6kCN-FjL0iWm8Qz6EzC2SdToIaXStc83Hvm8ep0TrvTJadDTiuoFIjYxsiJE7SQy1YIvTu5BIQTTLXQAIulSu-XADI6e3GDOGLAa_BW4kkJ_ga0s1N2WrRZKadIZNI0_WjE942Kup6nKsxUX3MoQMgwEEAPBGcbJTEWzfHZ2fHyQIBXR4BLYSjals9JEBzmSzGmqJTrhHUHD4u5TfpIaD74SZ1FH78CmWlciya-FyPhdg'
var tilelink2 = "https://tiles.rasterfoundry.com/83d90077-581f-4c68-a568-65fbb33f4f04/{z}/{x}/{y}/?tag=1587581063913&token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9ETkRPREF4T1RsRVFVSTFPREl5T0RFNU16UTJORGN5T0RBNE5qbEJRa1l4UXpNeU4wTkRPQSJ9.eyJodHRwczovL2FwcC5yYXN0ZXJmb3VuZHJ5LmNvbTtwbGF0Zm9ybSI6IjMxMjc3NjI2LTk2OGItNGU0MC04NDBiLTU1OWQ5YzY3ODYzYyIsImh0dHBzOi8vYXBwLnJhc3RlcmZvdW5kcnkuY29tO29yZ2FuaXphdGlvbiI6ImRmYWM2MzA3LWI1ZWYtNDNmNy1iZWRhLWI5ZjIwOGJiNzcyNiIsImh0dHBzOi8vYXBwLnJhc3RlcmZvdW5kcnkuY29tO2Fubm90YXRlQXBwIjp0cnVlLCJodHRwczovL2FwcC5yYXN0ZXJmb3VuZHJ5LmNvbTtzY29wZXMiOiJwbGF0Zm9ybVVzZXIiLCJuaWNrbmFtZSI6Imx5bmRvbi5lc3RlcyIsIm5hbWUiOiJseW5kb24uZXN0ZXNAZ21haWwuY29tIiwicGljdHVyZSI6Imh0dHBzOi8vcy5ncmF2YXRhci5jb20vYXZhdGFyL2YxZTQwNzU3MTQ4OGY2Y2Q2NjA4ZjhhM2E0MjQwYTJkP3M9NDgwJnI9cGcmZD1odHRwcyUzQSUyRiUyRmNkbi5hdXRoMC5jb20lMkZhdmF0YXJzJTJGbHkucG5nIiwidXBkYXRlZF9hdCI6IjIwMjAtMDQtMjJUMTg6NDM6MDIuMzQ4WiIsImVtYWlsIjoibHluZG9uLmVzdGVzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL3Jhc3Rlci1mb3VuZHJ5LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZDBhNTk4Yzk5MjlkYjBkYmFkMTRkOTciLCJhdWQiOiJ4MkgwazJBbUtaYWp0ZlZRVDJkSUZ4cDlyUnVvNHc4byIsImlhdCI6MTU4NzU4MDk4MiwiZXhwIjoxNTg3NjE2OTgyLCJhdF9oYXNoIjoiSVkxWjhQZGFPRWl2Tkd4T254eHNrdyIsIm5vbmNlIjoibFVjYnlrOGRjZEFMSi1iMi1CVGxCYzN0b3pWaHF4ZzYifQ.Asvdz0Tbgf17EzasMt32O7W-MjocnbvkH9W7wDw-mTbeCfL79QQufji1Ote2o5rQMgSlrkhIHWU0_zglgVFz7MPoPLc6PyZHyq-FJJPcl6kCN-FjL0iWm8Qz6EzC2SdToIaXStc83Hvm8ep0TrvTJadDTiuoFIjYxsiJE7SQy1YIvTu5BIQTTLXQAIulSu-XADI6e3GDOGLAa_BW4kkJ_ga0s1N2WrRZKadIZNI0_WjE942Kup6nKsxUX3MoQMgwEEAPBGcbJTEWzfHZ2fHyQIBXR4BLYSjals9JEBzmSzGmqJTrhHUHD4u5TfpIaD74SZ1FH78CmWlciya-FyPhdg"					   
var tilelink3 = "https://tiles.rasterfoundry.com/f5709f76-8d58-49b1-97dc-94d2105926a2/{z}/{x}/{y}/?tag=1587581111155&token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9ETkRPREF4T1RsRVFVSTFPREl5T0RFNU16UTJORGN5T0RBNE5qbEJRa1l4UXpNeU4wTkRPQSJ9.eyJodHRwczovL2FwcC5yYXN0ZXJmb3VuZHJ5LmNvbTtwbGF0Zm9ybSI6IjMxMjc3NjI2LTk2OGItNGU0MC04NDBiLTU1OWQ5YzY3ODYzYyIsImh0dHBzOi8vYXBwLnJhc3RlcmZvdW5kcnkuY29tO29yZ2FuaXphdGlvbiI6ImRmYWM2MzA3LWI1ZWYtNDNmNy1iZWRhLWI5ZjIwOGJiNzcyNiIsImh0dHBzOi8vYXBwLnJhc3RlcmZvdW5kcnkuY29tO2Fubm90YXRlQXBwIjp0cnVlLCJodHRwczovL2FwcC5yYXN0ZXJmb3VuZHJ5LmNvbTtzY29wZXMiOiJwbGF0Zm9ybVVzZXIiLCJuaWNrbmFtZSI6Imx5bmRvbi5lc3RlcyIsIm5hbWUiOiJseW5kb24uZXN0ZXNAZ21haWwuY29tIiwicGljdHVyZSI6Imh0dHBzOi8vcy5ncmF2YXRhci5jb20vYXZhdGFyL2YxZTQwNzU3MTQ4OGY2Y2Q2NjA4ZjhhM2E0MjQwYTJkP3M9NDgwJnI9cGcmZD1odHRwcyUzQSUyRiUyRmNkbi5hdXRoMC5jb20lMkZhdmF0YXJzJTJGbHkucG5nIiwidXBkYXRlZF9hdCI6IjIwMjAtMDQtMjJUMTg6NDM6MDIuMzQ4WiIsImVtYWlsIjoibHluZG9uLmVzdGVzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL3Jhc3Rlci1mb3VuZHJ5LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZDBhNTk4Yzk5MjlkYjBkYmFkMTRkOTciLCJhdWQiOiJ4MkgwazJBbUtaYWp0ZlZRVDJkSUZ4cDlyUnVvNHc4byIsImlhdCI6MTU4NzU4MDk4MiwiZXhwIjoxNTg3NjE2OTgyLCJhdF9oYXNoIjoiSVkxWjhQZGFPRWl2Tkd4T254eHNrdyIsIm5vbmNlIjoibFVjYnlrOGRjZEFMSi1iMi1CVGxCYzN0b3pWaHF4ZzYifQ.Asvdz0Tbgf17EzasMt32O7W-MjocnbvkH9W7wDw-mTbeCfL79QQufji1Ote2o5rQMgSlrkhIHWU0_zglgVFz7MPoPLc6PyZHyq-FJJPcl6kCN-FjL0iWm8Qz6EzC2SdToIaXStc83Hvm8ep0TrvTJadDTiuoFIjYxsiJE7SQy1YIvTu5BIQTTLXQAIulSu-XADI6e3GDOGLAa_BW4kkJ_ga0s1N2WrRZKadIZNI0_WjE942Kup6nKsxUX3MoQMgwEEAPBGcbJTEWzfHZ2fHyQIBXR4BLYSjals9JEBzmSzGmqJTrhHUHD4u5TfpIaD74SZ1FH78CmWlciya-FyPhdg"
var tilelink4 = "https://tiles.rasterfoundry.com/tiles/9fff8a91-5e41-4497-8d5f-3c96ae77d927/{z}/{x}/{y}/?mapToken=090b0a2c-9717-488c-b8b6-1b0fd8bf1ad0"
var tileData;
var tileGroup;



/*********************  Variables by Zhenhua  *************/
var currentOpacity = 100;
var currentMarker;
var currentControlLayer;

/*************************************** Function part 1 - begin ********************************/

/************** Event Functions **************/

function addBasemap() {	
	var streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1IjoiemhtZW5nIiwiYSI6ImNqdm1qenB3ajFkdzE0M3BmaXdueWEwOTcifQ.m4KZ0r4F7FzMAkDK8iA-XA'
	});
	var satellite = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox.satellite',
		accessToken: 'pk.eyJ1IjoiemhtZW5nIiwiYSI6ImNqdm1qenB3ajFkdzE0M3BmaXdueWEwOTcifQ.m4KZ0r4F7FzMAkDK8iA-XA'
	});	
	
	var basemap_imageWithLabel = L.layerGroup();
	L.esri.basemapLayer('Imagery').addTo(basemap_imageWithLabel);
    L.esri.basemapLayer('ImageryLabels').addTo(basemap_imageWithLabel);
    console.log(basemap_imageWithLabel)

    // read in csv file and create tile obj
    var RFoundary = createTilegroup(tileData)
    console.log(RFoundary)

	
	
	// add basemap control
	var basemap_topo = L.esri.basemapLayer('Topographic');
	var basemap_dark = L.esri.basemapLayer('DarkGray');
	var basemap_streets = L.esri.basemapLayer('Streets');
	var basemap_gray = L.esri.basemapLayer('Gray');
	
    
    
    var geojsonlayer_0 = L.layerGroup();
    var geojsonlayer_1 = L.layerGroup();
    var geojsonlayer_2 = L.layerGroup();

    // AOI 5 subset polygon geojson_aoi/aoi5_sub.geojson
	var aoi_5 = new L.GeoJSON.AJAX("geojson_aoi/aoi5_boundarymerge_reid.geojson",{
		style: stylelayer.default,
		onEachFeature: onEachFeature,
    })
    .addTo(geojsonlayer_1);

    
     // AOI 5 full polygon
    // "geojson_aoi/aoi5_sub.geojson"
    $.getJSON("geojson_aoi/aoi5_boundarymerge_reid.geojson", function(aoi) {		

        // using plugin vectorGrid's function
        var aoi5 = L.vectorGrid.slicer(aoi, {
            rendererFactory: L.svg.tile,
            vectorTileLayerStyles: {
                sliced: function(properties, zoom) {
                    var p = properties.id % 5;
                    // console.log(properties)
                    return {
                        fillColor: "white",
                        // fillColor: p === 0 ? '#800026' : p === 1 ? '#E31A1C' : p === 2 ? '#FEB24C' : p === 3 ? '#B2FE4C' : '#FFEDA0',
                        // fillOpacity: 0.5,
                        // // fillOpacity: 0.1,
                        // stroke: true,
                        fill: true,
                        color: 'black',
                        opacity: 1,
                        weight: 0.5,
                    }
                }
            },
            interactive: true,
            getFeatureId: function(f){
                return f
            }
        }).addTo(geojsonlayer_0)
        .on('mouseover', function(e){
            // console.log(e.layer)
            infoPanel.update(e.layer.properties["id"]);
        })
        .on('click', function(e){
            console.log(e)
        });


        // using leaflet's function
        var aoi5 = new L.geoJSON(aoi,{
            style: stylelayer.default,
            onEachFeature: onEachFeature,
        })
        .addTo(geojsonlayer_2);


        vectorTiles_0 = aoi5;

    });
    
    var rasterfoundry = L.layerGroup();
    var rf1 = L.tileLayer(tilelink).addTo(rasterfoundry);
    var rf2 = L.tileLayer(tilelink2).addTo(rasterfoundry);
    var rf3 = L.tileLayer(tilelink3).addTo(rasterfoundry);
    
    // testing the url form tms_sub.CSV
    var rf4 = L.tileLayer(tilelink4);
    
    fieldGroup = geojsonlayer_1;

	var groupedOverlays = {
		"Raster Foundary Source":{
            "RF project link test":rasterfoundry,
            "RF single tile file": rf4,
            "RF Source": RFoundary,
		},
		"Segments":{
            "Load AOI5 with VectorGrid (fast)":geojsonlayer_0,
            "Load AOI5 with GeojsonAJAX (mid fast)":geojsonlayer_1,
            "Load AOI5 with Leaflet function (slow)":geojsonlayer_2
		}
		
    };
    
    var options = {
    
    // Show a checkbox next to non-exclusive group labels for toggling all
    groupCheckboxes: false,
    // unfolding
    collapsed:false
    };




	mymap = L.map('map', {
		center: [9, -1.2],  // [13.6, 104.95]
		zoom: 10,
		layers: [basemap_gray, rf4],
		measureControl: false //?
	});
	
	
	var baseMaps = {
		
		"<img class='basemapIcon' src='icons_zhmeng/imagery.jpg' /> <span class='basemapIcon-font'>Imagery with Labels</span>":basemap_imageWithLabel,
		// "<img class='basemapIcon' src='icons_zhmeng/topo_map.jpg' /> <span class='basemapIcon-font'>Topographic</span>": basemap_topo,
		"<img class='basemapIcon' src='icons_zhmeng/dark_gray_canvas.png' /> <span class='basemapIcon-font'>Dark Gray</span>": basemap_dark,
		// "<img class='basemapIcon' src='icons_zhmeng/world_street_map.jpg' /> <span class='basemapIcon-font'>Streets</span>": basemap_streets,
        "<img class='basemapIcon' src='icons_zhmeng/light_gray_canvas.jpg' /> <span class='basemapIcon-font'>Gray</span>":basemap_gray,
        "Raster Foundary":RFoundary,
	};
	



	var controlLayers = L.control.groupedLayers(baseMaps, groupedOverlays,options).addTo(mymap);
	
	
	
	
	// add scale control
	L.control.scale({metric: false}).addTo(mymap);

	

	// add a listener to layer AOI 5 
	mymap.on('overlayadd ',function(obj){
			// if (currentLayer) {currentLayer.bringToFront();}
			console.log("overlayadd:",obj)	
			// bug = obj;
			if(obj.name=="Load AOI5 with VectorGrid (fast)"||"Load AOI5 with GeojsonAJAX (mid fast)"||"Load AOI5 with Leaflet function (slow)") {
                fieldOn = true;
                vectorTiles_0.bringToFront()
                // bug = obj.layer._layers
                // console.log(obj.layer._layers)
			}else {
                vectorTiles_0.bringToFront()
				// do nothing
			}
		}).on('overlayremove', function(obj){
			console.log("overlayremove:",obj)	
			if(obj.name=="AOI 5") {
				fieldOn = false;
			}else {
				// do nothing
			}
		});
		


	

};
/******************* event functions end ******************/
/*********************************** Function part 1 - end ********************************/

/************************* Function part 2 - begin () *************************/ 
/* functions in part 2 are mostly used to control the style of polygons when highlighting*/ 
/*Style for layers*/
var stylelayer = {
    default: {
        color: "red",
        opacity: 1,
        fillcolor: "red",
        fillOpacity: 0.1,
        weight: 0.5
    },
    reset: {
        color: "red",
        opacity: 0.4,
        weight: 1
    },
    highlight: {
        weight: 5,
        color: '#0D8BE7',
        dashArray: '',
        fillOpacity: 0.7
    },
    selected: {
        color: "blue",
        opacity: 0.3,
        weight: 0.5
    }

};

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
            //dblclick : selectFeature
    });
};

var popupLayer;
function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle(stylelayer.highlight);
    // info.update(layer.feature.properties);
    infoPanel.update(layer.feature.properties["id"]); //polygon_sf.id

    
};

function resetHighlight(e) {
    var layer = e.target;
    var feature = e.target.feature;

    if (checkExistsLayers(feature)) {
        setStyleLayer(layer, stylelayer.highlight)
    } else {
        setStyleLayer(layer, stylelayer.default)
    }


};

var c1 = L.latLng(8.91,-1.51)
var c2 = L.latLng(9.12,-0.88)
var initbound = L.latLngBounds(c1,c2)
function zoomToFeature(e) {

    var layer = e.target;
    var feature = e.target.feature;

    if(dlPanel_Instance){
        if (checkExistsLayers(feature)) {
            removerlayers(feature, setStyleLayer, layer, stylelayer.default)
            removeBounds(layer)
    
        } else {
            addLayers(feature, setStyleLayer, layer, stylelayer.highlight)
            addBounds(layer)
        }

        if(arrayBounds.length!=0){
            mymap.fitBounds(arrayBounds);
        }
        // mymap.fitBounds(arrayBounds);
        dlPanel_Instance.update(featuresSelected);
    }else {
        // mymap.fitBounds(layer.getBounds());
    }
    
};

function delselectedFature(childlayer) {
    // console.log('excute delete')
    var layer = childlayer;
    var feature = layer.feature;

    if (checkExistsLayers(feature)) {
        console.log('ready to delete')
        removerlayers(feature, setStyleLayer, layer, stylelayer.default)
        removeBounds(layer)
        

    } 
    // else {
    //     console.log("add deleted feature")
    //     addLayers(feature, setStyleLayer, layer, stylelayer.highlight)
    //     addBounds(layer)
    // }
    mymap.fitBounds(arrayBounds.length != 0 ? arrayBounds: initbound);
    dlPanel_Instance.update(featuresSelected);
};

function addBounds(layer) {
    arrayBounds.push(layer.getBounds())
};

function removeBounds(layer) {
    arrayBounds = arrayBounds.filter(bounds => bounds != layer.getBounds())
};

function setStyleLayer(layer, styleSelected) {
    layer.setStyle(styleSelected)
};

function removerlayers(feature, callback) {
    featuresSelected = featuresSelected.filter(obj => obj.polygonid != feature.properties["id"]) //polygon_sf.id
    callback(arguments[2], arguments[3])
};

function addLayers(feature, callback) {
    featuresSelected.push({
        polygonid: feature.properties["id"], //polygon_sf.id
        feature: feature
    })
    callback(arguments[2], arguments[3])
};

function checkExistsLayers(feature) {
    var result = false
    for (var i = 0; i < featuresSelected.length; i++) {
        if (featuresSelected[i].polygonid == feature.properties["id"]) {
            result = true;
            break;
        }

    };
    return result
};

function dellayer(polyid) {
    // console.log('this is bug: ',bug)
    fieldGroup.eachLayer(function(layer) {
        layer.eachLayer(function(childlayer){
            if (childlayer.feature.properties["id"] == polyid) {
                delselectedFature(childlayer)
                console.log('this polygon will be deleted')
            }
        })
    })
    // bug.eachLayer(function(layer){
    //     console.log('haha')
    // })
};
/*********************************** Function part 2 - end ********************************/


/************************* Function part 3 - begin () *************************/
/*create Leaflet map control object*/
/*create intiate function for the control and set up layout*/ 
var infoPanel = L.control({
    position: 'bottomleft'
});

infoPanel.onAdd = function(map){
    this._dlinfo = L.DomUtil.create('div', 'dlinfo');
    this.update();
    return this._dlinfo;
};

infoPanel.update = function(temp){
    this._dlinfo.innerHTML = 
    '<h4>Properties</h4>' + (temp ?
        `
            PolygonID: ${temp}<br>
            
                ` : 'Hover over a field');
}
/*********************************** Function part 3 - end ********************************/



/************************* Function part 4 - begin () *************************/
/* part 4 is used to read cvs files that stores the url of images */ 
var path_CSV = 'tms_sub.csv';
d3.csv(path_CSV, function(err, data){
    tileData = getTileObject(data);
    tileGroup = createTilegroup(tileData);
    
});
// create a function to receive all the tileID object,
// and return itself
function getTileObject(data){
    
    console.log(data);
    // bug = data

    // return slicing(data,10);
    return data;
};

// create a function to slice the data into subgroupLength groups
function slicing(data, subgroupLength){
    let index = 0;
    let newArray = [];
    while(index<data.length){
        newArray.push(data.slice(index, index += subgroupLength));
    }

    return newArray
}

// create a function to read tile URL through L.tileLayer(url)
// then store and return them as a layergroup object 
function createTilegroup(data){
    var tileGroup = L.layerGroup();
    // var tileGroupList = [];

    for(var i=0; i<data.length; i++){
        var tileURL = data[i].tms_url
        L.tileLayer(tileURL).addTo(tileGroup)
    };

    // console.log(tileGroup)
    return tileGroup;
    // return tileGroupList;
};

function loadTilegroup(data){

    for(var i=355; i<data.length; i++){
        var tileURL = data[i].tms_url
        // console.log(tileURL)
        // L.tileLayer(tileURL).addTo(mymap)
        sleep(30)
    };

};


function sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}

/*********************************** Function part 4 - end ********************************/
                                                                                                                                                


$(document).ready(function() {	



	/**************************** Code part 1 - begin () **************************/
	

	dlIcon = new L.Control.downloadField();
    // mymap.addControl(dlIcon);
    
    // infoPanel.addTo(mymap);
    
    setTimeout(function() {
        mymap.addControl(dlIcon);
        infoPanel.addTo(mymap);
    }, 300);



	/*********************************** Code part 1 - end ********************************/
	
    
    
	/************************* Code part 2 - begin () *************************/
	/*********************************** Code part 2 - end ********************************/



	

	// new return
})		
