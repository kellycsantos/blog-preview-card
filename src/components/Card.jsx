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

  const dayPost = new Date().getDate()
  const monthPost = new Date().toLocaleString('default', { month: 'long' });
  const yearPost = new Date().getFullYear()

  return (
    <div className="Card">
      <div className="cover">
        <Logo />
      </div>
      <span className="label">{tag}</span>
      <p>Published {dayPost} {monthPost} {yearPost} </p>
      <h1>{title}</h1>
      <p>{preview}</p>
      <div className="user">
        <img src={avatar} /> <p >{name}</p>
      </div>
    </div>
  );
}
