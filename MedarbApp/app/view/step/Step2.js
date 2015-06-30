/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MedarbApp.view.step.Step2', {
    extend: 'Ext.panel.Panel',
    layout: 'border',
    xtype: 'step2',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    defaults: {
        border: false
    },
    style: {"background-color": 'white'},

    xml: null,
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
            {
                xtype: 'container',
                region: 'west',
                style: {"background-color": 'white'},
                width: 250
            },
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
                        html: '<h2>Del 2</h2>' +
                        '<p><b><h3>Instruktion</h3></b></p>' +
                        '<p><i>Välj ut ett påstående, i respektive grupp, som bäst passar in på Dig och tilldela detta 3 poäng,</i></p>' +
                        '<p><i>samt välj ut ett påstående som delvis passar in på Dig och tilldela detta 2 poäng.</i></p>',
                        margin: '0 0 20 0'
                    },
                    {
                        html: '<p><b><h3>Frågor</h3></b></p>'
                    },
                    this.qSet29(),
                    this.qSet30(),
                    this.qSet31(),
                    this.qSet32(),
                    this.qSet33(),
                    this.qSet34()

                ]
            }];
    },


    qSet29: function () {

        var qset =
        {
            xtype: 'fieldcontainer',
            layout: 'vbox',
            items: [
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '29.',
                            width: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'numberfield',
                            width: 45,
                            allowNegative: false,
                            minValue: 2,
                            maxValue: 3,
                            tabIndex: 1,
                            itemId: 'firstField'
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag är en god lyssnare'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '',
                            width: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'numberfield',
                            width: 45,
                            allowNegative: false,
                            minValue: 2,
                            maxValue: 3,
                            tabIndex: 2
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag är målmedveten'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '',
                            width: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'numberfield',
                            width: 45,
                            allowNegative: false,
                            minValue: 2,
                            maxValue: 3,
                            tabIndex: 3
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'c) Jag är inspirerande'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '',
                            width: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'numberfield',
                            width: 45,
                            allowNegative: false,
                            minValue: 2,
                            maxValue: 3,
                            tabIndex: 4
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'd) Jag är metodisk',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },

    qSet30: function () {

        var qset =
        {
            xtype: 'fieldcontainer',
            layout: 'vbox',
            items: [

                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '30.',
                            width: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'numberfield',
                            width: 45,
                            allowNegative: false,
                            minValue: 2,
                            maxValue: 3,
                            tabIndex: 5
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag är pålitlig'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '',
                            width: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'numberfield',
                            width: 45,
                            allowNegative: false,
                            minValue: 2,
                            maxValue: 3,
                            tabIndex: 5
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag är produktiv'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '',
                            width: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'numberfield',
                            width: 45,
                            allowNegative: false,
                            minValue: 2,
                            maxValue: 3,
                            tabIndex: 6
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'c) Jag är optimistisk'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '',
                            width: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'numberfield',
                            width: 45,
                            allowNegative: false,
                            minValue: 0,
                            maxValue: 4,
                            tabIndex: 7
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'd) Jag är flitig',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet31: function () {

        var qset =
        {
            xtype: 'fieldcontainer',
            layout: 'vbox',
            items: [

                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '31.',
                            width: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'numberfield',
                            width: 45,
                            allowNegative: false,
                            minValue: 2,
                            maxValue: 3,
                            tabIndex: 8
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag är trevlig'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '',
                            width: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'numberfield',
                            width: 45,
                            allowNegative: false,
                            minValue: 2,
                            maxValue: 3,
                            tabIndex: 9
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag är beslutsam'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '',
                            width: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'numberfield',
                            width: 45,
                            allowNegative: false,
                            minValue: 2,
                            maxValue: 3,
                            tabIndex: 10
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'c) Jag är livlig'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '',
                            width: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'numberfield',
                            width: 45,
                            allowNegative: false,
                            minValue: 2,
                            maxValue: 3,
                            tabIndex: 11
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'd) Jag är flitig',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet32: function () {

        var qset =
        {
            xtype: 'fieldcontainer',
            layout: 'vbox',
            items: [

                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '32.',
                            width: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'numberfield',
                            width: 45,
                            allowNegative: false,
                            minValue: 2,
                            maxValue: 3,
                            tabIndex: 12
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag är stödjande'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '',
                            width: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'numberfield',
                            width: 45,
                            allowNegative: false,
                            minValue: 2,
                            maxValue: 3,
                            tabIndex: 13
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag är ifrågasättande'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '',
                            width: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'numberfield',
                            width: 45,
                            allowNegative: false,
                            minValue: 2,
                            maxValue: 3,
                            tabIndex: 14
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'c) Jag är idérik'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '',
                            width: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'numberfield',
                            width: 45,
                            allowNegative: false,
                            minValue: 2,
                            maxValue: 3,
                            tabIndex: 15
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'd) Jag är noggrann',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet33: function () {

        var qset =
        {
            xtype: 'fieldcontainer',
            layout: 'vbox',
            items: [

                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '33.',
                            width: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'numberfield',
                            width: 45,
                            allowNegative: false,
                            minValue: 2,
                            maxValue: 3,
                            tabIndex: 16
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag har ganska lätt för att erkänna egna fel och misstag'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '',
                            width: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'numberfield',
                            width: 45,
                            allowNegative: false,
                            minValue: 2,
                            maxValue: 3,
                            tabIndex: 17
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag säger ofta till om hur jag vill att uppgifterna ska utföras'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '',
                            width: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'numberfield',
                            width: 45,
                            allowNegative: false,
                            minValue: 2,
                            maxValue: 3,
                            tabIndex: 18
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'c) Jag får ofta med mig andra på mina idéer'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '',
                            width: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'numberfield',
                            width: 45,
                            allowNegative: false,
                            minValue: 2,
                            maxValue: 3,
                            tabIndex: 19
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'd) Jag påpekar gärna bristande logik i andras argument',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },

    qSet34: function () {

        var qset =
        {
            xtype: 'fieldcontainer',
            layout: 'vbox',
            items: [

                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '34.',
                            width: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'numberfield',
                            width: 45,
                            allowNegative: false,
                            minValue: 2,
                            maxValue: 3,
                            tabIndex: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag visar gärna förståelse och omsorg för den som har bekymmer'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '',
                            width: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'numberfield',
                            width: 45,
                            allowNegative: false,
                            minValue: 2,
                            maxValue: 3,
                            tabIndex: 21
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag driver ofta igenom beslut utan att rådfråga andra'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '',
                            width: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'numberfield',
                            width: 45,
                            allowNegative: false,
                            minValue: 2,
                            maxValue: 3,
                            tabIndex: 22
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'c) Jag lyckas ofta skapa framtidstro även hos missmodiga personer'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '',
                            width: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'numberfield',
                            width: 45,
                            allowNegative: false,
                            minValue: 2,
                            maxValue: 3,
                            tabIndex: 23
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'd) Jag argumenterar ofta med hjälp av siffror och statistik',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },

    /**
     * Verify that the answers are valid.
     * Creates the xml used if the validation is passed.
     */
    validateFields: function (incr) {
        var form = this.down('form').getForm();
        var total = 0, msg = '', question = 29, count = 0, threefound = false, twofound = false, value = 0;
        var fieldNames = form.getFields().items;
        this.xml = '<record>';
        for (var i = 0; i < fieldNames.length; i++) {
            // numberfield is a question field
            if (fieldNames[i].xtype === 'numberfield') {
                if (count === 4 && ((total !== 5) || !threefound || !twofound)) {
                    if (msg !== '') {
                        msg += ', ' + question;
                    } else {
                        msg += question;
                    }
                }
                if (count === 4) {
                    this.xml += '<question>' + question + '</question>';
                    this.xml += '</record><record>';
                    question++;
                    count = 0;
                    total = 0;
                    twofound = false;
                    threefound = false;

                }

                value = form.findField(fieldNames[i].name).value;
                if (value !== '' && value !== null) {
                    this.xml += '<alt' + count + '>' + value + '</alt' + count + '>';
                } else {
                    this.xml += '<alt' + count + '>0</alt' + count + '>';
                }

                total += value;
                // 2 and 3 is only allowed on once per question
                if ((value === 2 && twofound === true) || value === 3 && threefound === true) {
                    if (msg !== '') {
                        msg += ', ' + question;
                    } else {
                        msg += question;
                    }
                }

                if (value === 2) {
                    twofound= true;
                }
                if (value === 3) {
                    threefound = true;
                }
                count++;

            }
        }

        this.xml += '</record>';
        // 2 and 3 is only allowed on once per question
        if ((value === 2 && twofound === true) || value === 3 && threefound === true) {
            if (msg !== '') {
                msg += ', ' + question;
            } else {
                msg += question;
            }
        }


        if (msg !== '') {
            Ext.Msg.show({
                title: 'Felmeddelande',
                msg: 'Totalen är fel på följande frågor: ' + msg,
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });

         //   this.fireEvent('navigate', this, incr); // TODO: remove
        } else {
            console.log('success 2');
            this.fireEvent('navigate', this, incr);
        }
    }
})
;