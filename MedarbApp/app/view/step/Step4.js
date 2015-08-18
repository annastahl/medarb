/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MedarbApp.view.step.Step4', {
    extend: 'Ext.panel.Panel',
    layout: 'border',
    xtype: 'step4',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    defaults: {
        border: false
    },
    style: {"background-color": 'white'},

    /*************************************************************************
     * Init
     ************************************************************************/
    initComponent: function () {
        this.buildApp();
        this.callParent();
        this.initListeners();
    },

    /*************************************************************************
     * Listeners
     ************************************************************************/
    initListeners: function () {
        var me = this;

    },

    /*************************************************************************
     * Build app
     ************************************************************************/
    buildApp: function () {
        var me = this;
        me.buildQuestions();

    },

    /*************************************************************************
     * Start app
     ************************************************************************/
    startApp: function (config) {
        var me = this;

    },


    buildQuestions: function () {
        this.items = [
           /* {
                xtype: 'container',
                region: 'west',
                style: {"background-color": 'white'},
                width: 250
            },*/
            {
                xtype: 'form',
                flex: 1,
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                scrollable: true,
                style: {"background-color": 'white'},

                region: 'center',
                items: [
                    {
                        html: '<h2>Slutf&#246;rt</h2>' +
                        '<p>Resultatet &#228;r nu inskickat.</p>',
                        margin: '0 0 20 0'
                    }
                ]
            }];
    }
});