var casual_maps = [
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

var ranked_maps = [
            "Oregon",
            "Hereford_Base",
            "Club_House",
            "Consulate",
            "Bank",
            "Chalet",
            "Kafe_Dostoyevsky",
            "Border",
            "Skyscraper",
            "Coastline",
            "Theme_Park",
            "Villa"
           ]

var all_maps = [
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
            "Villa",
            "Bartlett_University"
           ]


function random_num(list){
    i = Math.floor(Math.random() * list.length);
    return i
}

$(document).ready(function(){
    $("#butn").click(function(){
        if($( "input:checked" ).val() === "allMaps"){
            map_type(all_maps)
        }
        else if($( "input:checked" ).val() === "casualMaps"){
            map_type(casual_maps)
        }
        else if($( "input:checked" ).val() === "rankedMaps"){
            map_type(ranked_maps)
        }
    });
});

function map_type(list){
    y = list[random_num(list)]
    ny = y.replace('_', ' ');
    $("#mapName").text(ny);
    $("#img").attr('src', 'assets/' + y + '.jpg');
    
    $("#butn").click(function(){
    $("#img").attr('src', 'assets/' + y + '.jpg');
        x = list[random_num(list)]
        nx = x.replace('_', ' ');
        $("#mapName").text(nx);
        $("#img").attr('src', 'assets/' + x + '.jpg');
    });
}