import { useState, useEffect } from "react";
import { FormInput, Header, SectionNotes } from "./components";
import style from "./styles/app.module.css";
import { getData } from "./utils";

function App() {
  const [query, setQuery] = useState("");
  const [searchNotes, setSearchNotes] = useState([]);
  const [notes, setNotes] = useState(getData());

  const activeNotes = (searchNotes || notes).filter((note) => !note.archived);
  const archivedNotes = (searchNotes || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchNotes(notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())));
  }, [query, notes]);

  return (
    <>
      <Header search={query} updateQuery={setQuery} updateNotes={setNotes} />
      <main className={style.main}>
        <FormInput updateNotes={setNotes} />
        <SectionNotes label='Active Notes' notes={activeNotes} setNotes={setNotes} />
        <SectionNotes label='Archived Notes' notes={archivedNotes} setNotes={setNotes} />
      </main>
    </>
  );
}

export default App;
