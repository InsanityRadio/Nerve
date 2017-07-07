import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {NerveService} from './nerve.service';

import {TimecodePipe, LyricsPipe, NL2BRPipe} from './struct/pipes';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import {HomeComponent} from './home/home.component';
import {UploadComponent} from './upload/upload.component';
import {TrackComponent} from './track/track.component';

import {MyUploadsComponent} from './upload/my-uploads/my-uploads.component';
import {TrackIconComponent} from './upload/my-uploads/track-icon.component';
import {CopySongComponent} from './upload/copy-song/copy-song.component';
import {UploadSongComponent} from './upload/upload-song/upload-song.component';

import {AudioPlayerComponent} from './track/audio-player.component';
import {EditControlsComponent} from './track/edit-controls.component';
import {TrackInfoComponent} from './track/track-info.component';
import {WaveformComponent} from './track/waveform.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        UploadComponent,
        TrackComponent,
        MyUploadsComponent,
        CopySongComponent,
        UploadSongComponent,
        TrackIconComponent,
        AudioPlayerComponent,
        EditControlsComponent,
        TrackInfoComponent,
        WaveformComponent,
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
    providers: [appRoutingProviders, NerveService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
