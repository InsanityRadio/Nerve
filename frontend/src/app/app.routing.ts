import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule, provideRoutes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UploadComponent} from './upload/upload.component';
import {TrackComponent} from './track/track.component';

import {LibraryComponent} from './library/library.component';
import {LibrarySearchComponent} from './library/search/library-search.component';
import {LibraryTrackComponent} from './library/track/library-track.component';

import {MyUploadsComponent} from './upload/my-uploads/my-uploads.component';
import {UploadSongComponent} from './upload/upload-song/upload-song.component';
import {CopySongComponent} from './upload/copy-song/copy-song.component';

import {ModerationComponent} from './moderation/moderation.component';
import {ModerationTrackComponent} from './moderation/track/moderation-track.component';
import {ModerationPendingComponent} from './moderation/pending/moderation-pending.component';

import {MusicPolicyComponent} from './music-policy.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'upload', pathMatch: 'full' },
    { path: 'upload', component: UploadComponent, children: [
	    { path: 'track/:id', component: TrackComponent },
    	{ path: 'list', component: MyUploadsComponent },
    	{ path: 'song', component: UploadSongComponent },
    	{ path: 'copy', component: CopySongComponent },
    	{ path: '', redirectTo: 'list', pathMatch: 'full' }
    ] },
    { path: 'moderation', component: ModerationComponent, children: [
    	{ path: 'track/:id', component: ModerationTrackComponent },
    	{ path: 'pending', component: ModerationPendingComponent },
    	{ path: '', redirectTo: 'pending', pathMatch: 'full' }
    ]},
    { path: 'library', component: LibraryComponent, children: [
        { path: 'track/:id', component: LibraryTrackComponent },
        { path: 'search', component: LibrarySearchComponent },
        { path: '', redirectTo: 'search', pathMatch: 'full' }
    ] },
    { path: 'music-policy', component: MusicPolicyComponent, pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
