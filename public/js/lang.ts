class Language {
	
	static get(key: string, def:string):string {

		if(!def) def = "E_MISSING_TRANSLATION";

		return window.$lang[key] == null ? def : window.$lang[key];

	}

}