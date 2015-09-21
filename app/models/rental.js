import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  type: DS.attr(),
  condition: DS.attr(),
  bristles: DS.attr(),
  image: DS.attr()
});
