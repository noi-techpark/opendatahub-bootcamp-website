    //   fetch("https://tourism.api.opendatahub.com/v1/ODHActivityPoi?pagenumber=1&pagesize=100").then(function(response) {
    //     return response.json();
    //   }).then(function(data) {
    //       var summerIcon = L.icon({
    //           iconUrl: "./assets/summer.png",
    //           iconSize:     [60, 60], // size of the icon
    //           iconAnchor:   [60, 60], // point of the icon which will correspond to marker's location
    //           popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    //       });
    //       var winterIcon = L.icon({
    //           iconUrl: "./assets/winter.png",
    //           iconSize:     [60, 60], // size of the icon
    //           iconAnchor:   [60, 60], // point of the icon which will correspond to marker's location
    //           popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    //       });
    //       var storeIcon = L.icon({
    //           iconUrl: "./assets/store.png",
    //           iconSize:     [60, 60], // size of the icon
    //           iconAnchor:   [60, 60], // point of the icon which will correspond to marker's location
    //           popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    //       });
    //       var cultureIcon = L.icon({
    //           iconUrl: "./assets/kultur.png",
    //           iconSize:     [60, 60], // size of the icon
    //           iconAnchor:   [60, 60], // point of the icon which will correspond to marker's location
    //           popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    //       });
    //       var foodIcon = L.icon({
    //           iconUrl: "./assets/food.png",
    //           iconSize:     [60, 60], // size of the icon
    //           iconAnchor:   [60, 60], // point of the icon which will correspond to marker's location
    //           popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    //       });
    //       var otherIcon = L.icon({
    //           iconUrl: "./assets/other.png",
    //           iconSize:     [60, 60], // size of the icon
    //           iconAnchor:   [60, 60], // point of the icon which will correspond to marker's location
    //           popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    //       });
    //       var map = L.map('map').setView([46.5575176279939, 11.7262208461761], 8);
    //       L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //           maxZoom: 19,
    //           attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    //       }).addTo(map);
    //       let i = 0;
    //       while (i < data['Items'].length) {
    //           lat = data['Items'][i]['GpsInfo'][0]['Latitude'];
    //           long = data['Items'][i]['GpsInfo'][0]['Longitude'];
    //           name = data['Items'][i]['Detail']['en']['Title'];
    //           type = data['Items'][i]['Type'];

    //           if (type==='Sommer') {
    //               var marker = L.marker([lat, long], {icon: summerIcon}).addTo(map);
    //           } else if (type==='Winter') {
    //               var marker = L.marker([lat, long], {icon: winterIcon}).addTo(map);
    //           } else if (type==='Geschäfte und Dienstleister') {
    //               var marker = L.marker([lat, long], {icon: storeIcon}).addTo(map);
    //           } else if (type=='Kultur Sehenswürdigkeiten') {
    //               var marker = L.marker([lat, long], {icon: cultureIcon}).addTo(map);
    //           } else if (type=='Essen Trinken') {
    //               var marker = L.marker([lat, long], {icon: foodIcon}).addTo(map);
    //           } else {
    //               var marker = L.marker([lat, long], {icon: otherIcon}).addTo(map);
    //           }

    //           marker.bindPopup(name);
    //           i++;
    //       }
    //     console.log(data);
    //   }).catch(function(err) {
    //     console.log('Fetch Error :-S', err);
    //   });