$(document).ready(function(){
    ind = [];
    $("#img a").each(function(index){
        ind.push($(this).attr("href"));
    })


    $("a[rel='galerie']").click(function(event){
        event.preventDefault();

        if ($(this).index() == 0){
            $(".lightbox").html("<a class='fleche droite' rel="+($(this).index()+1)+">&rsaquo;</a><img src="+$(this).attr("href")+">");
        }

        else if ($(this).index() > 0 && $(this).index()+1 < ind.length){
            $(".lightbox").html("<a class='fleche gauche' rel="+($(this).index()-1)+">&lsaquo;</a><a class='fleche droite' rel="+($(this).index()+1)+">&rsaquo;</a><img src="+$(this).attr("href")+">");
        }
		
		else{
            $(".lightbox").html("<a class='fleche gauche' rel="+($(this).index()-1)+">&lsaquo;</a><img src="+$(this).attr("href")+">");
        }

        $(".lightbox").fadeIn();
        $(".voile").fadeIn();

    });

    $("body").on("click", ".fleche", function(){
        $("a[rel='galerie']")[$(this).attr("rel")].click();
        $(".lightbox").fadeIn();
        $(".voile").fadeIn();
    })

    $(".voile").click(function(){
        $(".lightbox").fadeOut();
        $(".voile").fadeOut();
    });

    $(".lightbox").hover(function(){
        $(".fleche").fadeIn();
    }, function(){
        $(".fleche").fadeOut();
    });
});