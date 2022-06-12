
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

// function handleClick(e)
// {

//     var email = String(document.getElementById("email").value);
//     const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
//     if(regex.test(email))
//     {
//         alert(`email address '${email}' will send you an email shortly!`);
//         window.location.reload(false);
//         const form = useRef();
//         const sendEmail = (e) => {
//             e.preventDefault();
//             emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//             .then((result) => {
//                 console.log(result.text);
//             }, (error) => {
//                 console.log(error.text);
//             });
//         };
        
        
//     }
//     else
//     {
//         alert(`email address is '${email}' invalid!`);
//         return;
//     }
   
// }

function ComSubscribe(props)
{

    const form = useRef();
    
    // if(regex.test(email))
    // {
    const sendEmail = (e) => {
      e.preventDefault();
      var email = String(document.getElementById("email").value);
      // const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
      // if(!regex.test(email))
      // {
      //   alert(`email address is '${email}' invalid!`);
      //   return;
      // }
      emailjs.sendForm('service_Callzone', 'template_sz664wj', form.current, 'R_bMAPgPcAPlLJ7NW')
        .then((result) => {
            console.log(result.text);
            alert("The email was sent successfully");
            window.location.reload(false);
        }, (error) => {
            console.log(error.text);
            alert(error.text);
        });
    };
    //}
    // else{
    //      alert(`email address is '${email}' invalid!`);
    // }



    return <div id="subscribe" className="subscribe">
                <div className="block_scribe" id="height_block_scribe" >JOIN THE MOVEMENT</div>
                <h2 className="height_block_scribe" id="height_block_scribe">Subscribe to our newsletter</h2>
                <div className="height_block_scribe" id="height_block_scribe">Get notification about tips, new product and exclusive promo news just for you.</div>
                <form ref={form} onSubmit={sendEmail} >
                <label className="img_email"/>
                <input type="email" id="email" name="email_name"  className="Rectangle649"  placeholder="Enter your email address"/>
                <button id="send" type="submit"   className="send_email">Subscribe</button>
                </form>
        </div>
}

export default ComSubscribe;