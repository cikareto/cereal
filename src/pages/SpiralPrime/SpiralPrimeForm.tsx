import EnterButton from "../../components/Button/EnterButton";
import Form, { Input, useForm } from "../../components/Form";
import { defaultField, EFormFieldPattern } from "../../components/Form/types";

interface ISpiralPrimeForm {
  onSubmit: (value: number) => void;
}

const FORM_FIELDS = {
  PRIME_SIZE: "prime-size",
};

const SpiralPrimeForm: React.FC<ISpiralPrimeForm> = ({ onSubmit }) => {
  const { fields, setFields, isFormInvalid } = useForm({
    [FORM_FIELDS.PRIME_SIZE]: defaultField,
  });

  const _onHandleSubmit = (data: any) => {
    onSubmit(data[FORM_FIELDS.PRIME_SIZE].value);
  };

  return (
    <Form fields={fields} setFields={setFields} onSubmit={_onHandleSubmit}>
      <Input
        id="spiral-prime_size"
        name={FORM_FIELDS.PRIME_SIZE}
        type="number"
        pattern={EFormFieldPattern.NUMBER}
        label="Size"
        ariaLabel="Prime Size"
        validate={{ required: true, min: 1 }}
      >
        <EnterButton disabled={isFormInvalid} />
      </Input>
    </Form>
  );
};

export default SpiralPrimeForm;
