import React from "react";
import { Jumbotron } from "../components/";
import JumboData from "../fixtures/jumbo.json";

export default function JumbotronContainer() {
  return (
    <div className="App">
      <Jumbotron.Container>
        {JumboData.map((item) => {
          return (
            <Jumbotron key={item.id} direction={item.direction}>
              <Jumbotron.ChildrenBox>
                <Jumbotron.Title>{item.title}</Jumbotron.Title>
                <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
              </Jumbotron.ChildrenBox>
              <Jumbotron.ChildrenBox>
                <Jumbotron.Image src={item.image} alt={item.alt} />
              </Jumbotron.ChildrenBox>
            </Jumbotron>
          );
        })}
      </Jumbotron.Container>
    </div>
  );
}
