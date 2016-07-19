import CONFIG from './../config/config.js';
import singleton from './singleton.js';

class Preload {
  constructor() {
    this.preloadImg = CONFIG.isSP ? 'preload-img-sp' : 'preload-img-pc';
    this.preloadBg = CONFIG.isSP ? 'preload-bg-sp' : 'preload-bg-pc';
    this.preloadSVG = 'preload-svg';
  }
        
  load() {
    this.$images = $(`[data-preload^=${this.preloadImg}], [data-preload^=${this.preloadBg}]`);
    this.queue = new createjs.LoadQueue(false); // falseだとキャッシュを無効にする
    
    this.manifest = [];
  
    for(let i=0, len=this.$images.length; i<len; i++) {
      const type = this.$images.eq(i).attr('data-preload');
      const identify = `${type}-${i}`;
      const $el = this.$images.eq(i);
      const obj = {
        "src": $el.attr('data-src'), "id": identify
      };
      $el.addClass(identify);
      this.manifest.push(obj);
    }

    this.queue.addEventListener('fileload', this.handleFileLoad.bind(this));
    this.queue.addEventListener('complete', this.handleComplete.bind(this));

    this.queue.loadManifest(this.manifest, true);
  }
    
  // ファイルの読み込みが完了するごとに読み込まれる
  handleFileLoad(event) {
    const item = event.item;
    switch(item.type) {
      case createjs.LoadQueue.IMAGE:
        const src = event.result.src;
        const identify = event.item.id;
        const $target = $(`.${identify}`);
        switch($target.attr('data-preload')) {
          case this.preloadImg:
            $target.attr('src', src);
            break;
          case this.preloadBg:  
            $target.css('background-image', `url(${src})`);
            break;
        }
        break;
    }
  }

  // 全ファイルの読み込みが完了した時に呼ばれるイベント
  handleComplete(event) {}
}

module.exports = singleton(Preload);
