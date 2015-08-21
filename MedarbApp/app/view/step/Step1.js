/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MedarbApp.view.step.Step1', {
    extend: 'Ext.panel.Panel',
    layout: 'border',

//    width: 500,
    //   height: 400,
    xtype: 'step1',

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
          /*  {
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
                        html: '<h2>Del 1</h2>' +
                        '<p><b><h3>Instruktion</h3></b></p>' +
                        '<p><i>F&#246;rdela 4 po&#228;ng p&#229; varje p&#229;st&#229;endepar p&#229; n&#229;got av f&#246;ljande s&#228;tt:</i></p>' +
                        '<table><tr><td style="width:80px">' +
                        '<p><i>     (a) 4 (b) 0</i></p></td><td><p><i>Om (a)-alternativet n&#228;sta alltid st&#228;mmer</i></p>' +
                        '</td></tr><tr><td>' +
                        '<p><i>(a) 3 (b) 1</i></p></td><td><p><i>Om (a)-alternativet st&#228;mmer, men med stor tvekan</i></p>' +
                        '</td></tr><tr><td>' +
                        '<p><i>(a) 1 (b) 3</i></p></td><td><p><i>Om (b)-alternativet st&#228;mmer, men med stor tvekan</i></p>' +
                        '</td></tr><tr><td>' +
                        '<p><i>(a) 0 (b) 4</i></p></td><td><p><i>Om (b)-alternativet n&#228;sta alltid st&#228;mmer</i></p>' +
                        '</td></tr><tr><td>' +
                        '</table>' +
                        '<p><i>Observera att h&#246;gst po&#228;ng ges det alternativ som b&#228;st &#246;verensst&#228;mmer med Din uppfattning om Dig sj&#228;lv.</i></p>',
                        margin: '0 0 20 0'
                    },
                    {
                        html: '<p><b><h3>Fr&#229;gor</h3></b></p>'
                    },
                    this.qSet1(),
                    this.qSet2(),
                    this.qSet3(),
                    this.qSet4(),
                    this.qSet5(),
                    this.qSet6(),
                    this.qSet7(),
                    this.qSet8(),
                    this.qSet9(),
                    this.qSet10(),
                    this.qSet11(),
                    this.qSet12(),
                    this.qSet13(),
                    this.qSet14(),
                    this.qSet15(),
                    this.qSet16(),
                    this.qSet17(),
                    this.qSet18(),
                    this.qSet19(),
                    this.qSet20(),
                    this.qSet21(),
                    this.qSet22(),
                    this.qSet23(),
                    this.qSet24(),
                    this.qSet25(),
                    this.qSet26(),
                    this.qSet27(),
                    this.qSet28()

                ]
            }];
    },

    qSet1: function () {

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
                            value: '1.',
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
                            tabIndex: 1,
                            itemId: 'firstField'
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag &#228;r l&#228;tt att l&#228;ra k&#228;nna'
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
                            tabIndex: 2
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Det tar l&#228;ngre tid att l&#228;ra k&#228;nna mig',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet2: function () {

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
                            value: '2.',
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
                            tabIndex: 3
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag &#228;r oftast ot&#229;lig'
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
                            tabIndex: 4
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag &#228;r oftast t&#229;lmodig',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet3: function () {

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
                            value: '3.',
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
                            tabIndex: 5
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag gillar att ber&#228;tta om visioner och m&#246;jligheter'
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
                            tabIndex: 6
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag gillar att ber&#228;tta om erfarenheter och fakta',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet4: function () {

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
                            value: '4.',
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
                            value: 'a) Jag &#228;r oftast aktiv vid f&#246;r&#228;ndringar'
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
                            tabIndex: 8
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag &#228;r oftast avvaktande vid f&#246;r&#228;ndringar',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet5: function () {

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
                            value: '5.',
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
                            tabIndex: 9
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag tycker b&#228;st om att arbeta tillsamans med andra'
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
                            tabIndex: 10
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag tycker b&#228;st om att arbeta ensam',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet6: function () {

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
                            value: '6.',
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
                            tabIndex: 11
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag &#228;r snabb och spontan i mitt handlande'
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
                            tabIndex: 12
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag &#228;r lugn och f&#246;rsiktig i mitt handlande',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet7: function () {

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
                            value: '7.',
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
                            tabIndex: 13
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) I diskussioner f&#229;r jag ofta associationer som g&#246;r att jag byter &#228;mne'
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
                            tabIndex: 14
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) I diskussion h&#229;ller jag mig oftast till &#228;mnet',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet8: function () {

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
                            value: '8.',
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
                            tabIndex: 15
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag t&#228;njer ofta p&#229; regler och policies'
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
                            tabIndex: 16
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag f&#246;ljer oftast regler och policies',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet9: function () {

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
                            value: '9.',
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
                            tabIndex: 17
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag  vill helst ha ett flexibelt tidsprogram'
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
                            tabIndex: 18
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag vill helst h&#229;lla mig till ett uppgjort tidsprogram',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet10: function () {

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
                            value: '10.',
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
                            tabIndex: 19
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag fattar oftast snabba besult'
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
                            tabIndex: 20
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag tar oftast god tid p&#229; ig f&#246;r att fatta beslut',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet11: function () {

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
                            value: '11.',
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
                            tabIndex: 21
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag h&#229;ller g&#228;rna om, skakar hand med och klappar om andra'
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
                            tabIndex: 22
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag undviker helst kroppskontakt med andra',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },

    qSet12: function () {

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
                            value: '12.',
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
                            tabIndex: 23
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag gestikulerar ofta'
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
                            tabIndex: 24
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag gestikulerar s&#228;llan',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },

    qSet13: function () {

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
                            value: '13.',
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
                            tabIndex: 25
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag f&#246;redrar avsp&#228;nda och djupa relationer'
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
                            tabIndex: 26
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag f&#246;redrar att h&#229;lla en viss distans till andra',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet14: function () {

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
                            value: '14.',
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
                            tabIndex: 27
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag beh&#229;ller g&#228;rna &#246;gonkontakten l&#228;nge'
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
                            tabIndex: 28
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag undviker helst l&#228;ngre &#246;gonkontakt',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet15: function () {

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
                            value: '15.',
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
                            tabIndex: 29
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag visar mer entusiasm &#228;n de flesta'
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
                            tabIndex: 30
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag visar mindre entusiasm &#228;n de flesta',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet16: function () {

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
                            value: '16.',
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
                            tabIndex: 31
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag pratar g&#228;rna i stora grupper'
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
                            tabIndex: 32
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag pratar og&#228;rna i stora grupper',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet17: function () {

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
                            value: '17.',
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
                            tabIndex: 33
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag fattar de flesta beslut baserat p&#229; mina k&#228;nslor'
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
                            tabIndex: 34
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag fattar de flesta beslut baserat p&#229; fakta',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet18: function () {

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
                            value: '18.',
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
                            tabIndex: 35
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag gillar att ta risker'
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
                            tabIndex: 36
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag  ogillar att ta risker',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet19: function () {

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
                            value: '19.',
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
                            tabIndex: 37
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag visar &#246;ppet gl&#228;dje, sorg, f&#246;rvirring och andra k&#228;nslor'
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
                            tabIndex: 38
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag visar s&#228;llan mina k&#228;nslor &#246;ppet',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet20: function () {

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
                            value: '20.',
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
                            tabIndex: 39
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag talar ofta h&#246;gt n&#228;r jag &#228;r irriterad'
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
                            tabIndex: 40
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag talar ofta lugnt, &#228;ven n&#228;r jag &#228;r irriterad',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet21: function () {

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
                            value: '21.',
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
                            tabIndex: 41
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag  lyssnar g&#228;rna n&#228;r n&#229;gon ber&#228;ttar om personliga k&#228;nslor'
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
                            tabIndex: 42
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag lyssnar g&#228;rna p&#229; faktabaserade ber&#228;ttelser',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },

    qSet22: function () {

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
                            value: '22.',
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
                            tabIndex: 43
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Vid en diskussion om mindre viktiga fr&#229;gor, argumenterar jag ofta f&#246;r sakens  egen skull'
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
                            tabIndex: 44
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Vid en diskussion om mindre viktiga fr&#229;gor, h&#229;ller jag hellre med &#228;n argumenterar emot',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },

    qSet23: function () {

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
                            value: '23.',
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
                            tabIndex: 45
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag &#228;r oftast avslappnad tillsammans med nya m&#228;nniskor'
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
                            tabIndex: 46
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag &#228;r oftast lite stel och formell tillsammans med nya m&#228;nniskor',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet24: function () {

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
                            value: '24.',
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
                            tabIndex: 47
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag &#228;r ofta kontrollerande och styrande'
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
                            tabIndex: 48
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag &#228;r ofta diplomatisk och kompromissvillig',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet25: function () {

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
                            value: '25.',
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
                            tabIndex: 49
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag k&#228;nner mig f&#229;ngad i fasta rutiner'
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
                            tabIndex: 50
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag tycker om fasta rutiner',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet26: function () {

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
                            value: '26.',
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
                            tabIndex: 51
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag &#228;r r&#228;ttfram och talar om vad jag anser, oavsett omgivningens &#229;sikter'
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
                            tabIndex: 52
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag avst&#229;r ofta fr&#229;n att bidraga med &#229;sikter vid m&#246;ten',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet27: function () {

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
                            value: '27.',
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
                            tabIndex: 53
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag tar oftast den f&#246;rsta kontakten med nya m&#228;nniskor'
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
                            tabIndex: 54
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag l&#229;ter g&#228;rna andra ta den f&#246;rsta kontakten',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },
    qSet28: function () {

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
                            value: '28.',
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
                            tabIndex: 55
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'a) Jag &#228;r ofta ot&#229;lig och konkurrensvillig'
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
                            tabIndex: 56
                        },
                        {
                            xtype: 'splitter',
                            margin: '0 5 0 5'
                        },
                        {
                            xtype: 'displayfield',
                            value: 'b) Jag &#228;r ofta lugn och samarbetsvillig',
                            style: {"margin-bottom": '15px'}
                        }
                    ]
                }]
        };
        return qset;
    },

    validateFields: function (incr) {
        var form = this.down('form').getForm();
        var total = 0, msg = '', question = 1, count = 0, value = 0, mod = 0;
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
        for (var i = 0; i < result.length; i++) {
            /* value 2 is not allow, set total to higher than 4 which is the max total. */
            if (result[i] === 2) {
                total += 10;
            } else {
                total += result[i];
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
                    question++;
                    break;
                case 2:
                    if (result[i] && result[i] !== '' && result[i] !== null) {
                        this.xml += '<alt2>' + result[i] + '</alt2>';
                    }
                    if (total !== 4) {
                        if (msg !== '') {
                            msg += ', ' + (question-1);
                        } else {
                            msg += (question-1);
                        }
                    }
                    count = 1;
                    total = 0;
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
            this.fireEvent('navigate', this, incr);
        }
    }
})
;