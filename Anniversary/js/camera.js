/* ===================================
10TH ANNIVERSARY CAMERA
=================================== */

const openCameraBtn =
document.getElementById("openCameraBtn");

const cameraModal =
document.getElementById("cameraModal");

const closeCamera =
document.getElementById("closeCamera");

const captureBtn =
document.getElementById("captureBtn");

const retakeBtn =
document.getElementById("retakeBtn");

const savePhotoBtn =
document.getElementById("savePhotoBtn");

const video =
document.getElementById("video");

const canvas =
document.getElementById("canvas");

const photoPreview =
document.getElementById("photoPreview");

const anniversaryPhoto =
document.getElementById("anniversaryPhoto");

let stream = null;
let capturedImage = null;


/* ===================================
LOAD SAVED PHOTO
=================================== */

window.addEventListener("load", () => {

    const savedPhoto =
    localStorage.getItem("anniversaryPhoto");

    if(savedPhoto){

        anniversaryPhoto.src =
        savedPhoto;

    }

});


/* ===================================
OPEN CAMERA
=================================== */

openCameraBtn.addEventListener("click", async () => {

    try{

        stream =
        await navigator.mediaDevices.getUserMedia({

            video:true

        });

        video.srcObject =
        stream;

        cameraModal.classList.add("active");

        video.style.display = "block";
        photoPreview.style.display = "none";

        captureBtn.style.display = "inline-block";

        retakeBtn.style.display = "none";

        savePhotoBtn.style.display = "none";

    }

    catch(error){

        alert(
            "Unable to access camera. Please allow camera permission."
        );

        console.error(error);

    }

});


/* ===================================
CAPTURE PHOTO
=================================== */

captureBtn.addEventListener("click", () => {

    canvas.width =
    video.videoWidth;

    canvas.height =
    video.videoHeight;

    const ctx =
    canvas.getContext("2d");

    ctx.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );

    capturedImage =
    canvas.toDataURL("image/png");

    photoPreview.src =
    capturedImage;

    video.style.display = "none";

    photoPreview.style.display = "block";

    captureBtn.style.display = "none";

    retakeBtn.style.display = "inline-block";

    savePhotoBtn.style.display = "inline-block";

});


/* ===================================
RETAKE PHOTO
=================================== */

retakeBtn.addEventListener("click", () => {

    photoPreview.style.display = "none";

    video.style.display = "block";

    captureBtn.style.display = "inline-block";

    retakeBtn.style.display = "none";

    savePhotoBtn.style.display = "none";

});


/* ===================================
SAVE PHOTO
=================================== */

savePhotoBtn.addEventListener("click", () => {

    if(!capturedImage) return;

    localStorage.setItem(
        "anniversaryPhoto",
        capturedImage
    );

    anniversaryPhoto.src =
    capturedImage;

    stopCamera();

    cameraModal.classList.remove("active");

    alert(
        "❤️ Memory saved successfully!"
    );

});


/* ===================================
CLOSE MODAL
=================================== */

closeCamera.addEventListener("click", () => {

    stopCamera();

    cameraModal.classList.remove("active");

});


/* ===================================
STOP CAMERA
=================================== */

function stopCamera(){

    if(stream){

        stream
        .getTracks()
        .forEach(track => track.stop());

    }

}