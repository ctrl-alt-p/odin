import DS from 'ember-data';

export
default DS.Model.extend({
    //
    // Model Attributes:
    //
    date: DS.attr('date'),
    //
    // Associations to other models:
    //
    stock: DS.belongsTo('stock'),
    option_chains: DS.hasMany('option-chains', {
        async: true,
    }),
});
