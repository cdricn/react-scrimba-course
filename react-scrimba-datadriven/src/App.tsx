import './App.css'
import Header from './components/Header'
//import Entry from './components/Entry'
import EntryObjScrim from './components/EntryObjScrim'
import entries from './data'
import type { EntryScrimData } from './components/interface'

function App() {

  const entriesArray = entries.map((entry)=>{

    const entryData: EntryScrimData = {
      id: entry.id,
      image: entry.img,
      location: entry.country,
      link: entry.googleMapsLink,
      title: entry.title,
      date: entry.dates,
      content: entry.text
    }

    return (
      /*
      <Entry 
        key={entry.id}
        image={entry.img}
        location={entry.country}
        link={entry.googleMapsLink}
        title={entry.title}
        date={entry.dates}
        content={entry.text}
      />
      */
      <EntryObjScrim 
        key={entry.id}
        data={entryData}
      />
     
    )
  })

  return (
    <>
      <Header />
      <main>
        {entriesArray}
      </main>
    </>
  )
}

export default App
