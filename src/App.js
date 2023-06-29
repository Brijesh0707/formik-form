import React from 'react';
import { useFormik } from 'formik';
import {
  TextField,
  TextareaAutosize,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Button,
  Grid,
} from '@material-ui/core';
import './App.css'

const initialValues = {
  name: '',
  address: '',
  country: '',
  gender: '',
  hobbies: [],
};

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'in', label: 'India' },
];

const hobbies = [
  'Reading',
  'Sports',
  'Cooking',
  'Traveling',
  'Gaming',
  'Music',
];

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.address) {
    errors.address = 'Required';
  }

  if (!values.country) {
    errors.country = 'Required';
  }

  if (!values.gender) {
    errors.gender = 'Required';
  }

  return errors;
};

const Form = () => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values, { resetForm }) => {
      alert('Form submitted!');
      console.log(values);
      resetForm();
    },
  });

  return (
    <>
    
    <form onSubmit={formik.handleSubmit} className='form-1'      >
    <div className='heading'>
      <h1>Register Form</h1>
    </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="name"
            name="name"
            label="Name"
            fullWidth
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item xs={11}>
        <TextareaAutosize
  id="address"
  name="address"
  label="Address"
  rows={3}
  cols={30}
  placeholder="Enter your address"
  style={{
    width: '379px',
    height: '80px',
    resize: 'none',
  }}
  value={formik.values.address}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  error={formik.touched.address && Boolean(formik.errors.address)}
  helperText={formik.touched.address && formik.errors.address}
/>

        </Grid>
        <Grid item xs={12}>
          <FormControl
            fullWidth
            error={formik.touched.country && Boolean(formik.errors.country)}
          >
            <InputLabel id="country-label">Country</InputLabel>
            <Select
              id="country"
              name="country"
              labelId="country-label"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <MenuItem value="" disabled>
                Select country
              </MenuItem>
              {countries.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl
            component="fieldset"
            error={formik.touched.gender && Boolean(formik.errors.gender)}
          >
            <RadioGroup
              id="gender"
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <FormControlLabel
                value="male"
                control={<Radio color="primary" />}
                label="Male"
              />
              <FormControlLabel
                value="female"
                control={<Radio color="primary" />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio color="primary" />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl
            fullWidth
            error={formik.touched.hobbies && Boolean(formik.errors.hobbies)}
          >
            <InputLabel id="hobbies-label">Hobbies/Interests</InputLabel>
            <Select
              id="hobbies"
              name="hobbies"
              labelId="hobbies-label"
              multiple
              value={formik.values.hobbies}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              renderValue={(selected) => selected.join(', ')}
            >
              {hobbies.map((option) => (
                <MenuItem key={option} value={option}>
                  <Checkbox
                    checked={formik.values.hobbies.includes(option)}
                    color="primary"
                  />
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
        <div className="button-container1">
    <Button
      variant="contained"
      color="primary"
      type="submit"
      disabled={formik.isSubmitting}
    >
      Submit
    </Button>
  </div>
        </Grid>
      </Grid>
    </form>
    </>
  );
};

export default Form;
