import css from './SelectTime.module.css'

export default function SelectTime({ value, handleChangeTime }) {
    return (
    <select
        value={value}
        onChange={(event) => handleChangeTime(event.target.value)}
        className={css.select}
    >
    <option value="day">Day</option>
    <option value="week">Week</option>
    </select>
);
}