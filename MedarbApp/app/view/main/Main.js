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
    padding: '10 100 10 100',

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
        scope: 'controller'
    },

    bbar: ['->',
        {
            itemId: 'card-prev',
            text: '&laquo; Föregående',
            handler: 'showPrevious',
            disabled: true
        },
        {
            itemId: 'card-next',
            text: 'Nästa &raquo;',
            handler: 'showNext'
        },
        ' ',
        ' ',
        ' '
    ],

    items: [
        {
            id: 'card-0',
            xtype: 'step0',
            reference: 'step0'/*,
            listeners: {
                navigate: 'doCardNavigation',
                scope: 'controller'
            }*/
        },
        {
            id: 'card-1',
            xtype: 'step1',
            reference: 'step1'/*,
            listeners: {
                navigate: 'doCardNavigation',
                scope: 'controller'
            }*/
        },
        {
            id: 'card-2',
            xtype: 'step2',
            reference: 'step2'/*,
            listeners: {
                navigate: 'doCardNavigation',
                scope: 'controller'
            }*/
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

    showNext: function () {
        this.validateCard(1);
    },

    showPrevious: function (btn) {
        this.validateCard(-1);
    },

    validateCard: function (incr) {
        var me = this;
        var l = me.getLayout();
        var i = l.activeItem.id.split('card-')[1];
        switch (i) {
            case '0':
                this.fireEvent('verifyUser',this);
                break;
            case '1':
                this.down('[xtype=step1]').on('navigate',this.doCardNavigation,this);
                me.down('[xtype=step1]').validateFields(incr);
                break;
            case '2':
                this.down('[xtype=step2]').on('navigate',this.doCardNavigation,this);
                me.down('[xtype=step2]').validateFields(incr);
                break;
            case '3':
                me.down('[xtype=step3]').validateFields(incr);
                break;
            case '4':
                break;
        }
    },

    doCardNavigation: function (card, incr) {
        var me = this;
        var l = me.getLayout();
        var i = l.activeItem.id.split('card-')[1];
        var next = parseInt(i, 10) + incr;
        if (next < 0 || next > 4) {
            return;
        }
        l.setActiveItem(next);
        if (l.getActiveItem().down('[itemId=firstField]')) { //focus on first field in question set.
            l.getActiveItem().down('[itemId=firstField]').focus(true);
        }
        me.down('#card-prev').setDisabled(next === 0);
        me.down('#card-prev').setDisabled(next === 4);
        me.down('#card-next').setDisabled(next === 4);
    }
});