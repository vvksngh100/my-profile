import React from "react";

export function ReactIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="#61DAFB">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NextjsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 180" className={className} fill="none">
      <mask id="mask-next" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#mask-next)">
        <circle cx="90" cy="90" r="90" fill="black" stroke="#fff" strokeWidth="6" />
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear)" />
        <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear)" />
      </g>
      <defs>
        <linearGradient id="paint0_linear" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ReduxIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#764ABC">
      <path d="M15.772 9.091c-.782 0-1.472.417-1.854 1.042-.317-.464-.813-.808-1.397-.954.218-.621.144-1.332-.244-1.897-.611-.888-1.83-1.121-2.718-.51-.888.611-1.121 1.83-.51 2.718.39.567 1.048.878 1.708.835.039.65.34 1.258.839 1.666-.312.593-.327 1.309.006 1.928.473.88 1.576 1.206 2.456.733.88-.473 1.206-1.576.733-2.456-.252-.469-.714-.775-1.222-.85.045-.631-.157-1.259-.575-1.721.246-.317.625-.534 1.078-.534 1.105 0 2 .895 2 2s-.895 2-2 2h-.5v1.5h.5c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5zm-5.748 1.488c-.367-.252-.464-.756-.212-1.123.252-.367.756-.464 1.123-.212.367.252.464.756.212 1.123-.252.367-.756.464-1.123.212zm4.12 3.864c-.364.195-.82.061-1.015-.303-.195-.364-.061-.82.303-1.015.364-.195.82-.061 1.015.303.195.364.061.82-.303 1.015z" />
    </svg>
  );
}

export function JavascriptIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path d="M7.7 18.2c0 .9-.5 1.5-1.5 1.5-1.1 0-1.6-.7-1.8-1.5l1.3-.8c.1.4.3.7.6.7.2 0 .4-.1.4-.4v-5.2h1v5.7zm8.8-1.4c-.4.8-1.2 1.4-2.3 1.4-1.4 0-2.3-.9-2.3-2.4 0-1.4.9-2.3 2.3-2.3.6 0 1.2.2 1.6.6l-.9.9c-.2-.2-.5-.3-.7-.3-.6 0-1 .5-1 1.1 0 .6.4 1.1 1 1.1.4 0 .7-.2.9-.5l1.4.5z" fill="#000" />
    </svg>
  );
}

export function TypescriptIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path d="M11.5 8h-6v2h2v7.5h2V10h2V8zm4.3 4.8c-.8 0-1.3.4-1.3 1 0 1.2 2.6.9 2.6 2.7 0 1.1-.9 1.7-2.1 1.7-1.1 0-1.9-.5-2.2-1.3l1.5-.9c.2.4.4.6.8.6.3 0 .5-.1.5-.4 0-1.2-2.6-.9-2.6-2.7 0-1.1.9-1.7 2-1.7.9 0 1.6.4 1.9 1.1l-1.1.9z" fill="#FFFFFF" />
    </svg>
  );
}

export function TailwindIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#38BDF8">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
    </svg>
  );
}

export function MaterialUiIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#007FFF">
      <path d="M0 2.475v10.39l3 1.718V5.923l6 3.447v6.867l3 1.718V7.64L0 2.475zm12 6.892l-3-1.718 6-3.448v10.366l-3-1.718V9.367zm3-5.174l6 3.447v10.39l-3 1.718V9.367l-3-1.717V4.193zm6 5.174l3-1.718v6.945l-3 1.718V9.367z" />
    </svg>
  );
}

export function NodejsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#5FA04E">
      <path d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11L12 2zm0 2.3L4.5 8.7v6.6l7.5 4.4 7.5-4.4V8.7L12 4.3z" />
    </svg>
  );
}

export function ExpressIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <text x="2" y="16" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="currentColor">
        ex
      </text>
    </svg>
  );
}

export function DockerIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#2496ED">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.186-.186h-2.12a.186.186 0 00-.184.185v1.888c0 .102.082.185.185.185M23.77 12.18c-.401-.271-1.332-.387-2.197-.107-.168-.785-.68-1.521-1.423-1.996l-.504-.323-.332.492c-.52.772-.647 1.763-.585 2.569-.47.26-.983.473-1.528.625l-.337.094.024.35c.105 1.554-.343 3.123-1.282 4.382-1.303 1.745-3.327 2.766-5.467 2.766-2.138 0-4.163-1.021-5.466-2.766-.543-.728-.894-1.579-1.05-2.48l-.053-.306-.312.023c-.76.056-1.53-.082-2.197-.423L.5 15.75l.18.513c.895 2.54 2.802 4.475 5.378 5.428 1.83.679 3.82.96 5.882.96 2.062 0 4.053-.281 5.882-.96 2.652-.98 4.606-2.996 5.485-5.642.457-1.378.683-2.827.683-4.28 0-.414-.02-.82-.06-1.22l-.16-.369z" />
    </svg>
  );
}

