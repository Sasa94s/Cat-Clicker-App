$(document).ready(function () {
   // var $img = $('img');
// var $b = $('b');
// var clicks = [];
// for(var i = 0; i < $img.length; i++){
//     clicks.push(0);
// }
// $.each($img, function (i, image) {
//     image.addEventListener('click', function () {
//         $b.eq(i).text(++clicks[i]);
//     });
// });

var model = {
    init: function () {
        this.cats = ['images/625069434_bf6e0d6ea4_o.jpg',
            'images/2290467335_d4fd0b3bd7_o.jpg',
            'images/4638426067_90c4df41e9_o.jpg',
            'images/5616147572_bf5ec3201f_o.jpg',
            'images/13772619545_71e66591a8_o.jpg',
            'images/unnamed.jpg'];
        this.clicks = [];
        for(var i = 0; i < this.cats.length; i++){
            this.clicks.push(0);
        }
        this.currentCat = 0;
    },
    getCurrentCat: function () {
        return this.currentCat;
    },
   getCat: function (i) {
       return this.cats[i];
   },
    incrClick: function () {
      ++this.clicks[this.getCurrentCat()];
    },
   getClick: function (i) {
       return this.clicks[i];
   },
   getCats: function () {
       return this.cats;
   },
   getClicks: function () {
       return this.clicks;
   },
    getCurrentClick: function () {
        return this.getClick(this.getCurrentCat());
    }

};

var octupus = {
    init: function () {
        model.init();
        view.init();
    },
    setCurrentCat: function (i) {
      model.currentCat = i;
    },
    getCurrentCat: function () {
      return model.currentCat;
    },
    getCurrentClick: function () {
      return mode.getClick()
    },
    getCatSrcs: function () {
       return model.getCats();
    },
    getNumClicks: function () {
       return model.getClicks();
    },
    getCatSrc: function (i) {
       return model.getCat(i);
    },
    setNumClick: function (i, val) {
        model.setClick(i, val);
    },
    getNumClick: function (i) {
       return model.getClick(i);
    },
    incrClick: function () {
        model.incrClick();
        view.clicks.innerText = model.getClick(model.getCurrentCat());
    },
    renderCurrentClick: function () {
        view.clicks.innerText = model.getCurrentClick();
    }
};

var view = {
   init: function () {
       var cat = document.getElementById('cat');
       this.clicks = document.getElementById('clicks');
       this.navBar = document.getElementsByClassName('navbar-nav');
       this.navLinks = [];
       for(var i = 0; i < octupus.getNumClicks().length; i++){
           var navItem = document.createElement('li');
           navItem.classList.add('nav-item');
           var navLink = document.createElement('a');
           navLink.classList.add('nav-link');
           navLink.textContent = 'Cat '+(i+1);
           navItem.appendChild(navLink);
           var newSrc = octupus.getCatSrc(i);
           this.navLinks.push(navLink);
           this.navBar[0].appendChild(navItem);
           this.navLinks[i].addEventListener('click', function (newSrcCopy, iCopy) {
               return function () {
                  cat.src = newSrcCopy;
                  octupus.setCurrentCat(iCopy);
                  octupus.renderCurrentClick();
               };
           }(newSrc, i));
       }
       cat.addEventListener('click', function () {
           console.log(this.clicks);
           octupus.incrClick();
       });
   },
   setClick: function (clicks) {
       this.clicks.text(clicks);
   },
   switchCats: function (i, src) {
       this.cat.setAttribute('src', src);
   }

};

octupus.init();

});