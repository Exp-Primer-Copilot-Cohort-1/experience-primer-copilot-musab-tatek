// Create web server
import { Component, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Define the main Angular component
@Component({
  selector: 'app-root',
  template: '<h1>Welcome to My Angular Web Server!</h1>',
  styles: []
})
export class AppComponent {}

// Enable production mode if applicable
if (environment.production) {
  enableProdMode();
}

// Bootstrap the Angular module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
