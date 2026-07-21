import './PromoBanner.css';

interface PromoBannerProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  image?: string;
  code?: string;
  dark?: boolean;
}

export default function PromoBanner({
  title,
  subtitle,
  buttonText = 'SHOP NOW',
  buttonLink = '#',
  image,
  code,
  dark = true
}: PromoBannerProps) {
  return (
    <div className={`promo-banner ${dark ? 'promo-dark' : 'promo-light'}`}>
      <div className="promo-content">
        {code && <p className="promo-code">Decade <strong>{code}</strong> to Discount</p>}
        <h2 className="promo-title">{title}</h2>
        <a href={buttonLink} className={dark ? 'btn-primary' : 'btn-white'}>{buttonText}</a>
        {subtitle && <p className="promo-subtitle">{subtitle}</p>}
      </div>
      {image && (
        <div className="promo-image-container">
          <img src={image} alt={title} className="promo-image" />
        </div>
      )}
    </div>
  );
}
