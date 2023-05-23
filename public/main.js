function initializeApp() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'https://tourism.api.opendatahub.com/v1/ODHActivityPoi?hasimage=true', false ); // false for synchronous request
    xmlHttp.send( null );
    var response = JSON.parse(xmlHttp.response);
    //console.trace("Response object:", response);
    
    xmlHttp.onreadystatechange = populateTable(response.Items);
}

function populateTable(poiItems) {    
    var tableBody = document.getElementById('table').getElementsByTagName('tbody')[0];

    if(tableBody) {
        tableBody.innerHTML = "";
    }

    poiItems.map((item) => {
        var newRow = tableBody.insertRow();
        var cell1 = newRow.insertCell();
        var text1 = document.createTextNode(item.Detail.en.Title);
        cell1.appendChild(text1);
        var cell2 = newRow.insertCell();
        var text2 = document.createTextNode(item.LocationInfo.MunicipalityInfo.Name.en);
        cell2.appendChild(text2);
        newRow.setAttribute('onclick', 'passUserInput("' + item.Id + '", "' + item.GpsPoints.position.Latitude + '", "' + item.GpsPoints.position.Longitude + '")');
    })
}

function searchInput() {
    var inputText = document.getElementById('searchInput').value;

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'https://tourism.api.opendatahub.com/v1/ODHActivityPoi?hasimage=true&searchfilter=' + inputText + '&language=en', false ); // false for synchronous request
    xmlHttp.send( null );
    var response = JSON.parse(xmlHttp.response);
    //console.log("Response object:", response);

    xmlHttp.onreadystatechange = populateTable(response.Items);
}

function passUserInput(poiId, lat, long) {
    var tourismComponent = document.getElementById('tourismComponent');

    if(tourismComponent) {
        tourismComponent.innerHTML = '';
    }

    var odhTourismDetail = document.createElement('odh-tourism-detail');
    odhTourismDetail.setAttribute('content-id-list', poiId);
    odhTourismDetail.setAttribute('language', 'en');

    tourismComponent.appendChild(odhTourismDetail);

    var mapComponent = document.getElementById('mapComponent');

    if(mapComponent) {
        mapComponent.innerHTML = '';
    }

    var odhParking = document.createElement('odh-parking');
    var position = '{ "lat": ' + lat + ', "lng": ' + long + '}';
    odhParking.setAttribute('currentLocation', position);
    odhParking.setAttribute('tiles-url', "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
    odhParking.setAttribute('zoom', 15);

    mapComponent.appendChild(odhParking);

}