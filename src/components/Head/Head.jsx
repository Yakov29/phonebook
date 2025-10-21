import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addName, removeName, setFilter } from "../../redux/reducer";

import "./Head.css";

const Head = () => {
  const [nameInput, setNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const namesState = useSelector((state) => state.names);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!nameInput || !phoneInput) return;
    dispatch(addName({ name: nameInput, phone: phoneInput }));
    setNameInput("");
    setPhoneInput("");
  };

  const handleRemove = (index) => {
    dispatch(removeName(index));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const filteredNames = namesState.list.filter(
    (item) =>
      item.name.toLowerCase().includes(namesState.filter.toLowerCase()) ||
      item.phone.includes(namesState.filter)
  );

  return (
    <div className="head">
      <input
        className="head__input"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        placeholder="Введіть ім'я"
      />
      <input
        className="head__input"
        value={phoneInput}
        onChange={(e) => setPhoneInput(e.target.value)}
        placeholder="Введіть номер телефону"
      />
      <button className="head__button" onClick={handleAdd}>Додати</button>

      <br />
      <input
        className="head__input filter"
        value={namesState.filter}
        onChange={handleFilterChange}
        placeholder="Фільтр"
      />

      <ul>
        {filteredNames.map((item, i) => (
          <li className="head__item" key={i}>
            {item.name} - {item.phone}{" "}
            <button className="head__delete" onClick={() => handleRemove(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Head;
