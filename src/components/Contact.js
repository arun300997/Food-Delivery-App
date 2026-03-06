const Contact = () => {
    return(
        <div className="background-gray-100 p-8">
            <h2>Contact Us</h2>
                <form className="flex flex-col gap-4 w-6/12 m-auto">
                    <label htmlFor="name">Name:</label>
                    <input className="border border-black p-2 m-2" type="text" id="name" name="name" required />  
                    <label htmlFor="email">Email:</label>
                    <input className="border border-black p-2 m-2"  type="email" id="email" name="email" required />
                    <label htmlFor="message">Message:</label>
                    <textarea className="border border-black p-2 m-2" id="message" name="message" required></textarea>
                    <button type="submit" className="bg-green-100 rounded-lg p-2 m-2 w-30">Submit</button>  
                </form>
            </div>
    )
}

export default Contact;