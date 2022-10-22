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
    title: "Volutpat blandit aliquam.",
    content:
      "Ac turpis egestas integer eget. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Pellentesque habitant morbi tristique senectus et. Arcu bibendum at varius vel pharetra vel. Pellentesque diam volutpat commodo sed egestas egestas. Lacus sed viverra tellus in.",
    author: "Sue Doe",
    created_at: `${month} ${day}`,
    status: "new",
  },
  {
    id: 2,
    title: "Blandit libero volutpat.",
    content:
      "Eu augue ut lectus arcu bibendum at. Odio facilisis mauris sit amet. Porttitor massa id neque aliquam. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Pretium aenean pharetra magna ac placerat. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est.",
    author: "Teresa Zimmer",
    created_at: `${month} ${day}`,
    status: "active",
  },
  {
    id: 3,
    title: "Imperdiet dui.",
    content:
      "Tellus mauris a diam maecenas sed enim ut sem viverra. Ultricies lacus sed turpis tincidunt id aliquet. Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Iaculis eu non diam phasellus vestibulum lorem. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Netus et malesuada fames ac turpis egestas.",
    author: "Salma Hayek",
    created_at: `${month} ${day}`,
    status: "inactive",
  },
];

const ConnectAdminWithFrontend = () => {
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

export default ConnectAdminWithFrontend;
