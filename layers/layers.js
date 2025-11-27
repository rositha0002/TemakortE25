var wms_layers = [];


        var lyr_Positronnolabelsretina_0 = new ol.layer.Tile({
            'title': 'Positron [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_AngeloTemakortFrededefortidsminderlinje_1 = new ol.format.GeoJSON();
var features_AngeloTemakortFrededefortidsminderlinje_1 = format_AngeloTemakortFrededefortidsminderlinje_1.readFeatures(json_AngeloTemakortFrededefortidsminderlinje_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AngeloTemakortFrededefortidsminderlinje_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AngeloTemakortFrededefortidsminderlinje_1.addFeatures(features_AngeloTemakortFrededefortidsminderlinje_1);
var lyr_AngeloTemakortFrededefortidsminderlinje_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AngeloTemakortFrededefortidsminderlinje_1, 
                style: style_AngeloTemakortFrededefortidsminderlinje_1,
                popuplayertitle: 'Angelo Temakort — Fredede fortidsminder, linje',
                interactive: true,
                title: '<img src="styles/legend/AngeloTemakortFrededefortidsminderlinje_1.png" /> Angelo Temakort — Fredede fortidsminder, linje'
            });
var format_AngeloTemakortHvidovreLokalplan_2 = new ol.format.GeoJSON();
var features_AngeloTemakortHvidovreLokalplan_2 = format_AngeloTemakortHvidovreLokalplan_2.readFeatures(json_AngeloTemakortHvidovreLokalplan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AngeloTemakortHvidovreLokalplan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AngeloTemakortHvidovreLokalplan_2.addFeatures(features_AngeloTemakortHvidovreLokalplan_2);
var lyr_AngeloTemakortHvidovreLokalplan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AngeloTemakortHvidovreLokalplan_2, 
                style: style_AngeloTemakortHvidovreLokalplan_2,
                popuplayertitle: 'Angelo Temakort — Hvidovre Lokalplan',
                interactive: true,
    title: 'Angelo Temakort — Hvidovre Lokalplan<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_0.png" /> 0<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_1.png" /> 1<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_2.png" /> 2<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_3.png" /> 3<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_4.png" /> 4<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_5.png" /> 5<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_6.png" /> 6<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_7.png" /> 7<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_8.png" /> 8<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_9.png" /> 9<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_10.png" /> 10<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_11.png" /> 11<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_12.png" /> 12<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_13.png" /> 13<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_14.png" /> 14<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_15.png" /> 15<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_16.png" /> 16<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_17.png" /> 17<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_18.png" /> 18<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_19.png" /> 19<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_20.png" /> 20<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_21.png" /> 21<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_22.png" /> 22<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_23.png" /> 23<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_24.png" /> 24<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_25.png" /> 25<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_26.png" /> 26<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_27.png" /> 27<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_28.png" /> 28<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_29.png" /> 29<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_30.png" /> 30<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_31.png" /> 31<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_32.png" /> 32<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_33.png" /> 33<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_34.png" /> 34<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_35.png" /> 35<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_36.png" /> 36<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_37.png" /> 37<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_38.png" /> 38<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_39.png" /> 39<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_40.png" /> 40<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_41.png" /> 41<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_42.png" /> 42<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_43.png" /> 43<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_44.png" /> 44<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_45.png" /> 45<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_46.png" /> 46<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_47.png" /> 47<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_48.png" /> 48<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_49.png" /> 49<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_50.png" /> 50<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_51.png" /> 51<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_52.png" /> 52<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_53.png" /> 53<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_54.png" /> 54<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_55.png" /> 55<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_56.png" /> 56<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_57.png" /> 57<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_58.png" /> 58<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_59.png" /> 59<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_60.png" /> 60<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_61.png" /> 61<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_62.png" /> 62<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_63.png" /> 63<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_64.png" /> 64<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_65.png" /> 65<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_66.png" /> 66<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_67.png" /> 67<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_68.png" /> 68<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_69.png" /> 69<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_70.png" /> 70<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_71.png" /> 71<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_72.png" /> 72<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_73.png" /> 73<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_74.png" /> 74<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_75.png" /> 75<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_76.png" /> 76<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_77.png" /> 77<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_78.png" /> 78<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_79.png" /> 79<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_80.png" /> 80<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_81.png" /> 81<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_82.png" /> 82<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_83.png" /> 83<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_84.png" /> 84<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_85.png" /> 85<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_86.png" /> 86<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_87.png" /> 87<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_88.png" /> 88<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_89.png" /> 89<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_90.png" /> 90<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_91.png" /> 91<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_92.png" /> 92<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_93.png" /> 93<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_94.png" /> 94<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_95.png" /> 95<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_96.png" /> 96<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_97.png" /> 97<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_98.png" /> 98<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_99.png" /> 99<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_100.png" /> 100<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_101.png" /> 101<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_102.png" /> 102<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_103.png" /> 103<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_104.png" /> 104<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_105.png" /> 105<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_106.png" /> 106<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_107.png" /> 107<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_108.png" /> 108<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_109.png" /> 109<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_110.png" /> 110<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_111.png" /> 111<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_112.png" /> 112<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_113.png" /> 113<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_114.png" /> 114<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_115.png" /> 115<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_116.png" /> 116<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_117.png" /> 117<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_118.png" /> 118<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_119.png" /> 119<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_120.png" /> 120<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_121.png" /> 121<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_122.png" /> 122<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_123.png" /> 123<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_124.png" /> 124<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_125.png" /> 125<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_126.png" /> 126<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_127.png" /> 127<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_128.png" /> 128<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_129.png" /> 129<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_130.png" /> 130<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_131.png" /> 131<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_132.png" /> 132<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_133.png" /> 133<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_134.png" /> 134<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_135.png" /> 135<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_136.png" /> 136<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_137.png" /> 137<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_138.png" /> 138<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_139.png" /> 139<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_140.png" /> 140<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_141.png" /> 141<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_142.png" /> 142<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_143.png" /> 143<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_144.png" /> 144<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_145.png" /> 145<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_146.png" /> 146<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_147.png" /> 147<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_148.png" /> 148<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_149.png" /> 149<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_150.png" /> 150<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_151.png" /> 151<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_152.png" /> 152<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_153.png" /> 153<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_154.png" /> 154<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_155.png" /> 155<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_156.png" /> 156<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_157.png" /> 157<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_158.png" /> 158<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_159.png" /> 159<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_160.png" /> 160<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_161.png" /> 161<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_162.png" /> 162<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_163.png" /> 163<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_164.png" /> 164<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_165.png" /> 165<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_166.png" /> 166<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_167.png" /> 167<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_168.png" /> 168<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_169.png" /> 169<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_170.png" /> 170<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_171.png" /> 171<br />\
    <img src="styles/legend/AngeloTemakortHvidovreLokalplan_2_172.png" /> <br />' });
