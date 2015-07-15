/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MedarbApp.view.step.Step0', {
    extend: 'Ext.panel.Panel',
    layout: 'border',

    xtype: 'step0',

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
        me.fireEvent('verifyUser',me);

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
                        html: '<h2>Samverkansprofil</h2>' +
                        '<p>Föreliggande personanalys är ett hjälpmedel, som skall underlätta förståelsen av oss själva och våra relationer ' +
                        'med vår omgivning.</p>' +
                        '<p></p>' +
                        '<p>Om vi ges ökad förståelse för vårt eget och andras beteende, skapas samtidigt förusättningar för framgångsrik ' +
                        'kommunikation med andra människor.</p>' +
                        '<p></p>' +
                        '<p>Genom att vara flexibel och anpassa sitt eget agerande till hur andra vill bli bemötta, ökar man sitt förtroende ' +
                        'och därigenom sina möjligheter att komma överens och nå samförstånd.</p>' +
                        '<p></p>' +
                        '<p>Besvara enkäten genom att fylla i de svar som Du först känner som de rätta.</p>' +
                        '<p></p>' +
                        '<p>Utgå från hur Du är som person, och inte efter vad Du vill vara, hört andra säga att Du är eller efter vilka ' +
                        'roller Du eventuellt getts i vänkretsen, på arbetsplatsen eller hemma.</p>' +
                        '<p></p>' +
                        '<p>Försök att vara så uppriktig som möjligt. Det finns inga "bra" eller "dåliga" svar.</p>' +
                        '<p></p>' +
                        '<p>Enkäten tar cirka 20 minuter att fylla i.</p>' +
                        '<p></p>' +
                        '<p>Undvik både att hoppa över något avsnitt, och att gå tillbaka för att korrigera.</p>' +
                        '<p></p>' +
                        '<p>Besvara enkäten från början till slut, i Din egen takt.</p>' +
                        '<p></p>' +
                        '<p>Välj Nästa för att starta testet.</p>',

                        margin: '0 0 20 0'
                    }
                ]
            }];
    }
});