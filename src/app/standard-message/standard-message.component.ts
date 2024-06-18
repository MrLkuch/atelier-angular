import { Component } from "@angular/core";

@Component({
  selector: "app-standard-message",
  templateUrl: "./standard-message.component.html",
  styleUrls: ["./standard-message.component.css"],
})
export class StandardMessageComponent {
  message: string = "Ceci est un composant standard";
}