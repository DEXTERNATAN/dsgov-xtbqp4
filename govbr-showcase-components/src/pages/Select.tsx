import React, { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { Select } from "../Components/Select";
import Header from "../Components/Header";

const SelectPage = () => {
  const { register } = useForm();
  const tiposProcessoLista = [
    {
      id: 1,
      descricao: "Conversão",
      codigo: "CODIGO",
    },
    {
      id: 2,
      descricao: "Defesa",
      codigo: "DEFESA",
    },
    {
      id: 3,
      descricao: "Recurso",
      codigo: "RECUROS",
    },
  ];

  return (
    <>
      <Header />
      <div className="p-5">
        <Select
          id="decisao-filtro-tipo-processo-input"
          label="Tipo"
          name="tipoProcesso"
          className="col-12 col-md-3 mb-3"
          placeholder="Selecione o tipo de processo"
          data={tiposProcessoLista}
          register={register}
        />
      </div>
    </>
  );
};

export default SelectPage;

// export default class SelectPage extends Component {
//   render() {
//     const { register } = useForm();
//     const tiposProcessoLista = [
//       {
//         id: 1,
//         descricao: "Conversão",
//         codigo: "CODIGO",
//       },
//       {
//         id: 2,
//         descricao: "Defesa",
//         codigo: "DEFESA",
//       },
//       {
//         id: 3,
//         descricao: "Recurso",
//         codigo: "RECUROS",
//       },
//     ];

//     return (
//       <div>
//         <Select
//           id="decisao-filtro-tipo-processo-input"
//           label="Tipo"
//           name="tipoProcesso"
//           className="col-12 col-md-3 mb-3"
//           placeholder="Selecione o tipo de processo"
//           data={tiposProcessoLista}
//           register={register}
//         />
//       </div>
//     );
//   }
// }
