import PhoneContact from '../../assets/SVG/phone-contact.svg?react'
import MailContact from '../../assets/SVG/mail-contact.svg?react'
import './contactPage.css'

export function ContactPage(){

    return (
        <main className="main-page">
            <section className="contact-container">
                <div className="contact-frame">
                    <div className="contact-frame-title">
                        <PhoneContact/>
                        <h1 className="title-16 txt-medium">Call To Us</h1>
                    </div>
                    <p className="title-14">We are available 24/7, 7 days a week.</p>
                    <p className="title-14">Phone: +8801611112222</p>

                    <div className="dividing-ine"></div>

                    <div className="contact-frame-title">
                        <MailContact/>
                        <h1 className="title-16 txt-medium">Write To US</h1>
                    </div>
                    <p className="title-14">Fill out our form and we will contact you within 24 hours.</p>
                    <p className="title-14">Emails: customer@exclusive.com</p>
                    <p className="title-14">Emails: support@exclusive.com</p>
                </div>

                <div className="send-massage-frame">
                    <div className="information-input-container">
                        <input className="information-input" placeholder="Your Name *"/>
                        <input className="information-input" placeholder="Your Email *"/>
                        <input className="information-input" placeholder="Your Phone *"/>
                    </div>
                    <textarea className="massage-input" placeholder="Your Massage"/>
                    <button className="btn solid massage-send-btn">Send Massage</button>
                </div>
            </section>
        </main>
    );
}