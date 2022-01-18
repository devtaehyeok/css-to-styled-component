import "./ContactCard.css";
import avatar from "../../public/cat.jpeg";
export default function ContactCard({
  name,
  email
}: {
  name: string;
  email: string;
}) {
  return (
    <div className="wrapper">
      <article className="contact-card">
        <img alt="img" src={avatar} className="avatar" />
        <h2>{name}</h2>
        <p>{email}</p>
      </article>
    </div>
  );
}
