/**
 * Sending users to ebay global import item link.
 * @author me.shefaligupta@gmail.com (Shefali Gupta)
 */


/**
 * App Namespace.
 * @type {{}}
 */
var globalimport = {};


/**
 * Adding button for global import
 */
globalimport.loadIcon = function() {
	
    var itemId = $('#descItemNumber').text();
	var entry = '<a role="button" style="margin-left:50%;margin-bottom:20px;" '+
	'class="btn btn-prim"'+
	' href="http://geb.ebay.in/ImportHubViewItem?itemid=' 
	+ itemId+  '">Link to Global Import</a>';
 
  	jQuery( 'div#why2buy' ).prepend (entry);
};

/**
 * Adding link to global import 
 */
 jQuery(document).ready(function(){
		globalimport.loadIcon();
 });