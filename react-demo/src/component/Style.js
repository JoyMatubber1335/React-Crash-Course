import "./Style.css";
import styles from "./Style.module.css";
export const Style = () => {
  const inlineStyle = {
    color: "green",
  };
  return (
    <div>
      <h1 className="name">regular style</h1>
      <h1 style={inlineStyle}>Inline style </h1>
      <h1 className={styles.module}>Module </h1>
    </div>
  );
};
