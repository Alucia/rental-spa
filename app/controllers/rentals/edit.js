import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        save(model) {
            console.log(model.title)
        }
    }
});
