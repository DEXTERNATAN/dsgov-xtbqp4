import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { Select } from '../Components/Select';
import Select from '../Components/Select2';
import Header from '../Components/Header';

const SelectPage = () => {
  const { register } = useForm();
  const tiposProcessoLista = [
    {
      id: 1,
      descricao: 'Conversão',
      codigo: 'CODIGO',
    },
    {
      id: 2,
      descricao: 'Defesa',
      codigo: 'DEFESA',
    },
    {
      id: 3,
      descricao: 'Recurso',
      codigo: 'RECUROS',
    },
  ];

  const [estados, setEstados] = useState([
    {
      id: 1,
      descricao: 'Minas Gerais',
      sigla: 'MG',
    },
    {
      id: 2,
      descricao: 'Rio de Janeiro',
      sigla: 'RJ',
    },
    {
      id: 3,
      descricao: 'São Paulo',
      sigla: 'SP',
    },
  ]);

  const [estado, setEstado] = useState({ id: null, descricao: 'Vazio' });
  const mg = {
    id: 1,
    descricao: 'Minas Gerais',
    sigla: 'MG',
  };

  return (
    <>
      <Header />
      <div className="p-5">
        <h4>Select</h4>
        <Select data={estados} selected={estado} setSelected={setEstado} />
        {/* <Select
          id="decisao-filtro-tipo-processo-input"
          label="Tipo"
          name="tipoProcesso"
          className="col-12 col-md-3 mb-3"
          placeholder="Selecione o tipo de processo"
          data={tiposProcessoLista}
          register={register}
        /> */}
      </div>
    </>
  );
};

export default SelectPage;
