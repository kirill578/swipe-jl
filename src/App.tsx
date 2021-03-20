/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { Box, Tab, Tabs, TextField } from "@material-ui/core";
import { Person, usePeople, useVote } from "./useApi";
import { PeopleSwiper } from "./PeopleSwiper";
import CircularProgress from "@material-ui/core/CircularProgress";
import { LinearProgress } from "@material-ui/core";
import { negativeIcon, positiveIcon } from "./emoji";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
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

const Table = ({ people }: { people: Person[] }) => {
  return (
    <Box
      position="relative"
      marginTop="5px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      style={{inset: 0}}
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
            <Box marginTop="10px">{negativeIcon}</Box>
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
            <Box marginTop="10px">{positiveIcon}</Box>
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
      setPeople(peopleLoaded.filter(({ id }) => !pastVotes.includes(id)));
      setVoted(peopleLoaded.filter(({ id }) => pastVotes.includes(id)));
    }
  }, [peopleLoaded]);

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
          <PeopleSwiper people={people} onSelect={onVote} />
          <Table people={peopleLoaded!.filter(({name}) => name.includes(searchText.trim()))} />
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
