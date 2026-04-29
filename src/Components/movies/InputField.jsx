import Divider from "../dimonsions/Divider";

function InputField({ onChange, title, style, value, type }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-white" htmlFor={title}>
        {title}
      </label>

      {type == "range" ? (
        <input
          className={style}
          type={type}
          value={value}
          name={title}
          id={title}
          min={1}
          max={5}
          onChange={onChange}
        />
      ) : (
        <input
          className={style}
          type={type}
          value={value}
          name={title}
          id={title}
          onChange={onChange}
        />
      )}
      <Divider mt="mt-3" />
    </div>
  );
}

export default InputField;
