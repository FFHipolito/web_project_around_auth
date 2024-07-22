import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const link = useRef("");

  useEffect(() => {
    if (!isOpen) {
      link.current.value = "";
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    return onUpdateAvatar({
      avatar: link.current.value,
    });
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      title="Alterar a foto do perfil"
      name="popup"
      onClose={onClose}
      onSubmit={handleSubmit}
      button="Salvar"
    >
      <>
        <input
          className="popup__input-text popup__form-input-link"
          id="avatar"
          ref={link}
          placeholder="Link da Imagem"
          type="url"
          name="image"
          required
        />
        <span className="popup__error"></span>
      </>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
