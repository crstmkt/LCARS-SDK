/** LCARS SDK 19182.4
* This file is a part of the LCARS SDK.
* https://github.com/AricwithanA/LCARS-SDK/blob/master/LICENSE.md
* For more information please go to https://github.com/crstmkt/LCARS-SDK/wiki.
**/

//To render JS Code into DOM
$( document ).ready(function() {
    $('body').append( LCARS.create(nemesisUI).dom );
});

//Colours
var uiColors = ['bg-blue-1', 'bg-blue-2','bg-blue-3','bg-blue-4','bg-green-1','bg-green-2','bg-green-3','bg-green-4'];

//All this will be rendered into DOM
var nemesisUI = {type:'wrapper', id:'wpr_viewport', version:'row', flex:'h', 
arrive:function(){var dom = this.dom; LCARS.helper.viewportZoom(dom, {width:1440, height:1080}); 
    window.addEventListener("resize", function(){LCARS.helper.viewportZoom(dom, {width:1440, height:1080});});},

//All DOM CHildren for nemesisUI
children:[
      
//Main Area
    {type:'wrapper', version:'column', id:'wpr_mainView', flex:'v', flexc:'h', children:[   

        //Header Bars
        {type:'row', version:'frame', flex:'h', children:[ //This is for horizontal alignment
            {type:'button', color:'bg-blue-1', label:'Round', version:'round'},
            {type:'button', color:'bg-blue-1', label:'Round left', version:'round-left'},
            {type:'button', color:'bg-blue-1', label:'Button'},
            {type:'button', color:'bg-blue-1', label:'Round right', version:'round-right'}
        ]}    
    ]}
]}; 