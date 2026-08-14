export default function Welcome() {
  return (
    <div>
      <pre
        className="
          text-sm
          pl-4
          pt-2
          pb-0
          whitespace-pre-wrap
          break-words
          m-0
        "
        style={{color: '#c8c8c8'}}
      >
        {`Welcome to my terminal portfolio`}
      </pre>
      <pre
        className="
          text-sm
          pl-4
          pt-2
          pb-0
          whitespace-pre-wrap
          break-words
          m-0
          opacity-60
        "
        style={{color: '#6a6a6a'}}
      >
        {`__________________________________`}
      </pre>
      <div className="text-sm pl-4 pt-3 pb-0 m-0 leading-6">
        <div style={{color: '#c8c8c8'}}>
          Type <span style={{color: '#7fb342'}}>'about'</span> to learn more about me.
        </div>
        <div style={{color: '#c8c8c8'}}>
          Type <span style={{color: '#7fb342'}}>'help'</span> to see all available commands.
        </div>
      </div>
    </div>
  )
}