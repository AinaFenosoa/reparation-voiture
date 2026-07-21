import styled from 'styled-components';

interface ServiceState {
  id: number;
  nom: string;
  description: string;
  prix: string;
}

const Card = ({ nom, id, description, prix }: ServiceState) => {
  const isEven = id % 2 === 0;

  return (
    // On passe $isEven à StyledWrapper (le $ évite d'injecter la prop dans le DOM)
    <StyledWrapper $isEven={isEven}>
      <div className="card-container">
        <div className="card">
          <div className="front-content">
            <p>{nom}</p>
          </div>
          
          <div className="content">
            <span className="badge-id">#{id}</span>
            <p className="heading">{nom}</p>
            <p className="description">{description}</p>
            <p className="price">{prix} €</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ $isEven: boolean }>`
  .card-container {
    width: 300px;
    height: 300px;
    position: relative;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    background: #1e1e24;
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
    font-weight: 700;
    margin: 0;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 12px;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
    color: #ffffff;
    padding: 24px;
    box-sizing: border-box;

    /* Alternance selon l'ID :
       - Si pair ($isEven = true)   -> arrive de la DROITE (100%)
       - Si impair ($isEven = false) -> arrive de la GAUCHE (-100%)
    */
    transform: translateX(${({ $isEven }) => ($isEven ? '100%' : '-100%')});
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card .content .badge-id {
    font-size: 12px;
    text-transform: uppercase;
    background: rgba(0, 0, 0, 0.2);
    padding: 2px 8px;
    border-radius: 10px;
  }

  .card .content .heading {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
  }

  .card .content .description {
    font-size: 14px;
    margin: 0;
    opacity: 0.9;
  }

  .card .content .price {
    font-size: 20px;
    font-weight: 800;
    margin-top: 5px;
  }

  /* Au survol : le tiroir revient au centre */
  .card:hover .content {
    transform: translateX(0);
  }

  /* Décalage léger du titre d'origine dans le sens opposé au tiroir */
  .card:hover .front-content {
    transform: translateX(${({ $isEven }) => ($isEven ? '-30%' : '30%')});
    opacity: 0;
  }
`;

export default Card;