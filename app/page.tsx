import DemoFormWithInput from "./demo-form-with-input";
import DemoFormWithSelect from "./demo-form-with-select";

export default function Page() {
  return (
    <div className="p-8 flex gap-3">
      <DemoFormWithInput />
      <DemoFormWithSelect />
    </div>
  );
}
