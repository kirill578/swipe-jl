/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { Box } from "@material-ui/core";
import { Person, usePeople, useVote } from "./useApi";
import { PeopleSwiper } from "./PeopleSwiper";
import { LinearProgress } from "@material-ui/core";

const Table = ({ people }: { people: Person[] }) => {
  return (
    <Box
      marginTop="5px"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {people.map((person) => {
        const score =
          person.n + person.y === 0 ? 0 : person.y / (person.n + person.y);
        return (
          <Box
            key={person.id}
            display="flex"
            flexDirection="row"
            marginTop="5px"
          >
            <Box marginTop="10px">✨</Box>
            <Box width="4px" />
            <Box
              key={person.id}
              display="flex"
              flexDirection="column"
              marginTop="5px"
            >
              <Box textAlign="center">{person.name}</Box>
              <Box width="200px" height="15px" marginTop="3px">
                <LinearProgress variant="determinate" value={score * 100} />
              </Box>
            </Box>
            <Box width="4px" />
            <Box marginTop="10px">🦎</Box>
          </Box>
        );
      })}
    </Box>
  );
};

export const App = () => {
  const { people: peopleLoaded, isError, isLoading } = usePeople();
  // todo filter who you already voted for
  const { voteYes, voteNo } = useVote();
  const [voted, setVoted] = React.useState<Person[]>([]);


  const [people, setPeople] = React.useState<Person[] | undefined>(undefined);

  React.useEffect(() => {
    const pastVotes: string[] = JSON.parse(window.localStorage.votedIds || '[]');
    if (peopleLoaded) {
      setPeople(peopleLoaded.filter(({id}) => !pastVotes.includes(id)));
      setVoted(peopleLoaded.filter(({id}) => pastVotes.includes(id)));
    }
  }, [peopleLoaded]);

  const onVote = (person: Person, yes: boolean) => {
    (yes ? voteYes : voteNo)(person.id).then((updated: Person) => {
      setVoted((list) =>
        list.map((person: Person) =>
          person.id === updated.id ? updated : person
        )
      );
      window.localStorage.votedIds = JSON.stringify([person.id, ...(JSON.parse(window.localStorage.votedIds || '[]'))])
    });
    setVoted((x) => [
      {
        ...person,
        y: person.y + (yes ? 1 : 0),
        n: person.n + (!yes ? 1 : 0),
      },
      ...x,
    ]);
    // todo write to local host
  };

  return (
    <Box
      position="absolute"
      width="100%"
      minHeight="100%"
      style={{ background: "#b8cff5" }}
    >
      <Box
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          background:
            "url(https://upload.wikimedia.org/wikipedia/commons/4/49/Star_of_David.svg)",
          backgroundSize: "20px 20px",
          backgroundRepeat: "repeat",
          opacity: 0.03,
        }}
      />
      <Box display="flex" flexDirection="column">
        {isLoading && <Box>Loading</Box>}
        {isError && <Box>error</Box>}
        {people && <PeopleSwiper people={people} onSelect={onVote} />}
        <Table people={voted} />
      </Box>
    </Box>
  );
};
