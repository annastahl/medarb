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
    flex: 1,
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
        me.fireEvent('verifyUser', me);

    },


    buildQuestions: function () {
        this.items = [

            {
                xtype: 'container',
                flex: 1,
               // width: 650,
                scrollable: true,
                style: {"background-color": 'white'},

                html: '<h2>Samverkansprofil</h2>' +
                '<p>F&#246;religgande personanalys &#228;r ett hj&#228;lpmedel, som skall underl&#228;tta f&#246;rst&#229;elsen av oss sj&#228;lva och v&#229;ra relationer ' +
                'med v&#229;r omgivning.</p>' +
                '<p></p>' +
                '<p>Om vi ges &#246;kad f&#246;rst&#229;else f&#246;r v&#229;rt eget och andras beteende, skapas samtidigt f&#246;rus&#228;ttningar f&#246;r framg&#229;ngsrik ' +
                'kommunikation med andra m&#228;nniskor.</p>' +
                '<p></p>' +
                '<p>Genom att vara flexibel och anpassa sitt eget agerande till hur andra vill bli bem&#246;tta, &#246;kar man sitt f&#246;rtroende ' +
                'och d&#228;rigenom sina m&#246;jligheter att komma &#246;verens och n&#229; samf&#246;rst&#229;nd.</p>' +
                '<p></p>' +
                '<p>Besvara enk&#228;ten genom att fylla i de svar som Du f&#246;rst k&#228;nner som de r&#228;tta.</p>' +
                '<p></p>' +
                '<p>Utg&#229; fr&#229;n hur Du &#228;r som person, och inte efter vad Du vill vara, h&#246;rt andra s&#228;ga att Du &#228;r eller efter vilka ' +
                'roller Du eventuellt getts i v&#228;nkretsen, p&#229; arbetsplatsen eller hemma.</p>' +
                '<p></p>' +
                '<p>F&#246;rs&#246;k att vara s&#229; uppriktig som m&#246;jligt. Det finns inga "bra" eller "d&#229;liga" svar.</p>' +
                '<p></p>' +
                '<p>Enk&#228;ten tar cirka 20 minuter att fylla i.</p>' +
                '<p></p>' +
                '<p>Undvik b&#229;de att hoppa &#246;ver n&#229;got avsnitt, och att g&#229; tillbaka f&#246;r att korrigera.</p>' +
                '<p></p>' +
                '<p>Besvara enk&#228;ten fr&#229;n b&#246;rjan till slut, i Din egen takt.</p>' +
                '<p></p>' +
                '<p>V&#228;lj N&#228;sta f&#246;r att starta testet.</p>'
            }];
    }
});