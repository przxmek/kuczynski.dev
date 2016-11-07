import angular from 'angular';

class Data {
    static _initData() {
        return {
            home: {
                name: 'Przemek Kuczyński',
                position: 'Software Engineer | Adventurer',
                email: 'przemek@pkuczynski.pl',
                photoUrl: 'images/avatar.jpg',
                links: {
                    facebook: 'https://fb.com/pomylilomisie',
                    instagram: 'https://instagr.am/pomylilomisie',
                    linkedin: 'https://linkedin.com/in/pomylilomisie',
                    twitter: null,
                },
                copyright: '© Przemek Kuczyński'
            }
        }
    }

    constructor() {
        this.data = Data._initData();
    }

    home() {
        return this.data.home;
    }
}

export default angular.module('webid.core.services.data', [])
    .service('Data', Data)
    .name;
