import { useEffect } from "react";
import TabContainer from "./body/TabContent";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "./body/Slider";
import NewsList from "./body/NewsList";
import Videos from "./Videos";
import { useSelector, useDispatch } from "react-redux";
import getNewsFromServer from "../store/article-actions";
import getVideosFromServer from "../store/videos-action";

function Body() {
  const articles = useSelector((state) => state.news.data);
  const videos = useSelector((state) => state.videos.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsFromServer());
    dispatch(getVideosFromServer());
  }, [dispatch]);

  return (
    <div id="body">
      <Container>
        <Row className="border-bottom py-2 border-2">
          <Col className="border-end px-2 border-2" lg={6} md={12}>
            <Slider />
          </Col>
          <Col lg={6} md={12}>
            <TabContainer />
          </Col>
        </Row>

        <Row className="border-bottom p-2">
          <p className="display-6 text-primary">Latest News</p>
          {articles.length > 0 &&
            articles.slice(0).reverse().map((article) => {
              return (
                <Col lg={3} className="my-2">
                  <NewsList
                    key={article.id}
                    id={article.id}
                    image={article.image}
                    title={article.title}
                    article={article.article}
                  />
                </Col>
              );
            })}
        </Row>

        <Row>
          <Container>
            <p className="display-6 text-primary">Videos</p>
            {videos.slice(0).reverse().map((video) => (
              <Videos videoSource={video.youtubr_link} />
            ))}
          </Container>
        </Row>
      </Container>
    </div>
  );
}

export default Body;
