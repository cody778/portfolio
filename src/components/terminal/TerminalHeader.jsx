export default function TerminalHeader({ view }) {
  const viewNames = {
    welcome: 'welcome',
    about: 'about',
    projects: 'projects',
    contact: 'contact',
  }

  return (
    <header className="
      text-sm
      border-none
      pl-4
      pt-4
      pb-0
      m-0
      font-normal
    ">
      <span style={{color: '#c8c8c8'}}>
        guest
      </span>
      <span style={{color: '#ff6b7a'}}>
        @
      </span>
      <span style={{color: '#7fb342'}}>
        teofil-corad-portfolio
      </span>
      <span style={{color: '#ff6b7a'}}>
        :~$
      </span>
      <span style={{color: '#ff6b7a'}} className="ml-1">
        {viewNames[view]}
      </span>
    </header>
  )
}
