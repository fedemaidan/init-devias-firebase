import { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const AccountProfileDetails = () => {

  const formik = useFormik({
    initialValues: {
      firstName: 'Fede',
      lastName: 'Visser',
      email: '',
      phone: '',
      state: 'los-angeles',
      country: 'USA',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('El email debe ser valido')
        .max(255)
        .required('Email es obligatorio'),
      firstName: Yup
        .string()
        .max(255)
        .required('Nombre es obligatorio'),
      lastName: Yup
        .string()
        .max(255)
        .required('Apellido es obligatorio'),
      phone: Yup
        .string()
        .max(255),
      state: Yup
        .string()
        .max(255)
        .required('Provincia es obligatorio'),
      country: Yup
        .string()
        .max(255)
        .required('País es obligatorio')
      
    }),
    onSubmit: async (values, helpers) => {
      try {
        console.log("Submit");
        console.log(values);
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={formik.handleSubmit}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  helperText={formik.touched.firstName && formik.errors.firstName}
                  error={!!(formik.touched.firstName && formik.errors.firstName)}
                  label="Nombre"
                  name="firstName"
                  onChange={formik.handleChange}
                  required
                  value={formik.values.firstName}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  error={!!(formik.touched.lastName && formik.errors.lastName)}
                  label="Apellido"
                  name="lastName"
                  onChange={formik.handleChange}
                  required
                  value={formik.values.lastName}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  error={!!(formik.touched.email && formik.errors.email)}
                  label="Email"
                  name="email"
                  onChange={formik.handleChange}
                  required
                  value={formik.values.email}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  helperText={formik.touched.phone && formik.errors.phone}
                  error={!!(formik.touched.phone && formik.errors.phone)}
                  label="Teléfono"
                  name="phone"
                  onChange={formik.handleChange}
                  type="phone"
                  value={formik.values.phone}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  helperText={formik.touched.country && formik.errors.country}
                  error={!!(formik.touched.country && formik.errors.country)}
                  label="País"
                  name="country"
                  onChange={formik.handleChange}
                  required
                  value={formik.values.country}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  helperText={formik.touched.state && formik.errors.state}
                  error={!!(formik.touched.state && formik.errors.state)}
                  label="Provincia"
                  name="state"
                  onChange={formik.handleChange}
                  required
                  value={formik.values.state}
                >
                </TextField>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button 
            variant="contained"
            type="submit">
            Save details
          </Button>
            {formik.errors.submit && (
                <Typography
                  color="error"
                  sx={{ mt: 3 }}
                  variant="body2"
                >
                  {formik.errors.submit}
                </Typography>
            )}
        </CardActions>
      </Card>
    </form>
  );
};
