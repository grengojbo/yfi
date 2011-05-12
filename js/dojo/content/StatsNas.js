/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/




if(!dojo._hasResource["content.StatsNas"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["content.StatsNas"] = true;
dojo.provide("content.StatsNas");

dojo.require('dojox.grid.DataGrid');
dojo.require('dojo.data.ItemFileReadStore');
dojo.require('components.Formatters');
dojo.require('components.Translator');

(function(){

    var csn             = content.StatsNas;
    var tr              = components.Translator; 
    var l               = components.LoginLight.UserInfo.l_iso;
    var urlNasStats     = components.Const.cake+'nas/json_stats/?';

    var StartOfMonth;
    var EndOfMonth;
    var startDate;
    var endDate;
    var grid;

    csn.create  = function(divParent){

        //-----Start and End of this month ----
        var today = new Date();
        var MonthDays = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
        var theYear = today.getYear();
        if (theYear < 1000){
            theYear +=1900;
        }

        StartOfMonth = new Date(theYear,today.getMonth(),1);
        var Month       = today.getMonth();
        var DaysInMonth = MonthDays[today.getMonth()];

        if (today.getMonth() == 1) {
            // February
            if (theYear%400==0 || (theYear%4 == 0 && theYear%100!=0) ){
                DaysInMonth +=1;
            }
        }
        EndOfMonth  = new Date(theYear,today.getMonth(),DaysInMonth);
        //------------------------------------

        //console.log('Stats -> NAS Usage');
        var divGridAction     = document.createElement('div');
        dojo.addClass(divGridAction, 'divGridAction');

             //--------------------Action Part --------------------
            var divActions = document.createElement("div");
            dojo.addClass(divActions, "divActions");
                //Add the action stuff
                components.QElements.addAction({Name:tr.tr({'module': 'StatsNas','phrase':"Reload List",'lang':l}),Type:'reload',Parent: divActions,Action:csn['reload'],Id:null});
        dojo.place(divActions,divGridAction);


            //-------------------Dates------------------------
            var sd = document.createElement('span');
            sd.innerHTML ='<b>'+tr.tr({'module': 'StatsNas','phrase':"Start Date",'lang':l})+'</b>';
            dojo.place(sd, divGridAction);

            startDate = new dijit.form.DateTextBox({required:true,name: 'startDate',intermediateChanges: true},document.createElement("div"));
            dojo.place(startDate.domNode, divGridAction);
            startDate.setValue(StartOfMonth);

            dojo.connect(startDate, 'onChange',function(e){
                _changeDate();
            });

            var ed  = document.createElement('span');
            ed.innerHTML = '<b>'+tr.tr({'module': 'StatsNas','phrase':"End Date",'lang':l})+'</b>';;
            dojo.place(ed,divGridAction);

            endDate = new dijit.form.DateTextBox({required:true,name: 'endDate'},document.createElement("div"));
        dojo.place(endDate.domNode, divGridAction);
            endDate.setValue(EndOfMonth);

            dojo.connect(endDate, 'onChange',function(e){
                _changeDate();
            });

            //----------------------------------------------------
                var divResults      = document.createElement("div");
                dojo.addClass(divResults, "divGridResults");
        dojo.place(divResults,divGridAction);
            //-----------------------------------------------------------
        //divResults.innerHTML = "<b>"+tr.tr({'module': 'StatsNas','phrase':"Under Construction",'lang':l})+" </b>";

        dojo.place(divGridAction,divParent);

     
        
        setTimeout(function () {

            var contentBox = dojo.contentBox(divParent);
            var hight = (contentBox.h-92)+'';
            var s = "height: "+hight+"px ; padding: 20px";

             var cpExp   =   new dijit.layout.ContentPane({
                                style:      s
                            },document.createElement("div"));
            dojo.place(cpExp.domNode,divParent);

            //----Grid Start----------------
                 var layout = [
                            { field: "nasname",     name: tr.tr({'module': 'StatsNas','phrase':"IP Address",'lang':l}), width: 'auto' },
                            { field: "shortname",   name: tr.tr({'module': 'StatsNas','phrase':"Name",'lang':l}),       width: 'auto' },
                            { field: "uptime",      name: tr.tr({'module': 'StatsNas','phrase':"Availability",'lang':l}),     width: 'auto' },
                            { field: "users",       name: tr.tr({'module': 'StatsNas','phrase':"Users",'lang':l}),      width: 'auto'},
                            { field: "tx",          name: tr.tr({'module': 'StatsNas','phrase':"Data TX",'lang':l}),    width: 'auto', formatter: components.Formatters.FormatOctets},
                            { field: "rx",          name: tr.tr({'module': 'StatsNas','phrase':"Data RX",'lang':l}),    width: 'auto', formatter: components.Formatters.FormatOctets},
                            { field: "total",       name: tr.tr({'module': 'StatsNas','phrase':"Data Total",'lang':l}), width: 'auto', formatter: components.Formatters.FormatOctets}
                        ];

                grid = new dojox.grid.DataGrid({
                                structure: layout,
                                rowsPerPage: 40,
                                rowSelector: '10px'
                                }, document.createElement("div"));

                  dojo.addClass(grid.domNode,'divGrid');
                  dojo.place(grid.domNode,cpExp.domNode);
                  grid.startup();

                    dojo.connect(grid,'_onFetchComplete', function(){

                        //Check if the restart flag is present
                             divResults.innerHTML = "<b>"+tr.tr({'module': 'StatsNas','phrase':"Result count",'lang':l})+": </b>"+ grid.rowCount;
                    });


                  var ts = Number(new Date());
                  csn.reload();
            //---- END Grid----------------
        },100);
    }

    csn.reload  = function(){

        if(grid != undefined){  //Because when setting the date, it may fire this, but then the grid is not defined yet
            var ts      = Number(new Date());
            var som     = startDate.getValue().getTime()/1000;
            var eom     = endDate.getValue().getTime()/1000;
            var jsonStore = new dojo.data.ItemFileReadStore({ url: urlNasStats+'sd='+som+'&ed='+eom+'&ts='+ts });
            grid.setStore(jsonStore,{'nasname':'*'},{ignoreCase: true});
        }
    }

    function _changeDate(){
        if(dojo.date.compare(endDate.getValue(),startDate.getValue()) > 0){
            csn.reload();
        }else{
            dijit.byId('componentsMainToaster').setContent('<b>'+tr.tr({'module': 'StatsNas','phrase':"Invalid Dates - Using Defaults",'lang':l})+'</b>','error',components.Const.toasterError);
            startDate.setValue(StartOfMonth);
            endDate.setValue(EndOfMonth);
        }
    }
})();//(function(){

}
