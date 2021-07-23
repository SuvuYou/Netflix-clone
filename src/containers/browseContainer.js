import React, { useContext, useState, useEffect, useRef } from "react";
import Fuse from "fuse.js";
import SelectProfileContainer from "../containers/selectProfile";
import FooterContainer from "../containers/footer";
import { FirebaseContext } from "../context/firebase";
import { Card, Header, Loading, Player } from "../components";
import logo from "../logo.svg";
import * as ROUTES from "../routes";

export default function BrowseContainer({ slides }) {
  const { firebase } = useContext(FirebaseContext);

  const [category, setCategory] = useState("series");
  const [searchTerm, setSearchTerm] = useState("");
  const user = firebase.auth().currentUser || {};
  const [profile, setProfile] = useState({});
  const [loading, setloading] = useState(true);
  const [slideRows, setSlideRows] = useState([]);

  const isInitialMount = useRef(true);

  useEffect(() => {
    setSlideRows(slides[category]);
    console.log(slideRows);
  }, [slides, category]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      console.log(profile);
      setTimeout(() => {
        setloading(false);
      }, 1000);
    }
  }, [profile.displayName]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.description", "data.title", "data.genre"],
    });

    const result = fuse.search(searchTerm).map(({ item }) => item);

    if (setSlideRows.length > 0 && searchTerm.length > 3 && result.length > 0) {
      console.log("asgszd");
      setSlideRows(result);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.Release />}
      <Header dontShowOnSmallScreen src="/images/misc/joker1.jpg">
        <Header.Inner>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
            <Header.TextLink
              active={category === "series" ? true : false}
              onClick={() => {
                setCategory("series");
              }}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "films" ? true : false}
              onClick={() => {
                setCategory("films");
              }}
            >
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextSmall>{user.displayName}</Header.TextSmall>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink
                    onClick={() => {
                      firebase.auth().signOut();
                    }}
                  >
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Inner>

        <Header.Feature>
          <Header.Text>Watch Joker Now</Header.Text>
          <Header.TextSmall>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.TextSmall>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.dovId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/netflix-intro.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
