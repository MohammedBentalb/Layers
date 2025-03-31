import { AnimatePresence, motion } from "framer-motion";

export default function Answers({
  selectedFAQs,
  index,
  answer,
}: {
  selectedFAQs: number;
  index: number;
  answer: string;
}) {
  return (
    <AnimatePresence>
      {selectedFAQs === index && (
        <motion.div
          className="overflow-hidden"
          initial={{ height: 0, marginTop: 0 }}
          animate={{ height: "auto", marginTop: 24 }}
          exit={{ height: 0, marginTop: 0 }}
        >
          <p className="text-white/50">{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
