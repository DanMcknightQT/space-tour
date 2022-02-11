import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as JSONdata from './app/data.json'

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


let data: any = {...JSONdata};

data = Object.entries(data);

data = data[3][1];

export let crewData = data.crew;
export let destinationsData = data.destinations;
export let techData = data.technology;