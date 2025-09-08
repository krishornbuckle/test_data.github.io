var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_kdatest_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'kda test<br />\
    <img src="styles/legend/kdatest_1_0.png" /> 0,0000<br />\
    <img src="styles/legend/kdatest_1_1.png" /> 22,4075<br />\
    <img src="styles/legend/kdatest_1_2.png" /> 44,8151<br />\
    <img src="styles/legend/kdatest_1_3.png" /> 67,2226<br />\
    <img src="styles/legend/kdatest_1_4.png" /> 89,6301<br />\
    <img src="styles/legend/kdatest_1_5.png" /> 112,0376<br />\
    <img src="styles/legend/kdatest_1_6.png" /> 134,4451<br />\
    <img src="styles/legend/kdatest_1_7.png" /> 155,1290<br />\
    <img src="styles/legend/kdatest_1_8.png" /> 172,3655<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/kdatest_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-392637.013124, 6428987.159039, 286411.880715, 7265437.662309]
        })
    });
var format_month_2 = new ol.format.GeoJSON();
var features_month_2 = format_month_2.readFeatures(json_month_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_month_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_month_2.addFeatures(features_month_2);
var lyr_month_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_month_2, 
                style: style_month_2,
                popuplayertitle: 'month',
                interactive: true,
    title: 'month<br />\
    <img src="styles/legend/month_2_0.png" /> attempted murder<br />\
    <img src="styles/legend/month_2_1.png" /> corporate manslaughter<br />\
    <img src="styles/legend/month_2_2.png" /> Grievous bodily harm<br />\
    <img src="styles/legend/month_2_3.png" /> Homicide<br />\
    <img src="styles/legend/month_2_4.png" /> manslaughter<br />\
    <img src="styles/legend/month_2_5.png" /> manslaughter  <br />\
    <img src="styles/legend/month_2_6.png" /> manslaughter of baby<br />\
    <img src="styles/legend/month_2_7.png" /> manslaughter of child under one year<br />\
    <img src="styles/legend/month_2_8.png" /> murder<br />\
    <img src="styles/legend/month_2_9.png" /> murder <br />\
    <img src="styles/legend/month_2_10.png" /> murder  <br />\
    <img src="styles/legend/month_2_11.png" /> murder of a person over 1 year old<br />\
    <img src="styles/legend/month_2_12.png" /> murder of a person under 1 year old<br />\
    <img src="styles/legend/month_2_13.png" /> murder of child<br />\
    <img src="styles/legend/month_2_14.png" /> murder of child under 1 year<br />\
    <img src="styles/legend/month_2_15.png" /> murder of child under one year<br />\
    <img src="styles/legend/month_2_16.png" /> murder, hit and run<br />\
    <img src="styles/legend/month_2_17.png" /> murder/assisted suicide<br />\
    <img src="styles/legend/month_2_18.png" /> murder/dangerous driving<br />\
    <img src="styles/legend/month_2_19.png" /> murder/manslaughter<br />\
    <img src="styles/legend/month_2_20.png" /> murder/suicide<br />\
    <img src="styles/legend/month_2_21.png" /> suicide/homicide<br />\
    <img src="styles/legend/month_2_22.png" /> <br />' });
var format_nna_test_3 = new ol.format.GeoJSON();
var features_nna_test_3 = format_nna_test_3.readFeatures(json_nna_test_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nna_test_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nna_test_3.addFeatures(features_nna_test_3);
var lyr_nna_test_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nna_test_3, 
                style: style_nna_test_3,
                popuplayertitle: 'nna_test',
                interactive: true,
                title: '<img src="styles/legend/nna_test_3.png" /> nna_test'
            });
