import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { selectInputValidation } from "../schema/loginValidation";
import { useTheme } from "@mui/material/styles";

const SelectInput = () => {
  const theme = useTheme();

  //for form submission new function is needed

  return (
    <Stack
      style={{
        minHeight: "100vh",
        backgroundColor: "rgb(0,37,71)",
      }}
    >
      <Paper
        sx={{
          maxWidth: "475px",
          width: "90vw",
          margin: "auto",
        }}
      >
        <Formik
          initialValues={{ selectedInput: "" }}
          validationSchema={selectInputValidation}
          onSubmit={(formData, { setSubmitting }) => {
            setSubmitting(true);
            console.log(formData);
            // logic here for form submission
          }}
        >
          {({ errors, touched, isSubmitting, values }) => (
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: theme.spacing(4),
                padding: theme.spacing(6),
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  marginBottom: "10px",
                  fontWeight: "bold",
                  color: "rgb(105,105,105)",
                }}
              >
                SELECT THE INPUT
              </Typography>
              <FormControl variant="filled" className="custom-label-placement">
                <InputLabel htmlFor="selectedTime">Select the Input</InputLabel>
                <Field
                  name="selectedTime"
                  as={Select}
                  id="selectedTime"
                  error={
                    Boolean(errors.selectedInput) &&
                    Boolean(touched.selectedInput)
                  }
                >
                  <MenuItem value="">
                    <em>Select the Input</em>
                  </MenuItem>
                  <MenuItem value="5">Option 1</MenuItem>
                  <MenuItem value="10">Option 2</MenuItem>
                  <MenuItem value="15">Option 3</MenuItem>
                  <MenuItem value="20">Option 4</MenuItem>
                  <MenuItem value="25">Option 5</MenuItem>
                  <MenuItem value="30">Option 6</MenuItem>
                </Field>
              </FormControl>
              {Boolean(touched.selectedInput) && errors.selectedInput && (
                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    margin: "-20px 0 5px 0",
                  }}
                >
                  {errors.selectedInput}
                </span>
              )}

              <Button
                type="button"
                variant="contained"
                sx={{
                  backgroundColor: "primary.main",
                  width: "100%",
                  margin: "auto",
                }}
              >
                {isSubmitting ? "Please wait" : "Submit Input"}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Stack>
  );
};

export default SelectInput;
