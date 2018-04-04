$("#page-content-wrapper").css("padding","0px");
$("#menu-toggle").css("padding-left","25px");
$(window).load(function() {
	$(".loader").fadeOut("slow");
});

$("#fetchbtn").click(function(){
  if(document.getElementById("regno").value.trim() != ""){
  sessionStorage.setItem("regno",document.getElementById("regno").value);
  window.location = "main.html";
}else
{alert("Registration no Required");}
});

function loaddetail()
{
  var dataString="regno="+sessionStorage.getItem("regno");

  $.ajax({
    type: "GET",
    url:localStorage.getItem("serverpath")+"outsiderdata.php",
    data: dataString,
    crossDomain: true,
    cache: false,
    success: function(data){
      var arr = JSON.parse(data);

      if(arr.length >0){

      document.getElementById("yrmn").innerText = arr[0].YR_MN;
         document.getElementById("totunit").innerText = arr[0].TOT_UNIT;
          document.getElementById("totelec").innerText = arr[0].TOT_ELEC;
           document.getElementById("lpdate").innerText = arr[0].L_PDATE;
    }


 }
});
}