import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(),
  power: DS.attr(),
  materials: DS.attr(),
  characteristics: DS.attr(),
  rating: DS.attr(),
  image: DS.attr()
});
