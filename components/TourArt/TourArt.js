// Small flat illustrations used as the picture on journey cards until real photos are set in data/images.js
const ART = {
  ladakh: '<rect width="400" height="300" fill="#E4EEF2"/><path d="M0 200 L70 120 L130 170 L200 90 L270 160 L330 110 L400 150 L400 300 L0 300Z" fill="#B9CCD4"/><path d="M200 90 L214 110 L186 110Z M330 110 L342 127 L318 127Z" fill="#FFFFFF"/><ellipse cx="200" cy="265" rx="170" ry="22" fill="#8ECAD3"/>',
  tibet: '<rect width="400" height="300" fill="#F1E9DF"/><path d="M0 170 L90 100 L160 150 L240 70 L320 140 L400 100 L400 300 L0 300Z" fill="#D9C7B1"/><rect x="170" y="190" width="60" height="40" fill="#FFFFFF"/><rect x="180" y="180" width="40" height="12" fill="#C4792E"/>',
  heaven: '<rect width="400" height="300" fill="#E4EEF2"/><path d="M0 180 L60 110 L120 160 L190 80 L260 150 L320 100 L400 160 L400 300 L0 300Z" fill="#B9CCD4"/><path d="M0 300 Q200 220 400 300Z" fill="#E6C9A6"/>',
  rajasthan: '<rect width="400" height="300" fill="#F7E8D2"/><path d="M0 220 Q100 160 200 220 T400 210 L400 300 L0 300Z" fill="#EBCFA6"/><path d="M0 260 Q120 220 240 260 T400 250 L400 300 L0 300Z" fill="#DDB889"/><circle cx="310" cy="80" r="26" fill="#FFFFFF"/>',
  goa: '<rect width="400" height="300" fill="#DDF0EF"/><path d="M0 190 L400 170 L400 300 L0 300Z" fill="#8ECAD3"/><path d="M0 240 Q200 215 400 240 L400 300 L0 300Z" fill="#F3E6D4"/><path d="M60 230 L60 140 M60 140 Q90 120 110 150 M60 140 Q30 120 10 150" stroke="#66747C" stroke-width="6" fill="none"/>',
  k2k: '<rect width="400" height="300" fill="#E3EFE4"/><path d="M0 160 L80 120 L150 150 L230 100 L310 140 L400 110 L400 300 L0 300Z" fill="#B8D2BB"/><path d="M0 300 L400 300 L400 250 Q200 230 0 250Z" fill="#8ECAD3"/>',
  mustang: '<rect width="400" height="300" fill="#F1E9DF"/><path d="M0 160 L80 90 L150 140 L230 60 L310 130 L400 90 L400 300 L0 300Z" fill="#D9C7B1"/><path d="M230 60 L244 82 L216 82Z" fill="#FFFFFF"/><path d="M0 300 Q200 230 400 300Z" fill="#C9B59A"/>',
  bhutan: '<rect width="400" height="300" fill="#E3EFE4"/><path d="M0 170 L70 110 L140 150 L220 80 L300 140 L400 100 L400 300 L0 300Z" fill="#9FBFA6"/><rect x="165" y="190" width="70" height="44" fill="#FFFFFF"/><path d="M160 190 L200 172 L240 190Z" fill="#C4792E"/>',
};

export default function TourArt({ id, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={{ width: "100%", height: "100%", display: "block" }}
      dangerouslySetInnerHTML={{ __html: ART[id] ?? ART.ladakh }}
    />
  );
}
