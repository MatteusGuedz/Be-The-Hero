import React, {useState} from 'react';
 import './styles.css';
 import logoImg from '../../assets/logo.svg'; 
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription]  = useState('');
  const [value, setValue] = useState('');
  const history =  useHistory();
const ongId = localStorage.getItem('ongId')
  async function handleNewIncident(e){
      e.preventDefault();
      const data = {
        title,
        description,
        value,

      };
      try {
          await api.post('incidents', data, {
            headers: {
              Authorization:ongId
            }
          })

          history.push('/profile');
      } catch(err){
        alert('Erro ao cadastrar Caso, tente novamente')
      }
  }
  return (
    <div className="new-incident-container">
       <div  className="content">
        <section>
        <img src={logoImg} alt="Be The Hero"/>
        <h1>Cadastrar novo Caso</h1>
        <p>Descrava o caso detalhadamente para encontrar heroi para resolver isso!</p>

        
        <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#e02041" />
              Voltar para Home
            </Link>
        </section>

        <form onSubmit={handleNewIncident}>
                <input 
                  placeholder="Titulo do caso " 
                  value={title}
                  onChange={e  => setTitle(e.target.value)}
                  />
                <textarea 
                  placeholder="Descrição" 
                  value={description}
                  onChange={e  => setDescription(e.target.value)}
                  />
                <input  
                  placeholder="Valor em Reais" 
                  value={value}
                  onChange={e  => setValue(e.target.value)}
                  />
               
               
                <button className="button" type="submit">Cadastrar</button> 



        </form>
       </div>
   </div>
  );
}