import * as motion from "motion/react-client";

interface Props {
  children: React.ReactNode;
}

export default function Modal({ children }: Props) {
  return (
    <div className="z-50 backdrop-blur-md fixed inset-0 bg-gray-500/50 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <motion.div
        animate={{ translateY: 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileInView={{ opacity: 1 }}
        className="opacity-0 p-4 border w-96 shadow-lg rounded-md bg-background"
      >
        {children}
      </motion.div>
    </div>
  );
}
