export function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-paper py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-center text-[13px] text-ink-muted md:flex-row md:text-left md:px-8">
        <p>© {new Date().getFullYear()} Dr. Stephen Akintayo. All rights reserved.</p>
        <p className="max-w-md md:text-right">
          Educational session. No investment, legal, or tax advice.
        </p>
      </div>
    </footer>
  );
}