var format_strandbeskyttelsehvidovre_3 = new ol.format.GeoJSON();
var features_strandbeskyttelsehvidovre_3 = format_strandbeskyttelsehvidovre_3.readFeatures(json_strandbeskyttelsehvidovre_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strandbeskyttelsehvidovre_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strandbeskyttelsehvidovre_3.addFeatures(features_strandbeskyttelsehvidovre_3);
var lyr_strandbeskyttelsehvidovre_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strandbeskyttelsehvidovre_3, 
                style: style_strandbeskyttelsehvidovre_3,
                popuplayertitle: 'strandbeskyttelsehvidovre',
                interactive: false,
                title: '<img src="styles/legend/strandbeskyttelsehvidovre_3.png" /> strandbeskyttelsehvidovre'
            });
var format_Folkeskoler_4 = new ol.format.GeoJSON();
var features_Folkeskoler_4 = format_Folkeskoler_4.readFeatures(json_Folkeskoler_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskoler_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskoler_4.addFeatures(features_Folkeskoler_4);
var lyr_Folkeskoler_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskoler_4, 
                style: style_Folkeskoler_4,
                popuplayertitle: 'Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/Folkeskoler_4.png" /> Folkeskoler'
            });
var format_Togstationer_5 = new ol.format.GeoJSON();
var features_Togstationer_5 = format_Togstationer_5.readFeatures(json_Togstationer_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_5.addFeatures(features_Togstationer_5);
var lyr_Togstationer_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_5, 
                style: style_Togstationer_5,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_5.png" /> Togstationer'
            });
var format_Kirker_6 = new ol.format.GeoJSON();
var features_Kirker_6 = format_Kirker_6.readFeatures(json_Kirker_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kirker_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kirker_6.addFeatures(features_Kirker_6);
var lyr_Kirker_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kirker_6, 
                style: style_Kirker_6,
                popuplayertitle: 'Kirker',
                interactive: true,
                title: '<img src="styles/legend/Kirker_6.png" /> Kirker'
            });
var format_Bibliotek_7 = new ol.format.GeoJSON();
var features_Bibliotek_7 = format_Bibliotek_7.readFeatures(json_Bibliotek_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bibliotek_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bibliotek_7.addFeatures(features_Bibliotek_7);
var lyr_Bibliotek_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bibliotek_7, 
                style: style_Bibliotek_7,
                popuplayertitle: 'Bibliotek',
                interactive: true,
                title: '<img src="styles/legend/Bibliotek_7.png" /> Bibliotek'
            });
