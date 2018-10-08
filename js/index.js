;(function($, window, document, undefined) {
    var pluginName = "shuffling",
        defaults = {
          
        };
    function Rili(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._name = pluginName;
        this.init();
    }
    Rili.prototype = {
        init: function() {
    		var _this= this.settings;
            var that = this;
           
        }
    };
    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Rili(this, options));
            }
        });
        return this;
    };

})(jQuery, window, document);


