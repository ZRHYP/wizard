import splitStringUsingRegex from '../utils/splitStringUsingRegex';
import { motion } from 'motion/react';

// Text Data

const text =
  'Which flavour profile do you usually prefer or want to explore next?';

const charVariants = {
  hidden: { opacity: 0, color: '#1e293b' },
  reveal: { opacity: 1, color: '#e2e8f0' },
};

// Function of Component
const QuestionTextReveal = () => {
  const textWords = splitStringUsingRegex(text); // Now splitting by words
  return (
    <>
      <motion.p
        className="text-3xl font-extrabold "
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
