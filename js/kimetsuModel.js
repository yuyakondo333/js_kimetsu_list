export class KimetsuModel {
  constructor() {
    this.charApis = {
      'all': "https://ihatov08.github.io/kimetsu_api/api/all.json",
      'kisatsutai': "https://ihatov08.github.io/kimetsu_api/api/kisatsutai.json",
      'hashira': "https://ihatov08.github.io/kimetsu_api/api/hashira.json",
      'oni': "https://ihatov08.github.io/kimetsu_api/api/oni.json"
    }
  }

  async getCharacterInfo(type) {
    const url = this.charApis[type];
    if (!url) {
      throw new Error(`Invalid character type: ${type}`);
    }

    const res = await fetch(url);
    if (!res.ok) throw new Error(`Response status: ${res.status}`);
    return await res.json();
  }
}
