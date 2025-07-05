export class KimetsuView {
  constructor() {
    this.characterList = document.querySelector('.character-list');
    this.container = document.querySelector('.container');
  }

  showLoading() {
    // キャラクター一覧を非表示
    this.characterList.classList.add('hidden');
    
    // ローディング画面を表示
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'roading';
    loadingDiv.innerHTML = '<h3>キャラクターを絞り込んでいます</h3>';
    loadingDiv.id = 'loading-screen';
    
    this.container.appendChild(loadingDiv);
  }

  hideLoading() {
    // ローディング画面を削除
    const loading = document.getElementById('loading-screen');
    if (loading) loading.remove();
    
    // キャラクター一覧を表示
    this.characterList.classList.remove('hidden');
  }

  displayCharacters(characters) {
    this.characterList.innerHTML = '';
    
    characters.forEach(character => {
      const li = document.createElement('li');
      li.className = 'character-item';
      
      const img = document.createElement('img');
      img.src = this.getAbsoluteImagePath(character.image);
      img.alt = character.name;
      
      const nameP = document.createElement('p');
      nameP.textContent = character.name;
      
      const categoryP = document.createElement('p');
      categoryP.textContent = character.category;
      
      li.appendChild(img);
      li.appendChild(nameP);
      li.appendChild(categoryP);
      
      this.characterList.appendChild(li);
    });
  }
  
  getAbsoluteImagePath(relativePath) {
    return `https://ihatov08.github.io${relativePath}`;
  }

  showError(message) {
    this.characterList.innerHTML = `<li class="error-message">${message}</li>`;
  }
}
