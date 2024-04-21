import { motion } from "framer-motion";

// Testing framer motion 
// Always use initial and animate state explicitly in motion variants to avoid buggy issues on different screen sizes
const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const Testing = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}
    >
      <h1>This is a Framer Motion example</h1>
    </motion.div>
  );
};

export default Testing;