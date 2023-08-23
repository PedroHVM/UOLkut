import React, { useRef, ChangeEvent, useState } from 'react';
import './ProfilePicture.css';

interface ProfilePictureProps {
  onFileSelect: (file: File) => void;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ onFileSelect }) => {
  const [imageUrl, setImageUrl] = useState<string>("/profilePictureNull.jpg"); // Estado local para armazenar o URL da imagem selecionada
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      onFileSelect(selectedFile);

      // Lendo o arquivo de imagem como URL e atualizando o estado local
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImageUrl(event.target.result as string);
        }
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="profile-picture-container">
      <h3 className="profile-picture-text">Foto de Perfil</h3>
      <div className="profile-picture-content">
        <img
          src={imageUrl}
          alt="Foto de Perfil"
          className="profile-picture-img"
        />
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button className="photo-button" onClick={handleFileSelect}>Procurar</button>
    </div>
  );
};

export default ProfilePicture;
