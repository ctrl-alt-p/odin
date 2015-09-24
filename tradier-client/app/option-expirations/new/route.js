import Ember from 'ember';
import SaveModelMixin from '../../mixins/option-expirations/save-model-mixin';

export default Ember.Route.extend(SaveModelMixin, {
  model: function() {
    return this.store.createRecord('option-expiration');
  }
});
