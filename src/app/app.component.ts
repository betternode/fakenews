import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RWFN';
  motivationalFirstParagraph = "This website will be the home for fake news. If you would like to keep in touch, please fill out our contact form.";
  linkToContactForm = "https://goo.gl/forms/oXjsRXBx8MrgFHc83";
}
