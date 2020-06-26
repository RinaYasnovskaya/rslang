export const mainGameRender = () => `
  <section class="game_main__wrapper">
  <div class="game_main__modal">
    <div class="modal__inner">
      <h2>Ура! На сегодня все.</h2>
      <p>Есть еще новые карточки, но дневной лимит исчерпан.</p>
      <p>Вы можете увеличить лимит в настройках, но, пожалуйста,
      имейте в виду, что чем больше новых карточек вы посмотрите, тем больше вам надо будет повторять в ближайшее время.</p>
      <div class="modal__button_block">
        <div class="button__main-game button__main"><a href="#/main">Выход</a></div>
        <button class="button__main-game">Продолжить</button>
      </div>
    </div>
  </div>
  <div class="game_main__wrapper_inner">
    <div class="game_main">
      <div class="arrow arrow--left" id="arrow_left"></div>
      <div class="card_wrapper">
        <div class="main__field">
          <div class="card-game">
              <div class="card-text card-text--quest">
                <span class="sentence sentence--first-part"></span>
                <div class="sentence sentence--target-word" id="user_input"contenteditable></div>
                <span class="sentence sentence--last-part"></span>
              </div>
              <div class="separator"><hr></div>
              <div class="card-text"><span class="card-text--translate"></span></div>
            </div>
          </div>
        </div>
        <div class="arrow arrow--right" id="arrow_right"></div>
      </div>
      <div class="hint">
      <div class="hint--translate_word"></div>
      <div class="hint--image"></div>
      <div class="hint--text_example"></div>
      </div>
      <div class="controls">
        <button class="button__main-game" id="difficult">Сложно</button>
        <button class="button__main-game" id="answer">Показать ответ</button>
        <button class="button__main-game" id ="delete">Удалить</button>
      </div>
      <div class="progress-bar">
        <div class="progress">
          <div class="progress-done"></div>
        </div>
      </div>
    </div>
    </div>
  </section>
  `;
