import { TextField, TextFieldProps } from "@mui/material";
import { FormikProps } from "formik";
import { IStyles } from "../../interfaces";

type IInputFormProps<T> = T extends FormikProps<infer V>
  ? {
      label: string;
      name: keyof V;
      formik: T;
      gridColumn?: number;
    } & Omit<TextFieldProps, "name" | "value">
  : never;

const styles = (span: number = 4): IStyles => ({
  container: {
    gridColumn: `span ${span}`,
  },
});

const InputForm = <T extends FormikProps<any>>({
  label,
  name,
  formik,
  gridColumn,
  ...props
}: IInputFormProps<T>) => {
  const { values, handleBlur, handleChange, touched, errors } = formik;
  console.log("name: ", name);

  return (
    <TextField
      fullWidth
      variant="filled"
      type="text"
      label={label}
      onBlur={handleBlur}
      onChange={handleChange}
      value={values[name]}
      name={name as string}
      error={!!touched[name.toString()] && !!errors[name.toString()]}
      helperText={touched[name.toString()] && errors[name.toString()]}
      sx={styles(gridColumn).container}
      {...props}
    />
  );
};

export default InputForm;
