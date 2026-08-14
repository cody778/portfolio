export default function TerminalFrame({ children }) {
  return (
    <section
      className="
        w-full
        border-none
        rounded-none
        bg-terminal-frame
        shadow-none
        overflow-auto
        margin-0
        padding-0
      "
      aria-label="Portfolio terminal"
    >
      {children}
    </section>
  )
}