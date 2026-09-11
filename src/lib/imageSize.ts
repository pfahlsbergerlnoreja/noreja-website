import { imageSizes } from './imageSizes';

export interface ImageSize {
  width: number;
  height: number;
}

/**
 * Resolves the intrinsic size of a bundled image from its URL.
 *
 * Images imported through `import.meta.glob` reach the components as a URL
 * only: `/src/assets/team/Waibel.webp` in dev, `/assets/Waibel-B3xK1z.webp`
 * after a build. Both keep the original file name, which is what the generated
 * map in imageSizes.ts is keyed by — so the file name is enough to look the
 * dimensions back up and put width/height on the `<img>`.
 *
 * Returns undefined for remote images (HubSpot blog covers, for example) and
 * for anything not in the map; callers pass their own fallback in that case.
 */
export function getImageSize(src: string | undefined | null): ImageSize | undefined {
  if (!src) return undefined;

  // Strip query/hash, then take the last path segment.
  const fileName = src.split(/[?#]/)[0].split('/').pop();
  if (!fileName) return undefined;

  const direct = imageSizes[fileName];
  if (direct) {
    return { width: direct[0], height: direct[1] };
  }

  // Built assets carry a content hash: "Waibel-B3xK1z.webp" → "Waibel.webp".
  const match = fileName.match(/^(.*)-[A-Za-z0-9_-]{8,}(\.[A-Za-z0-9]+)$/);
  if (match) {
    const unhashed = imageSizes[`${match[1]}${match[2]}`];
    if (unhashed) {
      return { width: unhashed[0], height: unhashed[1] };
    }
  }

  return undefined;
}

/**
 * Same as getImageSize, but always returns something — for `<img>` tags that
 * must carry width/height even when the source is remote or unknown. The
 * fallback only has to describe the aspect ratio of the box the CSS gives the
 * image.
 */
export function getImageSizeOr(
  src: string | undefined | null,
  fallback: ImageSize
): ImageSize {
  return getImageSize(src) ?? fallback;
}
