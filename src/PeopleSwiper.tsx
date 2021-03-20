/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { Box } from "@material-ui/core";
import TinderCard from "react-tinder-card";
import { Person } from "./useApi";
import Fab from "@material-ui/core/Fab";
import { negativeIcon, positiveIcon } from "./emoji";
import ShareIcon from "@material-ui/icons/Share";

const PersonItem = (props: Person) => (
  <Box
    position="relative"
    width="90vw"
    maxWidth="460px"
    height="calc(100vh - 230px)"
    boxShadow="0px 0px 60px 0px rgba(0,0,0,0.30)"
    borderRadius={20}
    style={{
      backgroundColor: "white",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    display="flex"
    flexDirection="column"
    justifyContent="stretch"
  >
    <Box
      position="relative"
      borderRadius={20}
      marginTop="16px"
      marginLeft="16px"
      marginRight="16px"
      height="100%"
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
        position="absolute"
        bottom="20px"
        left="20px"
        borderRadius={20}
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
        <Box>
          {Math.floor(
            100 * (props.n + props.y === 0 ? 0 : props.y / (props.n + props.y))
          )}
        </Box>
        <Box marginLeft="3px" marginRight="10px">
          %
        </Box>
        <Box marginTop="2px">{positiveIcon}</Box>
      </Box>
    </Box>
    <Box flex={1}></Box>
    <Box
      p="16px"
      style={{
        color: "rgb(91, 155, 189)",
        fontWeight: "bolder",
      }}
    >
      <Box style={{ fontSize: "2em", textAlign: "right" }}>{props.name}</Box>
      <Box style={{ fontSize: "1em", textAlign: "right" }}>{props.party}</Box>
    </Box>
    <Box height="25px" />
  </Box>
);

type PeopleSwiperProps = {
  people: Person[];
  onSelect: (person: Person, b: boolean) => void;
};

const bufferSize = 3;

export const PeopleSwiper = ({ people, onSelect }: PeopleSwiperProps) => {
  const [counter, setCounter] = React.useState(0);

  const childRefs = React.useMemo(
    () =>
      Array(people.length)
        .fill(0)
        .map((i) => React.createRef<any>()),
    [people.length]
  );

  return (
    <Box flex="1" display="flex" flexDirection="column" paddingTop="20px">
      <Box display="flex" flexDirection="row" height="calc(100vh - 230px)">
        <Box flex={3}>
          {people &&
            people
              .slice(counter, counter + bufferSize)
              .reverse()
              .map((person, index) => {
                return (
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
                      ref={childRefs[counter + bufferSize - 1 - index]}
                      flickOnSwipe={true}
                      key={person.id}
                      preventSwipe={["up", "down"]}
                      onCardLeftScreen={(direction) => {
                        onSelect(person, direction === "right");
                        setCounter((x) => x + 1);
                      }}
                    >
                      <PersonItem {...person} />
                    </TinderCard>
                  </Box>
                );
              })}
        </Box>
      </Box>
      <Box
        paddingX="25px"
        width="80vw"
        maxWidth="300px"
        alignSelf="center"
        display="flex"
        flexDirection="row"
        marginTop="-30px"
        justifyContent="space-between"
      >
        <Box>
          <Fab
            style={{ background: "#5b9bbd", fontSize: 35 }}
            onClick={() => childRefs[counter].current.swipe("left")}
          >
            {negativeIcon}
          </Fab>
        </Box>
        <Box>
          <Fab
            style={{ background: "#5b9bbd", fontSize: 40, color: "white" }}
            onClick={() => {
              window.open(
                "https://wa.me/?text=" +
                  encodeURIComponent(window.location.protocol + '//' + window.location.host + '?id=' + people[counter].id),
                "_blank"
              );
            }}
          >
            <ShareIcon width="35px" height="35px" />
          </Fab>
        </Box>
        <Box>
          <Fab
            style={{ background: "#5b9bbd", fontSize: 35 }}
            onClick={() => childRefs[counter].current.swipe("right")}
          >
            {positiveIcon}
          </Fab>
        </Box>
      </Box>
    </Box>
  );
};
