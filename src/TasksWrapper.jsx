import mark from "./img/mark.svg";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ApplicationSetup from "./ApplicationSetup";
import StaticBooksList from "./StaticBooksList";
import AdministrationPanel from "./AdministrationPanel";
import ConnectAdminWithFrontend from "./ConnectAdminWithFrontend";
import BookReviewFeature from "./BookReviewFeature";
import arrow from "./img/arrow.svg";
import check from "./img/check.svg";
import lock from "./img/lock.svg";
import { useState } from "react";

const tasks = [
  {
    id: "application-setup",
    name: "Application Setup",
    locked: false,
  },
  {
    id: "static-books-list",
    name: "Static Books List",
    locked: false,
  },
  {
    id: "administration-panel",
    name: "Administration Panel",
    locked: false,
  },
  {
    id: "connect-admin-with-frontend",
    name: "Connect Admin with Frontend",
    locked: false,
  },
  {
    id: "book-review-feature",
    name: "Book Review Feature",
    locked: true,
  },
];

const Task = ({ onClick, id, imgSrc }) => (
  <Link to={`/${id}`} onClick={onClick}>
    <div className="task-title">
      <img src={imgSrc} alt="arrow-icon" />

      <h3 className="task-name">{id.split("-").join(" ")}</h3>
    </div>
  </Link>
);

const TasksWrapper = () => {
  const [visited, setVisited] = useState([]);

  const onClick = (elementVisited) => {
    setVisited((current) => [...current, elementVisited]);
  };

  return (
    <div className="wrapper">
      <Router>
        <div className="your-tasks">
          <h2>YOUR TASKS</h2>
          <div className="all-tasks">
            {tasks.map((task) => {
              const changingIcon = visited.includes(task.id) ? arrow : check;
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  imgSrc={task.locked ? lock : changingIcon}
                  onClick={() => onClick(task.id)}
                />
              );
            })}
          </div>
        </div>
        <div className="business-context">
          <div className="context-header">
            <div className="title-part">
              <img src={mark} alt="mark-icon" />
              <h2>BUSINESS CONTEXT</h2>
            </div>
          </div>
          <Routes>
            <Route
              path="/application-setup"
              exact={"exact"}
              element={<ApplicationSetup />}
            />
            <Route path="/static-books-list" element={<StaticBooksList />} />
            <Route
              path="/administration-panel"
              element={<AdministrationPanel />}
            />
            <Route
              path="/connect-admin-with-frontend"
              element={<ConnectAdminWithFrontend />}
            />
            <Route
              path="/book-review-feature"
              element={<BookReviewFeature />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default TasksWrapper;
