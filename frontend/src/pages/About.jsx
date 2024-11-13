
const About = () => {
    const keyPointsForWhyToChoose = [
        {
            title: "Effortless URL Shortening",
            description: "Instantly convert lengthy links into clean, easy-to-share URLs. Just paste, click, and you are good to go!"
        },
        {
            title: "Secure and Reliable",
            description: "Minify URL prioritizes your privacy and link security, ensuring your data is always safe with us."
        }
    ];
    const keyPointsForFutureWork = [
        {
            title: "Powerful Link Analytics",
            description: "Track clicks, geographic data, and other metrics to get insights into your link's performance. Gain valuable insights to understand your audience better."
        },
        {
            title: "Customizable URLs",
            description: "Create custom slugs for links, giving you control over how your link looks and making it more memorable."
        },
        {
            title: "User-Friendly Dashboard",
            description: "Manage all your links in one place with a simple, intuitive dashboard that allows you to edit, track, and organize your URLs."
        }
    ]
    return (
        <div className="px-4 sm:px-2 md:w-3/4 md:mx-auto py-2 md:py-6 text-gray-800">
            <h1 className="text-center mt-4 text-5xl font-bold">About</h1>

            <p className="mt-4 text-balance sm:text-justify text-lg sm:text-xl text-gray-500 leading-relaxed">Welcome to Minify URL, the simple, secure, and efficient solution to shorten, share, and manage your links!</p>
            <p className="my-4 text-balance sm:text-justify text-lg sm:text-xl text-gray-500 leading-relaxed">In today&apos;s digital world, long and cluttered URLs can be hard to share and track. Minify URL was created to make link sharing fast, straightforward, and insightful. Whether you are a marketer, blogger, business owner, or just someone looking to share a link quickly, Minify URL makes it easy to turn long URLs into short, branded links that are easy to remember and share.</p>

            <h2 className="my-4 underline underline-offset-4 text-3xl font-bold">Why Choose Minify URL?</h2>
            <ol>
                {
                    keyPointsForWhyToChoose.map(({ title, description }, index) => {
                        return (
                            <li key={index} className="text-lg sm:text-xl leading-relaxed text-gray-500">
                                <b>{index + 1}. {title}</b>: {description}
                            </li>
                        )
                    })
                }
            </ol>

            <h2 className="my-4 underline underline-offset-4 text-3xl font-bold">Future Works</h2>

            <ol>
                {
                    keyPointsForFutureWork.map(({ title, description }, index) => {
                        return (
                            <li key={index} className="text-lg sm:text-xl leading-relaxed text-gray-500">
                                <b>{index + 1}. {title}</b>: {description}
                            </li>
                        )
                    })
                }
            </ol>

            <h2 className="my-4 underline underline-offset-4 text-3xl font-bold">Join Our Community</h2>

            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">Ready to experience a better way to manage and share your links? Join thousands of users who trust Minify URL to simplify their online connections. Sign up today and start shortening, tracking, and customizing your URLs with ease.</p>
        </div>
    )
}

export default About