function handleImageUpload() {
    const fileInput = document.getElementById("imageInput");
    const uploadIcon = document.getElementById("uploadIcon");
    const imagePreview = document.getElementById("imagePreview");
    const selectImageBtn = document.getElementById("selectImageBtn");
    const uploadBtn = document.getElementById("uploadBtn");

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
            localStorage.setItem("uploadedImage", event.target.result); // Store image in localStorage
            imagePreview.src = event.target.result;
            imagePreview.style.display = "block";
        };

        reader.readAsDataURL(file);

        uploadIcon.style.display = "none"; // Hide the cloud icon
        selectImageBtn.style.display = "none"; // Hide the "Select Image" button
        uploadBtn.style.display = "block"; // Show the "Upload" button
    }
}

function uploadImage() {
    window.location.href = "attack.html";
}

