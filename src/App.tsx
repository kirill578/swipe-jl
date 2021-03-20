/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { Box, Tab, Tabs, TextField, Button } from "@material-ui/core";
import { Person, usePeople, useVote } from "./useApi";
import { PeopleSwiper } from "./PeopleSwiper";
import CircularProgress from "@material-ui/core/CircularProgress";
import { positiveIcon } from "./emoji";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SwipeableViews from 'react-swipeable-views';
import Icon from './svgLogo';

const theme = createMuiTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

const Table = ({ people, onSelect }: { people: Person[], onSelect: (id: string) => void }) => {
  return (
    <Box
      position="relative"
      marginTop="5px"
      display="flex"
      flexDirection="column"
      alignItems="stretch"
      paddingTop="20px"
      style={{inset: 0}}
    >
      {people.map((person) => {
        const score = Math.floor(
          person.n + person.y === 0 ? 0 : 100 * person.y / (person.n + person.y)
        );
        return (
          <Box
          onClick={() => onSelect(person.id)}
          key={person.id}
          borderRadius={20}
          marginBottom="20px"
          marginX="20px"
          paddingX="20px"
          paddingY="10px"
          style={{
            backgroundColor: "white",
            color: "rgb(91, 155, 189)",
            fontWeight: "bolder",
            fontSize: "20px",
          }}
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <ChevronLeft />
          <Box>
            {score}
          </Box>
          <Box marginLeft="3px" marginRight="10px">
            %
          </Box>
          <Box marginTop="2px">{positiveIcon}</Box>
          <Box flex={1} />
          <Box marginLeft="3px" marginRight="10px">
            {person.name}
          </Box>
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

  const [tab, setTab] = React.useState(0);
  const [searchText, setSearchText] = React.useState('');

  const idFromUrl = new URLSearchParams(window.location.search).get('id');
  const [targetId, setTargetId] = React.useState<undefined | string>(idFromUrl !== null ? idFromUrl : undefined);

  const handleChange = (event: any, newValue: number) => {
    setTab(newValue);
  };

  const handleTextChange = (event: any) => {
    setSearchText(event.target.value);
  };

  const [people, setPeople] = React.useState<Person[] | undefined>(undefined);

  React.useEffect(() => {
    const pastVotes: string[] = JSON.parse(
      window.localStorage.votedIds || "[]"
    );
    if (peopleLoaded) {
      let all = peopleLoaded.filter(({ id }) => id !== targetId && !pastVotes.includes(id));
      if(targetId) {
        const targetPerson = peopleLoaded.find(({id}) => id === targetId);
        if (targetPerson) {
          all.push(targetPerson);
          all = all.reverse();
        }
      }
      setTab(0);
      setPeople(all);
      setVoted(peopleLoaded.filter(({ id }) => pastVotes.includes(id)));
    }
  }, [peopleLoaded, targetId]);

  const onVote = (person: Person, yes: boolean) => {
    (yes ? voteYes : voteNo)(person.id).then((updated: Person) => {
      setVoted((list) =>
        list.map((person: Person) =>
          person.id === updated.id ? updated : person
        )
      );
      window.localStorage.votedIds = JSON.stringify([
        person.id,
        ...JSON.parse(window.localStorage.votedIds || "[]"),
      ]);
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
      display="flex"
      position="absolute"
      flexDirection="column"
      style={{ inset: 0, background: "#dbe9f0" }}
    >
      <Box
        height="60px"
        justifySelf="stretch"
        style={{ background: "#5b9bbd" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        {tab === 0 && <Icon />}
        {tab === 1 && <ThemeProvider theme={theme}>
          <Box alignSelf="stretch" dir="rtl" color="white" display="flex" alignItems="stretch" flexDirection="row" p="10px">
            <SearchIcon />
            <Box width="20px"></Box>
            <TextField style={{flex: 1}} id="standard-basic" onChange={handleTextChange} value={searchText} autoFocus />  
          </Box>
        </ThemeProvider>}
      </Box>
      <Box position="relative" flex={1} display="flex" flexDirection="column" style={{overflowY: 'scroll'}}>
        {isLoading && (
          <Box paddingTop="30px" alignSelf="center">
            <CircularProgress />
          </Box>
        )}
        {isError && <Box>error</Box>}
        {people && <SwipeableViews containerStyle={{ height: '100%'}} index={tab} disabled={true}>
          <PeopleSwiper key={targetId} people={people} onSelect={onVote} />
          <Table onSelect={(id) => setTargetId(id)} people={peopleLoaded!.filter(({name}) => name.includes(searchText.trim()))} />
        </SwipeableViews>}
      </Box>
      <Box
        justifySelf="stretch"
        style={{ background: "#5b9bbd" }}
      >
        <ThemeProvider theme={theme}>
          <Tabs
            value={tab}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            aria-label="icon tabs example"
          >
            <Tab icon={<FavoriteIcon />} aria-label="favorite" />
            <Tab icon={<SearchIcon />} aria-label="search" />
          </Tabs>
        </ThemeProvider>
      </Box>
    </Box>
  );
};
