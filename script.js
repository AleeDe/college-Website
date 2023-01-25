function sendemail()
{
    Email.send({
        Host : "smtp.gmail.com",
        Username : "drogonattack@gmail.com",
        Password : "42276416CE0B53460EF81207AE5FD4292DD",
        To : 'drogonattack@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}