import React from "react";

import PageHeader from "../../components/PageHeader";

import "./styles.css";
import TeacherItem from "../../components/TeacherItem";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esse são os proffys disponíveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Horário</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem
          avatar="https://avatars0.githubusercontent.com/u/34246280?s=460&u=8dfd968d31bcc02aa216044a09c5e188ee3c442f&v=4"
          name="Caio"
          subject="Programação"
          subtitle="Estuda programação desde seus 14 anos."
          description="Gosta de ensinar e aprender coisas novas, neste momento está focado em repassar seus conhecimentos em diversas tecnologias."
          price={100}
          phone="5511977466138"
        />
      </main>
    </div>
  );
}

export default TeacherList;
