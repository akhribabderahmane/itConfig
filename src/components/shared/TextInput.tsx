import { useController } from "react-hook-form";

const TextInput = ({ control, name, label, placeholder, type }) => {
  const { field, fieldState } = useController({ control, name });
  return (
    <div className=" flex flex-col gap-2">
      <label
        htmlFor={name}
        className=" text-xl text-itconfig-blue-dark font-roboto font-bold"
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        {...field}
        className="w-full outline-none text-3xl px-4 py-4  border-2 rounded-md border-itconfig-red placeholder:text-slate-500"
      />
      {fieldState.error && (
        <p className=" text-sm text-red-600">{fieldState.error.message}</p>
      )}
    </div>
  );
};

export default TextInput;
