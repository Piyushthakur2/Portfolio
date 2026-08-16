import { motion } from "framer-motion";

function TypingIndicator() {

    return (

        <motion.div

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            className="flex gap-2 p-5"

        >

            <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce" />

            <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce [animation-delay:150ms]" />

            <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce [animation-delay:300ms]" />

        </motion.div>

    );

}

export default TypingIndicator;