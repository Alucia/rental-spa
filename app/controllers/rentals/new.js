import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        create(params) {
            console.log('title: ' + params.title)
            console.log('owner: ' + params.owner)
            console.log('owner: ' + params.owner)
        }
    }
});