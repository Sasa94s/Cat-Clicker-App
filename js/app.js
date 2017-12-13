var Cat = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('images/625069434_bf6e0d6ea4_o.jpg');
    this.nicknames = ko.observableArray(['Tabtab', 'T-Bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']);

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

var ViewModel = function () {
    this.currentCat = ko.observable(new Cat());
    this.incrementCounter = function () {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);

    };


};

ko.applyBindings(new ViewModel());