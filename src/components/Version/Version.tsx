import "./Version.css";
const version = import.meta.env.VITE_REACT_APP_VERSION;

function Version() {
  return <div className="version">{version}</div>;
}

export default Version;
