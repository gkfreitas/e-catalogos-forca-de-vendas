import { Field, FieldLabel, TextField } from './styles';

export default function ExportFields({ title, content }) {
  return (
    <FieldLabel>
      {title}
      <Field>
        <TextField>
          {content}
        </TextField>
      </Field>
    </FieldLabel>
  );
}
