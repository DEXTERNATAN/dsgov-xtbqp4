import React, { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { DateTimePicker } from "../Components/DateTimePicker";
import Header from "../Components/Header";

const DatePickerPage = () => {
  const { register } = useForm();

  return (
    <>
      <Header />
      <div className="p-5">
        <h4>Componente DateTimerPicker</h4>
        <DateTimePicker
          id="defesa-previa-formulario-dados-requerente-data-nascimento-input"
          name="requerente.dataNascimento"
          label="Data de Nascimento"
          className="col-12 col-md-3"
          placeholder="dd/mm/aaaa"
          register={register}
          onChange={(value: string | ChangeEvent<HTMLInputElement>) => {
            console.log(value);
          }}
        />
      </div>
    </>
  );
};

export default DatePickerPage;
