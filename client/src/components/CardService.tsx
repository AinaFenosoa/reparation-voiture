import styled from 'styled-components';

interface ServiceState {
  id: number;
  nom: string;
  description: string;
  prix: string;
  image: string;
}

const Card = ({ nom, id, description, prix, image }: ServiceState) => {
  const isEven = id % 2 === 0;
  // Ajoute un zéro au début si l'ID est inférieur à 10 (ex: 01, 02...)
  const formattedId = id < 10 ? `0${id}` : id;

  return (
    <StyledWrapper $isEven={isEven} $bgImage={image}>
      <div className="card-container">
        <div className="card">
          <div className="front-content">
            <p>{nom}</p>
          </div>

          <div className="content">
            {/* Numéro géant en haut à gauche */}
            <span className="badge-id">{formattedId}</span>

            {/* Bloc d'informations aligné en bas à gauche */}
            <div className="bottom-info">
              <h3 className="heading">{nom}</h3>
              <p className="description">{description}</p>
              <div className="price-button">{prix}</div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ $isEven: boolean; $bgImage: string }>`
  .card-container {
    height: 300px;
    position: relative;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    overflow: hidden;

    background-image: linear-gradient(
        rgba(0, 0, 0, 0.25),
        rgba(0, 0, 0, 0.25)
      ),
      url("${({ $bgImage }) => $bgImage}");
    
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .card {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .card .front-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card .front-content p {
    font-size: 28px;
    font-weight: 800;
    margin: 0;
    color: #ffffff;
    text-transform: uppercase;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  /* Overlay révélé au survol */
  .card .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Espace le numéro en haut et le texte en bas */
    align-items: flex-start; /* Aligne tout à gauche */
    text-align: left;
    
    /* Overlay assombri léger + filtre */
    background: rgba(0, 0, 0, 0.45); 
    backdrop-filter: blur(2px);

    color: #ffffff;
    padding: 28px;
    box-sizing: border-box;

    transform: translateX(${({ $isEven }) => ($isEven ? '100%' : '-100%')});
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  /* Numéro d'ID géant en haut à gauche */
  .card .content .badge-id {
    font-size: 56px;
    font-weight: 900;
    color: #ffffff;
    line-height: 1;
  }

  /* Conteneur des infos du bas */
  .card .content .bottom-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  /* Titre en majuscules gras */
  .card .content .heading {
    font-size: 26px;
    font-weight: 900;
    margin: 0;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* Description */
  .card .content .description {
    font-size: 13px;
    margin: 0;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.45;
  }

  /* Le Prix stylisé exactement comme le bouton blanc "LEARN MORE →" */
  .card .content .price-button {
    background: #ffffff;
    color: #000000;
    font-size: 14px;
    font-weight: 800;
    padding: 12px 22px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 6px;
    display: inline-block;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  .card:hover .content {
    transform: translateX(0);
  }

  .card:hover .front-content {
    transform: translateX(${({ $isEven }) => ($isEven ? '-30%' : '30%')});
    opacity: 0;
  }
`;

export default Card;