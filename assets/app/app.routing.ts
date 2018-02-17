import {RouterModule, Routes} from "@angular/router";
import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./auth/authentication.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/messages', pathMatch: 'full'},
    { path: 'auth', component: AuthenticationComponent},
    { path: 'messages', component: MessagesComponent}
];



export const routing = RouterModule.forRoot(APP_ROUTES);
