/* global requirejs:false, define:false, Promise:false */
(function () {
 
  function _ojIsIE11() {
    var nAgt = navigator.userAgent;
    return nAgt.indexOf('MSIE') !== -1 || !!nAgt.match(/Trident.*rv:11./);
  };
  var _ojNeedsES5 = _ojIsIE11();
 
  requirejs.config({
	baseUrl: 'js',
    // Path mappings for the logical module names
    paths: {
      'knockout': 'libs/knockout/knockout-3.5.0',
      'jquery': 'libs/jquery/jquery-3.4.1.min',
      'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.12.1.min',
      'ojs': 'libs/oj/v8.1.0/debug' + (_ojNeedsES5 ? '_es5' : ''),
      'ojL10n': 'libs/oj/v8.1.0/ojL10n',
      'ojtranslations': 'libs/oj/v8.1.0/resources',
      'text': 'libs/require/text',
      'hammerjs': 'libs/hammer/hammer-2.0.8.min',
      'signals': 'libs/js-signals/signals.min',
      'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.1.min',
      'css': 'libs/require-css/css.min',
      'customElements': 'libs/webcomponents/custom-elements.min',
      'proj4': 'libs/proj4js/dist/proj4',
      'touchr': 'libs/touchr/touchr',
      'corejs': 'libs/corejs/shim.min',
      'regenerator-runtime': 'libs/regenerator-runtime/runtime',
      'summaryModel': 'summaryModel'
    },
    // Shim configurations for modules that do not expose AMD
    shim: {
      jquery: {
        exports: ['jQuery', '$']
      }
    },
 
    // This section configures the i18n plugin. It is merging the Oracle JET built-in translation
    // resources with a custom translation file.
    // Any resource file added, must be placed under a directory named "nls". You can use a path mapping or you can define
    // a path that is relative to the location of this main.js file.
    config: {
        ojL10n: {
          merge: {
            //'ojtranslations/nls/ojtranslations': 'resources/nls/myTranslations'
          }
      },
      text: {
        // Override for the requirejs text plugin XHR call for loading text resources on CORS configured servers
        // eslint-disable-next-line no-unused-vars
        useXhr: function (url, protocol, hostname, port) {
          // Override function for determining if XHR should be used.
          // url: the URL being requested
          // protocol: protocol of page text.js is running on
          // hostname: hostname of page text.js is running on
          // port: port of page text.js is running on
          // Use protocol, hostname, and port to compare against the url being requested.
          // Return true or false. true means "use xhr", false means "fetch the .js version of this resource".
          return true;
        }
      }
    }
  });
 
 
  if (_ojNeedsES5) {
    define('polyfills', ['corejs', 'regenerator-runtime']);
  } else {
    define('polyfills', []);
  };
 
  define('promise', ['polyfills'], function () {
    Promise.polyfill = function () {};
    return Promise;
  });
}());


require(['ojs/ojbootstrap','jquery', 'knockout', 'summaryModel', 'ojs/ojknockout'],
		  function (Bootstrap, $, ko, summaryModel) { // this callback gets executed when all required modules are loaded
		    Bootstrap.whenDocumentReady().then(
		      function() {
		    	   var summaryCompId = "summaryPageJETContainer";
		    	   var summaryComp = document.getElementById(summaryCompId);
		    	   if(summaryComp)
		    	   {
			           var mySummaryModel = new summaryModel.vm();
			           if(!ko.dataFor(summaryComp)){
			         	  ko.applyBindings(mySummaryModel, summaryComp);
			           }
			           else{
			         	  ko.cleanNode(summaryComp);   
			         	  ko.applyBindings(mySummaryModel, summaryComp);
			           }
		    	  }
		   });
		  }
		);

function getJSON(url, callback) {
    var headers = {
        'content-type': 'application/json'
    };
    $.ajax
            ({
                type: "GET",
                url: url,
                headers: headers,
                success: function (response, status, xhr) {
                    var httpStatus = xhr.status;
                    console.log("getJSON::http status  is " + httpStatus);
                    if (httpStatus === 200) {
                        callback('', response);
                    }
                },
                error: function (jxhr, event, data) {
                    var httpStatus = jxhr.status;
                    console.log("getJSON::http status is " + httpStatus);
                    callback(jxhr, '');
                }
            });
}
