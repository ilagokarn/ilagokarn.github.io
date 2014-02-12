alert("inside js");
$.get('/FilmsAtSFVis/geocode',  
      function(data) { 
          var dataList = "";
          if (data.length > 0) { 
              var stop = data.length-1;
              for (var i=1;i<data.length;i++) { 
                  var address = data[i].replace(" ","+");
                  address = address.replace("\\","");
                  dataList=dataList+data[i]+"<br/>";
                  $.get('http://maps.googleapis.com/maps/api/geocode/json?address='+address+'&sensor=false',
                    function(mapData){
                        alert(mapData.status);
                        if(mapData.status!=="OK"){
                            dataList = dataList+"<br/>";
                        }
                        var fAddress = mapData.results[0].formatted_address;
                        var lat = mapData.results[0].geometry.location.lat;
                        var lng = mapData.results[0].geometry.location.lng;
                        var line = fAddress+","+lat+","+lng+"<br/>";
                        dataList = dataList+line;
                        //alert(dataList);
                        document.getElementById("results").innerHTML = dataList;
                    },
                    "json"
                  );
              }
          } 
      }, 
      "json"
    ); 
    
  