export function RedisIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#DC382D">
      <path d="M21.577 9.613l-8.583-4.955a1.992 1.992 0 00-1.988 0L2.423 9.613a2.002 2.002 0 00-.994 1.732v4.887c0 .717.382 1.377.994 1.732l8.583 4.955c.614.354 1.374.354 1.988 0l8.583-4.955a1.998 1.998 0 00.994-1.732v-4.887a2 2 0 00-.994-1.732zm-9.577-3.08l7.53 4.348-2.784 1.607-7.53-4.348 2.784-1.607zm-7.988 5.748l2.784-1.607 7.53 4.348-2.784 1.607-7.53-4.348zm8.988 8.653l-7.53-4.348v-2.906l7.53 4.348v2.906zm8-4.348l-7.53 4.348v-2.906l7.53-4.348v2.906z" />
    </svg>
  );
}

export function NginxIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#009639">
      <path d="M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm6.059 16.719L15.6 15.24V8.76L8.4 15.24V7.281h2.4v6.48l7.2-6.48v9.438z" />
    </svg>
  );
}

export function PostgresIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#4169E1">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  );
}

export function MysqlIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#4479A1">
      <path d="M12 3c-4.97 0-9 1.79-9 4s4.03 4 9 4 9-1.79 9-4-4.03-4-9-4zm0 6c-4.97 0-9-1.79-9-4s4.03-4 9-4 9 1.79 9 4-4.03 4-9 4zm-9 3v4c0 2.21 4.03 4 9 4s9-1.79 9-4v-4c-1.85 1.54-5.22 2.5-9 2.5s-7.15-.96-9-2.5zm0 6v3c0 2.21 4.03 4 9 4s9-1.79 9-4v-3c-1.85 1.54-5.22 2.5-9 2.5s-7.15-.96-9-2.5z" />
    </svg>
  );
}

export function GitIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#F05032">
      <path d="M21.62 10.45l-8.07-8.07a2.53 2.53 0 00-3.58 0L8.03 4.32l2.36 2.36a1.86 1.86 0 012.35.34 1.86 1.86 0 01.35 2.37l2.27 2.27a1.86 1.86 0 012.36.35 1.86 1.86 0 010 2.63 1.86 1.86 0 01-2.63 0 1.87 1.87 0 01-.36-2.39L12.5 9.71v4.88a1.86 1.86 0 01.49 1.3 1.86 1.86 0 01-1.86 1.86 1.86 1.86 0 01-1.86-1.86c0-.52.22-1 .57-1.34V9.65a1.86 1.86 0 01-.98-1.63c0-.46.17-.89.46-1.23L6.96 4.43 2.38 9.01a2.53 2.53 0 000 3.58l8.07 8.07c.99.99 2.59.99 3.58 0l7.59-7.59c.99-.99.99-2.59 0-3.58z" />
    </svg>
  );
}

export function PostmanIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#FF6C37">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6a6 6 0 00-6 6c0 1.66.67 3.16 1.76 4.24l7.07-7.07A5.96 5.96 0 0012 6zm4.24 1.76l-7.07 7.07A5.96 5.96 0 0012 18a6 6 0 006-6c0-1.66-.67-3.16-1.76-4.24z" fill="#FFF" />
    </svg>
  );
}

export function SystemDesignIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#38BDF8" strokeWidth="2">
      <rect x="2" y="2" width="8" height="6" rx="1" />
      <rect x="14" y="2" width="8" height="6" rx="1" />
      <rect x="8" y="16" width="8" height="6" rx="1" />
      <path d="M6 8v3a2 2 0 002 2h8a2 2 0 002-2V8M12 13v3" />
    </svg>
  );
}

export function ShardingIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#A855F7" strokeWidth="2">
      <path d="M4 6h16M4 12h16M4 18h16" />
      <circle cx="7" cy="6" r="2" fill="#A855F7" />
      <circle cx="17" cy="12" r="2" fill="#A855F7" />
      <circle cx="10" cy="18" r="2" fill="#A855F7" />
    </svg>
  );
}

export function AiBrainIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#00D2FF" strokeWidth="2">
      <path d="M12 2a4 4 0 00-4 4v1a4 4 0 00-2 3.46A4 4 0 004 14a4 4 0 004 4h8a4 4 0 004-4 4 4 0 00-2-3.54V7a4 4 0 00-4-4h-2z" />
      <path d="M12 6v6m-3-3h6" />
    </svg>
  );
}

export function VectorDbIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#10B981" strokeWidth="2">
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="12" cy="18" r="3" />
      <path d="M8.5 7.5l7 7M15.5 7.5l-7 7" strokeDasharray="2 2" />
    </svg>
  );
}
