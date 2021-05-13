const NUM_BONES = 4
let danger = 0;
let bonesToFind = NUM_BONES;

for(let row = 0; row < NUM_BONES; row++)
{
    for (let col = 0; col < NUM_BONES; col++)
    {
        $("p#grid").append("<span>");
    }

    $("p#grid").append("<br>")

}
let counter = 0
while(true) {


    $("span").each(function () {
        let random = Math.random()
        if(!($(this).hasClass("bone"))) {
            if (random < .1 && counter < bonesToFind) {
                $(this).addClass("bone")
                counter++;
            }
        }
    })
    if(counter == bonesToFind){
        break;
    }
}

$("span").click(function(){
    if(!($(this).hasClass("noClick"))) {
        //set clicked square to be non-clickable
        $(this).addClass("noClick")
        //make squares color go from green to brown
        $(this).css("background", "brown")
        //increase danger meter
        danger += Math.random() * ((4/NUM_BONES^2) - (1/NUM_BONES^2)) + (1/NUM_BONES^2)
        //if square contains a bone make a bone image appear and decrease the bone counter
        if($(this).hasClass("bone")){
            bonesToFind = bonesToFind - 1;
        }
        //display message for if all bones are found and set all squares to be non-clickable
        if(bonesToFind == 0){
            $("span").addClass("noClick");
        }
        //display message for if danger meter gets to 100% and set all squares to be non-clickable
        if(danger >= 100){
            $("span").addClass("noClick");
        }
    }
});