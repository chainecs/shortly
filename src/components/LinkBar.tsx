import React, { useState } from "react";
import "../css/LinkBar.css";
import LinkList from "./LinkList";
import axios from "axios";

interface Data {
  id: number;
  code: string;
  fullLink: string;
  shortLink: string;
}

const LinkBar = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [linkData, setLinkData] = useState<Data[]>([]);
  const [barStyle, setBarStyle] = useState<string>("form");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const urlRegex =
      /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+\.){1,3}[a-zA-Z]{2,4}(\/[a-zA-Z0-9]+)*\/?$/;
    const isValidUrl = urlRegex.test(inputValue);
    if (inputValue) {
      if (isValidUrl) {
        axios
          .post(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
          .then(function (response) {
            const id: number = linkData.length;
            const code: string = response.data.result.code;
            const fullLink: string = response.data.result.original_link;
            const shortLink: string = response.data.result.short_link;
            setLinkData([...linkData, { id, code, fullLink, shortLink }]);
            setInputValue("");
            setErrorMessage("");
            setBarStyle("form");
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        setErrorMessage("Please enter valid link");
        setBarStyle("form-error");
      }
    } else {
      setErrorMessage("Please add a link");
      setBarStyle("form-error");
    }
  };
  return (
    <div>
      <div className="link-bar-background">
        <div className="link-bar-container">
          <div
            className="link-bar-box"
            style={{ backgroundColor: "hsl(257, 14%, 25%)" }}
          >
            <form onSubmit={handleSubmit} className="form-container">
              <div className="form-box">
                <input
                  className={barStyle}
                  value={inputValue}
                  placeholder="Shorten a link here..."
                  onChange={(e) => setInputValue(e.currentTarget.value)}
                />
                <div className="error-box">
                  <div className="error-msg">&nbsp;{errorMessage}&nbsp;</div>
                </div>
              </div>
              <button className="shorten-button" type="submit">
                Shorten it!
              </button>
            </form>
          </div>
        </div>
      </div>
      <LinkList data={linkData} />
    </div>
  );
};

export default LinkBar;
