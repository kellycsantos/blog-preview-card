import "./style.css";
import { ReactComponent as Logo } from "../assets/illustration-article.svg";

export default function CardPreview({
  tag,
  data,
  title,
  preview,
  avatar,
  name,
}) {
  return (
    <div className="Card">
      <div className="cover">
        <Logo />
      </div>
      <span className="label">{tag}</span>
      <p>Published 23 Jan 2023 </p>
      <h1>{title}</h1>
      <p>{preview}</p>
      <div className="user">
        <img src={avatar} /> <p >{name}</p>
      </div>
    </div>
  );
}
