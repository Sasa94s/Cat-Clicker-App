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
        this.catsImg = ['images/625069434_bf6e0d6ea4_o.jpg',
            'images/2290467335_d4fd0b3bd7_o.jpg',
            'images/4638426067_90c4df41e9_o.jpg',
            'images/5616147572_bf5ec3201f_o.jpg',
            'images/13772619545_71e66591a8_o.jpg',
            'images/unnamed.jpg'];
        this.clicks = [];
        this.name = [];
        for(var i = 0; i < this.catsImg.length; i++){
            this.clicks.push(0);
            this.name.push('Cat'+(i+1));
        }
        this.currentCat = 0;
    },
    getCurrentCat: function () {
        return this.currentCat;
    },
   getCat: function (i) {
       return this.catsImg[i];
   },
    incrClick: function () {
      ++this.clicks[this.getCurrentCat()];
    },
   getClick: function (i) {
       return this.clicks[i];
   },
   getCats: function () {
       return this.catsImg;
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
        this.renderAdminData();
        view.clicks.innerText = model.getCurrentClick();
    },
    renderAdminData: function () {
        var name = model.name[this.getCurrentCat()];
        var url = model.catsImg[this.getCurrentCat()];
        var clicks = model.clicks[this.getCurrentCat()];
        view.labelName.value = name;
        view.labelURL.value = url;
        view.labelClicks.value = clicks;
    },
    toggleAdminView: function () {
        this.renderAdminData();
        view.toggleAdminView();
    },
    updateAdminData: function () {
        model.name[this.getCurrentCat()] = view.labelName.value;
        model.catsImg[this.getCurrentCat()] = view.labelURL.value;
        view.cat.src = model.catsImg[this.getCurrentCat()];
        model.clicks[this.getCurrentCat()] = view.labelClicks.value;
        view.clicks.innerText = model.clicks[this.getCurrentCat()];
    }
};

var view = {
   init: function () {
       this.cat = document.getElementById('cat');
       this.clicks = document.getElementById('clicks');
       this.navBar = document.getElementsByClassName('navbar-nav');
       this.navLinks = [];
       this.adminView = document.getElementById('adminView');
       this.toggleAdminView();
       this.labelName = document.getElementById('catName');
       this.labelURL = document.getElementById('imgURL');
       this.labelClicks = document.getElementById('noClicks');
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
                  octupus.renderAdminData();
               };
           }(newSrc, i));
       }
       cat.addEventListener('click', function () {
           octupus.incrClick();
       });
   },
   setClick: function (clicks) {
       this.clicks.text(clicks);
   },
   switchCats: function (i, src) {
       this.cat.setAttribute('src', src);
   },
    updateInfo: function () {
        
    },
    toggleAdminView: function () {
       if(this.adminView.style.visibility === 'hidden'){
            this.adminView.style.visibility = 'visible';
       } else {
            this.adminView.style.visibility = 'hidden';
       }
    }

};

octupus.init();

