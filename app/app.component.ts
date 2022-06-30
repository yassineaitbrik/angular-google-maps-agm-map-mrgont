import { Component } from "@angular/core";
import { MouseEvent } from "@agm/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
      content: "InfoWindow content",
      iconUrl: "http://maps.google.com/mapfiles/ms/micons/blue-pushpin.png"
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log("dragEnd", m, $event);
  }

  markers: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: "A",
      draggable: true,
      content: "InfoWindow content",
      color: "#FFFFFF",
      iconUrl: "http://maps.google.com/mapfiles/ms/micons/gas.png"
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: "B",
      draggable: false,
      content: "InfoWindow content",
      color: "blue",
      iconUrl: "http://maps.google.com/mapfiles/ms/micons/dollar.png"
    },
    {
      lat: 51.723858,
      lng: 7.495982,
      label: "C",
      draggable: true,
      content: "InfoWindow content",
      color: "red",
      iconUrl: "http://maps.google.com/mapfiles/ms/micons/police.png"
    }
  ];
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  content: string;
  color: string;
  iconUrl: string;
}
