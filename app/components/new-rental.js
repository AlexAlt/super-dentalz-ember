import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },

    save1() {
      var params = {
        owner: this.get('owner'),
        type: this.get('type'),
        condition: this.get('condition'),
        bristles: this.get('bristles'),
        image: this.get('image'),
      };
      this.set('addNewRental', false),
      this.sendAction('save2', params);
    }
  }
});
