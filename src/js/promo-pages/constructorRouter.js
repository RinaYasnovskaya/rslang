export const constructorGame = () => `
      <div id="myModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
        <a href="#/" class="close"></a>
          <span class="modal-header__name">Мини-игра Constructor</span> 
        </div>
        <div class="modal-body">
          <p class="modal-body__description">Constructor - это мини-игра в которой надо собирать слова с помощью предоставленных букв.</p>
          <p>Вы имеете карточки с буквами кликая по которым вы собираете буквы, кликать по карточкам надо в правильном порядке.</p>
          <iframe src="https://www.youtube.com/embed/f4ioMGDQblI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="modal-body__video"></iframe>
        </div>
        <div class="modal-footer">
          <button class="modal-footer__button-start" id="constructorGame"><span class="modal-footer__button-name">Начать</span></button>
        </div>
      </div>
      </div>
      `;