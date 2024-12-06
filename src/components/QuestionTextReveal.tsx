import splitStringUsingRegex from '../utils/splitStringUsingRegex';
import { motion } from 'motion/react';

// Text Data

const text = 'Which flavour and taste profiles do you prefer?';

const charVariants = {
  hidden: { opacity: 0, color: '#ccfbf1' },
  reveal: { opacity: 1, color: '#1E293B' },
};

// Function of Component
const QuestionTextReveal = () => {
  const textWords = splitStringUsingRegex(text); // Now splitting by words
  return (
    <>
      <motion.p
        className="text-5xl font-extrabold tracking-tight leading-[0.85] "
        initial="hidden"
        whileInView="reveal"
        transition={{ staggerChildren: 0.08 }}
      >
        {textWords.map((word, index) => (
          <motion.span
            key={`${word}-${index}`} // Ensure unique key using both word and index
            transition={{ duration: 1 }}
            variants={charVariants}
          >
            {word}
          </motion.span>
        ))}
      </motion.p>
    </>
  );
};

export default QuestionTextReveal;
