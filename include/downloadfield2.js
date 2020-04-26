
var dlPanel_Instance;
var tooltip_Instance;
var dlList = [];
var dlbug;

L.Control.downloadField = L.Control.extend({
    options:{
        position:'topright',
    },
    onAdd: function(map) {
        this._map = map;
        this.dlicon_container = L.DomUtil.create('div','dlicon-button')
        console.log(this.dlicon_container)

        L.DomEvent.addListener(this.dlicon_container, 'click', L.DomEvent.stopPropagation)
        .addListener(this.dlicon_container, 'click', L.DomEvent.preventDefault)
        .addListener(this.dlicon_container, 'click', this.onBuildPanel, this)
        .addListener(this.dlicon_container, 'mouseover',function(){

            mymap.dragging.disable()
        })
        .addListener(this.dlicon_container, 'mouseout',function(){

            mymap.dragging.enable()
        })
        .addListener(this.dlicon_container, 'click', function(){
            mymap.doubleClickZoom.disable();
            mymap.once('click', function (e) { 
                mymap.doubleClickZoom.enable();
            });
        });

        return this.dlicon_container;
    },

    onBuildPanel: function() {
        if(fieldOn==false) {
            if(!tooltip_Instance) {
                this.tip_container = L.DomUtil.create('div','dlicon-tip');
                this.tip_container.innerHTML = "<span id='close' onclick='this.parentNode.parentNode.removeChild(this.parentNode); tooltip_Instance = null;'>x</span>"
                this.tip_container.innerHTML += "<br><p class='text transparency-text'>No Polygon layer Loaded</p>"
                tooltip_Instance = this.tip_container;

                this.dlicon_container.appendChild(this.tip_container)
                L.DomEvent.addListener(this.tip_container, 'click', L.DomEvent.stopPropagation)
                 .addListener(this.tip_container, 'click', L.DomEvent.preventDefault)
            }else{
                this._map.removeControl(tooltip_Instance);
                tooltip_Instance = null;
            }

        }else{
            if(!dlPanel_Instance){
                var dlPanel = new L.Control.dlPanel();
                this._map.addControl(dlPanel);
                dlPanel_Instance = dlPanel;
                // document.getElementById('transparency_btn').style.backgroundColor='#e01a7d'
     
            }else{

                this._map.removeControl(dlPanel_Instance);
                dlPanel_Instance = null;
                // document.getElementById('transparency_btn').style.backgroundColor='#ffffff'
     
            }
        }
    }
});

L.Control.dlPanel = L.Control.extend({
    options:{
        position: 'topright'
    },
    onAdd: function(map){
        this._map = map;
        this._dlboard = L.DomUtil.create('div', 'dlboard scroler');
        this._dldetail = L.DomUtil.create('div', '');
        this._dldetail.id = 'dldetail'
        this.submitField();
        this.update();
        this._dlboard.appendChild(this._dldetail)

        L.DomEvent.addListener(this._dlboard, 'mouseover',function(){
            mymap.dragging.disable()
        })
        .addListener(this._dlboard, 'mouseout',function(){
            mymap.dragging.enable()
        })
        .addListener(this._dlboard, 'click', function(){
            mymap.doubleClickZoom.disable();
            mymap.once('click', function (e) { 
                mymap.doubleClickZoom.enable();
            });
        });


        // dlbug = this._dlboard;
        return this._dlboard;
    },
    submitField: function(){
        var submit_div = L.DomUtil.create('button', 'dlsubmit');
        
        this._submit_div = submit_div
        dlbug = this._submit_div
        this._dlboard.appendChild(this._submit_div)
        that = this;

        this._submit_div.innerHTML = "<span><i class='far fa-check-circle'></i></span>";
 
        L.DomEvent.addListener(this._submit_div, 'click', L.DomEvent.stopPropagation)
        .addListener(this._submit_div, 'click', L.DomEvent.preventDefault)
        .addListener(this._submit_div,'click',function(){
            console.log('ready to download')
            console.log('this: ',this.onClick)
            var content = that.convert()
            var filename = 'field.geojson'
            var datastr = "data:text/json;charset=utf-8," + encodeURIComponent(content);
            var downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href", datastr);
            downloadAnchorNode.setAttribute("download", filename);
            that._submit_div.appendChild(downloadAnchorNode);

            if(content.length==0){
                console.log('there is nothing in the file')
            }else{
                console.log('downloading')
                // this.onclick = null;
                // that.download(content,filename);
            

                downloadAnchorNode.click();
                downloadAnchorNode.remove();

            }
        

        }).addListener(this._submit_div, 'mouseover',function(){
            mymap.dragging.disable()
        })
        .addListener(this._submit_div, 'mouseout',function(){
            mymap.dragging.enable()
        })
        .addListener(this._submit_div, 'click', function(){
            mymap.doubleClickZoom.disable();
            mymap.once('click', function (e) { 
                mymap.doubleClickZoom.enable();
            });
        });
    },
    detailshow: function(){
        result = ''
        for(var i=0; i<featuresSelected.length; i++){
            var polyid = featuresSelected[i].polygonid
            result += 
            `
            PolygonID: ${polyid}
            <a href="#" onclick=dellayer(${polyid})>Delete</a>
            <hr>`
        }
        return result;
    },
    update: function(obj){
        console.log('update selected list')
        var details = this.detailshow()
        // var content = details.result;
        // console.log('details: ',content )
        this._dldetail.innerHTML = (details ? details
            :'Please select fields')
        // console.log('this._dlboard.innerHTML: ',this._dlboard.innerHTML )
    },
    convert: function(){
        // console.log('converting')
        var fields = '';
        for(var i=0; i<featuresSelected.length; i++){
            fields += JSON.stringify(featuresSelected[i])  
            fields += ','
            // console.log(fields)
        }
        // console.log('fields: ',fields)
        return fields
    },
    download: function(x, filename){
        var datastr = "data:text/json;charset=utf-8," + encodeURIComponent(x);
        console.log(datastr)
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", datastr);
        downloadAnchorNode.setAttribute("download", filename);
        this._submit_div.appendChild(downloadAnchorNode);

        downloadAnchorNode.click();
        downloadAnchorNode.remove();
        // this._submit_div.removeChild(this._submit_div.children[0])
    }
});