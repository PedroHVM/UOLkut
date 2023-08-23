import React from 'react';
import './index-profile.css';

const Profile: React.FC = () => {
  return (
    <main>
      <div className="profile">
        <div className="details">
          <img src="./images/user-image.jpeg" alt="profile image" />
          <h2>Iuri Silva</h2>
          <p>Solteiro, Brasil</p>
        </div>

        <div className="edit">
          <p>Edit my profile</p>
        </div>
      </div>

      <div className="info">
        <h2>Boa tarde, Iuri Silva</h2>
        <span id="text">“Programar sem café é igual poeta sem poesia.”</span>

        <div className="emojis">
          <div className="division">
            <span>
              <p>Fãs</p>
              <span id="star">
                <span className="material-symbols-outlined yellow">
                  star
                </span>
                <p>85</p>
              </span>
            </span>

            <span>
              <p>Confiável</p>
              <span className="material-symbols-outlined yellow">
                sentiment_satisfied
              </span>
              <span className="material-symbols-outlined yellow">
                sentiment_satisfied
              </span>
            </span>
          </div>

          <div className="division">
            <span>
              <p>Legal</p>
              <span className="material-symbols-outlined blue">
                thumb_up
              </span>
              <span className="material-symbols-outlined blue">
                thumb_up
              </span>
              <span className="material-symbols-outlined blue">
                thumb_up
              </span>
            </span>

            <span>
              <p>Sexy</p>
              <span className="material-symbols-outlined pink">
                favorite
              </span>
              <span className="material-symbols-outlined pink">
                favorite
              </span>
            </span>
          </div>
        </div>

        <p>Relacionamento: <span>Solteiro</span></p>
        <p>Aniversário: <span>21 de julho</span></p>
        <p>Idade: <span>22</span></p>
        <p>Interesses no Orkut: <span>Solteiro</span></p>
        <p>Quem sou eu: <span>Programador</span></p>
        <p>Filhos: <span>Não</span></p>
        <p>Sexo: <span>Masculino</span></p>
        <p>Fumo: <span>Não</span></p>
        <p>Bebo: <span>Depende do dia</span></p>
        <p>Moro: <span>Guaratã</span></p>
        <p>País: <span>Brasil</span></p>
        <p>Cidade Natal: <span>São Paulo</span></p>
        <p>
          Músicas:
          <span className="border">Trap</span>
          <span className="border more">Rap</span>
          <span className="border more">Indie</span>
          <span className="all">Ver todos</span>
        </p>
        <p>
          Filmes:
          <span className="border">A rede social</span>
          <span className="border more">Meu amigo totoro</span>
          <span className="all">Ver todos</span>
        </p>
      </div>

      <div className="friends_community">
        <div className="friends">
          <span className="title">
            <p>friends (248)</p>
            <p className="all">Ver todos</p>
          </span>

          <div className="profile_friends">
            <div className="division">
              <div className="profile_friend">
                <img src="images/friends/unsplash_2EGNqazbAMk.png" alt="pic_friend" />
                <p>Fernando</p>
              </div>
              <div className="profile_friend">
                <img src="images/friends/unsplash_3TLl_97HNJo.png" alt="pic_friend" />
                <p>Clara</p>
              </div>
              <div className="profile_friend">
                <img src="images/friends/unsplash_d1UPkiFd04A.png" alt="pic_friend" />
                <p>Marcos</p>
              </div>
            </div>
        
            <div className="division">
              <div className="profile_friend">
                <img src="images/friends/unsplash_iFgRcqHznqg.png" alt="pic_friend" />
                <p>Juan</p>
              </div>
              <div className="profile_friend">
                <img src="images/friends/unsplash_j3lf-Jn6deo.png" alt="pic_friend" />
                <p>Gustavo</p>
              </div>
              <div className="profile_friend">
                <img src="images/friends/unsplash_mEZ3PoFGs_k.png" alt="pic_friend" />
                <p>Laura</p>
              </div>
            </div>

            <div className="division">
              <div className="profile_friend">
                <img src="images/friends/unsplash_QJEVpydulGs.png" alt="pic_friend" />
                <p>Ryan</p>
              </div>
              <div className="profile_friend">
                <img src="images/friends/unsplash_ttSRjiYG_WM.png" alt="pic_friend" />
                <p>Karina</p>
              </div>
              <div className="profile_friend">
                <img src="images/friends/unsplash_sibVwORYqs0.png" alt="pic_friend" />
                <p>Jonas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="communitys">
          <span className="title">
            <p>community (35)</p>
            <p className="all">Ver todos</p>
          </span>

          <div className="img_communitys">
            <div className="division">
              <div className="community">
                <img src="images/community/unsplash__4sWbzH5fp8.png" alt="pic_community" />
                <p>Carros</p>
              </div>
              <div className="community">
                <img src="images/community/unsplash_auEPahZjT40.png" alt="pic_community" />
                <p>Comida</p>
              </div>
              <div className="community">
                <img src="images/community/unsplash_DomqHKN2Xik.png" alt="pic_community" />
                <p>Anime</p>
              </div>
            </div>

            <div className="division">
              <div className="community">
                <img src="images/community/unsplash_RrhhzitYizg.png" alt="pic_community" />
                <p>Livros</p>
              </div>
              <div className="community">
                <img src="images/community/unsplash_rz3eCYGgGSc.png" alt="pic_community" />
                <p>Filmes</p>
              </div>
              <div className="community">
                <img src="images/community/unsplash_uTj6-eZeHto.png" alt="pic_community" />
                <p>Leitura</p>
              </div>
            </div>

            <div className="division">
              <div className="community">
                <img src="images/community/unsplash_W0ixyS5kSIk.png" alt="pic_community" />
                <p>Animais</p>
              </div>
              <div className="community">
                <img src="images/community/unsplash_wnXo6T_cb3s.png" alt="pic_community" />
                <p>Arte</p>
              </div>
              <div className="community">
                <img src="./images/community/unsplash_zUNs99PGDg0.png" alt="pic_community" />
                <p>Café</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;