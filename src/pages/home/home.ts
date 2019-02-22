import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import leaflet from 'leaflet';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild('map') mapContainer: ElementRef;
	map: any;

	constructor(public navCtrl: NavController) {

	}

	ionViewDidEnter() {
		this.loadmap();
	}

	loadmap() {
		this.map = leaflet.map("map").fitWorld();
		leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  			attributions: 'www.tphangout.com',
  			maxZoom: 16
		}).addTo(this.map);
		this.map.locate({
      		setView: true,
      		maxZoom: 16
		}).on('locationfound', (e) => {
      		let markerGroup = leaflet.featureGroup();
      		let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
        		alert('Marker clicked');
      		})


      		
   //    		var circle = leaflet.circle([e.latitude, e.longitude], {
			//     color: 'red',
			//     fillColor: '#f03',
			//     fillOpacity: 0.5,
			//     radius: 500
			// }).addTo(this.map);

			// var polygon = leaflet.polygon([
			//     [51.509, -0.08],
			//     [51.503, -0.06],
			//     [51.51, -0.047]
			// ]).addTo(this.map);

			// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

   //    		let greenIcon = leaflet.icon({
			//     iconUrl: 'assets/imgs/iconoa.png',
			//     shadowUrl: 'assets/imgs/iconoa.png',

			//     iconSize:     [38, 95], // size of the icon
			//     shadowSize:   [50, 64], // size of the shadow
			//     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
			//     shadowAnchor: [4, 62],  // the same for the shadow
			//     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
			// });

      		// leaflet.marker([e.latitude, e.longitude], {icon: greenIcon}).addTo(this.map);;


      		markerGroup.addLayer(marker);
  			this.map.addLayer(markerGroup);
  		}).on('locationerror', (err) => {
        	alert(err.message);
      	})
	}
}