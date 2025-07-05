import { KimetsuModel } from "./kimetsuModel.js";
import { KimetsuView } from "./kimetsuView.js";

export class KimetsuController {
  constructor() {
    this.model = new KimetsuModel();
    this.view = new KimetsuView();
    
    this.init();
  }

  async init() {
    await this.loadCharacters('all');
    this.setupEventListeners();
  }

  setupEventListeners() {
    const radioButtons = document.querySelectorAll('input[name="narrow-down"]');
    
    radioButtons.forEach(radio => {
      radio.addEventListener('change', async (event) => {
        if (event.target.checked) {
          await this.loadCharacters(event.target.id);
        }
      });
    });
  }

  async loadCharacters(type) {
    try {
      this.view.showLoading();
      
      // API取得とタイマーを並列実行
      const [characters] = await Promise.all([
        this.model.getCharacterInfo(type),
        this.minimumLoadingTime(1000)
      ]);
      
      this.view.hideLoading();
      this.view.displayCharacters(characters);
      
    } catch (error) {
      this.view.hideLoading();
      this.view.showError('エラーが発生しました');
      console.error('詳細エラー:', error);
    }
  }

  // ローディング時間
  minimumLoadingTime(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
