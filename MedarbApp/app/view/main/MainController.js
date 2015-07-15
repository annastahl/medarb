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

    // for test purposes
//    validXml: '<set><record><question>1</question><alt1>3</alt1><alt2>1</alt2></record><record><question>2</question><alt1>3</alt1><alt2>1</alt2></record><record><question>3</question><alt1>3</alt1><alt2>1</alt2></record><record><question>4</question><alt1>3</alt1><alt2>1</alt2></record><record><question>5</question><alt1>4</alt1><alt2>0</alt2></record><record><question>6</question><alt1>3</alt1><alt2>1</alt2></record><record><question>7</question><alt1>3</alt1><alt2>1</alt2></record><record><question>8</question><alt1>3</alt1><alt2>1</alt2></record><record><question>9</question><alt1>3</alt1><alt2>1</alt2></record><record><question>10</question><alt1>3</alt1><alt2>1</alt2></record><record><question>11</question><alt1>3</alt1><alt2>1</alt2></record><record><question>12</question><alt1>3</alt1><alt2>1</alt2></record><record><question>13</question><alt1>3</alt1><alt2>1</alt2></record><record><question>14</question><alt1>3</alt1><alt2>1</alt2></record><record><question>15</question><alt1>3</alt1><alt2>1</alt2></record><record><question>16</question><alt1>3</alt1><alt2>1</alt2></record><record><question>17</question><alt1>3</alt1><alt2>1</alt2></record><record><question>18</question><alt1>3</alt1><alt2>1</alt2></record><record><question>19</question><alt1>3</alt1><alt2>1</alt2></record><record><question>20</question><alt1>3</alt1><alt2>1</alt2></record><record><question>21</question><alt1>3</alt1><alt2>1</alt2></record><record><question>22</question><alt1>3</alt1><alt2>1</alt2></record><record><question>23</question><alt1>3</alt1><alt2>1</alt2></record><record><question>24</question><alt1>3</alt1><alt2>1</alt2></record><record><question>25</question><alt1>3</alt1><alt2>1</alt2></record><record><question>26</question><alt1>3</alt1><alt2>1</alt2></record><record><question>27</question><alt1>3</alt1><alt2>1</alt2></record><record><question>28</question><alt1>3</alt1><alt2>1</alt2></record></set><set><record><alt0>3</alt0><alt1>2</alt1><alt2>0</alt2><alt3>0</alt3><question>29</question></record><record><alt0>2</alt0><alt1>0</alt1><alt2>3</alt2><alt3>0</alt3><question>30</question></record><record><alt0>0</alt0><alt1>3</alt1><alt2>2</alt2><alt3>0</alt3><question>31</question></record><record><alt0>3</alt0><alt1>0</alt1><alt2>0</alt2><alt3>2</alt3><question>32</question></record><record><alt0>0</alt0><alt1>3</alt1><alt2>0</alt2><alt3>2</alt3><question>33</question></record><record><alt0>0</alt0><alt1>3</alt1><alt2>0</alt2><alt3>2</alt3></record></set><set><record><alt0>4</alt0><alt1>3</alt1><alt2>0</alt2><alt3>0</alt3><question>35</question></record><record><alt0>0</alt0><alt1>0</alt1><alt2>3</alt2><alt3>4</alt3></record></set>',

    onVerifyUser: function () {
        var me = this;
        me.usrId = me.getUrlVars()["usr"];
        Ext.Ajax.request({
            url: '/SOA?service=SPT1000',
            method: 'post',
            params: {
                _method: 'validate',
                _format: 'json',
                usr: me.usrId
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
        xmlTotal = xml1 + xml2 + xml3;

        Ext.Ajax.request({
            url: '/SOA?service=SPT1000',
            method: 'post',
            params: {
                _method: 'create',
                _format: 'json',
                usr: me.usrId,
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

    onNavigateForward: function () {
        this.validateCardAndNavigate(1);
    },

    onNavigateBackward: function () {
        this.validateCardAndNavigate(-1);
    },

    validateCardAndNavigate: function (incr) {
        var me = this, main = me.getView();
        var l = main.getLayout();
        var i = l.activeItem.id.split('card-')[1];
        switch (i) {
            case '0':
                if (incr === 1) {
                    me.onVerifyUser();
                }
                break;
            case '1':
                if (incr === 1) {
                    me.lookupReference('step1').validateFields(incr);
                } else {
                    me.doCardNavigation(me.lookupReference('step1'), incr);
                }
                break;
            case '2':
                if (incr === 1) {
                    me.lookupReference('step2').validateFields(incr);
                } else {
                    me.doCardNavigation(me.lookupReference('step2'), incr);
                }
                break;
            case '3':
                if (incr === 1) {
                    me.lookupReference('step3').validateFields(incr);
                } else {
                    me.doCardNavigation(me.lookupReference('step3'), incr);
                }
                break;
            case
            '4':
                break;
        }
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
});
