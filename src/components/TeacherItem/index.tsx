import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

interface TeacherItemProps {
  avatar: string;
  name: string;
  subject: string;
  subtitle?: string;
  description: string;
  price: number;
  phone: string;
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  return (
    <article className="teacher-item">
      <header>
        <img src={props.avatar} alt="" />
        <div>
          <strong>{props.name}</strong>
          <span>{props.subject}</span>
        </div>
      </header>
      <p>
        {props.subtitle}
        <br />
        <br />
        {props.description}
      </p>

      <footer>
        <p>
          Preço/hora:
          <strong>R$ {props.price}</strong>
        </p>
        <a href={`http://wa.me/${props.phone}`}>
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
          </button>
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
