import {slides} from './data.js';


// кнопки далее и назад
// подпись текста к каждому слайду
// вывод номера и максимального количества (1/3,2/3,/3/3)
// пагинация (при клике - переключается на нужный слайд)
// Дополнительные параметры:
//
//     loop - возможность листать слайдер по кругу (например когда на 3 слайде нажимаем далее - переходим на 1). true или false
// navs - Вывод стрелочек или их отключение. true или false
// pags - вывод пагинации или отключение. true или false
// auto - слайдер сам переключается, если delay не указан, раз в 5 сек. А
// stopMouseHover - если навести мышкой на слайд, он не переключается, как только мышку убрали, снова пошло. Работает только когда auto равен true. true или false
// delay - время в секундах на показ слайда, если auto true


class Slider {
    constructor(slides, selector, {loop, navs, pags, auto, delay = 5}) {
        this.slides = slides;
        this.selector = document.querySelector(selector);
        this.loop = loop;
        this.navs = navs;
        this.pags = pags;
        this.auto = auto;
        this.delay = delay;
        this._activSlider = 0;
        this.sliderId = null;
    }

    get activSlider() {
        return this._activSlider
    }

    set activSlider(v){
        if(v < 0)  this._activSlider = this.loop ? this.slides.length -1 : 0;
        else if(v > this.slides.length -1)  this._activSlider = this.loop ? 0 : this.slides.length -1;
        else this._activSlider = v;
        this.clearMarkup();
        this.init();
    }

    init = () => {
        const markup = [];
        if (this.navs) {
         markup.push(this.addArrowBtn())
        }
       if(this.pags) {
           markup.push(this.addPaginationList())
       }
       markup.push(this.addCounter());
       markup.push(this.addImgEl());
       markup.push(this.addDesc());
       this.addMarkup(markup);
       this.addHandler();
       clearInterval(this.sliderId);
       this.toggleSlider();
    }

    addArrowBtn = () => {
        return ` <ul class="slider__buttons">
      <li class="slider__item">
        <button class="left__btn" type="button">&lsaquo;</button>
      </li>
      <li class="slider__item">
        <button class="right__btn" type="button">&rsaquo;</button>
      </li>
    </ul>`
    }

    addPaginationList = () => {
        return ` <ul class="slider__pagination-list">

    ${this.slides.map((item, index) => {
          return `<li class="pagination-list__item">
                <button type="button" class="pagination-list__btn ${this.activSlider === index ? 'active' : ''}" data-index='${index}'></button>
            </li>`
        } )}
    </ul>`
    }

    addCounter = () => {
        return `<div class="counter"><span class="current__counter">${this.activSlider + 1}</span>/<span class="all__counter">${this.slides.length}</span></div>`
    }

    addImgEl = () => {
        return ` <img class="slider__image" src="${this.slides[this.activSlider].img}" alt="${this.slides[this.activSlider].text}">`
    }

    addDesc = () => {
        return ` <p class="slider__description">${this.slides[this.activSlider].text}</p>`
    }

    addMarkup = (markup) => {
        this.selector.insertAdjacentHTML('beforeend', markup.join(''))
    }

    onHandlerClick = (e) => {
        if(e.target.classList.contains('left__btn')){
        this.activSlider -=1;
        }
        if(e.target.classList.contains('right__btn')){
            this.activSlider +=1;
        }
        if(e.target.classList.contains('pagination-list__btn')){
       const index = Number(e.target.dataset.index)
            this.activSlider = index
        }
        console.log(e.target)
    }

    addHandler = () => {
        this.selector.addEventListener('click',this.onHandlerClick)
    }

    clearMarkup = () => {
        this.selector.innerHTML = ''
    }

    toggleSlider = () => {
        this.sliderId = setInterval(()=>{
            this.activSlider += 1
        },this.delay * 1000)

    }

}

const mySlider = new Slider(
    slides, // слайды
    ".slider", // id для вставки в html
    {
        loop: true,
        navs: true,
        pags: true,
        auto: true,
        delay: 3,
    }
);


mySlider.init()
console.log(mySlider)

