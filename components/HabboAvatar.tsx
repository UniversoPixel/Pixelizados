interface HabboAvatarProps {
  username: string;
  direction?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  headDirection?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  action?: 'std' | 'wlk' | 'sit' | 'lay';
  gesture?: 'std' | 'sml' | 'sad' | 'srpr' | 'eyb';
  size?: 's' | 'm' | 'l';
  headOnly?: boolean;
  className?: string;
}

export default function HabboAvatar({
  username,
  direction = 2,
  headDirection = 3,
  action = 'std',
  gesture = 'sml',
  size = 'l',
  headOnly = false,
  className = '',
}: HabboAvatarProps) {
  const baseUrl = 'https://www.habbo.com/habbo-imaging/avatarimage';
  const queryParams = new URLSearchParams({
    user: username,
    direction: direction.toString(),
    head_direction: headDirection.toString(),
    action,
    gesture,
    size,
    headonly: headOnly ? '1' : '0',
  });

  const avatarUrl = `${baseUrl}?${queryParams.toString()}`;

  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <img
        src={avatarUrl}
        alt={`Avatar de ${username}`}
        className="pixelated drop-shadow-[2px_2px_0px_rgba(0,0,0,0.6)] select-none pointer-events-none"
        loading="lazy"
      />
    </div>
  );
}
