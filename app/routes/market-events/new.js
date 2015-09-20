import Ember from 'ember';
import SaveModelMixin from '../../mixins/market-events/save-model-mixin';

export default Ember.Route.extend(SaveModelMixin, {
  model: function() {
    return this.store.createRecord('market-event');
  }
});
