var Cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.nicknames = ko.observableArray(data.nicknames);

    this.title = ko.computed(function () {
        var title;
        var clicks = this.clickCount();
        if(clicks<10){
            title = 'Noob';
        } else if(clicks<20){
            title = 'Semi-Pro';
        } else if(clicks<30){
            title = 'Pro';
        } else if(clicks<40){
            title = 'World Class';
        } else if(clicks<70){
            title = 'Awesome';
        } else if(clicks<100){
            title = 'Super Awesome';
        } else {
            title = 'Ninja';
        }
        return title;
    }, this);

};

var initialCats = [
    {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'images/625069434_bf6e0d6ea4_o.jpg',
        nicknames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']
    },
    {
        clickCount: 0,
        name: 'Habby',
        imgSrc: 'images/2290467335_d4fd0b3bd7_o.jpg',
        nicknames: ['Habtab', 'H-Bone', 'Mr. H', 'Habitha Hab Habby Catty Cat']
    },
    {
        clickCount: 0,
        name: 'Shabby',
        imgSrc: 'images/4638426067_90c4df41e9_o.jpg',
        nicknames: ['Shabtab', 'Sh-Bone', 'Mr. Sh', 'Shabitha Shab Shabby Catty Cat']
    },
    {
        clickCount: 0,
        name: 'Dabby',
        imgSrc: 'images/5616147572_bf5ec3201f_o.jpg',
        nicknames: ['Dabtab', 'D-Bone', 'Mr. D', 'Dabitha Dab Dabby Catty Cat']
    },
    {
        clickCount: 0,
        name: 'Babby',
        imgSrc: 'images/13772619545_71e66591a8_o.jpg',
        nicknames: ['Babtab', 'B-Bone', 'Mr. B', 'Babitha Bab Babby Catty Cat']
    },
    {
        clickCount: 0,
        name: 'Jabby',
        imgSrc: 'images/unnamed.jpg',
        nicknames: ['Jabtab', 'J-Bone', 'Mr. J', 'Jabitha Jab Jabby Catty Cat']
    }

];

var ViewModel = function () {
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function (catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);
    this.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    this.switchCat = function (clickedCat) {
        self.currentCat(clickedCat);
    };


};

ko.applyBindings(new ViewModel());