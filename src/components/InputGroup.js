import { Label } from "./Label";
import { Input } from "./Input";

export function InputGroup({
  id,
  type = "text",
  label = "",
  required,
  placeholder = `Enter your ${label.toLowerCase()}`,
  onChange,
}) {
  return (
    <div className="mb-4">
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <Input id={id} onChange={onChange} type={type} placeholder={placeholder} />
    </div>
  );
}