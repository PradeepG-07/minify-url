import Typed from "typed.js";
import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';

export default function TypingAnimation({ strings = ["Put your string here"] }) {
    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: strings, // Strings to display
            startDelay: 100,
            typeSpeed: 40,
            backSpeed: 10,
            backDelay: 1000,
            smartBackspace: true,
            loop: true,
            showCursor: true,
            cursorChar: "|"
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, [strings]);

    return (
        <span ref={el}>Hello Developers</span>
    );
}
TypingAnimation.propTypes = {
    strings: PropTypes.array,
}
