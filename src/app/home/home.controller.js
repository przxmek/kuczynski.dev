export default class HomeController {
    constructor($window, Data) {
        this.my = Data.home();
        this.$window = $window
    }

    mail(same_window=false) {
        let target = same_window ? "_self" : "_blank" ;
        let subject = "Hello";
        let message = "Hello from the other side!";

        this.$window.open("mailto:"+ this.my.email + "?subject=" + subject + "&body=" + message , target);
    }
}

HomeController.$inject = ['$window', 'Data'];
