import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {DialogueService} from './dialogue.service';
import {NerveService} from './nerve.service';

import {TimecodePipe, LyricsPipe, NL2BRPipe} from './struct/pipes';

import {AppComponent} from './app.component';

import {DialogueComponent} from './dialogue.component';

import {routing, appRoutingProviders} from './app.routing';
import {HomeComponent} from './home/home.component';
import {UploadComponent} from './upload/upload.component';
import {TrackComponent} from './track/track.component';
import {ModerationComponent} from './moderation/moderation.component';

import {MyUploadsComponent} from './upload/my-uploads/my-uploads.component';
import {TrackIconComponent} from './upload/my-uploads/track-icon.component';
import {CopySongComponent} from './upload/copy-song/copy-song.component';
import {UploadSongComponent} from './upload/upload-song/upload-song.component';

import {LibraryComponent} from './library/library.component';
import {LibrarySearchComponent} from './library/search/library-search.component';
import {LibraryTrackComponent} from './library/track/library-track.component';

import {AudioPlayerComponent} from './track/audio-player.component';
import {EditControlsComponent} from './track/edit-controls.component';
import {TrackInfoComponent} from './track/track-info.component';
import {WaveformComponent} from './track/waveform.component';

import {TrackSearchComponent} from './track/search/track-search.component';

import {ModerationPendingComponent} from './moderation/pending/moderation-pending.component';
import {ModerationTrackComponent} from './moderation/track/moderation-track.component';

import {MusicPolicyComponent} from './music-policy.component';

@NgModule({
    declarations: [
        AppComponent,
        DialogueComponent,
        HomeComponent,
        UploadComponent,
        TrackComponent,
        MusicPolicyComponent,
        MyUploadsComponent,
        CopySongComponent,
        UploadSongComponent,
        TrackIconComponent,
        AudioPlayerComponent,
        EditControlsComponent,
        TrackInfoComponent,
        WaveformComponent,
        ModerationComponent,
        ModerationTrackComponent,
        ModerationPendingComponent,
        TrackSearchComponent,
        LibraryComponent,
        LibraryTrackComponent,
        LibrarySearchComponent,
        TimecodePipe,
        LyricsPipe,
        NL2BRPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    providers: [appRoutingProviders, NerveService, DialogueService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
