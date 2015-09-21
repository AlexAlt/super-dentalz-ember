import Ember from 'ember';

export default Ember.Component.extend({
  addNewBrushType: false,
  actions: {
    brushFormShow() {
      this.set('addNewBrushType', true);
    },

    brushsave1() {
      var params = {
        type: this.get('type'),
        power: this.get('power'),
        materials: this.get('materials'),
        characteristics: this.get('characteristics'),
        rating: this.get('rating'),
        image: this.get('image'),
      };
      this.set('addNewBrushType', false),
      this.sendAction('brushsave2', params);
    }
  }
});
