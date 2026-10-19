const socialLinks = ["Discord", "Instagram", "Twitter", "YouTube", "TikTok"];

const footerColumns = [
  ["Support", "FAQ", "Content Creators", "Press"],
  ["Privacy Policy", "Terms of Service", "Fan Art & Ideas Policy"],
  ["Contact Us", "Careers", "Accessibility"],
];

export function SiteFooter() {
  return (
    <footer id="community" className="relative z-10 px-5 pb-10 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#07131f]/85 p-6 backdrop-blur sm:p-8 lg:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <div className="font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-[-0.04em] text-white">
              Korean server community
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/62">
              A polished single-page recreation built with placeholders, componentized sections, and a stronger visual hierarchy.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            <div>
              <div className="text-xs font-semibold tracking-[0.28em] text-cyan-200 uppercase">Social</div>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((label) => (
                  <a
                    key={label}
                    href="#top"
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {footerColumns.map((column) => (
              <div key={column[0]} className="space-y-2 text-sm text-white/72">
                {column.map((item) => (
                  <div key={item} className="transition hover:text-white">
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/48 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Uplift Games LLC. All Rights Reserved.</p>
          <p>Korea Server Operation</p>
        </div>
      </div>
    </footer>
  );
}