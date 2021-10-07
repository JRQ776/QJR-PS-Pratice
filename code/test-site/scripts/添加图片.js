function ProcessFile(e) {
    var file = document.getElementById('file').files[0];
    if (file) {
       
        var reader = new FileReader();
        reader.onload = function (event) {
            var txt = event.target.result;

            var img = document.createElement("img");
            img.src = txt;//将图片base64字符串赋值给img的src
            document.getElementById("result").appendChild(img);
        };
    }
    reader.readAsDataURL(file);
    reader.onload = function (e) {
        var result = document.getElementById("result");
        //显示文件
        alert(this.result);
        result.innerHTML = '<img src="' + this.result + '" alt="" />';

    }
}
function contentLoaded() {
    document.getElementById('file').addEventListener('change',
        ProcessFile, false);
}
