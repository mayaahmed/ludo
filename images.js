var offsetX= canvas.offsetLeft;
var offsetY= canvas.offsetTop;
var startX;
var startY;
var isDown=false;

var snapshotYes=0;


var imageWidth,imageHeight,imageRight,imageBottom;
var draggingImage=false;

var selectedImage=-1;
var gallery = [];

function takeSnapshot() {

    snapshot = context.getImageData(0, 0, canvas.width, canvas.height);
    snapshotYes = 1;
    
}


function restoreSnapshot() {
    if(snapshotYes==1)
	context.putImageData(snapshot, 0, 0);
}


for(var i=0; i<4; i++){
    var  len = gallery.length; 
    var img2 = new Image();
    img2.src=  "2.png"
    img2.onload = function () {
	context.drawImage(img2, 20, 350,40,40); 

    }; 
    gallery[len]={img: img2, imageX: 20, imageY: 350, imageWidth: 40, imageHeight: 40};

    
}


for(var i=0; i<4; i++){
    var  len = gallery.length; 
    var img1 = new Image();
    img1.src=  "1.png"
    img1.onload = function () {
	context.drawImage(img1, 70, 350,40,40); 

    }; 

    gallery[len]={img: img1, imageX: 70, imageY: 350, imageWidth: 40, imageHeight: 40};

}




for(var i=0; i<4; i++){
    var  len = gallery.length; 
    var img3 = new Image();
    img3.src=  "3.png"
    img3.onload = function () {
	context.drawImage(img3, 120, 350,40,40); 

    }; 
    gallery[len]={img: img3, imageX: 120, imageY: 350, imageWidth: 40, imageHeight: 40};

    
}

for(var i=0; i<4; i++){
    var  len = gallery.length; 
    var img4 = new Image();
    
    img4.src=  "4.png"
img4.onload = function () {
	context.drawImage(img4, 170, 350,40,40); 

    }; 
    gallery[len]={img: img4, imageX: 170, imageY: 350, imageWidth: 40, imageHeight: 40};

    
}




function initial()
{
    takeSnapshot();
    ludo.onload = function () {
	context.drawImage(ludo, 0, 0,300,330); 

    }; 

    



}

initial();








function imageDrawAll(){
    
    context.drawImage(ludo, 0, 0,300,330); 
    for(var i=0;i<gallery.length;i++)
        draw(gallery[i] );

}




function draw(pic ){
    
    context.drawImage(pic.img,pic.imageX,pic.imageY,pic.imageWidth,pic.imageHeight);
    
}





function hitImage(x,y,pic){
    return(x>pic.imageX && x<pic.imageX+pic.imageWidth && y>pic.imageY && y<pic.imageY+pic.imageHeight);
}


function imageMouseDown(e){
    
    startX=parseInt(e.clientX-offsetX);
    startY=parseInt(e.clientY-offsetY);

    for(var i=0;i<gallery.length;i++){
        if(hitImage(startX,startY,gallery[i]))
            selectedImage=i;
    }
    
    
    draggingImage=hitImage(startX,startY, gallery[selectedImage]);
}

function imageMouseUp(e){
    
    draggingImage=false;  
    restoreSnapshot();
    imageDrawAll();
    selectedImage=-1;
}

function imageMouseOut(e){
    imageMouseUp(e);
}

function imageMouseMove(e){

    
    if(draggingImage){

        imageClick=false;

        mouseX=parseInt(e.clientX-offsetX);
        mouseY=parseInt(e.clientY-offsetY);

        // move the image by the amount of the latest drag
        var dx=mouseX-startX;
        var dy=mouseY-startY;
        gallery[selectedImage].imageX+=dx;
        gallery[selectedImage].imageY+=dy;
	//  gallery[selectedImage].imageRight+=dx;
	//  gallery[selectedImage].imageBottom+=dy;
        // reset the startXY for next time
        startX=mouseX;
        startY=mouseY;

        // redraw the image with border 
	restoreSnapshot();
	imageDrawAll();
    }
}









