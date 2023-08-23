import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfilePicture from './ProfilePicture';
import SelectInput from './SelectInput';
import Favorites from './Favorites';
import SuccessMessage from './SuccessMessage';
import TextArea from './TextArea';
import Sex from './Sex';
import './formStepTwo.css';

interface FormValues {
  aboutMe: string;
  relationship: string;
  interests: string;
  smoking: string;
  drinking: string;
  isParent: string;
  favorites: {
    favoriteMusic: "",
    favoriteMovies: "",
    favoriteGames: "",
    favoriteBooks: "",
  },
}

const formStepTwo: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  
  const [formValues, setFormValues] = useState<FormValues>({
    aboutMe: '',
    relationship: '',
    interests: '',
    smoking: '',
    drinking: '',
    isParent: '',
    favorites: {
      favoriteMusic: "",
      favoriteMovies: "",
      favoriteGames: "",
      favoriteBooks: "",
    },
  });

  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate(); // hook do react-router-dom

  function handleChange(field: keyof FormValues, value: string) {
    setFormValues((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  }

  const handleProfilePictureChange = (file: File) => {
    setProfilePicture(file);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setProfilePicture(null);
      setFormValues({
        aboutMe: '',
        relationship: '',
        interests: '',
        smoking: '',
        drinking: '',
        isParent: '',
        favorites: {
          favoriteMusic: "",
          favoriteMovies: "",
          favoriteGames: "",
          favoriteBooks: "",
        },
      });
      navigate('/');
    }, 3000);
  };

  return (

    <div className="outer-div">
      <div className="register-two-main-div">
      
        

        <ProfilePicture onFileSelect={handleProfilePictureChange} />

        <div className="about-me">
          <TextArea
            label="Quem sou eu"
            value={formValues.aboutMe}
            onChange={(e) => handleChange('aboutMe', e.target.value)}
          />
        </div>

        
        <div className="mid-container">
          <div className = "select-input-container">
          
            <SelectInput
              label="Relacionamento"
              options={[
                { value: 'solteiro', label: 'Solteiro(a)' },
                { value: 'enrolado', label: 'Enrolado(a)' },
                { value: 'namorando', label: 'Namorando' },
                { value: 'casado', label: 'Casado(a)' },
                { value: 'viuvo', label: 'Viúvo(a)' },
                { value: 'divorciado', label: 'Divorciado(a)' },
              ]}
              value={formValues.relationship}
              onChange={(e) => handleChange('relationship', e.target.value)}
            />

            <SelectInput
              label="Filhos"
              options={[
                { value: 'no', label: 'Não' },
                { value: 'yes', label: 'Sim' },
              ]}
              value={formValues.isParent}
              onChange={(e) => handleChange('isParent', e.target.value)}
            />

            <SelectInput
              label="Fumo"
              options={[
                { value: 'nao', label: 'Não' },
                { value: 'raramente', label: 'Raramente' },
                { value: 'socialmente', label: 'Socialmente' },
                { value: 'sempre', label: 'Sempre' },
              ]}
              value={formValues.smoking}
              onChange={(e) => handleChange('smoking', e.target.value)}
            />

            <SelectInput
              label="Bebo"
              options={[
                { value: 'nao', label: 'Não' },
                { value: 'raramente', label: 'Raramente' },
                { value: 'socialmente', label: 'Socialmente' },
                { value: 'sempre', label: 'Sempre' },
              ]}
              value={formValues.drinking}
              onChange={(e) => handleChange('drinking', e.target.value)}
            />

          </div>
          <Sex />
        </div>

        <div className="interests">
          <TextArea 
              label="Interesses no Orkut"
              value={formValues.interests}
              onChange={(e) => handleChange('interests', e.target.value)}/>
        </div>
       
       <div className="fav-s"> 
          <Favorites
          favoriteMusic={formValues.favorites.favoriteMusic}
          favoriteMovies={formValues.favorites.favoriteMovies}
          favoriteGames={formValues.favorites.favoriteGames}
          favoriteBooks={formValues.favorites.favoriteBooks}
          onChange={(field, value) => handleChange(`favorites.${field}` as keyof FormValues, value)}
          />
        </div>
        <div className="submit-button">
        <button id="my-button" onClick={handleSubmit}>Salvar</button>
        </div>

        {submitted && <SuccessMessage />}
        </div>
    </div>
  );
};

export default formStepTwo;
