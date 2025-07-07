export class KimetsuModel {
  constructor() {
    this.url = 'https://ihatov08.github.io/kimetsu_api/api/';
    this.validTypes = ['all', 'kisatsutai', 'hashira', 'oni'];
  }

  async getCharacterInfo(value) {
    if (!this.validTypes.includes(value)) {
      throw new Error(`Invalid character type: ${value}. Valid types: ${this.validTypes.join(', ')}`);
    }
    
    const url = this.url + `${value}.json`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    return await res.json();
  }
}
