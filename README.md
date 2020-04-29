# Croplandmaps - Explorations on Leaflet.js
This is a independent study based on Mapping Africa project.
In this project, we utilized different plugins to render vector tiles.
We also try to load multiple raster tiles from Raster Foundary.
## Data
[Geojson Data for segments](https://github.com/agroimpacts/croplandmaps/blob/master/geojson_aoi/aoi5_boundarymerge_reid.geojson)

[Tile Image URLs](https://github.com/agroimpacts/croplandmaps/blob/master/tms_sub.csv)

## Built with
### Leaflet APIs
- [Leaflet.js](https://leafletjs.com/)
  - Map rendering
  - Runtime data-join
### Third-party libraries
- [Leaflet.VectorGrid](https://github.com/Leaflet/Leaflet.VectorGrid)

- [Leaflet Ajax](https://github.com/calvinmetcalf/leaflet-ajax)

- [Leaflet.GroupedLayerControl](https://github.com/ismyrnow/leaflet-groupedlayercontrol)

## Report
### Accomplished:
  - This semester, we have successfully used Leaflet.js to create an interactive web map for the Mapping Africa project. Focusing on Ghana, we have successfully loaded in the cropland boundary file as a geojson. Load times for these segments are relatively fast, at about 3 seconds. The geojson file was served on its own locally-hosted server, and then loaded into the Leaflet framework using Ajax. The cropland segments contained in this geojson file can be highlighted via hovering the mouse over the segment, and when the download button is activated segments will stay selected after clicking on them. You can deselect a segment by clicking it again. Multiple segments can be selected at a time. The segments that are highlighted will be listed in a widget in the upper right hand corner of the screen.

 - The basemap used in this webmap is satellite imagery and is sourced from Esri. Panning and zooming are all possible.

 - Additionally, we have successfully used GeoServer to load in some of the imagery stored locally, and are able to some images from RasterFoundry.
 - The code for the web map as it stands is located on the [AgroImpacts github](https://github.com/agroimpacts/croplandmaps), and [live demo](https://agroimpacts.github.io/croplandmaps/).


 
 ### Challenges:
 - Download functionality for selected imagery remains a challenge and has yet to be implemented. 

 - Secondly, and most importantly, the load time of imagery from RasterFoundry directly into Leaflet.js remains very high, and can only be done for several images; loading 30 images at a time, for instance, will quickly crash the web map. GeoServer has been fairly successful and quick for loading several images at a time, but this has only been tested for imagery that is locally stored. Connecting GeoServer to AWS E3 directly is still a relatively new service, does not seem have much industry testing from our online research, and is beyond our own capabilities.

 - Another issue is the computer lag when occurring during panning and zooming while the geojson crop segments are loaded. Because of the volume of segments that are loaded, the browser and local machine have a difficult time giving instantaneous feedback on user commands; there is a about a 1 - 2 second delay in panning and zoom commands, which is enough to be quite noticeable by the user.

 ### Next Steps
  - A suggestion to eliminate the crashing issue caused from loading the RasterFoundry imagery could be to implement a time-delay for leading each image, so the browser is not overwhelmed. Also, much of the imagery contains overlaps, and so if these overlaps were removed, the map’s efficiency could be improved. However, these are not likely to solve all the problems. A more realistic solution could be to use MapBox to host and display the imagery, or to find some way for it to pull imagery in from E3. Our research did not yield any instances where MapBox could pull data from a specific E3 Bucket, though we know that MapBox does use E3 to stage files for upload onto their service.
 
 
## Authors
Jordan Frey & Zhenhua Meng
 
