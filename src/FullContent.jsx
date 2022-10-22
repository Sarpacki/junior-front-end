import doe from "./img/doe.png";
import hayek from "./img/hayek.png";
import zimmer from "./img/zimmer.png";

const FullContent = ({ author, title, content, status }) => {
  const now = new Date();
  const day = now.getDate();
  const month = now.toLocaleDateString("en", {
    month: "long",
  });
  const hour = now.getHours();
  const minutes = now.getMinutes();

  const formatDay = (day) => {
    switch (day % 10) {
      case 1:
        return `${day}st`;
      case 2:
        return `${day}nd`;
      case 3:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  };

  const formatZero = (num) =>
    num.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });

  return (
    <div>
      <span className="full-content-title">{title}</span>
      <div className="full-content-items">
        <div className="full-content-header">
          {author === "Salma Hayek" ? (
            <img className="face-picture" src={hayek} alt="hayek" />
          ) : null || author === "Teresa Zimmer" ? (
            <img className="face-picture" src={zimmer} alt="zimmer" />
          ) : null || author === "Sue Doe" ? (
            <img className="face-picture" src={doe} alt="doe" />
          ) : null}
          <div className="full-content-author-date">
            <span className="full-content-author">{author}</span>
            <span className="dot">•</span>
            <span className="full-content-day">Today, {formatDay(day)}</span>
            <span className="full-content-month">{formatZero(month)}</span>
            <span className="dot">•</span>
            <span className="full-content-time">
              {formatZero(hour)}:{formatZero(minutes)}
            </span>
          </div>
        </div>
        <div className="full-content-text">{content}</div>
      </div>
    </div>
  );
};

export default FullContent;
