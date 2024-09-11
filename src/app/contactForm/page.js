import Buttons from "../components/buttons/index";
import { ArrowRight, Enveloppe } from "../components/svgcomponent/SvgComponent";

function ContactForm() {
    return (
        <div className="container">
            <form action="/submit-contact" method="post">
                <p>Welcome</p>
                <div className="inputForm flex center">
                    <input type="name" placeholder="Name" />
                    <input type="Email" placeholder="Email" />
                </div>
                <br />
                <textarea id="story" name="story" rows="5" cols="33"></textarea>
            </form>

            <div className="drops">
                <div className="drop drop-1"></div>
                <div className="drop drop-2"></div>
                <div className="drop drop-3"></div>
                <div className="drop drop-4"></div>
                <div className="drop drop-5"></div>
            </div>
        </div>
    );
}

export default ContactForm;
