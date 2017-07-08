import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'timecode'})

export class TimecodePipe implements PipeTransform {
	transform(value: number, decimal?:boolean) : string {
		// value = parseFloat(value);
		return (value / 60 | 0) + ":" + ("00" + (value % 60 | 0)).substr(-2) + (decimal ? "." + (value % 1 + "0000").substr(2, 3) : '');
	}
}

@Pipe({name: 'lyrics'})

export class LyricsPipe implements PipeTransform {
	transform(lyrics: string, getTotal?:boolean) : string | number {

		var matches = new RegExp("\\b((" + window['$config'].banned_words.join("|") + ")[^\\s\\b,.\<\>]*)\\b", "igm"), match;

		var totalM = lyrics.match(matches);
		var total = totalM == null ? 0 : totalM.length;

		lyrics = lyrics.replace(matches, "<b>$1</b>");
		return getTotal ? total : lyrics; // [lyrics, total];

	}
}

@Pipe({name: 'nl2br'})

export class NL2BRPipe implements PipeTransform {
	transform(value: string) : string {
		return value.split("\n").join("<br />\n");
	}
}