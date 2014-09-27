/**
 * jQuery plugin PopupWindow - use for create popup windows on websites
 */
(function($){
    $.fn.popupWindow = function(options) {
        var options = $.extend( {
            closeSelector: '',
            timeout: 1000,
            position: {v: "bottom", h: "left"},
            margin: 10,
            animation: true
        }, options),
            cssProps = {},
            popupWindow = this;

        cssProps["display"] = "none";
        cssProps["position"] = "fixed";
        cssProps[options.position.v] = options.margin;
        cssProps[options.position.h] = options.margin;
        popupWindow.css(cssProps);

        setTimeout(function() {
            if (options.animation) {
                popupWindow.animate({height: "show"}, this.height);
            } else {
                popupWindow.show();
            }
        }, options.timeout);

        $("body").on("click", options.closeElementSelector, function() {
            popupWindow.remove();
        });
    };
})(jQuery);