var format_kommuneplan_8 = new ol.format.GeoJSON();
var features_kommuneplan_8 = format_kommuneplan_8.readFeatures(json_kommuneplan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kommuneplan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kommuneplan_8.addFeatures(features_kommuneplan_8);
var lyr_kommuneplan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kommuneplan_8, 
                style: style_kommuneplan_8,
                popuplayertitle: 'kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/kommuneplan_8.png" /> kommuneplan'
            });
var format_frededeomrder_9 = new ol.format.GeoJSON();
var features_frededeomrder_9 = format_frededeomrder_9.readFeatures(json_frededeomrder_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_frededeomrder_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_frededeomrder_9.addFeatures(features_frededeomrder_9);
var lyr_frededeomrder_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_frededeomrder_9, 
                style: style_frededeomrder_9,
                popuplayertitle: 'fredede områder',
                interactive: false,
    title: 'fredede områder<br />\
    <img src="styles/legend/frededeomrder_9_0.png" /> Damhuså<br />\
    <img src="styles/legend/frededeomrder_9_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/frededeomrder_9_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/frededeomrder_9_3.png" /> Vestvolden<br />\
    <img src="styles/legend/frededeomrder_9_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/frededeomrder_9_5.png" /> <br />' });
var format_MarcTemakortPizzarier_10 = new ol.format.GeoJSON();
var features_MarcTemakortPizzarier_10 = format_MarcTemakortPizzarier_10.readFeatures(json_MarcTemakortPizzarier_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MarcTemakortPizzarier_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarcTemakortPizzarier_10.addFeatures(features_MarcTemakortPizzarier_10);
var lyr_MarcTemakortPizzarier_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MarcTemakortPizzarier_10, 
                style: style_MarcTemakortPizzarier_10,
                popuplayertitle: 'Marc Temakort — Pizzarier',
                interactive: true,
                title: '<img src="styles/legend/MarcTemakortPizzarier_10.png" /> Marc Temakort — Pizzarier'
            });

