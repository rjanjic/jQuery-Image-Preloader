/*!
 * jQuery Image Preloader
 *
 * @fileoverview jQuery Image Preload Plugin
 *
 * @author Radovan Janjic <rade@it-radionica.com>
 * @copyright 2013-2014 Radovan Janjic <rade@it-radionica.com>
 * @license http://opensource.org/licenses/BSD-3-Clause
 */
;(function ($){
	"use strict";
	$.fn.preload = function(callback, callbackAll) {
		var i = 0;
		var promises = new Array;
		return this.each(function() {
			if (typeof this == "string" || $(this).is('img')) {
				var string = (typeof this == "string");
				(function(url, obj, promise) {
					var img = new Image();
					img.onload = function() {
						if (typeof callback === 'function') {
							// this done
							callback(obj);
						}
						promise.resolve();
					};
					img.src = url;
				})(string ? this : $(this).attr('src'), string ? this : $(this), promises[i++] = $.Deferred());
			}
		}).promise().done(function() {
			$.when.apply($, promises).done(function() {
				// all done
				if (typeof callbackAll === 'function') {
					callbackAll();
				}
			});
		});
	};
})(jQuery);
