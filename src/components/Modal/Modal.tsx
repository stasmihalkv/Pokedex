import React from "react";
import { observer } from "mobx-react";
import styles from "./Modal.less";

interface Props {
  onClose: Function;
  openModalElement?: number;
  title: string;
  onSave: Function;
  onChange: Function;
  inputValue?: string;
  placeholder?: string;
}

@observer
export class Modal extends React.Component<Props> {
  handleOnClick = (e): void => {
    e.stopPropagation();
  };

  render() {
    const {
      onClose,
      title,
      onSave,
      onChange,
      inputValue,
      placeholder
    } = this.props;

    return (
      <div className={styles.modal} onClick={() => onClose()}>
        <div
          className={styles.modalContent}
          onClick={e => this.handleOnClick(e)}
        >
          <h2>{title}</h2>
          <input
            type="text"
            className={styles.modalInput}
            onChange={e => onChange(e)}
            value={inputValue}
            maxLength={30}
            placeholder={placeholder || null}
            autoFocus
          />
          <div className={styles.modalButtons}>
            <button onClick={() => onClose()} className={styles.cancelButton}>
              Close
            </button>
            <button onClick={() => onSave()} className={styles.saveButton}>
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}
