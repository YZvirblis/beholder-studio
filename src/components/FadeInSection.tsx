'use client'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type FadeInSectionProps = {
    children: React.ReactNode;
};

export default function FadeInSection({ children }: FadeInSectionProps) {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.2, // Trigger when 20% of the section is in view
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            controls.start({ opacity: 0, y: 20 });
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ ref }
            initial={ { opacity: 0, y: 20 } }
            animate={ controls }
            transition={ { duration: 1, ease: "easeOut" } }
        >
            { children }
        </motion.div>
    );
}
