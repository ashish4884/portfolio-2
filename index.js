function sendMail() {
    console.log("Send email clicked");

    var param = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceId = "service_54t2vh6";
    const templateID = "template_k5fnubk";

    emailjs.send(serviceId, templateID, param)
        .then((res) => {
            console.log(res);
            alert("Your message was sent successfully!");

           
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        })
        .catch((err) => {
            console.log("Error:", err);
        });
}
