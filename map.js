var map = L.map("map").setView([-7.78637, 110.368741], 11);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
var marker = L.marker([-7.803027484873508, 110.36085885745977]).addTo(map);
marker.bindPopup("<b>Ambulan Gratis Jogja</b><br>No : 081326310779").openPopup();
var marker = L.marker([-7.81146715837886, 110.40189155767143]).addTo(map);
marker.bindPopup("<b>AmbulanMu DIY</b><br>No : 087721222900").openPopup();
var marker = L.marker([-7.821199662964124, 110.35196521534287]).addTo(map);
marker.bindPopup("<b>Ambulance Peduli Muslim</b><br>No : 081383333118").openPopup();
var marker = L.marker([-7.708571504653704, 110.4103664555013]).addTo(map);
marker.bindPopup("<b>BMH Yogyakarta</b><br>No : 085877177162").openPopup();
var marker = L.marker([-7.8034643509599535, 110.35749426551648]).addTo(map);
marker.bindPopup("<b>DT Peduli</b><br>No : 085877177162").openPopup();
var marker = L.marker([-7.807117605462333, 110.3475515638889]).addTo(map);
marker.bindPopup("<b>Dompet Dhuafa DIY</b><br>No : 085103004489").openPopup();
var marker = L.marker([-7.8303757233333515, 110.38990645767144]).addTo(map);
marker.bindPopup("<b>Global Transport</b><br>No : 087839991000").openPopup();
