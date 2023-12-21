import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { FiPlus, FiSearch } from "react-icons/fi";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Home() {
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);

    function handleSelectedTag(tagName){
        const alreadySelected = selectedTags.includes(tagName)
        if (alreadySelected){
            const filteredTags = selectedTags.filter(tag => tag !== tagName)
            setSelectedTags(filteredTags)
        } else {
            setSelectedTags(prevState => [...prevState, tagName]);
        }
    }

    useEffect(() => {
        async function fetchTags(){
            const response = await api.get("/tags");
            setTags(response.data);
        }
        fetchTags()
    },[]);

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${selectedTags}`);
            setNotes(response.data);
        }
        fetchNotes();
    }, [selectedTags, search]);

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            onClick={() => handleSelectedTag("all")}
            $isactive={selectedTags.length === 0}
          />
        </li>
        {tags &&
          tags.map((tag) => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleSelectedTag(tag.name)}
                $isactive={selectedTags.includes(tag.name)}
              />
            </li>
          ))}
      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          onChange={() => setSearch(e.target.value)}
          icon={FiSearch}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {
            notes.map(note => (
            <Note
                key={String(note.id)}
                data={note}
            />
            ))
          }
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
