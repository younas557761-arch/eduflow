export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1e293b] border border-[#334155] rounded-xl w-full max-w-lg p-6 space-y-4">
        <div className="flex justify-between items-center border-b border-[#334155] pb-3">
          <h3 className="font-semibold text-white">{title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white">✕</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
