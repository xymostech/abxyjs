/* world
 * worlds contain lists of entities, and update and draw them
 */

ABXY.world = (function() {

var world = ABXY.messagepasser.Extend({
    Init: function(stage) {
        this._super("world", stage);

        this.stage = stage;
        this.SetMessageParent(this.stage);

        this.entities = [];
        this.updating = false;

        this.to_add = [];
        this.to_remove = [];
    },

    AddEntity: function(entity) {
        if (this.updating) {
            this.to_add.push(entity);
        } else {
            this.AddMessageChild(entity);
            entity.Register(this);
            this.entities.push(entity);
        }
    },

    RemoveEntity: function(entity) {
        if (this.updating) {
            this.to_remove.push(entity);
        } else {
            this.entities.splice(this.entities.indexOf(entity), 1);
            this.RemoveMessageChild(entity);
        }
    },

    Update: function(data) {
        this.updating = true;
        _.each(this.entities, function(e) {
            e.Update(data);
        }, this);
        this.updating = false;

        _.each(this.to_add, function(e) {
            this.AddEntity(e);
        }, this);

        _.each(this.to_remove, function(e) {
            this.RemoveEntity(e);
        }, this);

        this.to_add = [];
        this.to_remove = [];
    },

    Draw: function(context) {
        _.each(this.entities, function(e) {
            e.Draw(context);
        }, this);
    },

    GetEntities: function() { return this.entities; },

    FilterEntities: function(types) {
        if (!_.isArray(types)) {
            types = [types];
        }

        return _.filter(this.entities, function(entity) {
            return _.any(types, function(type) {
                return entity.IsType(type);
            }, this);
        }, this);
    },

    CallOnEntities: function(types, callback, context) {
        if (!_.isArray(types)) {
            types = [types];
        }

        _.each(this.entities, function(entity) {
            if (_.any(types, function(type) { return entity.IsType(type); })) {
                if (context) {
                    callback.call(context, entity);
                } else {
                    callback(entity);
                }
            }
        }, this);
    },
});

return world;

})();
