/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["content.PermanentGeneralDevices"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["content.PermanentGeneralDevices"] = true;

dojo.provide('content.PermanentGeneralDevices');
dojo.require('components.Formatters');
dojo.require('components.Translator');

(function(){
    var cuvd                    = content.PermanentGeneralDevices;
    var tr                      = components.Translator; 
    var l                       = components.LoginLight.UserInfo.l_iso;

    var grid;
    var userID;

    var urlDevices		        = components.Const.cake+'devices/json_index/';

	var query           		= {'name':'*'};

    cuvd.create   = function(divParent,id){

        userID = id;
        console.log('Devices for', userID);

        var divGridAction     = document.createElement('div');
        dojo.addClass(divGridAction, 'divGridAction');

            //--------------------Action Part --------------------
            var divActions = document.createElement("div");
            dojo.addClass(divActions, "divActions");
                components.QElements.addAction({Name:tr.tr({'module': 'UserViewDevices','phrase':"Reload Data",'lang':l}),Type:'reload',Parent: divActions,Action:cuvd['reload'],Id:null});
            dojo.place(divActions,divGridAction);
            //-----------------------------------------------------------
                var divResults      = document.createElement("div");
                dojo.addClass(divResults, "divGridResults");
            dojo.place(divResults,divGridAction);
            //-----------------------------------------------------------

        dojo.place(divGridAction,divParent);
        setTimeout(function () {

            var contentBox = dojo.contentBox(divParent);
            console.log(contentBox);

            var hight = (contentBox.h-92)+'';
            var s = "height: "+hight+"px ; padding: 20px";
            console.log(s);

             var cpExp   =   new dijit.layout.ContentPane({
                                style:      s
                            },document.createElement("div"));
            dojo.place(cpExp.domNode,divParent);

            //----Grid Start----------------
                 var layout = [
                            { field: "name",     	name: tr.tr({'module': 'UserViewDevices','phrase':"MAC",'lang':l}), width:'auto',formatter: components.Formatters.Bold},
                            { field: "description", name: tr.tr({'module': 'UserViewDevices','phrase':"Description",'lang':l}),   width:'auto'},
                            { field: "last_contact",name: tr.tr({'module': 'UserViewDevices','phrase':"Last Contact",'lang':l}), width:'auto', formatter: formatStatus}
                        ];

                    grid = new dojox.grid.DataGrid({
                                structure: layout,
                                rowsPerPage: 40,
                                rowSelector: '10px'
                                }, document.createElement("div"));

                     dojo.connect(grid,'_onFetchComplete', function(){

                             divResults.innerHTML = "<b>"+tr.tr({'module': 'UserViewDevices','phrase':"Result count",'lang':l})+": </b>"+ grid.rowCount;
                        })

                  dojo.addClass(grid.domNode,'divGrid');
                  dojo.place(grid.domNode,cpExp.domNode);
                  grid.startup();
				  cuvd.reload();
            //---- END Grid----------------
        },100);
    }
	
    cuvd.reload     = function(){
        console.log("Reload Activity");
        var ts = Number(new Date());
        var jsonStore = new dojo.data.ItemFileReadStore({ url: urlDevices+userID+'/?'+ts  });
        grid.setStore(jsonStore,query,{ignoreCase: true});
    }

	 //=================================
    //Formatter to display values
    function formatStatus(value){

        var pattern_never     = /never/;
        var matches_never     = value.search(pattern_never);
       // console.log('Matches Up',matches_up);
        if(matches_never > -1){
            return "<div style='width:100%; height:100%; background-color:#f1644d; '><b>"+tr.tr({'module': 'UserViewDevices','phrase': value,'lang':l})+"</b></div>";
        }else{
			return "<div style='width:100%; height:100%; background-color:#acd87d; '><b>"+tr.tr({'module': 'UserViewDevices','phrase': value,'lang':l})+"</b></div>";
			
		}
    }

})();//(function(){

}

