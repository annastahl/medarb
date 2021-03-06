/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MedarbApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.Card',
        'MedarbApp.view.main.MainController',
        'MedarbApp.view.main.MainModel',
        'MedarbApp.view.step.Step0',
        'MedarbApp.view.step.Step1',
        'MedarbApp.view.step.Step2',
        'MedarbApp.view.step.Step3',
        'MedarbApp.view.step.Step4'
    ],

    layout: 'card',
    style: {
        background: '#ffffff'
    },
    xtype: 'app-main',

    padding: '10 400 10 200',
    controller: 'main',
    viewModel: {
        type: 'main'
    },
    defaults: {
        border: false
    },

    defaultListenerScope: true,
    listeners: {
        verifyUser: 'onVerifyUser',
        navigateForward: 'onNavigateForward',
        navigateBackward: 'onNavigateBackward',
        scope: 'controller'
    },

    /* bbar: [
     '->',
     {
     itemId: 'card-prev',
     text: '&laquo; F&#246;reg&#229;ende',
     handler: 'showPrevious',
     disabled: true
     },
     {
     itemId: 'card-next',
     text: 'N&#228;sta &raquo;',
     handler: 'showNext'
     },
     ' ',
     ' ',
     ' '
     ],*/

    items: [
        {
            id: 'card-0',
            xtype: 'step0',
            reference: 'step0'
        },
        {
            id: 'card-1',
            xtype: 'step1',
            reference: 'step1',
            listeners: {
                navigate: 'doCardNavigation',
                scope: 'controller'
            }
        },
        {
            id: 'card-2',
            xtype: 'step2',
            reference: 'step2',
            listeners: {
                navigate: 'doCardNavigation',
                scope: 'controller'
            }
        },
        {
            id: 'card-3',
            xtype: 'step3',
            reference: 'step3',
            listeners: {
                sendResult: 'onSendResult',
                scope: 'controller'
            }
        },
        {
            id: 'card-4',
            xtype: 'step4'
        }
    ],

    dockedItems: [
        {
            dock: 'left',
            items: [
                {
                    margin: '10 20 0 0',
                    xtype: 'image',
                    src: 'resources/images/orango_kompakt.jpg',
                    width: 100
                }
            ]
        },
        {
            dock: 'bottom',
            xtype: 'toolbar',
            width: 900,
            height: 50,
            layout: {
                type: 'hbox',
                pack: 'end'
            },
            items: [
             //   '->',
                {
                    xtype: 'button',
                    itemId: 'card-prev',
                    text: '&laquo; F&#246;reg&#229;ende',
                    handler: 'showPrevious',
                    disabled: true,
                    margin: '0 10 0 0'
                },
                {
                    xtype: 'button',
                    itemId: 'card-next',
                    text: 'N&#228;sta &raquo;',
                    handler: 'showNext'
                }
            ]
        }
    ],

    showNext: function () {
        this.fireEvent('navigateForward', this);
    },

    showPrevious: function (btn) {
        this.fireEvent('navigateBackward', this);
    }
});