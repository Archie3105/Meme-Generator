import React, { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";

function EditPage() {
  const [params] = useSearchParams();

  console.log(params.get("url"));

  const [count, setCount] = useState(0);

  const memeRef = createRef();

  const addText = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div
        style={{ border: "1px solid", width: "500px" }}
        ref={memeRef}
        className="meme justify-center  m-auto flex flex-col edit mt-5"
      >
        <img className="p-2 m-auto" src={params.get("url")} width={350} />

        {Array(count)
          .fill(0)
          .map((e) => (
            <Text />
          ))}
      </div>
      <div className="btn gap-1 flex m-auto justify-center">
        <button className="text-white    mb-5" onClick={addText}>
          Add Text
        </button>
        <button
          className="text-white    mb-5"
          onClick={(e) => exportComponentAsJPEG(memeRef)}
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default EditPage;
