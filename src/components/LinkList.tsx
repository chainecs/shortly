import React, { useState } from "react";
import "../css/LinkList.css";

interface Data {
  data: {
    id: number;
    code: string;
    fullLink: string;
    shortLink: string;
  }[];
}

const LinkList: React.FC<Data> = (props) => {
  const [copied, setCopied] = useState<{ [id: number]: boolean }>({});

  const handleCopy = async (text: string, id: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied({ ...copied, [id]: true });
    } catch (err) {
      console.log("Failed to copy text: ", err);
    }
  };

  return (
    <div className="link-list-container">
      <div>
        {props.data.map((dat, i) => {
          const { id, fullLink, shortLink } = dat;
          return (
            <div key={id}>
              <div className="link-list-box">
                <div className="full-link">{fullLink}</div>
                <div className="short-link">{shortLink}</div>
                <div className="button-mobile-box">
                  <button
                    className={copied[id] ? "copied-btn" : "copy-btn"}
                    onClick={() => {
                      handleCopy(shortLink, id);
                    }}
                  >
                    {copied[id] ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LinkList;
