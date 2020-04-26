var infopanel_Instance;
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
            if(!infopanel_Instance){
                var infopanel = new L.Control.infoPanel();
                this._map.addControl(infopanel);
                infopanel_Instance = infopanel;
                var dlPanel = new L.Control.dlPanel();
                this._map.addControl(dlPanel);
                dlPanel_Instance = dlPanel;
                // document.getElementById('transparency_btn').style.backgroundColor='#e01a7d'
     
            }else{
                this._map.removeControl(infopanel_Instance);
                infopanel_Instance = null;
                this._map.removeControl(dlPanel_Instance);
                dlPanel_Instance = null;
                // document.getElementById('transparency_btn').style.backgroundColor='#ffffff'
     
            }
        }
    }
});

L.Control.infoPanel = L.Control.extend({
    options:{
        position: 'bottomleft'
    },
    onAdd: function(map){
        this._map = map;
        this._dlinfo = L.DomUtil.create('div', 'dlinfo');
        this.update();
        return this._dlinfo;
    },
    update: function(temp){
        this._dlinfo.innerHTML = 
        '<h4>Properties</h4>' + (temp ?
            `
                PolygonID: ${temp}<br>
                
                    ` : 'Hover over a field');
    }
});

L.Control.dlPanel = L.Control.extend({
    options:{
        position: 'topright'
    },
    onAdd: function(map){
        this._map = map;
        this._dlboard = L.DomUtil.create('div', 'dlboard scroler');
        this.submitField()


        dlbug = this._dlboard;
        return this._dlboard;
    },
    addDetail: function(field_id){
        var detail_div = L.DomUtil.create('div', '');
        detail_div.id = 'field_' + field_id;
        detail_div.innerHTML += 
        `PolygonID: ${field_id}
        <hr>`

        this._dlboard.appendChild(detail_div);

    },
    removeDetail: function(field_id){
        var remove_id = 'field_' + field_id;
        var remove_obj = document.getElementById(remove_id);
        this._dlboard.removeChild(remove_obj);
    },
    submitField: function(){
        var submit_div = L.DomUtil.create('button', 'dlsubmit');
        this._dlboard.appendChild(submit_div)
    }
});