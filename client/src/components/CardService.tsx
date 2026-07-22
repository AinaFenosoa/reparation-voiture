import { useRef } from 'react';
import styled from 'styled-components';

interface ServiceCardProps {
  id: number;
  nom: string;
  description?: string;
  prix: string;
  image?: string;
  photoService?: string;
  reduction?: string;
  is_featured?: boolean;
  is_deal?: boolean;
}

const Card = ({ 
  nom, 
  id, 
  description, 
  prix, 
  image, 
  photoService,
  reduction,
  is_featured,
  is_deal
}: ServiceCardProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);

  const formattedId = id < 10 ? `0${id}` : id;
  const bgImage = image || photoService || 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&auto=format&fit=crop&q=60';

  // Calcule si le curseur est dans la moitié gauche ou droite de la carte
  const getIsLeft = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    return mouseX < rect.width / 2;
  };

  // Gestion de l'ENTRÉE de la souris
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const isLeft = getIsLeft(e);
    const contentEl = contentRef.current;
    const frontEl = frontRef.current;

    if (contentEl) {
      // 1. Placement instantané du bon côté (sans animation)
      contentEl.style.transition = 'none';
      contentEl.style.transform = isLeft ? 'translateX(-100%)' : 'translateX(100%)';

      // 2. Force le recalcul synchrone du layout par le navigateur
      void contentEl.offsetHeight;

      // 3. Animation fluide vers le centre
      contentEl.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
      contentEl.style.transform = 'translateX(0)';
    }

    if (frontEl) {
      frontEl.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
      frontEl.style.transform = isLeft ? 'translateX(30%)' : 'translateX(-30%)';
      frontEl.style.opacity = '0';
    }
  };

  // Gestion de la SORTIE de la souris
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const isLeft = getIsLeft(e);
    const contentEl = contentRef.current;
    const frontEl = frontRef.current;

    if (contentEl) {
      // Glissement vers le côté où le curseur sort
      contentEl.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
      contentEl.style.transform = isLeft ? 'translateX(-100%)' : 'translateX(100%)';
    }

    if (frontEl) {
      frontEl.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
      frontEl.style.transform = 'translateX(0)';
      frontEl.style.opacity = '1';
    }
  };

  return (
    <StyledWrapper $bgImage={bgImage}>
      <div 
        className="card-container" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card">
          {/* Face avant par défaut */}
          <div className="front-content" ref={frontRef}>
            <p>{nom}</p>
          </div>

          {/* Overlay révélé au survol */}
          <div className="content" ref={contentRef}>
            {/* En-tête : ID + Badges */}
            <div className="top-header">
              <span className="badge-id">{formattedId}</span>
              
              <div className="badges-group">
                {reduction && (
                  <span className="tag tag-reduction">{reduction}</span>
                )}
                {(is_deal || is_featured) && (
                  <span className="tag tag-featured">
                    {is_featured ? 'Vedette' : 'Offre'}
                  </span>
                )}
              </div>
            </div>

            {/* Infos du bas */}
            <div className="bottom-info">
              <h3 className="heading">{nom}</h3>
              {description && <p className="description">{description}</p>}
              <div className="price-button">{prix}</div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ $bgImage: string }>`
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
    transform: translateX(0);
    opacity: 1;
  }

  .card .front-content p {
    font-size: 28px;
    font-weight: 800;
    margin: 0;
    color: #ffffff;
    text-transform: uppercase;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9);
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
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
    
    background: rgba(0, 0, 0, 0.55); 
    backdrop-filter: blur(3px);

    color: #ffffff;
    padding: 24px;
    box-sizing: border-box;

    /* Caché hors écran par défaut */
    transform: translateX(-100%);
  }

  .card .content .top-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
  }

  .card .content .badge-id {
    font-size: 48px;
    font-weight: 900;
    color: #ffffff;
    line-height: 1;
  }

  .card .content .badges-group {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .card .content .tag {
    font-size: 11px;
    font-weight: 800;
    padding: 4px 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-radius: 2px;
  }

  .card .content .tag-reduction {
    background: #e63946;
    color: #ffffff;
  }

  .card .content .tag-featured {
    background: #ffb703;
    color: #000000;
  }

  .card .content .bottom-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
  }

  .card .content .heading {
    font-size: 22px;
    font-weight: 900;
    margin: 0;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    line-height: 1.2;
  }

  .card .content .description {
    font-size: 13px;
    margin: 0;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .card .content .price-button {
    background: #ffffff;
    color: #000000;
    font-size: 14px;
    font-weight: 800;
    padding: 10px 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 4px;
    display: inline-block;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export default Card;