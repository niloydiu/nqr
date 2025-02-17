import { useState } from "react";
import QR from "./QR";

const Content = () => {
  const [text, setText] = useState("https://portfolio-nu-ten-59.vercel.app/");
  const [data, setData] = useState([
    { key: "Field name", value: "Field value" },
  ]);

  const handleChange = (index, field) => (e) => {
    setData((prevData) => {
      const updated = [...prevData];
      updated[index][field] = e.target.value;
      return updated;
    });
  };
  const addNewField = () => {
    setData((prevData) => [
      ...prevData,
      { key: "Field name", value: "Field value" },
    ]);
  };
  const handleDelete = (index) => () => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };
  const handleGenerateText = () => {
    const newText = data
      .map((item) => `${item.key}: ${item.value}`)
      .join("%0A");
    setText(newText);
  };
  const getQRUrl = () => {
    return (
      "https://api.qrserver.com/v1/create-qr-code/?data=" +
      encodeURIComponent(text)
    );
  };

  const handleDownload = () => {
    const imageUrl = getQRUrl();
    fetch(imageUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const localUrl = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = localUrl;
        a.download = "qr-code.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(localUrl);
      })
      .catch((err) => console.error("Download failed", err));
  };
  return (
    <div className="w-full flex flex-col items-center">
      <div className=" h-52 w-52 flex flex-col items-center justify-center gap-4 mt-8">
        <QR text={text} />
        <button
          onClick={handleDownload}
          className="px-3 py-1 rounded-lg  bg-gray-950 text-white hover:bg-gray-700"
        >
          Download
        </button>
      </div>
      <div className=" mt-8  w-80 flex flex-col items-center">
        <form className="flex flex-col gap-2 w-full">
          {data.map((dt, index) => (
            <div
              className="flex flex-col bg-gray-200 p-2 rounded-lg gap-1 items-center"
              key={index}
            >
              <div className=" w-full flex items-center gap-2 ">
                <div className=" flex flex-col gap-2 w-full">
                  <input
                    type="text"
                    placeholder={dt.key}
                    onChange={handleChange(index, "key")}
                    className=" outline-none text-md w-full px-2 py-1 rounded-md border border-gray-700"
                  />

                  <input
                    type="text"
                    placeholder={dt.value}
                    onChange={handleChange(index, "value")}
                    className=" outline-none text-md w-full px-2 py-1 rounded-md border border-gray-700"
                  />
                </div>
                <div>
                  <button
                    onClick={handleDelete(index)}
                    className="h-10 w-10 text-2xl text-white bg-red-400 rounded-full rotate-45 flex justify-center items-center hover:bg-red-500"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </form>
        <button
          className=" rounded-lg m-4 py-1  w-[90%] bg-gray-950 text-white hover:bg-gray-700"
          onClick={() => addNewField()}
        >
          Add another field
        </button>
        <button
          className="rounded-lg py-1  w-[50%] bg-gray-950 text-white hover:bg-gray-700"
          onClick={() => handleGenerateText()}
        >
          Generate QR
        </button>
      </div>
    </div>
  );
};

export default Content;
