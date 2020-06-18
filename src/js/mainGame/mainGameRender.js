function mainGameRender() {
  const template = `
  <section class="game_main__wrapper">
    <div class="game_main">
      <div class="main__field">
        <div class="card-game">
          <div class="card-text card-text--quest">
            <span class="sentence sentence--first-part"></span>
            <input class="sentence sentence--target-word"></input>
            <span class="sentence sentence--last-part"></span>
          </div>
          <div class="separator"></div>
          <span class="card-text card-text--translate"></span>
        </div>
        <div class="arrow arrow--left"></div>
        <div class="arrow arrow--right"></div>
      </div>
      <div class="translate__word"></div>
      <div class="progress-bar">
        <div class="progress">
          <div class="progress-done"></div>
        </div>
      </div>
    </div>
  </section>
  `;
  return template;
}
export default mainGameRender;
