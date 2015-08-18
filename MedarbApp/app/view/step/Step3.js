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
/*                {
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
                            html: '<h2>Del 3</h2>' +
                            '<p><b><h3>Instruktion</h3></b></p>' +
                            '<p><i>V&#228;lj ut ett p&#229;st&#229;ende, i respektive grupp, som b&#228;st passar in p&#229; Dig och tilldela detta 4 po&#228;ng,</i></p>' +
                            '<p><i>samt v&#228;lj ut ett p&#229;st&#229;ende som delvis passar in p&#229; Dig och tilldela detta 3 po&#228;ng.</i></p>',
                            margin: '0 0 20 0'
                        },
                        {
                            html: '<p><b><h3>Fr&#229;gor</h3></b></p>'
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
                                value: 'b) Jag vill oftast att det skall h&#228;nda n&#229;got'
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
                                value: 'c) Jag &#228;r impulsiv'
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
                                value: 'd) Jag &#228;r en ordningsm&#228;nniska',
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
                                value: 'a) Jag &#228;r ingen t&#228;vlingsm&#228;nniska'
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
                                value: 'b) Jag &#228;r beslutsam'
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
                                value: 'c) Jag &#228;r en s&#228;llskapsm&#228;nniska'
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
                                value: 'd Jag &#228;r realistisk',
                                style: {"margin-bottom": '15px'}
                            }
                        ]
                    }]
            };
            return qset;
        },


        validateFields: function (incr) {
            var form = this.down('form').getForm();
            var total = 0, msg = '', question = 35, count = 1, threefound = false, fourfound = false;

            var fieldNames = form.getFields().items;
            this.xml = '';
            var result = [];
            for (var i = 0; i < fieldNames.length; i++) {
                if (fieldNames[i].xtype === 'numberfield') {
                    result[count] = form.findField(fieldNames[i].name).value;
                    count++;
                }
            }
            count = 1;
            for (var i = 1; i < result.length; i++) {
                total += result[i];
                if (result[i] === 4) {
                    fourfound = true;
                }
                if (result[i] === 3) {
                    threefound = true;
                }
                switch (count) {
                    case 1:
                        if (this.xml !== '') {
                            this.xml += '</record><record>';
                        } else {
                            this.xml = '<record>';
                        }
                        this.xml += '<question>' + question + '</question>';
                        if (result[i] && result[i] !== '' && result[i] !== null) {
                            this.xml += '<alt1>' + result[i] + '</alt1>';
                        }
                        count++;
                        break;
                    case 2:
                        if (result[i] && result[i] !== '' && result[i] !== null) {
                            this.xml += '<alt2>' + result[i] + '</alt2>';
                        }
                        count++;
                        break;
                    case 3:
                        if (result[i] && result[i] !== '' && result[i] !== null) {
                            this.xml += '<alt3>' + result[i] + '</alt3>';
                        }
                        count++;
                        break;
                    case 4:
                        if (result[i] && result[i] !== '' && result[i] !== null) {
                            this.xml += '<alt4>' + result[i] + '</alt4>';
                        }
                        // verify total and that 3 and 4 is set.
                        //         debugger;
                        if (total !== 7 || !threefound || !fourfound) {
                            if (msg !== '') {
                                msg += ', ' + question;
                            } else {
                                msg += question;
                            }
                        }
                        question++;
                        count = 1;
                        total = 0;
                        fourfound = false;
                        threefound = false;
                        break;
                }

            }
            this.xml += '</record>';

            if (msg !== '') {
                Ext.Msg.show({
                    title: 'Felmeddelande',
                    msg: 'Totalen &#228;r fel p&#229; f&#246;ljande fr&#229;gor: ' + msg,
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
            } else {
                this.fireEvent('sendResult', this, incr);
            }
        }
    });