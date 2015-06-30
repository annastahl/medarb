/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MedarbApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],

    alias: 'controller.main',
    usrId: null,

    onVerifyUser: function () {
        var me = this;
        me.usrId = me.getUrlVars()["usr"];
        Ext.Ajax.request({
            url: '/SOA?service=SPT1000',
            method: 'post',
            params: {
                _method: 'validate',
                _format: 'json',
                user: me.usrId
            },
            scope: this,
            success: function (response, options) {
                var resp = Ext.decode(response.responseText);
                if (resp.success) {
                    me.doCardNavigation(null, 1);
                } else {
                    me.doCardNavigation(null, 1); // TODO: remove
                    Ext.Msg.show({
                        title: 'Felmeddelande',
                        msg: resp.message,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                }
            }
        });
    },

    getUrlVars: function () {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
            function (m, key, value) {
                vars[key] = value;
            });
        return vars;
    },

    onSendResult: function () {
        var me = this, xmlTotal = '';
        var xml1 = this.lookupReference('step1').xml;
        var xml2 = this.lookupReference('step2').xml;
        var xml3 = this.lookupReference('step3').xml;
        xmlTotal = '<set>' + xml1 + '</set>';
        xmlTotal += '<set>' + xml2 + '</set>';
        xmlTotal += '<set>' + xml3 + '</set>';

        //   me.doCardNavigation(null,1);
        Ext.Ajax.request({
            url: '/SOA?service=SPT1000',
            method: 'post',
            params: {
                _method: 'create',
                _format: 'xml',
                user: me.usrId,
                xml: xmlTotal
            },
            scope: this,
            success: function (response, options) {
                var resp = Ext.decode(response.responseText);
                if (resp.success) {
                    me.doCardNavigation(null, 1);
                } else {
                    Ext.Msg.show({
                        title: 'Felmeddelande',
                        msg: resp.message,
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK
                    });
                }
            }
        });
    },


    doCardNavigation: function (card, incr) {
        var me = this;
        var l = me.getView().getLayout();
        var i = l.activeItem.id.split('card-')[1];
        var next = parseInt(i, 10) + incr;
        if (next < 0 || next > 4) {
            return;
        }

        l.setActiveItem(next);
        if (l.getActiveItem().down('[itemId=firstField]')) { //focus on first field in question set.
            l.getActiveItem().down('[itemId=firstField]').focus(true);
        }
        me.getView().down('#card-prev').setDisabled(next === 0);
        me.getView().down('#card-prev').setDisabled(next === 4);
        me.getView().down('#card-next').setDisabled(next === 4);
    }
})
;
