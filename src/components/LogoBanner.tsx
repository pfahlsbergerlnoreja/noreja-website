import React, { useMemo } from 'react';

// Import all logo URLs eagerly: with eager:false each image becomes a tiny
// extra JS chunk (one network round trip per image in the critical path);
// eager:true inlines just the URL strings into this bundle.
const customerImages = import.meta.glob<{ default: string }>(
  '../assets/customers/*.{png,jpg,jpeg,svg,webp}',
  { eager: true }
);

const partnerImages = import.meta.glob<{ default: string }>(
  '../assets/partners/partners_white/*.{png,jpg,jpeg,svg,webp}',
  { eager: true }
);

// Fisher-Yates shuffle function
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

type LogoSize = 'regular' | 'large' | 'xlarge';

interface Logo {
  name: string;
  logo: string;
  size: LogoSize;
}

// Memoized logo item component to prevent unnecessary re-renders
const LogoItem = React.memo<{ company: Logo; index: number }>(({ company, index }) => {
  // Apply size classes based on logo size
  const sizeClass =
    company.size === 'xlarge' ? 'max-h-20 max-w-32' :
    company.size === 'large' ? 'max-h-16 max-w-24' :
    'max-h-12 max-w-20';

  const containerClass =
    company.size === 'xlarge' ? 'w-32 h-20' :
    company.size === 'large' ? 'w-24 h-16' :
    'w-20 h-12';

  // Explicit width/height (matching the max box above) so the browser can
  // reserve space before the image loads (Lighthouse CLS audit). With
  // object-contain the logo is letterboxed inside the box — visually identical.
  const { width, height } =
    company.size === 'xlarge' ? { width: 128, height: 80 } :
    company.size === 'large' ? { width: 96, height: 64 } :
    { width: 80, height: 48 };

  return (
    <div className="flex-shrink-0 mx-8 flex items-center justify-center max-w-fit">
      <div className={`relative ${containerClass} flex items-center justify-center opacity-60 hover:opacity-80 transition-opacity duration-300`}>
        <img
          src={company.logo}
          alt={`${company.name} logo`}
          width={width}
          height={height}
          className={`${sizeClass} object-contain filter grayscale hover:grayscale-0 transition-all duration-300`}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
});

LogoItem.displayName = 'LogoItem';

// Build logo objects from the eagerly imported images
const processImages = (
  images: Record<string, { default: string }>,
  nameStripPattern: RegExp
): Logo[] => {
  return Object.entries(images).map(([path, module]) => {
    const filename = path.split('/').pop()?.replace(/\.(png|jpg|jpeg|svg|webp)$/, '') || '';

    // Determine size based on filename postfix
    let size: LogoSize = 'regular';
    if (filename.toLowerCase().includes('_xlarge')) {
      size = 'xlarge';
    } else if (filename.toLowerCase().includes('_large')) {
      size = 'large';
    }

    const name = filename
      .replace(nameStripPattern, '')
      .replace(/[-_]/g, ' ')
      .trim()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return {
      name,
      logo: module.default,
      size
    };
  });
};

// Computed once at module load, synchronously: rendering the banner on the very
// first paint (instead of popping it in after an effect) avoids layout shift (CLS)
const allLogos: Logo[] = [
  ...processImages(customerImages, /_logo|_white|-logo|_large|_xlarge/gi),
  ...processImages(partnerImages, /_logo|_white|-logo|-white|_large|_xlarge/gi)
];

const LogoBanner: React.FC = () => {
  // Memoize duplicated logos to prevent re-creation on every render
  const duplicatedLogos = useMemo(() => {
    return [...allLogos, ...allLogos, ...allLogos, ...allLogos];
  }, []);

  return (
    <div className="relative overflow-hidden py-8 w-full">
      <div className="flex animate-scroll w-full">
        {duplicatedLogos.map((company, index) => {
          // Create stable key using logo URL (which is stable from Vite) and position
          const logoFilename = company.logo.split('/').pop()?.split('?')[0] || company.logo;
          const stableKey = `${company.name}-${logoFilename}-${index}`;
          return (
            <LogoItem key={stableKey} company={company} index={index} />
          );
        })}
      </div>
      
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background/20 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background/20 to-transparent pointer-events-none" />
    </div>
  );
};

export default LogoBanner;
