import FullContent from "./FullContent";
import ShortContent from "./ShortContent";
import { useState } from "react";

const now = new Date();
const day = now.getDate();
const month = now.toLocaleDateString("en", {
  month: "short",
});

const arrayOfBusinessContexts = [
  {
    id: 1,
    title: "Sed libero enim sed faucibus.",
    content:
      "Diam volutpat commodo sed egestas egestas fringilla phasellus. Elementum sagittis vitae et leo. Tortor posuere ac ut consequat semper viverra nam libero. A arcu cursus vitae congue mauris rhoncus aenean. Est ultricies integer quis auctor. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est.",
    author: "Sue Doe",
    created_at: `${month} ${day}`,
    status: "new",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet.",
    content:
      "Praesent elementum facilisis leo vel fringilla est. Eget nunc scelerisque viverra mauris. Et malesuada fames ac turpis egestas integer. Non sodales neque sodales ut etiam sit amet nisl. Donec pretium vulputate sapien nec sagittis. Ac turpis egestas maecenas pharetra convallis posuere morbi.",
    author: "Teresa Zimmer",
    created_at: `${month} ${day}`,
    status: "active",
  },
  {
    id: 3,
    title: "Nisi vitae suscipit.",
    content:
      "Eget mauris pharetra et ultrices neque ornare aenean. Est velit egestas dui id ornare arcu odio ut sem. Volutpat ac tincidunt vitae semper quis lectus nulla at. Dignissim sodales ut eu sem. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Amet purus gravida quis blandit turpis. ",
    author: "Salma Hayek",
    created_at: `${month} ${day}`,
    status: "inactive",
  },
];

const StaticBooksList = () => {
  const [data, setModifiedData] = useState(arrayOfBusinessContexts);
  const changeStatus = (status, id) => {
    const modifiedData = data.map((item) => ({
      ...item,
      status:
        item.id === id && item.status !== "inactive" ? status : item.status,
    }));
    setModifiedData(modifiedData);
  };

  return (
    <>
      <div className="whole-contents">
        <div className="short-contents">
          {data.map((item) => (
            <ShortContent key={item.id} {...item} changeStatus={changeStatus} />
          ))}
        </div>
        <div className="full-contents">
          {data
            .filter((item) => item.status === "active")
            .map((item) => (
              <FullContent key={item.id} {...item} />
            ))}
        </div>
      </div>
    </>
  );
};

export default StaticBooksList;
