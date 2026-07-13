import { X, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NewVersionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewVersionModal({ isOpen, onClose }: NewVersionModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div id="new-version-modal-wrapper" className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            id="new-version-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            id="new-version-modal-content"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white rounded-3xl p-8 max-w-[420px] w-full shadow-2xl relative z-10 border border-blue-50/50"
          >
            <button
              id="new-version-modal-close-btn"
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-100 shadow-sm text-blue-600 relative">
                <Sparkles className="absolute -top-1 -right-1 text-amber-500 w-5 h-5 animate-bounce" />
                <AlertCircle size={28} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-tight">Em Desenvolvimento</h3>
              <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest leading-tight">Brevemente disponível</p>
            </div>

            <div className="bg-blue-50/40 rounded-2xl p-5 border border-blue-100/50 text-center mb-6">
              <p className="text-gray-700 text-sm font-semibold leading-relaxed">
                Uma nova versão do Dr.IA está em desenvolvimento. Brevemente estará disponível.
              </p>
            </div>

            <button
              id="new-version-modal-confirm-btn"
              onClick={onClose}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm py-4 rounded-2xl transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98] uppercase tracking-wider"
            >
              Entendido
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
