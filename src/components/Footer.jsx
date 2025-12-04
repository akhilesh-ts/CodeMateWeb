
import { TextEffect } from "/components/motion-primitives/text-effect";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <motion.footer
      initial={{ borderTopWidth: 0, opacity: 0 }}
      animate={{ borderTopWidth: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
      className="w-full border-t  py-4"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground gap-2">
        
        <Link to="https://codematee.in/">
          <TextEffect
            className="order-3 md:order-0 w-full text-center text-sm md:text-lg font-grotesk  font-bold"
            per="char"
            delay={1.5}
          >
            Codematee.in
          </TextEffect>
        </Link>

        <Link to="https://merchant.razorpay.com/policy/RmkpgfDL8Gp1ua/privacy">
          <TextEffect
            className="order-3 md:order-0 w-full text-center text-sm md:text-lg font-grotesk  font-bold"
            per="char"
            delay={1.7}
          >
            Privacy Policy
          </TextEffect>
        </Link>

        <Link to="#">
          <TextEffect
            className="order-3 md:order-0 w-full text-center text-sm md:text-lg font-grotesk  font-bold"
            per="char"
            delay={1.9}
          >
            akhilbhaskarants@gmail.com
          </TextEffect>
        </Link>

      </div>
    </motion.footer>
  );
}
