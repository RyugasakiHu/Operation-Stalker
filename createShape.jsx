function createShape(thisObj)
{
    //global var
    var scriptName = "create Shape"
    var myComp = app.project.items[1];
    
    var transform = false
    var rotate= false
    var scale= false
    var cube= false
    var triangle= false
    var circle= false
    //var = false
    
    //click
    function changeSta()
    {
        if (transform == false)
          {
              //alert("transform == false", scriptName);
              return transform
              }
          else
          {
              //alert("transform == true", scriptName);
              return transform
              }
        //alert("I need a real command,colonel", scriptName);
    }
    
    function createShape()
    {
        //recongize shape                  
        if (cube == false)
          {
              var mySolid = myComp.layers.addSolid([1.0,1.0,0], "my square", 50, 50, 1);
              }
          else
          {
              return cube
              //alert("transform == true", scriptName);
              }
        //alert("I need a real command,colonel", scriptName)
    }
    //addScriptButton
    function addScriptButton(palette, buttonRect, buttonLabel)
		{
			var newButton = palette.add("button", buttonRect, buttonLabel);
            
			newButton.onClick = createShape;
			return newButton;
		}
    //click
    //tras
        function traClick()
    {
        if (transform != true)
        {
            transform = true
        }
        else
        {
            transform = false
        }
    }
    
    //createUI
    function createUI(thisObj) 
        {
            var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette",scriptName,
            undefined);
                myWin.orientation = "column";
                
            var groupOne = myPanel.add("group",undefined,"GroupOne")
            groupOne.orientation = "row";
            var traCheckBox = groupOne.add("checkbox",undefined,"tra");
            traCheckBox.onClick = traClick
            var rotCheckBox = groupOne.add("checkbox",undefined,"rot");
            var sclCheckBox = groupOne.add("checkbox",undefined,"scl");
            var opecityCheckBox = groupOne.add("checkbox",undefined,"ope");
            
            var groupTwo = myPanel.add("group",undefined,"groupTwo")
            groupTwo.orientation = "row";
            var cubeCheckBox = groupTwo.add("checkbox",undefined,"cube");
            var triangleCheckBox = groupTwo.add("checkbox",undefined,"triangle");
            var circleCheckBox = groupTwo.add("checkbox",undefined,"circle");
            
            
            var groupThree = myPanel.add("group",undefined,"groupThree");
            groupThree.orientation = "column";
            var buttonCube = addScriptButton(groupThree, [10, 10, 100, 30], "create");          
            //var buttonCube = myPanel.add("button", [10, 10, 100, 30], "cube");
            
            myPanel.show();
            return myPanel;
        }
    var panel = createUI(this);
 }
createShape (this)
