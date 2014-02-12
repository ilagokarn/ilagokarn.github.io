<%-- 
    Document   : index
    Created on : Feb 6, 2014, 10:33:59 AM
    Author     : ingokarn.2011
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="http://cdn.leafletjs.com/leaflet-0.7.2/leaflet.css" rel="stylesheet"  />
        <link href="stylesheets/bootstrap.css" rel="stylesheet">
        <link href="stylesheets/MarkerCluster.Default.css" rel="stylesheet">
        <link href="stylesheets/MarkerCluster.css" rel="stylesheet">
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
        <link href="stylesheets/leaflet.awesome-markers.css" rel="stylesheet">
        <link href="stylesheets/L.Control.Pan.css" rel="stylesheet">
        <link href="stylesheets/L.Control.Pan.css" rel="stylesheet">
        <link href="stylesheets/Control.MiniMap.css" rel="stylesheet">
        <title>Health Scores SF, CA, USA</title>
    </head>
    <body>
        <div class="row-fluid" align="center" style="padding-top: 100px;">
            <div class="map" id="map" ></div>
        </div>
        <div class="row-fluid">
            <div id="infoBox" class="offset4 infoBox span8 pull-right" style="color: #ffffff; padding-left: 20px;">
                <h4>Visualizing Health Inspection Scores Around San Francisco</h4>
                <p id="intoduction">
                    The Retail Food Safety Program regulated by the Department of Public Health of San Francisco monitors compliance of local and state food safety regulations in restaurants, markets, and all other retail food operations. This includes all retail food operations including - restaurants, bars, markets, farmers' markets, concession stands, mobile food units, licensed health care facilities, and temporary food events. In order to implement the food safety ordinance, the Health Department has developed an inspection report and inspection scoring system. After conducting an inspection of a food facility, the Health Inspector will calculate a score based on the violations observed. For more information on food safety scores and interpretation of the scores, see the table below. Violations can fall into three categories:<br/><br/>
                    <b>High Risk:</b> Violations that directly relate to the transmission of food borne illnesses, the adulteration of food products and the contamination of food-contact surfaces.<br/>
                    <b>Moderate Risk:</b> Violations that are of a moderate risk to the public health and safety.<br/>
                    <b>Low Risk:</b> Violations that are low risk or have no immediate risk to the public health and safety. <br/>
                    <h5>Food Safety Score Categories and Interpretation</h5>
                </p>
                    <table class="table">
                        <tr>
                            <td>Score</td>
                            <td>Operating Condition Category</td>
                            <td>Inspection Findings</td>
                        </tr>
                        <tr>
                            <td>>90</td>
                            <td>Good</td>
                            <td><ul>
                                    <li>Typically, only lower-risk health and safety violations observed</li>
                                    <li>May have high-risk violations</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>86-90</td>
                            <td>Adequate</td>
                            <td>
                                <ul>
                                    <li>Several violations observed</li>
                                    <li>May have high-risk violations</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>71-85</td>
                            <td>Needs Improvement</td>
                            <td>
                                <ul>
                                    <li>Multiple violations observed</li>
                                    <li>Typically, several high-risk violations</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>71-85</td>
                            <td>Poor</td>
                            <td>
                                <ul>
                                    <li>Multiple violations observed</li>
                                    <li>Typically, several high-risk violations</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3">For more information, go <a href="http://www.sfdph.org/dph/EH/Food/score/default.asp">here.<br/></a><button class="btn btn-small btn-inverse" id="hideBox" onclick="boxHide();">Hide Information</button></td>
                        </tr>
                    </table>
                
                </div>
            </div>
        <div class="row-fluid">
            <div id="legendBox" class="offset10 infoBox span2 pull-right" align="center" style="color: #ffffff; padding-left: 6px; position: absolute;">
                <h4>Legend</h4>
                <image src="img/legend.png"/><br/><br/>
                
                <button class="btn btn-small btn-inverse" id="hideBox" onclick="boxShow();">Show Information</button>
            </div>
            <div id="pano" style="position:absolute; left:0px; top: 366px; width: 400px; height: 300px;"></div>
        
        </div>
            
        
        <!--Javascript files put at the end for faster page load-->
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/jquery.js"><\/script>');</script>
        <script src="http://cdn.leafletjs.com/leaflet-0.7.2/leaflet.js"></script>
        <script src="js/bootstrap.js"></script>
        <script src="js/leaflet.markercluster-src.js"></script>
        <script src="js/leaflet.markercluster.js"></script>
        <script src="js/leaflet.awesome-markers.js"></script>
        <script src="js/heatcanvas.js"></script>
        <script src="js/leaflet.heatcanvas.js"></script>
        <script src="http://maps.google.com/maps/api/js?v=3&sensor=false"></script>
        <script src="js/leaflet.groupedlayercontrol.js"></script>
        <script src="js/L.Control.Pan.js"></script>
        <script src="js/Control.MiniMap.js"></script>
        <script src="js/google.js"></script>
        <script src="js/main.js"></script>
        <script>
            $(document).ready(function () {
                $("#legendBox").hide();
            });
            function boxHide(){
                $("#infoBox").hide();
                $("#legendBox").show();
            }
            function boxShow(){
                $("#infoBox").show();
                $("#legendBox").hide();
            }
        </script>
    </body>
</html>
