$(document).ready(function(){

    $(".cbtn_1").click(function(){
        alert("Text :" +$("#test1").text());

    });
    // 

    $(".cbtn_2").click(function(){
        alert("HTML : " +$("#test1").html())
    });
    // 

    $(".cbtn_3").click(function(){
        alert("value : "+$("#c_input").val());
    });
    // 

    $(".cbtn_4").click(function(){
        $(".test2").text("hello world");
    });

    $(".cbtn_5").click(function(){
        $(".test3").html("<b> hellow world </b>");
    });

    $(".cbtn_6").click(function(){
        $("#cinput_2").val("hello Sikhbe shobai");
    });


    // jQuery add append

    $(".cbtn_7").click(function(){
        $(".demo1").append("<b> hello world </b>");
    });

    // 

    $(".cbtn_8").click(function(){
        $("ol").append("<li>Append List item</li>");
    });

// prefend()

$(".cbtn_9").click(function(){
    $("#demo2").prepend("<b>Prefend items </b>");

});

$(".cbtn_10").click(function(){
    $("ul").prepend("<li>Prepend List item</li>");
});


//before()

$(".cbtn_11").click(function(){
    $(".port_5").before("<b>Before items </b>");
});

// after()

$(".cbtn_12").click(function(){
    $(".port_5").after("<b>After items </b>");
});

// 


$(".cbtn_13").click(function(){
    $(".main_item1").remove();
});
    
$(".cbtn_14").click(function(){
    $(".main_item2").remove();
});
    
$(".cbtn_15").click(function(){
    $(".main_item3").remove();
});
    
$(".cbtn_16").click(function(){
    $(".main_item4").remove();
});
    

// empty()

$(".cbtn_17").click(function(){
    $(".main_empty_item1").empty();
});

$(".cbtn_18").click(function(){
    $(".main_empty_item2").empty();
});

$(".cbtn_19").click(function(){
    $(".main_empty_item3").empty();
});

$(".cbtn_20").click(function(){
    $(".main_empty_item4").empty();
});



// Filter the Elements to be Removed

$(".cbtn_21").click(function(){
    $("p,img").remove("#testp1, .testp2, .img_team2");
});



// jQuery addClass() Method

$(".cbtn22").click(function(){
    $(".heading1, .heading2, .heading3, .Parag1").addClass("all_heading");
    $(".heaidng_one").addClass("div_headings");
});


// removeClass()

$(".cbtn23").click(function(){
    $("#all_removes_heading1, #all_removes_heading2, #all_removes_heading3, #all_removes_parag4, #all_removes_div")
    .removeClass("all_rem_heading all_rem_div");
});
    



// toggleClass()

$(".cbtn24").click(function(){
    $("#toggle_cnt1, #toggle_cnt2, #toggle_cnt3, #toggle_cnt_p").toggleClass("toggle_blue");
    $("#toggle_div_cnt").toggleClass("toggle_div");

});


// 

$(".main_p_item").first().css("background-color", "yellow");

$(".main_p_item").last().css({"background-color": "red", "color": "white"});

// 

$("button").click(function(){
    $("#div1").load("demo_test.txt");
  });
























































});

