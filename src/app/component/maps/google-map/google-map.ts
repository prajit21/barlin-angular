import { Component, viewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule, MapMarker } from '@angular/google-maps';

interface Marker {
  position: google.maps.LatLngLiteral;
  label?: google.maps.MarkerLabel;
  Option?: google.maps.MarkerOptions;
  info?: string;
  title?: string;
}
@Component({
  selector: 'app-google-map',
  imports: [GoogleMapsModule],
  templateUrl: './google-map.html',
  styleUrls: ['./google-map.scss'],
})
export class GoogleMaps {
  public markers: Marker[];
  public zoom: number;

  constructor() {
    this.markers = [];
    this.zoom = 2;
  }

  ngOnInit() {
    this.markers.push({
      position: {
        lat: 35.717,
        lng: 139.731,
      },
      label: {
        color: 'black',
        text: 'Madrid',
      },
      Option: {
        draggable: true,
        animation: google.maps.Animation.DROP,
      },
    });

    this.markers.push({
      position: {
        lat: 48.8615515,
        lng: 2.3112233,
      },
      label: {
        color: 'black',
        text: 'Paris',
      },
      Option: {
        draggable: true,
        animation: google.maps.Animation.DROP,
      },
    });
  }

  //Street View
  readonly map = viewChild.required(GoogleMap);

  ngAfterViewInit() {
    let streetView = this.map().getStreetView();
    streetView.setOptions({
      position: {
        lat: 48.8615515,
        lng: 2.3112233,
      },
      pov: { heading: 70, pitch: -10 },
    });
    streetView.setVisible(true);
  }

  openInfo(_marker: MapMarker, _info?: string) {}
}
