// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.getElementsByClassName("portfolio-image");
for (i=0; i<4; i++) {
    var img = imgs[i];
    console.log(img.src);
    img.onclick = function(){
    modal.style.display = "block";
    document.getElementById("img01").src = this.src;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
    modal.style.display = "none";
    }
}