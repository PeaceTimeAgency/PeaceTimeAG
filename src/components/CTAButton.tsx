import { motion } from "framer-motion";

type CTAButtonProps = {
  href: string;
  label: string;
  className?: string;
};

export default function CTAButton({
  href,
  label,
  className = "",
}: CTAButtonProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`
        inline-block
        bg-sky hover:bg-navy
        text-white font-medium
        py-3 px-8 rounded-lg
        shadow-md
        ${className}
      `}
    >
      {label}
    </motion.a>
  );
}
