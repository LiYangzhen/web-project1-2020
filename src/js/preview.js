document.getElementById("ImagesUpload").addEventListener("change", function () {
    let reader = new FileReader();
    reader.readAsDataURL(document.getElementById("ImagesUpload").files[0]);
    reader.onload = function () {
        let result = reader.result;
        let image = document.createElement("img");
        image.src = result;
        document.getElementById("img-preview").appendChild(image);
    }
})