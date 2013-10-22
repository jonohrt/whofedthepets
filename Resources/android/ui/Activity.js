function Activity(message) {
    activity_indicator = Titanium.UI.createActivityIndicator({
        bottom: 10,
        height: 50,
        width: 10,
        message: message
    });
}

var activity_indicator;

Activity.prototype.show = function() {
    activity_indicator.show();
};

Activity.prototype.hide = function() {
    activity_indicator.hide();
};

Activity.prototype.setMessage = function(text) {
    activity_indicator.message = text;
};

module.exports = Activity;