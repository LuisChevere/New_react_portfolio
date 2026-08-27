import { useState } from "react";

function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        event.target.reset();
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setSending(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="relative w-full max-w-lg border border-[#D8B56A]/40 bg-[#0A0A0A] p-8">
        <button
          onClick={onClose}
          className="absolute right-5 top-4 text-2xl text-white hover:text-[#D8B56A]"
        >
          ×
        </button>

        {submitted ? (
          <div className="py-12 text-center">
            <h2 className="mb-4 font-['Cormorant_Garamond'] text-4xl text-white">
              MESSAGE SENT
            </h2>

            <p className="mb-8 text-sm text-gray-400">
              Thank you for reaching out. I'll get back to you as soon as
              possible.
            </p>

            <button
              onClick={onClose}
              className="bg-[#D8B56A] px-6 py-3 text-sm font-semibold tracking-widest text-black transition hover:bg-white"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <>
            <p className="mb-2 text-sm tracking-[0.2em] text-[#D8B56A]">
              GET IN TOUCH
            </p>

            <h2 className="mb-3 font-['Cormorant_Garamond'] text-4xl text-white">
              LET'S WORK TOGETHER
            </h2>

            <p className="mb-8 text-sm text-gray-400">
              Have a project in mind? Let's talk.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="hidden"
                name="access_key"
                value="96b23076-71fd-4984-94d3-0c970fdf7019"
              />

              <input
                type="hidden"
                name="subject"
                value="New Portfolio Contact"
              />

              <div>
                <label className="mb-2 block text-xs tracking-widest text-gray-400">
                  NAME
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-white/20 bg-transparent px-4 py-3 text-white outline-none focus:border-[#D8B56A]"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs tracking-widest text-gray-400">
                  EMAIL
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-white/20 bg-transparent px-4 py-3 text-white outline-none focus:border-[#D8B56A]"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs tracking-widest text-gray-400">
                  MESSAGE
                </label>

                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full resize-none border border-white/20 bg-transparent px-4 py-3 text-white outline-none focus:border-[#D8B56A]"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-[#D8B56A] px-6 py-3 text-sm font-semibold tracking-widest text-black transition hover:bg-white disabled:opacity-50"
              >
                {sending ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default ContactModal;
