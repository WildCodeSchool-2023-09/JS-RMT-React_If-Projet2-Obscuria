function FormComponents({ label, name, type, onChange, value }) {
  return (
    <label>
      <span className="label-text-form-contact">{label}</span>
      <input
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        required
      />
    </label>
  );
}

export default FormComponents;
