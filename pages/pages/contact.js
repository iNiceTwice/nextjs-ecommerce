const Contact = () => {
    return ( 
        <>
            <section className="flex flex-col gap-5 mb-32 mt-20 lg:mt-52 px-10 lg:px-36 w-3/4 text-slate-800/90">
                <h1 className="text-2xl lg:text-5xl font-serif mb-6">We're here for all your CBD questions.</h1>
                <h2 className="text-lg lg:text-3xl font-serif">Contact us for advice on everything related to CBD. Our Customer Experience team is ready to help.</h2>
                <ul className="list-disc ml-5">
                    <li>Email: <a href="mailto:hello@populum.com" className="text-orange-600/80 hover:text-slate-800/90 cursor-pointer transition-colors">hello@populum.com</a>.</li>
                    <li><a className="text-orange-600/80 hover:text-slate-800/90 cursor-pointer transition-colors">Chat with us</a>.</li>
                    <li>Call us at <a className="text-orange-600/80 hover:text-slate-800/90 cursor-pointer transition-colors">855-872-2772</a>.</li>
                    <li>Read our <a className="text-orange-600/80 hover:text-slate-800/90 cursor-pointer transition-colors">Resource Guide</a> for quick and easy answers.</li>
                </ul>
                <p className="italic">
                    <span className="font-bold">Note:</span> We are a small team that's dedicated to making sure you have an excellent experience with Populum. Please note that our normal business hours are Monday through Friday, from 9:00 am to 4:00 pm CST.
                    <br/><br/>
                    We'll work hard to get you a quick response, but please note that it can take us a bit longer to address weekend inquiries. We promise we will get to your inquiry as soon as possible when we return to the office.    
                </p>
                <h3 className="text-xl lg:text-2xl font-serif">Additional Resources:</h3>
                <ul className="list-disc ml-5">
                    <li>Our <a className="text-orange-600/80 hover:text-slate-800/90 cursor-pointer transition-colors">FAQ page</a> offers insight to a lot of common questions and might have what you're looking for.</li>
                    <li>For subscription changes, <a className="text-orange-600/80 hover:text-slate-800/90 cursor-pointer transition-colors">here</a>log in .</li>
                    <li>If you have not yet registered your account to make changes, you can register your account here.</li>
                    <li><a className="text-orange-600/80 hover:text-slate-800/90 cursor-pointer transition-colors">Veteran Discount Program</a></li>
                    <li><a className="text-orange-600/80 hover:text-slate-800/90 cursor-pointer transition-colors">Rescued Pets Discount Program</a></li>
                </ul>
                <h2 className="text-lg lg:text-3xl font-serif">Press Inquiries</h2>
                <p>For all press inquires, please contact <a href="mailto:marketing@populum.com" className="text-orange-600/80 hover:text-slate-800/90 cursor-pointer transition-colors">marketing@populum.com</a></p>
                <h2 className="text-lg lg:text-3xl font-serif">Wholesale Inquiries</h2>
                <p>If you're interested in wholesaling Populum products, please apply for our <a className="text-orange-600/80 hover:text-slate-800/90 cursor-pointer transition-colors">Wholesale Program</a> or contact us at <a href="mailto:sales@populum.com" className="text-orange-600/80 hover:text-slate-800/90 cursor-pointer transition-colors">sales@populum.com</a> with any questions.</p>
                <h2 className="text-lg lg:text-3xl font-serif">Affiliate Inquiries</h2>
                <p>If you're interested in partnering with Populum, please apply for our <a className="text-orange-600/80 hover:text-slate-800/90 cursor-pointer transition-colors">Affiliate Program</a> or contact us at <a href="mailto:affiliates@populum.com" className="text-orange-600/80 hover:text-slate-800/90 cursor-pointer transition-colors">affiliates@populum.com</a> with any questions.</p>
            </section>
        </>
     );
}
 
export default Contact;