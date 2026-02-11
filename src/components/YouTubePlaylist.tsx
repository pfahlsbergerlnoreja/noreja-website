import { motion } from "framer-motion";
import { useState } from "react";

interface YouTubePlaylistProps {
  playlistId: string;
  title?: string;
  className?: string;
}

export function YouTubePlaylist({ 
  playlistId, 
  title,
  className = "" 
}: YouTubePlaylistProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const embedUrl = `https://www.youtube.com/embed/videoseries?list=${playlistId}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`w-full ${className}`}
    >
      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/95 shadow-xl shadow-noreja-main/10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-noreja-main/10 via-transparent to-noreja-secondary/20 opacity-70 z-10" />
        
        <div className="relative z-20 p-4 lg:p-8">
          {title && (
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              {title}
            </h3>
          )}
          
          {/* Responsive iframe container with 16:9 aspect ratio */}
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted/50 rounded-lg">
                <div className="animate-pulse text-muted-foreground">Loading playlist...</div>
              </div>
            )}
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={embedUrl}
              title={title || "YouTube Playlist"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setIsLoaded(true)}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
