/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MedarbApp.view.step.Step3', {
        extend: 'Ext.panel.Panel',
        layout: 'border',
        xtype: 'step3',

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
                            html: '<h2>Del 3</h2>' +
                            '<p><b><h3>Instruktion</h3></b></p>' +
                            '<p><i>Välj ut ett påstående, i respektive grupp, som bäst passar in på Dig och tilldela detta 4 poäng,</i></p>' +
                            '<p><i>samt välj ut ett påstående som delvis passar in på Dig och tilldela detta 3 poäng.</i></p>',
                            margin: '0 0 20 0'
                        },
                        {
                            html: '<p><b><h3>Frågor</h3></b></p>'
                        },
                        this.qSet35(),
                        this.qSet36()

                    ]
                }];
        },

        qSet35: function () {

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
                                value: '35.',
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
                                minValue: 3,
                                maxValue: 4,
                                tabIndex: 1,
                                itemId: 'firstField'
                            },
                            {
                                xtype: 'splitter',
                                margin: '0 5 0 5'
                            },
                            {
                                xtype: 'displayfield',
                                value: 'a) Jag vill helst undvika konflikter'
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
                                minValue: 3,
                                maxValue: 4,
                                tabIndex: 2
                            },
                            {
                                xtype: 'splitter',
                                margin: '0 5 0 5'
                            },
                            {
                                xtype: 'displayfield',
                                value: 'b) Jag vill oftast att det skall hända något'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'displayfield',
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
                                minValue: 3,
                                maxValue: 4,
                                tabIndex: 3
                            },
                            {
                                xtype: 'splitter',
                                margin: '0 5 0 5'
                            },
                            {
                                xtype: 'displayfield',
                                value: 'c) Jag är impulsiv'
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
                                minValue: 3,
                                maxValue: 4,
                                tabIndex: 4
                            },
                            {
                                xtype: 'splitter',
                                margin: '0 5 0 5'
                            },
                            {
                                xtype: 'displayfield',
                                value: 'd) Jag är en ordningsmänniska',
                                style: {"margin-bottom": '15px'}
                            }
                        ]
                    }]
            };
            return qset;
        },
        qSet36: function () {

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
                                value: '36.',
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
                                minValue: 3,
                                maxValue: 4,
                                tabIndex: 5
                            },
                            {
                                xtype: 'splitter',
                                margin: '0 5 0 5'
                            },
                            {
                                xtype: 'displayfield',
                                value: 'a) Jag är ingen tävlingsmänniska'
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
                                minValue: 3,
                                maxValue: 4,
                                tabIndex: 6
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
                                minValue: 3,
                                maxValue: 4,
                                tabIndex: 7
                            },
                            {
                                xtype: 'splitter',
                                margin: '0 5 0 5'
                            },
                            {
                                xtype: 'displayfield',
                                value: 'c) Jag är en sällskapsmänniska'
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
                                minValue: 3,
                                maxValue: 4,
                                tabIndex: 8
                            },
                            {
                                xtype: 'splitter',
                                margin: '0 5 0 5'
                            },
                            {
                                xtype: 'displayfield',
                                value: 'd Jag är realistisk',
                                style: {"margin-bottom": '15px'}
                            }
                        ]
                    }]
            };
            return qset;
        },


        validateFields: function (incr) {
            var form = this.down('form').getForm();
            var total = 0, msg = '', question = 35, count = 0, threefound = false, fourfound = false, value = 0;
            var fieldNames = form.getFields().items;
            this.xml = '<record>';
            for (var i = 0; i < fieldNames.length; i++) {
                if (fieldNames[i].xtype === 'numberfield') {
                    // verify total and that 3 and 4 is set.
                    if (count === 4 && (total !== 7 || !threefound || !fourfound)) {
                        if (msg !== '') {
                            msg += ', ' + question;
                        } else {
                            msg += question;
                        }
                    }
                    if (count === 4) {
                        console.log(question);
                        this.xml += '<question>' + question + '</question>';
                        this.xml += '</record><record>';

                        question++;
                        count = 0;
                        total = 0;
                        fourfound = false;
                        threefound = false;
                    }

                    value = form.findField(fieldNames[i].name).value;
                    if (value !== '' && value !== null) {
                        this.xml += '<alt' + count + '>' + value + '</alt' + count + '>';
                    } else {
                        this.xml += '<alt' + count + '>0</alt' + count + '>';
                    }
                    total += value;
                    console.log('total is' + total + ' quest: ' + question);
                    // check that 3 & 4 only appear once.
                    if ((value === 4 && fourfound) || (value === 3 && threefound)) {
                        if (msg !== '') {
                            msg += ', ' + question;
                        } else {
                            msg += question;
                        }
                    }

                    if (value === 4) {
                        fourfound= true;
                    }
                    if (value === 3) {
                        threefound = true;
                    }

                    count++;
                }
            }
            this.xml += '</record>';
            if (count === 4 && (total !== 7 || !threefound || !fourfound)) {
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
//                this.fireEvent('sendResult', this, incr); // TODO: remove
            } else {
                console.log('success 3');
                this.fireEvent('sendResult', this, incr);
            }
        }
    }
)
;