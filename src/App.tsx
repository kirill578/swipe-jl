/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { Box } from "@material-ui/core";
import { Person, usePeople, useVote } from './useApi';
import { PeopleSwiper } from './PeopleSwiper';

const Table = ({ people } : {people: Person[]}) => <Box marginTop="250px" display="flex" flexDirection="column" alignItems="center">
{people.map(person => (<Box  key={person.id} display="flex" flexDirection="row" marginTop="5px">
  <Box>{person.y} = 🦎</Box>
  <Box width="20px"/>
  <Box>{person.n} = ✨</Box>
  <Box width="20px"/>
  <Box>{person.name}</Box>
</Box>))}
</Box>

export const App = () => {
  const { people, isError, isLoading } = usePeople();
  // todo filter who you already voted for
  const { voteYes, voteNo } = useVote();
  const [voted, setVoted] = React.useState<Person[]>([]);

  const onVote = (person: Person, yes: boolean) => {
    (yes ? voteYes : voteNo)(person.id).then((updated: Person) => {
      setVoted(list => list.map((person: Person) => person.id === updated.id ? updated : person));
    });
    setVoted(x => [{
      ...person,
      y: person.y + (yes ? 1 : 0),
      n: person.n + (!yes ? 1 : 0)
    }, ...x]);
    // todo write to local host
  }

  return (
    <Box position="relative" width="100%" height="100%" p="10px">
      {isLoading && <Box>Loading</Box>}
      {isError && <Box>error</Box>}
      {people && <PeopleSwiper people={people} onSelect={onVote}/>}
      <Table people={voted} />
    </Box>
  );
};