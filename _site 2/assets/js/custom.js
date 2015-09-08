function getQueryParams(qs) {
  qs = qs.split("+").join(" ");
  var params = {},
    tokens,
    re = /[?&]?([^=]+)=([^&]*)/g;

  while (tokens = re.exec(qs)) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }

  return params;
}

var $_GET = getQueryParams(document.location.search);
if ($_GET.letter) {
  var letter = $_GET.letter.toUpperCase();
}
var map;

$(document).keyup(function (e) {
  if (e.keyCode === 27) {
    map.closePopup();
  }
});

/*window.setTimeout(function () {
  $(".alert-fadeout").fadeTo(500, 0).slideUp(500, function () {
    $(this).remove();
  });
}, 5000);*/


// Create map with options
function displayMap() {

  var currenturl = $(location).attr('href');
  var lastSix = currenturl.substr(-6);
  var jsonurl = 'mapjson.json';
  if (lastSix === 'manage') {
    jsonurl = currenturl + '/mapjson.json';
  }

  // Base RootIcon to create from
  var RootIcon = L.Icon.extend({
    options: {
      shadowUrl: '',
      iconSize:     [20, 34],
      shadowSize:   [20, 34],
      iconAnchor:   [10, 34],
      shadowAnchor: [20, 34],
      popupAnchor:  [0, -34]
    }
  });

    // set up the map
  map = new L.Map('map');

  // create the tile layer with correct attribution
  var osmUrl = 'http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png';
  var osmAttrib = 'Map data &copy; OpenStreetMap contributors';
  var osm = new L.TileLayer(osmUrl, {minZoom: 2, maxZoom: 7, attribution: osmAttrib});

  // start the map
  map.setView(new L.LatLng(18.438889, 1.408333), 2);
  map.addLayer(osm);

/*  $.ajax({
     url: jsonurl,
     dataType: 'json',
     async: false,
     success: function (json) {*/
      var json = mapjson;
      var markers = new L.MarkerClusterGroup({showCoverageOnHover: false, zoomToBoundsOnClick: true, spiderfyOnMaxZoom: true, maxClusterRadius: 55});
      $.each(json, function (id, marker) {
        // Skip markers if a specific root has been requested
        if (letter && marker.data.rootserver !== letter) {
          return true;
        }
        // Skip markers which have no lat/lng set
        if (marker.latLng[0] === 0 && marker.latLng[1] === 0) {
          return true;
        }
        var plotll = new L.LatLng(marker.latLng[0], marker.latLng[1], true);
        var plotmark = new L.Marker(plotll, {icon: new RootIcon({iconUrl: 'image/L_Marker.png'})});
        markers.addLayer(plotmark);
        plotmark.bindPopup(getMarkerInfo(marker.data));
      });
      map.addLayer(markers);
   /*  }
   });*/
}

function getMarkerInfo(data) {
  var string = '';
  string += "<table class='table table-striped'>";
  string += "<tr><td class='roottitle' colspan='2'><h4>" + data.location + "</h4></td></tr>";
  string += "<tr><td><b>Nationality</b></td><td>" + data.Nationality + "&nbsp;&nbsp;<img src='"+data.icon+"'></td></tr>";
  string += "<tr><td><b>Role</b></td><td>" + data.role + "</td></tr>";
  string += "<tr><td><b>Domain Name</b></td><td>" + data.asn + "</td></tr>";
  string += "<tr><td><b>IPv6</b></td><td>" + data.ipv6 + "</td></tr>";
  string += "</table>";
  return string;
}

$(document).ready(function () {

  if ($('#map').length) {
    displayMap();
  }
  var json = mapjson;
  var html = '';
  for(var i in json){
	html+='<tr><td>'+json[i].data.location+'</td><td><img src="'+json[i].data.icon+'">&nbsp;&nbsp;'+json[i].data.Nationality+'</td><td>'+json[i].data.role+'</td><td>'+json[i].data.asn+'</td><td>'+json[i].data.ipv6+'</td></tr>';
  }
  $('#root_info').append(html);
 /* $("#mySelect").select2();
  $('#yamlupload').submit(function () {
    return confirm("Are you sure you want to upload this YAML? It will replace all existing data of this root.");
  });
  $('.deleteinstance').click(function () {
    return confirm("Are you sure you want to delete this instance?");
  });
  //$('#myTab a:first').tab('show');
  $('#mySelect').on('change', function (e) {
    e.preventDefault();
    $('#myTab li a[href="' + $('#mySelect').val() + '"]').tab('show');
  });

  $('#myTab a').click(function () {
    $(this).tab('show');
  });

  if (letter) {
    $('#myTab a[href="#' + letter + '"]').tab('show');
  }
  $('.link').tooltip();*/
});