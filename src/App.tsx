/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { Box } from "@material-ui/core";
import { Person, usePeople, useVote } from './useApi';
import { PeopleSwiper } from './PeopleSwiper';

export const App = () => {
  const { people, isError, isLoading } = usePeople();
  const { voteYes, voteNo } = useVote();

  return (
    <Box position="relative" width="100%" height="100%" p="10px">
      {isLoading && <Box>Loading</Box>}
      {isError && <Box>error</Box>}
      {people && <PeopleSwiper people={people} onSelect={(person, b) => b ? voteYes(person.id) : voteNo(person.id) }/>}
    </Box>
  );
};

