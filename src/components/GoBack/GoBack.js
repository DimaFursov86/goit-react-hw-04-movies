import s from "../GoBack/GoBack.module.scss";
export default function GoBack() {
  return (
    <button className={s.buttonStyle} type="button">
      &#8592; GoBack
    </button>
  );
}
