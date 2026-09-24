import { useState } from "react";
import { Play } from "lucide-react";

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  /** Accessible label for the play button, e.g. "Video abspielen: …" */
  playLabel: string;
  /** Small caption in the corner of the poster, e.g. the duration */
  badge?: string;
}

/**
 * Click-to-load YouTube player.
 *
 * Until the visitor presses play, only the poster image is loaded – no iframe,
 * no YouTube script, no cookies. That keeps five embeds on one page cheap and
 * leaves the prerendered HTML with a plain link to the video, which crawlers
 * and no-JavaScript visitors can follow. The player itself comes from
 * youtube-nocookie.com.
 */
export function YouTubeFacade({ videoId, title, playLabel, badge }: YouTubeFacadeProps) {
  const [active, setActive] = useState(false);
  const poster = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  if (active) {
    return (
      <div className="relative aspect-video w-full bg-black">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      onClick={(event) => {
        // Modifier clicks keep the normal "open on YouTube" behaviour.
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
        event.preventDefault();
        setActive(true);
      }}
      aria-label={playLabel}
      className="group relative block aspect-video w-full overflow-hidden bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <img
        src={poster}
        alt=""
        width={1280}
        height={720}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-[0_0_40px_hsl(var(--noreja-main)/0.8)] transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20">
          <Play className="ml-1 h-7 w-7 fill-current md:h-9 md:w-9" />
        </span>
      </span>
      {badge && (
        <span className="absolute bottom-3 right-3 rounded-md bg-black/75 px-2 py-0.5 text-xs font-medium text-white">
          {badge}
        </span>
      )}
    </a>
  );
}
