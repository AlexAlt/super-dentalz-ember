import Ember from 'ember';

//
// var brushTypes = [{
//  type: "Electric",
//  power: "Electric",
//  materials: "Plastic, metal",
//  characteristics: "Round or square brush head, charging station, often include timers and/or BlueTooth",
//  rating: ":) :) :) :) :)",
//  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlVuN5QPYsssx85dSjQXbTGzyKOuDLKkL8Rrv9JGE4Zs33TBOVPA"
//  }]


export default Ember.Route.extend({
  model() {
    return this.store.findAll("brushType");
  },

  actions: {
    brushsave3(params) {
      var newBrushType = this.store.createRecord('brushType', params);
      newBrushType.save();
      this.transitionTo('brush-types');
    }
  }
});
