import { VIDEO_URL } from "../constants";

function isStreamingEmbed(url: string): boolean {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    return (
      host === "youtube.com" ||
      host === "youtu.be" ||
      host === "m.youtube.com" ||
      host === "vimeo.com" ||
      host === "player.vimeo.com"
    );
  } catch {
    return false;
  }
}

function youtubeEmbedUrl(url: string): string {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.slice(1);
      return `https://www.youtube.com/embed/${id}`;
    }
    if (u.hostname.includes("youtube.com")) {
      const path = u.pathname.split("/").filter(Boolean);
      if (path[0] === "shorts" && path[1]) {
        return `https://www.youtube.com/embed/${path[1]}`;
      }
      if (path[0] === "embed" && path[1]) {
        return url;
      }
      const id = u.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
  } catch {
    /* fall through */
  }
  return url;
}

type VideoEmbedProps = {
  url?: string;
  title: string;
  className?: string;
  aspectClassName?: string;
};

function isUnsetVideoUrl(url: string): boolean {
  return (
    !url.trim() ||
    url.includes("YOUR_VIDEO_ID") ||
    url.includes("REPLACE")
  );
}

export function VideoEmbed({
  url = VIDEO_URL,
  title,
  className = "",
  aspectClassName = "aspect-video",
}: VideoEmbedProps) {
  const unset = isUnsetVideoUrl(url);
  const streaming = !unset && isStreamingEmbed(url);
  const src =
    streaming && url.includes("youtu") ? youtubeEmbedUrl(url) : url;

  return (
    <div
      className={`overflow-hidden rounded-lg border border-black/[0.06] bg-ink shadow-card ${className}`}
    >
      <div className={aspectClassName}>
        {unset ? (
          <div className="flex h-full flex-col items-center justify-center bg-ink px-8 text-center">
            <p className="text-[14px] font-medium text-white/85">{title}</p>
            <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-white/45">
              Set <span className="font-mono text-[12px] text-white/55">VIDEO_URL</span>{" "}
              in <span className="font-mono text-[12px] text-white/55">constants.ts</span>{" "}
              to your YouTube embed, Vimeo URL, or video file path.
            </p>
          </div>
        ) : streaming ? (
          <iframe
            src={src}
            title={title}
            className="h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <video
            className="h-full w-full object-cover"
            controls
            playsInline
            preload="metadata"
          >
            <source src={url} />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}
