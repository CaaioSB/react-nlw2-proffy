import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  description?: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>
        {teacher.bio}
        <br />
        <br />
        {teacher.description}
      </p>

      <footer>
        <p>
          Preço/hora:
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          target="_blank"
          onClick={createNewConnection}
          href={`https://api.whatsapp.com/send?phone=${
            teacher.whatsapp
          }&text=Ol%C3%A1%20${teacher.name.replace(
            ' ',
            '%20',
          )},%20eu%20tenho%20interesse%20em%20respeito%20as%20suas%20aulas!%20Consegue%20me%20dizer%20mais%20sobre?`}
        >
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
