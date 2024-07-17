interface InputFormProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function InputForm({
  label,
  value,
  onChange,
  name,
  id,
  onFocus,
}: InputFormProps) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label className="text-lg">{label}</label>

        <input
          className="shadow-lg text-zinc-500 p-2 rounded-md outline-none"
          type="text"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
        />
      </div>
    </>
  );
}
