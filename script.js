document.addEventListener("DOMContentLoaded", function() {
    const text = "Navigating Your Business to ";
    const successText = "Success";
    const typewriterElement = document.getElementById("typewriter");
    const successElement = document.querySelector(".success");
    let i = 0;
    const speed = 100; // Adjust speed of typing

    function typeWriter() {
        if (i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            typewriterElement.innerHTML += "<span class='success'>" + successText + "</span>";
        }
    }

    typeWriter();
});
