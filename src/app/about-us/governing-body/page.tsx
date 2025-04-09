'use client'
import ChairpersonMessagePage from "@/components/governing-body/Chairperson";
import SecretaryMessagePage from "@/components/governing-body/Secretary";
import TreasurerMessagePage from "@/components/governing-body/Treasurer";
import { motion } from "framer-motion";

export default function page() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            >
                <ChairpersonMessagePage />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
                    }
                }}
            >
                <SecretaryMessagePage />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
                    }
                }}
            >
                <TreasurerMessagePage />
            </motion.div>
        </div>
    )
}
