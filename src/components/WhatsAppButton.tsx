import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-40 flex items-end gap-3">
      {hovered && (
        <div className="mb-2 bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl px-4 py-3 shadow-glass animate-fade-up">
          <p className="font-body text-gray-900 text-sm">Need help? Chat with us!</p>
          <p className="font-body text-gray-600 text-xs mt-1">Available 24/7</p>
        </div>
      )}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-gray-900 shadow-lg hover:scale-110 hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all duration-300 group"
      >
        <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}
