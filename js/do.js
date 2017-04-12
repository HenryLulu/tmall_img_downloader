$(".tb-thumb img").each(function(){
    $(this).click(function(){
        var img = $(this).attr("src").replace('60x60','430x430')
        var alink = document.createElement("a");
        alink.href = img;
        alink.download = "testImg.jpg";
        alink.click();
    })
})

