import './title.css';
export const Section = ({ title, children }) => {
  return (
    <div>
      <h1 className="title">{title}</h1>
      {children}
    </div>
  );
};
