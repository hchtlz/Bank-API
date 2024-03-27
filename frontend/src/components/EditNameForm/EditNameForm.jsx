import React from "react";
import { useDispatch } from 'react-redux';
import { userEdit } from "../../app/actions/action";
import "./EditNameForm.css";

export default function EditNameForm({ firstname, lastname, onCancel }) {
  const dispatch = useDispatch();
  const handleSaveClick = () => {
    dispatch(userEdit(document.getElementById('firstname').value, document.getElementById('lastname').value));
  };
  
  return (
    <section className="edit-name-content">
      <form>
        <div className="edit-input-wrapper">
          <input type="text" id="firstname" defaultValue={firstname} />
          <input type="text" id="lastname" defaultValue={lastname} />
        </div>
        <div className="action-wrapper">
          <button className="edit-name-button" onClick={handleSaveClick}>Save</button>
          <button className="edit-name-button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </section>
  );
}