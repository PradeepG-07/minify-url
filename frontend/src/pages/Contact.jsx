import { Link } from "react-router-dom"
import Feedback from "../components/Feedback"

const Contact = () => {
    return (
        <div className="min-h-[80vh] sm:min-h-[84vh] px-4 md:w-3/4 md:mx-auto py-2 md:py-6 text-gray-800 flex flex-col gap-6 sm:gap-6">
            <div className="flex flex-col gap-2 sm:gap-4">
                <h2 className="mt-4 mb-2 text-4xl font-bold text-balance">Have questions or feedback?</h2>
                <p className="text-lg sm:text-xl text-pretty text-gray-500 sm:text-justify">
                    We would love to hear from you! Get in touch with us at <Link className="font-bold" to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRwPxQhXkhnKLpnZxJvBWzrxqwsnnPKxRnFkDzSzXZMnZtBMwMNrhTkSMtKnHvNPPVGfzljw" target="_blank">pradeepubuntuvps@gmail.com</Link>, or connect with us on our <Link className="font-bold" to="https://github.com/PradeepG-07/minify-url.git" target="_blank">github</Link> profile to stay updated with new features and tips.
                </p>
            </div>

            <Feedback />
        </div>

    )
}

export default Contact