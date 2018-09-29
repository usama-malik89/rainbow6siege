var maps = [
            "House",
            "Oregon",
            "Hereford_Base",
            "Club_House",
            "Presidential_Plane",
            "Consulate",
            "Bank",
            "Kanal",
            "Chalet",
            "Kafe_Dostoyevsky",
            "Yacht",
            "Border",
            "Favela",
            "Skyscraper",
            "Coastline",
            "Theme_Park",
            "Tower",
            "Villa"
           ]


function random_num(list){
    i = Math.floor(Math.random() * list.length);
    return i
}

$(document).ready(function(){
    y = maps[random_num(maps)]
    ny = y.replace('_', ' ');
    $("#mapName").text(ny);
    $("#img").attr('src', 'assets/' + y + '.jpg');
    
    $("#btn").click(function(){
    $("#img").attr('src', 'assets/' + y + '.jpg');
        x = maps[random_num(maps)]
        nx = x.replace('_', ' ');
        $("#mapName").text(nx);
        //$("#img").html("<img id='img' src='assets/'" + x + ".jpg>")
        $("#img").attr('src', 'assets/' + x + '.jpg');
        console.log(x)
    });
});
