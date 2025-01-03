import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { UserComponent } from './app/user/user.component';

bootstrapApplication(UserComponent).catch((err) => console.error(err));
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


