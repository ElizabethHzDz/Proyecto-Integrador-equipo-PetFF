
const imgInput = document.querySelector("#imageInput");
var uploadedImg = "";

imgInput.addEventListener("change", function(){
    var checkImg = document.getElementsByClassName("loadedImg");
    if(checkImg.length > 0 ){
        document.querySelectorAll(".loadedImg").forEach(checkImg => checkImg.remove());
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            uploadedImg = reader.result;
            let image = document.createElement('img');
            let image2 = document.createElement('img');
            image.src = uploadedImg;
            image2.src = uploadedImg;
            image.className = "loadedImg";
            image.id = "imgForUse";
            image2.className = "loadedImg";
            document.getElementById("displayImage").appendChild(image);
            document.getElementById("displayImage2").appendChild(image2);
        })
        reader.readAsDataURL(this.files[0]);
    }else {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploadedImg = reader.result;
        let image = document.createElement('img');
        let image2 = document.createElement('img');
        image.src = uploadedImg;
        image2.src = uploadedImg;
        image.className = "loadedImg";
        image.id = "imgForUse";
        image2.className = "loadedImg";
        document.getElementById("displayImage").appendChild(image);
        document.getElementById("displayImage2").appendChild(image2);
    })
    reader.readAsDataURL(this.files[0]);
}
})

const imgPublish = document.querySelector("#pubButton");

imgPublish.addEventListener("click", function(){
    let imgPub = document.createElement('img');
    imgPub.src = document.getElementById("imgForUse").src;
    document.getElementById("imgPublish").appendChild(imgPub);
    var checkImg = document.getElementsByClassName("loadedImg");
    if(checkImg.length > 0 ){
        document.querySelectorAll(".loadedImg").forEach(checkImg => checkImg.remove());
    }
})