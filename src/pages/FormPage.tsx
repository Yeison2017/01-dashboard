import { Box, Button } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

import { InputForm, PageLayout } from "../components";
import { IStyles, IUser } from "../interfaces";

const styles = (isNonMobile?: boolean): IStyles => ({
  containerForm: {
    display: "grid",
    gap: "30px",
    gridTemplateColumnset: "repeat(4, minmax(0, 1fr))",
    "& > div": {
      gridColumn: isNonMobile ? undefined : "span 4",
    },
  },
  containerButton: {
    display: "flex",
    justifyContent: "end",
    mt: "20px",
  },
});

const initialValues: IUser = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userShema: yup.SchemaOf<IUser> = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const handleFormSubmit = (values: IUser) => {
    console.log("values: ", values);
  };
  return (
    <PageLayout title="CREATE USER" subtitle="Cretae a New User Profile">
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userShema}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <Box sx={styles(isNonMobile).containerForm}>
              <InputForm
                formik={props}
                label="First Name"
                name="firstName"
                gridColumn={2}
              />
              <InputForm
                formik={props}
                label="Last Name"
                name="lastName"
                gridColumn={2}
              />
              <InputForm formik={props} label="Email" name="email" />
              <InputForm formik={props} label="Contact Number" name="contact" />
              <InputForm formik={props} label="Address 1" name="address1" />
              <InputForm formik={props} label="Address 2" name="address2" />
            </Box>

            <Box sx={styles().containerButton}>
              <Button type="submit" variant="contained" color="secondary">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </PageLayout>
  );
};

export default Form;
