import BaseInputProps from "./BaseInputProps";
import "./BaseInput.scss";

export default function BaseInput(props: BaseInputProps) {
  const id = (Math.random() * 100000000).toFixed(0);

  const input = document.getElementById(id) as HTMLInputElement;
  input.value = props.value;

  return <input id={id} onInput={props.onInput}></input>;
}
