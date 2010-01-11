plugin.loadLang();

if(plugin.enabled && plugin.canChangeMenu())
{
	theWebUI.getSource = function( id )
	{
		$("#srchash").val(id);
		$("#getsource").submit();
	}

	plugin.createMenu = theWebUI.createMenu;
	theWebUI.createMenu = function( e, id )
	{
		plugin.createMenu.call(this, e, id);
		var el = theContextMenu.get( theUILang.Properties );
		if( el )
			theContextMenu.add( el, [theUILang.getSource + "...",  (this.getTable("trt").selCount > 1) ? null : "theWebUI.getSource('" + id + "')"] );
	}
}

plugin.onLangLoaded = function()
{
	if(this.enabled)
	{
		$(document.body).append($("<iframe>").attr( { name: "srcfrm", id: "srcfrm" } ).width(0).height(0).load(function()
		{
		        $("#srchash").val('');
			var d = (this.contentDocument || this.contentWindow.document);
			if(d.location.href != "about:blank")
				eval(d.body.innerHTML);
		}));
		$(document.body).append(
			$('<form action="plugins/source/action.php" id="getsource" method="get" target="srcfrm">'+
				'<input type="hidden" name="hash" id="srchash" value="">'+
			'</form>').width(0).height(0));
        }
}