function createShape(thisObj)
{
    //global var
    var scriptName = "create Shape"
    
    //click
    function onScriptButtonClick()
    {
        alert("I need a real command,colonel", scriptName);
    }
    //addScriptButton
    function addScriptButton(palette, buttonRect, buttonLabel)
		{
			var newButton = palette.add("button", buttonRect, buttonLabel);
            
			newButton.onClick = onScriptButtonClick;
			return newButton;
		}
    //createUI
    function createUI(thisObj) 
        {
            var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette",scriptName,
            [100, 100, 300, 300]);
            
            var buttonCube = addScriptButton(myPanel, [10, 10, 100, 30], "cube");
            //var buttonCube = myPanel.add("button", [10, 10, 100, 30], "cube");
            myPanel.show();
            return myPanel;
        }
    var panel = createUI(this);
 }
createShape (this)
