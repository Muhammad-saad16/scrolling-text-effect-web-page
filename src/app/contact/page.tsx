import Header from "@/components/header"
export default function Contact(){
    return(
        <>
        <Header/>
        <form className="form">
      <h1>Contact Us</h1>
      <input className="form" type="text" id="firstName" placeholder="First Name" required />
      <input className="form" type="text" id="lastName" placeholder="Last Name"  />
      <input className="form" type="email" id="email" placeholder="Email" required />
      <input className="form" type="text" id="mobile" placeholder="Mobile"  /> 
    </form>

    <form className="form">
         <h4>Type Your Message Here...</h4>
      <textarea  required></textarea>
      <input  type="submit" value="Send" id="submit-button" />
    </form>
    </>
    )
}