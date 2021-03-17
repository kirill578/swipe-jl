/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { Box } from "@material-ui/core";
import TinderCard from "react-tinder-card";
import { Person } from "./useApi";

const PersonItem = (props: Person) => (
  <Box
    position="relative"
    width="80vw"
    maxWidth="260px"
    height="300px"
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
        background: "white",
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
  return (
    <Box display="flex" flexDirection="row" paddingTop="50px">
      <Box
        flex={1}
        paddingTop="70px"
        style={{
          WebkitUserSelect: "none",
          fontSize: "100px",
          textAlign: "right",
        }}
      >
        ✨
      </Box>
      <Box flex={3}>
        {people &&
          people
            .slice(counter, counter + 2)
            .reverse()
            .map((person) => (
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
                  key={person.id}
                  preventSwipe={["up", "down"]}
                  onSwipe={(direction) =>
                    onSelect(person, direction === "left")
                  }
                  onCardLeftScreen={() => {
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
        🦎
      </Box>
    </Box>
  );
};
