export default function CommandHints() {
  const hints = [
    '# This terminal runs best on a real keyboard.',
  ]

  return (
    <div className="pl-4 pt-4 pb-4">
      <div>
        {hints.map((hint, idx) => (
          <pre key={idx} className="text-terminal-comment text-sm mb-0 m-0 py-1">
            {hint}
          </pre>
        ))}
      </div>
    </div>
  )
}