import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule, provideRoutes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UploadComponent} from './upload/upload.component';
import {TrackComponent} from './track/track.component';

import {MyUploadsComponent} from './upload/my-uploads/my-uploads.component';
import {UploadSongComponent} from './upload/upload-song/upload-song.component';
import {CopySongComponent} from './upload/copy-song/copy-song.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'upload', component: UploadComponent, children: [
	    { path: 'track/:id', component: TrackComponent },
    	{ path: 'list', component: MyUploadsComponent },
    	{ path: 'song', component: UploadSongComponent },
    	{ path: 'copy', component: CopySongComponent },
    	{ path: '', redirectTo: 'list', pathMatch: 'full' }
    ] }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
