import {SendMail} from './sendMail'
import Copyright from '../../assets/SVG/copyright.svg?react'
import Facebook from '../../assets/SVG/facebook.svg?react'
import Instagram from '../../assets/SVG/instagram.svg?react'
import Linkedin from '../../assets/SVG/linkedin.svg?react'
import Twitter from '../../assets/SVG/twitter.svg?react'
import './footer.css'
export function Footer(){

    return(
        <footer>
            <div className="footer-info">
                <div className="exclusive-container footer-content">
                    <p className="">Exclusive</p>
                    <p className="">Subscribe</p>
                    <div>
                        <p className="">Get 10% off your first order</p>
                        <SendMail placeholder="Enter your email" />
                    </div>
                </div>
                <div className="support-container footer-content">
                    <p>Support</p>
                    <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>
                <div className="account-container footer-content">
                    <p>Account</p>
                    <p>My Account</p>
                    <p>Login / Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>
                <div className="quickLink-container footer-content">
                    <p>Quick Link</p>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className="social-container footer-content">
                    <p>Social</p>
                    <div className="social-icon-container ">
                        <Facebook />
                        <Twitter />
                        <Instagram />
                        <Linkedin />
                    </div>
                </div>
            </div>
            <div className="bot-footer-container">
                <Copyright className="copyright-icon"/>
                <p>Copyright Rimel 2022. All right reserved</p>
            </div>
        </footer>
    );
}