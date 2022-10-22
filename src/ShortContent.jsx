const ShortContent = ({
  author,
  created_at,
  title,
  content,
  status,
  id,
  changeStatus,
}) => (
  <div
    className={`single-short-content 
      ${status === "active" && "single-short-content-active"} 
      ${status === "inactive" && "single-short-content-inactive"}`}
    onClick={() => changeStatus("active", id)}
  >
    <div className="author-date">
      {status === "new" ? <label className="new">NEW</label> : null}
      <span className="author">{author}</span>
      <span className="dot">•</span>
      <span className="created-at">{created_at}</span>
    </div>
    <div className="text-content">
      <span className={`title ${status === "new" && "title-new"}`}>
        {title}
      </span>
      <span className="short-text">{content}</span>
    </div>
  </div>
);

export default ShortContent;
