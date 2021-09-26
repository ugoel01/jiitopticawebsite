(function () {
  //to be changed
  emailjs.init("user_aELb48Z5FRDrg2Rllk93Aaa");     ///user_aELb48Z5FRDrg2Rllk93A
})();
function sendMail() {
  let email, message, Fname, Lname, phone, name;
  Fname = document.getElementById("inputFname").value;
  Lname = document.getElementById("inputLname").value;
  email = document.getElementById("inputEmail").value;
  phone = document.getElementById("inputPhone").value;
  message = document.getElementById("inputMessage").value;
  name = Fname + " " + Lname;
  console.log(Fname, Lname, email, phone, message, name);
  var contactParams = {
    from_name: name,
    from_email: email,
    message: message,
    to_name: "OSA CLUB JIIT",
    phone_no: phone,
    reply_to: email,
  };


  if (!Fname || !Lname || !email || !phone || !message) {
    alert("Please check your entries");
    return false;
  } else {
    console.log(contactParams);
    emailjs
      .send("service_996pdqo77", "template_l4og9ea", contactParams)    // .send("service_6pdqo77", "template_l4og9ea", contactParams)
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Mail sent successfully");
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Failed to connect");
        }
      );
  }
  document.getElementById("inputFname").value = '';
  document.getElementById("inputLname").value = '';
  document.getElementById("inputEmail").value = '';
  document.getElementById("inputPhone").value = '';
  document.getElementById("inputMessage").value = '';
}