lyr_Positronnolabelsretina_0.setVisible(true);lyr_AngeloTemakortFrededefortidsminderlinje_1.setVisible(true);lyr_AngeloTemakortHvidovreLokalplan_2.setVisible(true);lyr_strandbeskyttelsehvidovre_3.setVisible(true);lyr_Folkeskoler_4.setVisible(true);lyr_Togstationer_5.setVisible(true);lyr_Kirker_6.setVisible(true);lyr_Bibliotek_7.setVisible(true);lyr_kommuneplan_8.setVisible(true);lyr_frededeomrder_9.setVisible(true);lyr_MarcTemakortPizzarier_10.setVisible(true);
var layersList = [lyr_Positronnolabelsretina_0,lyr_AngeloTemakortFrededefortidsminderlinje_1,lyr_AngeloTemakortHvidovreLokalplan_2,lyr_strandbeskyttelsehvidovre_3,lyr_Folkeskoler_4,lyr_Togstationer_5,lyr_Kirker_6,lyr_Bibliotek_7,lyr_kommuneplan_8,lyr_frededeomrder_9,lyr_MarcTemakortPizzarier_10];
lyr_AngeloTemakortFrededefortidsminderlinje_1.set('fieldAliases', {'fid': 'fid', 'lokalitet_linje_lbnr': 'lokalitet_linje_lbnr', 'systemnr': 'systemnr', 'stednr': 'stednr', 'loknr': 'loknr', 'sbext': 'sbext', 'frednr': 'frednr', 'anlaegstype': 'anlaegstype', 'datering': 'datering', 'zone': 'zone', 'url': 'url', });
lyr_AngeloTemakortHvidovreLokalplan_2.set('fieldAliases', {'fid': 'fid', });
lyr_strandbeskyttelsehvidovre_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'forretningshaendelse': 'forretningshaendelse', 'senestesaglokalid': 'senestesaglokalid', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'paataenkthandling': 'paataenkthandling', 'registreringfra': 'registreringfra', 'virkningfra': 'virkningfra', 'virkningsaktoer': 'virkningsaktoer', 'temafladeid': 'temafladeid', 'tematype': 'tematype', 'jordstykkelokalid': 'jordstykkelokalid', });
lyr_Folkeskoler_4.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'adresse': 'adresse', 'by': 'by', 'hjemmeside': 'hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Togstationer_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Kirker_6.set('fieldAliases', {'navn': 'navn', 'adresse': 'adresse', 'by': 'by', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Bibliotek_7.set('fieldAliases', {'fid': 'fid', 'navn': 'navn', 'adresse': 'adresse', 'by': 'by', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_kommuneplan_8.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_frededeomrder_9.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_MarcTemakortPizzarier_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AngeloTemakortFrededefortidsminderlinje_1.set('fieldImages', {'fid': '', 'lokalitet_linje_lbnr': '', 'systemnr': '', 'stednr': '', 'loknr': '', 'sbext': '', 'frednr': '', 'anlaegstype': '', 'datering': '', 'zone': '', 'url': '', });
lyr_AngeloTemakortHvidovreLokalplan_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_strandbeskyttelsehvidovre_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'metadataproperty': 'TextEdit', 'description_href': 'TextEdit', 'description_title': 'TextEdit', 'description_nilreason': 'TextEdit', 'description': 'TextEdit', 'descriptionreference_href': 'TextEdit', 'descriptionreference_title': 'TextEdit', 'descriptionreference_nilreason': 'TextEdit', 'identifier_codespace': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'location_location': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senestesaglokalid': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalid': 'TextEdit', 'paataenkthandling': 'TextEdit', 'registreringfra': 'DateTime', 'virkningfra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temafladeid': 'TextEdit', 'tematype': 'TextEdit', 'jordstykkelokalid': 'TextEdit', });
lyr_Folkeskoler_4.set('fieldImages', {'Skolenavn': 'TextEdit', 'adresse': 'TextEdit', 'by': 'TextEdit', 'hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Togstationer_5.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Kirker_6.set('fieldImages', {'navn': 'TextEdit', 'adresse': 'TextEdit', 'by': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Bibliotek_7.set('fieldImages', {'fid': '', 'navn': 'TextEdit', 'adresse': 'TextEdit', 'by': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_kommuneplan_8.set('fieldImages', {'fid': 'Hidden', 'oid': 'Hidden', 'id': 'Hidden', 'planid': 'Hidden', 'objektkode': 'Hidden', 'komnr': 'Hidden', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Hidden', 'datovedt': 'Hidden', 'datoaflyst': 'Hidden', 'datoikraft': 'Hidden', 'datoslut': 'Hidden', 'aktuel': 'Hidden', 'datooprt': 'Hidden', 'datoopdt': 'Hidden', 'status': 'Hidden', 'datostart': 'Hidden', 'glkomnr': 'Hidden', 'kommunenavn': 'Hidden', 'glkomnavn': 'Hidden', 'glkomnavn_besk': 'Hidden', });
lyr_frededeomrder_9.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_MarcTemakortPizzarier_10.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'JsonEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AngeloTemakortFrededefortidsminderlinje_1.set('fieldLabels', {'fid': 'no label', 'lokalitet_linje_lbnr': 'no label', 'systemnr': 'no label', 'stednr': 'no label', 'loknr': 'no label', 'sbext': 'no label', 'frednr': 'no label', 'anlaegstype': 'no label', 'datering': 'no label', 'zone': 'no label', 'url': 'no label', });
lyr_AngeloTemakortHvidovreLokalplan_2.set('fieldLabels', {'fid': 'no label', });
lyr_strandbeskyttelsehvidovre_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'forretningshaendelse': 'no label', 'senestesaglokalid': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'paataenkthandling': 'no label', 'registreringfra': 'no label', 'virkningfra': 'no label', 'virkningsaktoer': 'no label', 'temafladeid': 'no label', 'tematype': 'no label', 'jordstykkelokalid': 'no label', });
lyr_Folkeskoler_4.set('fieldLabels', {'Skolenavn': 'inline label - always visible', 'adresse': 'inline label - always visible', 'by': 'inline label - always visible', 'hjemmeside': 'inline label - always visible', });
lyr_Togstationer_5.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Kirker_6.set('fieldLabels', {'navn': 'inline label - always visible', 'adresse': 'inline label - always visible', 'by': 'inline label - always visible', 'Hjemmeside': 'hidden field', 'result_num': 'hidden field', 'osm_id': 'hidden field', 'display_na': 'hidden field', 'category': 'hidden field', 'type': 'hidden field', 'latlong': 'hidden field', });
lyr_Bibliotek_7.set('fieldLabels', {'fid': 'hidden field', 'navn': 'inline label - always visible', 'adresse': 'inline label - always visible', 'by': 'inline label - always visible', 'Hjemmeside': 'hidden field', 'result_num': 'inline label - always visible', 'osm_id': 'hidden field', 'display_na': 'hidden field', 'category': 'hidden field', 'type': 'hidden field', 'latlong': 'hidden field', });
lyr_kommuneplan_8.set('fieldLabels', {'plannavn': 'inline label - always visible', 'doklink': 'inline label - always visible', });
lyr_frededeomrder_9.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_MarcTemakortPizzarier_10.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_MarcTemakortPizzarier_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});