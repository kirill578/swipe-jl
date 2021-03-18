/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { Box, Button } from "@material-ui/core";
import TinderCard from "react-tinder-card";
import { Person } from "./useApi";
import { negativeIcon, positiveIcon } from './emoji';

const PersonItem = (props: Person) => (
  <Box
    position="relative"
    width="90vw"
    maxWidth="460px"
    height="500px"
    boxShadow="0px 0px 60px 0px rgba(0,0,0,0.30)"
    borderRadius={20}
    style={{
      background: `url(${props.imgsrc})`,
      backgroundColor: "white",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    display="flex"
    flexDirection="column-reverse"
  >
    <Box
      p="10px"
      style={{
        color: 'white',
        background: "rgba(0,0,0, 0.5)",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}
    >
      <Box style={{ fontSize: "2em", textAlign: "right" }}>{props.name}</Box>
      <Box style={{ fontSize: "1em", textAlign: "right" }}>{props.party}</Box>
    </Box>
  </Box>
);

type PeopleSwiperProps = {
  people: Person[];
  onSelect: (person: Person, b: boolean) => void;
};

export const PeopleSwiper = ({ people, onSelect }: PeopleSwiperProps) => {
  const [counter, setCounter] = React.useState(0);

  const childRefs  = React.useMemo(() => Array(people.length).fill(0).map(i => React.createRef<any>()), [people.length])

  return (
    <Box display="flex" flexDirection="column" paddingTop="20px">
      <Box display="flex" flexDirection="row">
        <Box
          height="320px"
          flex={1}
          paddingTop="70px"
          style={{
            WebkitUserSelect: "none",
            fontSize: "100px",
            textAlign: "right",
          }}
        >
          {negativeIcon}
        </Box>
        <Box flex={3}>
          {people &&
            people
              .slice(counter, counter + 2)
              .reverse()
              .map((person, index) => (
                <Box
                  key={person.id}
                  position="absolute"
                  left="50%"
                  style={{
                    WebkitUserSelect: "none",
                    transform: "translateX(-50%)",
                  }}
                >
                  <TinderCard
                    ref={childRefs[counter + 1 - index]}
                    flickOnSwipe={true}
                    key={person.id}
                    preventSwipe={["up", "down"]}
                    onCardLeftScreen={(direction) => {
                      onSelect(person, direction === "right")
                      setCounter((x) => x + 1);
                    }}
                  >
                    <PersonItem {...person} />
                  </TinderCard>
                </Box>
              ))}
        </Box>
        <Box
          flex={1}
          paddingTop="70px"
          style={{
            WebkitUserSelect: "none",
            fontSize: "100px",
            textAlign: "left",
          }}
        >
          {positiveIcon}
        </Box>
      </Box>
      <Box alignSelf="stretch" display="flex" flexDirection="row" paddingTop="120px" marginX="10px" justifyContent="center">
        <Button style={{flex: 1, background: '#5b9bbd', maxWidth: 100, fontSize: 40}} onClick={() => childRefs[counter].current.swipe('left')}>{negativeIcon}</Button>
        <Box width="25px" />
        <Button style={{flex: 1, background: '#5b9bbd', maxWidth: 100, fontSize: 40}} onClick={() => childRefs[counter].current.swipe('right')}>{positiveIcon}</Button>
      </Box>
    </Box>
  );
};
