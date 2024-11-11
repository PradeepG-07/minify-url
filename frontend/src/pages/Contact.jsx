import { Link } from "react-router-dom"
import Feedback from "../components/Feedback"

const Contact = () => {
    return (
        <div className="px-2 md:w-3/4 md:mx-auto py-2 md:py-6 text-gray-800">
            <h2 className="text-3xl font-bold leading-loose">Have questions or feedback?</h2>
            <p className="text-xl text-justify">
                We would love to hear from you! Get in touch with us at <Link className="font-bold" to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRwPxQhXkhnKLpnZxJvBWzrxqwsnnPKxRnFkDzSzXZMnZtBMwMNrhTkSMtKnHvNPPVGfzljw" target="_blank">pradeepubuntuvps@gmail.com</Link>, or connect with us on our <a className="font-bold" to="https://github.com/PradeepG-07/minify-url.git" target="_blank">github</a> profile to stay updated with new features and tips.
            </p>
            <br />
            <br />
            <Feedback />
        </div>

    )
}

export default Contact