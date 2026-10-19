const faqs = [
  {
    question: "How do I connect to a Korean server?",
    answer:
      "Use the nearest regional route, then pick a server card that matches your preferred play style. The flow is intentionally simple and direct.",
  },
  {
    question: "Can I play with international friends?",
    answer:
      "Yes. The page keeps the same community-first framing, but the copy here is original and the answers are placeholder text tailored to the clone.",
  },
  {
    question: "Will events and updates be available here?",
    answer:
      "The recreated layout includes an FAQ block that mirrors the original page structure while using neutral copy and no copied assets.",
  },
  {
    question: "How do I change the language to Korean?",
    answer:
      "This demo does not ship localization logic. The section exists to preserve the same content rhythm and visual pacing as the reference site.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.22)] backdrop-blur sm:p-8 lg:p-10">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.28em] text-cyan-200 uppercase">Knowledge base</div>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base leading-8 text-white/68 sm:text-lg">
            This section mirrors the original information hierarchy with collapsible answers and plenty of breathing room.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-5 transition open:border-cyan-300/20 open:bg-slate-950/55"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-white [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white/70 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/66 sm:text-base">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}