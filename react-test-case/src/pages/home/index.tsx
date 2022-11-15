import { Fragment, useState, useEffect, useCallback } from "react";
import { Button, Input } from "antd";
import { Col, Divider, Row } from "antd";
import { Typography } from "antd";
import axios from "axios";
import moment from "moment";

const { Paragraph } = Typography;
const Home = () => {
  const [data, setData] = useState<any[]>([]);
  const [key, setKey] = useState<String>("");
  const [keyword, setKeyword] = useState<String>("");
  const [urlPath, setUrlPath] = useState("");

  const handleChange = (e: String) => {
    setKey(e);
  };
  
  const handleKeyword = () => {
    setKeyword(key);
  };

  const getData = useCallback(async () => {
    setUrlPath(keyword.length !== 0 ? `https://newsapi.org/v2/everything?q=${keyword}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}` : `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`);
    await axios
      .get(urlPath)
      .then((e) => setData(e.data.articles))
      .catch((err) => console.log(err));
  }, [keyword,urlPath]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Fragment>
      <Input placeholder="Search Keyword" onChange={(e) => handleChange(e.target.value)} style={{ width: 200, margin: "20px 0 0 0" }} />
      <Button type="default" onClick={() => handleKeyword()}>
        Search
      </Button>

      <Divider plain>News</Divider>
      {data?.map((item, index) => (
        <Fragment key={index}>
          <Row gutter={32}>
            <Col span={6}>
              <div>
                <img referrerPolicy="no-referrer" style={{ maxHeight: "100%", maxWidth: "100%" }} src={item.urlToImage ? item.urlToImage : require("../../assets/images/no_img.png")} alt="" />
              </div>
            </Col>
            <Col span={18}>
              <div>
                <h1>{item?.title}</h1>
                <h5>
                  {item?.author} / {moment(item?.publishedAt).toDate().toString()}
                </h5>

                <Paragraph
                  style={{ margin: "30px 0px 30px 0px" }}
                  ellipsis={{
                    expandable: true,
                  }}
                >
                  {item?.content}
                </Paragraph>
                <p>
                  Source : {item?.source?.name} / {item?.url}
                </p>
              </div>
            </Col>
          </Row>
          <Divider />
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Home;
