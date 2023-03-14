// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { FormHelperText } from '@mui/material';
//
import ReactQuill, { Quill } from 'react-quill';

// Formats objects for setting up the Quill editor
export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block"
];


const modules = {
  toolbar: [
    [{ 'font': [] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote'],             // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // outdent/indent
    [{ 'direction': 'rtl' }],                         // custom dropdown
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'align': [] }],
    ['clean']

  ]
};

type RHFEditorParams = { name: string, placeholder: string };

export default function RHFEditor({ name, placeholder,...other }: RHFEditorParams) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div  className='mt-3 mb-5'id="editor-container" >
          <ReactQuill
            modules={modules}
            formats={formats}
            id={name}
            value={field.value}
            onChange={field.onChange}
            bounds={'.app'}
            placeholder={placeholder}
            theme="snow"
            {...other}
          />
          <FormHelperText error sx={{ px: 2, textTransform: 'capitalize' }}>
            {error?.message}
          </FormHelperText>
          <br />
        </div>
      )}
    />
  );
}
