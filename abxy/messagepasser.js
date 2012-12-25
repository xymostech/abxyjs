ABXY.messagequeue = (function() {

var messagequeue = ABXY.base.Extend({
    Init: function() {
        this.sendqueue = [];
        this.inqueue = [];

        this.sending = false;
    },

    AddMessage: function(sender, to, name, message) {
        var obj = {
            sender: sender,
            to: to,
            name: name,
            message: message,
        };

        if (!this.sending) {
            this.sendqueue.push(obj);
        } else {
            this.inqueue.push(obj);
        }
    },

    SendMessages: function() {
        this.sending = true;
        while (this.sendqueue.length > 0) {
            _.each(this.sendqueue, function(message) {
                message.to.ReceiveMessage(
                    message.sender,
                    message.name,
                    message.message
                );
            }, this);

            this.sendqueue = this.inqueue;
            this.inqueue = [];
        }
        this.sending = false;
    },
});

messagequeue.instance = new messagequeue();

return messagequeue;

})();

ABXY.messagepasser = (function() {

var messagepasser = ABXY.base.Extend({
    Init: function(name, parent) {
        this.message_name = name;
        this.message_parent = parent;
        this.message_children = [];
    },

    GetMessageName: function() {
        return this.message_name;
    },

    SetMessageParent: function(parent) {
        this.message_parent = parent;
    },

    AddMessageChild: function(child) {
        this.message_children.push(child);
    },

    RemoveMessageChild: function(child) {
        this.message_children.splice(this.message_children.indexOf(child), 1);
    },

    FindByName: function(name) {
        if (name.length == 0) {
            return [this];
        } else if (name[0] == "..") {
            if (this.message_parent) {
                return this.message_parent.FindByName(name.slice(1));
            } else {
                return [];
            }
        } else {
            var found = [];

            _.each(this.message_children, function(child) {
                if (child.message_name == name[0]) {
                    found = found.concat(child.FindByName(name.slice(1)));
                }
            }, this);

            return found;
        }
    },

    SendMessage: function(to, name, message) {
        _.each(this.FindByName(to.split('/')), function(found) {
            ABXY.messagequeue.instance.AddMessage(this, found, name, message);
        }, this);
    },

    ReceiveMessage: function(from, name, message) { },
});

return messagepasser;

})();
