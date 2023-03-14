// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField, TextFieldProps, withStyles } from '@mui/material';
import styled from '@emotion/styled';

// ----------------------------------------------------------------------

interface IProps {
  name: string;
}

const StyledTextField = styled(TextField)({
  "& label": {
    color: "gray"
  },
  "& label.Mui-focused": {
    color: "gray"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "lightgray"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "lightgray"
    },
    "&:hover fieldset": {
      borderColor: "lightgray",
      borderWidth: 2
    },
    "&.Mui-focused fieldset": {
      borderColor: "lightgray"
    }
  }
});

export default function RHFTextField({ name, ...other }: IProps & TextFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <StyledTextField {...field} fullWidth error={!!error} helperText={error?.message} {...other} />
      )}
    />
  );
}
