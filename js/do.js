$(".tb-thumb img").each(function(){
    $(this).click(function(e){
        e.stopPropagation();
        var img = $(this).attr("src").replace('60x60','430x430').replace('50x50.jpg_.webp','430x430.jpg')
        var alink = document.createElement("a");
        alink.href = img;
        alink.download = "testImg.jpg";
        alink.click();
    })
})
$("#J_UlThumb").css('background','#eeeeee')