var format_charges_4 = new ol.format.GeoJSON();
var features_charges_4 = format_charges_4.readFeatures(json_charges_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_charges_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_charges_4.addFeatures(features_charges_4);
var lyr_charges_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_charges_4, 
                style: style_charges_4,
                popuplayertitle: 'charges',
                interactive: true,
    title: 'charges<br />\
    <img src="styles/legend/charges_4_0.png" /> attempted murder<br />\
    <img src="styles/legend/charges_4_1.png" /> corporate manslaughter<br />\
    <img src="styles/legend/charges_4_2.png" /> Grievous bodily harm<br />\
    <img src="styles/legend/charges_4_3.png" /> Homicide<br />\
    <img src="styles/legend/charges_4_4.png" /> manslaughter<br />\
    <img src="styles/legend/charges_4_5.png" /> manslaughter  <br />\
    <img src="styles/legend/charges_4_6.png" /> manslaughter of baby<br />\
    <img src="styles/legend/charges_4_7.png" /> manslaughter of child under one year<br />\
    <img src="styles/legend/charges_4_8.png" /> murder<br />\
    <img src="styles/legend/charges_4_9.png" /> murder <br />\
    <img src="styles/legend/charges_4_10.png" /> murder  <br />\
    <img src="styles/legend/charges_4_11.png" /> murder of a person over 1 year old<br />\
    <img src="styles/legend/charges_4_12.png" /> murder of a person under 1 year old<br />\
    <img src="styles/legend/charges_4_13.png" /> murder of child<br />\
    <img src="styles/legend/charges_4_14.png" /> murder of child under 1 year<br />\
    <img src="styles/legend/charges_4_15.png" /> murder of child under one year<br />\
    <img src="styles/legend/charges_4_16.png" /> murder, hit and run<br />\
    <img src="styles/legend/charges_4_17.png" /> murder/assisted suicide<br />\
    <img src="styles/legend/charges_4_18.png" /> murder/dangerous driving<br />\
    <img src="styles/legend/charges_4_19.png" /> murder/manslaughter<br />\
    <img src="styles/legend/charges_4_20.png" /> murder/suicide<br />\
    <img src="styles/legend/charges_4_21.png" /> suicide/homicide<br />\
    <img src="styles/legend/charges_4_22.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_kdatest_1.setVisible(true);lyr_month_2.setVisible(true);lyr_nna_test_3.setVisible(true);lyr_charges_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_kdatest_1,lyr_month_2,lyr_nna_test_3,lyr_charges_4];
lyr_month_2.set('fieldAliases', {'Lat': 'Lat', 'Long': 'Long', 'Charge': 'Charge', 'Month': 'Month', 'Year': 'Year', 'Country': 'Country', });
lyr_nna_test_3.set('fieldAliases', {'fid': 'fid', 'Lat': 'Lat', 'Long': 'Long', 'Charge': 'Charge', 'Month': 'Month', 'Year': 'Year', 'Country': 'Country', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr_charges_4.set('fieldAliases', {'Lat': 'Lat', 'Long': 'Long', 'Charge': 'Charge', 'Month': 'Month', 'Year': 'Year', 'Country': 'Country', });
lyr_month_2.set('fieldImages', {'Lat': 'TextEdit', 'Long': 'TextEdit', 'Charge': 'TextEdit', 'Month': 'TextEdit', 'Year': 'Range', 'Country': 'TextEdit', });
lyr_nna_test_3.set('fieldImages', {'fid': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Charge': 'TextEdit', 'Month': 'TextEdit', 'Year': 'Range', 'Country': 'TextEdit', 'HubName': 'TextEdit', 'HubDist': 'TextEdit', });
lyr_charges_4.set('fieldImages', {'Lat': 'TextEdit', 'Long': 'TextEdit', 'Charge': 'TextEdit', 'Month': 'TextEdit', 'Year': 'Range', 'Country': 'TextEdit', });
lyr_month_2.set('fieldLabels', {'Lat': 'no label', 'Long': 'no label', 'Charge': 'no label', 'Month': 'no label', 'Year': 'no label', 'Country': 'no label', });
lyr_nna_test_3.set('fieldLabels', {'fid': 'no label', 'Lat': 'hidden field', 'Long': 'hidden field', 'Charge': 'header label - visible with data', 'Month': 'header label - visible with data', 'Year': 'header label - visible with data', 'Country': 'no label', 'HubName': 'header label - visible with data', 'HubDist': 'no label', });
lyr_charges_4.set('fieldLabels', {'Lat': 'hidden field', 'Long': 'hidden field', 'Charge': 'header label - visible with data', 'Month': 'header label - visible with data', 'Year': 'header label - visible with data', 'Country': 'hidden field', });
lyr_charges_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});