var dashboard;
var current = 1;
var kcount = 0;
var issues = [];
var resp = new Object();

$( document ).ready(function() {
    for(var i=1; i<11; i++){
      addQuestionListener(i);
    }
    $('#intro').addClass("display");
});


$('.logo').click(function() {
    location.reload();
});


function addQuestionListener(questionIndex){
  $("input[name='question"+ questionIndex + "']").change(function(){
          $('#next'+questionIndex).addClass("display");
          //click  nextbutton on question
          $('#next'+questionIndex).click(function(){
          $('#counter' + questionIndex).removeClass("current");
          $('#counter' + questionIndex).addClass("finished");
          $('#question'+questionIndex).removeClass("display");
      if($("input[name='question"+ questionIndex + "']:checked").data('selection') == 'yes'){
          resp[questionIndex] = "yes";
          kcount = kcount+2;
          console.log("counter = "+kcount);
          $('#response' + questionIndex + 'Yes').addClass("display");
          $('#response' + questionIndex + 'Yes .next').click(function() {
          $('#response' + questionIndex + 'Yes').removeClass("display");
          $('#question' + (questionIndex + 1)).addClass("display");
          $('#counter' + (questionIndex + 1)).addClass("current");
        });
      }else if($("input[name='question"+ questionIndex + "']:checked").data('selection') == 'no'){
          resp[questionIndex] = "no";
          kcount = kcount+0;
          console.log("counter = "+kcount);
          console.log($("input[name='question"+ questionIndex + "']:checked").data('issue'));
          issues.push($("input[name='question"+ questionIndex + "']:checked").data('issue'));
          $('#response' + questionIndex + 'No').addClass("display");
          $('#response' + questionIndex + 'No .next').click(function() {
          $('#response' + questionIndex + 'No').removeClass("display");
          $('#question' + (questionIndex + 1)).addClass("display");
          $('#counter' + (questionIndex + 1)).addClass("current");
        });
          
    }else if($("input[name='question"+ questionIndex + "']:checked").data('selection') == 'pers'){
          $('#question' + (questionIndex + 1)).addClass("display");
          $('#counter' + (questionIndex + 1)).addClass("current");
          var personal = $("input[name='question"+ questionIndex + "']:checked").val();
          resp[questionIndex] = personal;
          console.log(personal);
    }else if($("input[name='question"+ questionIndex + "']:checked").data('selection') == 'ethnic'){
          $('#question' + (questionIndex + 1)).addClass("display");
          $('#counter' + (questionIndex + 1)).addClass("current");
        var personal = [];
        $("input[name='question"+ questionIndex + "']:checked").each(function() {
            personal.push($(this).val());
        });
          resp[questionIndex] = personal.toString();
          //console.log(personal);
      }else{
          resp[questionIndex] = "unsure";
          kcount = kcount+1;
          console.log("counter = "+kcount);
          $('#response' + questionIndex + 'Unsure').addClass("display");
          $('#response' + questionIndex + 'Unsure .next').click(function() {
          $('#response' + questionIndex + 'Unsure').removeClass("display");
          $('#question' + (questionIndex + 1)).addClass("display");
          $('#counter' + (questionIndex + 1)).addClass("current");
        });
      }
    });
  });
}

function start(){
          $('#intro').removeClass("display");
          $('#question1').addClass("display");
          $('#counter').addClass("display");
          $('#counter1').addClass("current");
}

function calculate(){
    

    saveResults=new Array();
        $.each(resp, function(key, value) { 
//            alert(value);
//            console.log(value);
        saveResults.push(value);
    });
   
    
    
  var score = parseInt($('input[name="question8"]:checked').val()) + parseInt($('input[name="question9"]:checked').val()) + parseInt($('input[name="question10"]:checked').val()) + parseInt($('input[name="question4"]:checked').val()) + parseInt($('input[name="question5"]:checked').val()) + parseInt($('input[name="question6"]:checked').val()) + parseInt($('input[name="question7"]:checked').val());
    console.log("final score = "+score);
    
    //first three issues defined
    var initIssues = issues.slice(0, 3).join(", ");
    $("#issueList").html(initIssues);
    
  var percent = Math.floor((score*100)/14);
  $("#final").addClass("display");
  $('#response7Unsure').removeClass("display");
  $('#response7Yes').removeClass("display");
  $('#response7No').removeClass("display");
//  $('#score').html(score);
  $('#score').html(percent+"&nbsp;");
  $( "#progress-bar" ).css( "width", function() {
    console.log("percent= "+percent);
    return percent + '%';
  });
  $('#counter7').removeClass('current');
  $('#counter7').addClass('finished');
    
    if (score <= 9) {
        //lowscore
        $("#lowscore").addClass("display");
    } else {
        //highscore
        $("#highscore").addClass("display");
    }
    if(resp[2] == "yes" || resp[5] == "unsure") {
        $("#treatment").addClass("display");
    }
    
    if(resp[5] == "no" || resp[8] == "unsure") {
        $("#trust").addClass("display");
    }
    
    if(resp[1] == "no" || resp[4] == "unsure") {
        $("#insurance").addClass("display");
    }
    
    if(resp[7] == "no" || resp[10] == "unsure") {
        $("#know").addClass("display");
    }
    
    if(resp[4] == "no" || resp[7] == "unsure") {
        $("#family").addClass("display");
    }
    
    if(resp[6] == "no" || resp[9] == "unsure" && resp[4] == "yes") {
        $("#research").addClass("display");
    }
    
     if(resp[7] == "no" || resp[7] == "unsure" || resp[8] == "no" || resp[8] == "unsure" || resp[4] == "no" || resp[4] == "unsure") {
        $(".doctors").addClass("display");
    }
    $(".choices").addClass("display");
    
    
    
    
    
    //save to sheets
    
 console.log(saveResults);
 $.ajax({
    type: 'POST', 
    url: '/write.php', 
    data: {
        'CChiRP': saveResults 
    },
    success: function(data) { 
       // alert(data); 
    }
});
    
}


