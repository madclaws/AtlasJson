var writeFile=require('write');
var jsonStructure;
//Edit with the sprite's json data location
var parsedData=require('./../sprites/sprites.json');

//Edit with location where new Easel format data should be saved
var dest="spriteAtlasData.json";
//Edit with spriteSheets location
var spriteImageDir="sprites/spritesheet.png";

createJson();

writeEaselFormat();
console.log(jsonStructure);

function createJson()
{
jsonStructure="{\n"+"\"images\":["+"\""+spriteImageDir+"\""+"],\n\"frames\":[\n";


for(i=0;i<parsedData.frames.length;i++)
{
	if(i!=parsedData.frames.length-1)
    jsonStructure+="\t\t["+parsedData.frames[i].frame.x+","+parsedData.frames[i].frame.y+","+parsedData.frames[i].frame.w+","+parsedData.frames[i].frame.h+"],\n";
	else
	jsonStructure+="\t\t["+parsedData.frames[i].frame.x+","+parsedData.frames[i].frame.y+","+parsedData.frames[i].frame.w+","+parsedData.frames[i].frame.h+"]\n";	
}
jsonStructure+="\t],\n\"animations\":{\n";
for(i=0;i<parsedData.frames.length;i++)
{	if(i!=parsedData.frames.length-1)
    jsonStructure+="\t\t\""+parsedData.frames[i].filename+"\":["+i+"],\n";
    else
    	jsonStructure+="\t\t\""+parsedData.frames[i].filename+"\":["+i+"]\n";
}
jsonStructure+="\t}\n}";
}


function writeEaselFormat()
{
    writeFile(dest,jsonStructure,function(err){
        if(err)
            console.log(err);
        else
            console.log("SUCCESS");

    });
}
