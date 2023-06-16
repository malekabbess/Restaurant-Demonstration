var map = L.map("mapid").setView([35.82231, 10.19238], 8);
var marker = L.marker([35.82231, 10.19238]).addTo(map);
marker
  .bindPopup(
    '<img src="img/logo.png" alt="logo" class="img_popup" /><h6 class="eden">Restauration - DEMO</h6><p>Rue La Tunisie </p> '
  )
  .openPopup();

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; Made by  <a href="https://www.malekabbes.com/">Malek abbes 😊</a>  ',
}).addTo(map);
