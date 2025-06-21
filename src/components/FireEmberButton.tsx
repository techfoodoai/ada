// import React, {
//   useState,
//   MouseEvent,
//   ButtonHTMLAttributes,
//   ReactNode,
//   useEffect,
// } from "react";

// // Type definitions for color schemes
// export type ColorScheme = {
//   gradient: string[];
//   shadowColor: string;
//   textColor: string;
//   glowColor: string;
// };

// // Predefined color schemes
// export const COLOR_SCHEMES = {
//   fire: {
//     gradient: ["#ff9a56", "#ff6b35", "#ff4757", "#ff3742"],
//     shadowColor: "rgba(255, 107, 53, 0.6)",
//     textColor: "#ffffff",
//     glowColor: "rgba(255, 107, 53, 0.4)",
//   },
//   gold: {
//     gradient: ["#d4af37", "#f4e4a6", "#e6d06f", "#b8860b"],
//     shadowColor: "rgba(212, 175, 55, 0.6)",
//     textColor: "#ffffff",
//     glowColor: "rgba(212, 175, 55, 0.4)",
//   },
//   ocean: {
//     gradient: ["#667eea", "#764ba2", "#5a67d8", "#4c51bf"],
//     shadowColor: "rgba(102, 126, 234, 0.6)",
//     textColor: "#ffffff",
//     glowColor: "rgba(102, 126, 234, 0.4)",
//   },
//   emerald: {
//     gradient: ["#27ae60", "#2ecc71", "#58d68d", "#16a085"],
//     shadowColor: "rgba(46, 204, 113, 0.6)",
//     textColor: "#ffffff",
//     glowColor: "rgba(46, 204, 113, 0.4)",
//   },
//   sunset: {
//     gradient: ["#ff9a9e", "#fecfef", "#ff6b9d", "#ee5a6f"],
//     shadowColor: "rgba(255, 154, 158, 0.6)",
//     textColor: "#ffffff",
//     glowColor: "rgba(255, 154, 158, 0.4)",
//   },
//   purple: {
//     gradient: ["#667eea", "#764ba2", "#8e44ad", "#9b59b6"],
//     shadowColor: "rgba(142, 68, 173, 0.6)",
//     textColor: "#ffffff",
//     glowColor: "rgba(142, 68, 173, 0.4)",
//   },
//   greenMist: {
//     gradient: ["#cae6d5", "#a8d5ba", "#6bbf8d", "#4fae78"],
//     shadowColor: "rgba(107, 191, 141, 0.6)",
//     textColor: "#ffffff",
//     glowColor: "rgba(107, 191, 141, 0.4)",
//   },
// } satisfies Record<string, ColorScheme>;

// export type PresetColorScheme = keyof typeof COLOR_SCHEMES;

// export type ButtonSize = "small" | "medium" | "large";

// export interface NeonGlowButtonProps
//   extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
//   children: ReactNode;
//   colorScheme?: PresetColorScheme | ColorScheme;
//   size?: ButtonSize;
//   onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
//   disabled?: boolean;
//   className?: string;
//   pulseIntensity?: "low" | "medium" | "high";
//   animationSpeed?: "slow" | "medium" | "fast";
// }

// interface SizeConfig {
//   padding: string;
//   fontSize: string;
//   borderRadius: string;
//   borderWidth: string;
// }

// // Global styles - only injected once
// let globalStylesInjected = false;

// const injectGlobalStyles = () => {
//   if (typeof document === "undefined" || globalStylesInjected) return;

//   const styleElement = document.createElement("style");
//   styleElement.textContent = `
//     @keyframes neonPulse {
//       0%, 100% {
//         box-shadow:
//           inset 0 0 20px var(--neon-glow-color),
//           0 0 20px var(--neon-shadow-color),
//           0 0 40px var(--neon-glow-color),
//           0 0 80px var(--neon-shadow-color);
//       }
//       50% {
//         box-shadow:
//           inset 0 0 30px var(--neon-glow-color),
//           0 0 40px var(--neon-shadow-color),
//           0 0 80px var(--neon-glow-color),
//           0 0 120px var(--neon-shadow-color);
//       }
//     }

//     @keyframes borderFlow {
//       0% {
//         background-position: 0% 50%;
//         transform: rotate(0deg);
//       }
//       25% {
//         background-position: 100% 50%;
//       }
//       50% {
//         background-position: 100% 50%;
//         transform: rotate(180deg);
//       }
//       75% {
//         background-position: 0% 50%;
//       }
//       100% {
//         background-position: 0% 50%;
//         transform: rotate(360deg);
//       }
//     }

//     @keyframes rippleEffect {
//       0% {
//         transform: scale(0);
//         opacity: 1;
//       }
//       100% {
//         transform: scale(4);
//         opacity: 0;
//       }
//     }

//     .neon-glow-button {
//       animation: neonPulse var(--neon-animation-duration, 2s) ease-in-out infinite;
//       backdrop-filter: blur(10px);
//       position: relative;
//       overflow: hidden;
//     }

//     .neon-glow-button::before {
//       content: '';
//       position: absolute;
//       top: -2px;
//       left: -2px;
//       right: -2px;
//       bottom: -2px;
//       background: linear-gradient(45deg, var(--neon-gradient));
//       background-size: 400% 400%;
//       border-radius: inherit;
//       z-index: -2;
//       animation: borderFlow calc(var(--neon-animation-duration, 2s) * 1.5) linear infinite;
//     }

//     .neon-glow-button::after {
//       content: '';
//       position: absolute;
//       top: 0;
//       left: 0;
//       right: 0;
//       bottom: 0;
//       background: rgba(0, 0, 0, 0.8);
//       border-radius: inherit;
//       z-index: -1;
//     }

//     .neon-glow-button:hover {
//       transform: translateY(-3px) scale(1.02);
//       animation-duration: calc(var(--neon-animation-duration, 2s) * 0.5);
//     }

//     .neon-glow-button:hover::before {
//       animation-duration: calc(var(--neon-animation-duration, 2s) * 0.8);
//     }

//     .neon-glow-button:disabled {
//       opacity: 0.4;
//       cursor: not-allowed;
//       animation: none;
//     }

//     .neon-glow-button:disabled::before {
//       animation: none;
//     }

//     .neon-glow-button:disabled:hover {
//       transform: none;
//     }

//     .neon-glow-button:active {
//       transform: translateY(-1px) scale(0.98);
//     }

//     .neon-glow-button .button-text {
//       position: relative;
//       z-index: 1;
//       text-shadow:
//         0 0 10px currentColor,
//         0 0 20px currentColor,
//         0 0 30px currentColor;
//       font-weight: 700;
//       letter-spacing: 1px;
//       text-transform: uppercase;
//     }
//   `;

//   document.head.appendChild(styleElement);
//   globalStylesInjected = true;
// };

// const NeonGlowButton: React.FC<NeonGlowButtonProps> = ({
//   children,
//   colorScheme = "gold",
//   size = "medium",
//   onClick,
//   disabled = false,
//   className = "",
//   pulseIntensity = "medium",
//   animationSpeed = "medium",
//   ...props
// }) => {
//   const [isClicked, setIsClicked] = useState<boolean>(false);

//   // Inject global styles on mount (client-side only)
//   useEffect(() => {
//     injectGlobalStyles();
//   }, []);

//   // Get color scheme (either preset or custom)
//   const colors: ColorScheme =
//     typeof colorScheme === "string" ? COLOR_SCHEMES[colorScheme] : colorScheme;

//   const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
//     if (disabled) return;

//     setIsClicked(true);
//     setTimeout(() => setIsClicked(false), 200);

//     // Create ripple effect
//     const button = e.currentTarget;
//     const ripple = document.createElement("div");
//     const rect = button.getBoundingClientRect();
//     const x = e.clientX - rect.left - 30;
//     const y = e.clientY - rect.top - 30;

//     ripple.style.cssText = `
//       position: absolute;
//       width: 60px;
//       height: 60px;
//       border-radius: 50%;
//       background: radial-gradient(circle, ${colors.glowColor} 0%, transparent 70%);
//       pointer-events: none;
//       animation: rippleEffect 0.8s ease-out;
//       left: ${x}px;
//       top: ${y}px;
//       z-index: 2;
//     `;

//     button.appendChild(ripple);
//     setTimeout(() => ripple.remove(), 800);

//     if (onClick) onClick(e);
//   };

//   const sizeStyles: Record<ButtonSize, SizeConfig> = {
//     small: {
//       padding: "12px 28px",
//       fontSize: "12px",
//       borderRadius: "8px",
//       borderWidth: "2px",
//     },
//     medium: {
//       padding: "16px 32px",
//       fontSize: "14px",
//       borderRadius: "12px",
//       borderWidth: "3px",
//     },
//     large: {
//       padding: "20px 40px",
//       fontSize: "16px",
//       borderRadius: "16px",
//       borderWidth: "4px",
//     },
//   };

//   const pulseIntensities = {
//     low: "0.3",
//     medium: "0.6",
//     high: "1.0",
//   };

//   const animationSpeeds = {
//     slow: "3s",
//     medium: "2s",
//     fast: "1s",
//   };

//   const gradientString = colors.gradient.join(", ");

//   const baseStyles: React.CSSProperties = {
//     background: "transparent",
//     color: colors.textColor,
//     border: `${sizeStyles[size].borderWidth} solid transparent`,
//     ...sizeStyles[size],
//     cursor: disabled ? "not-allowed" : "pointer",
//     position: "relative",
//     transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//     fontFamily: "'Orbitron', 'Courier New', monospace",
//     transform: isClicked ? "translateY(-1px) scale(0.98)" : "",
//     // CSS custom properties for the animations
//     "--neon-animation-duration": animationSpeeds[animationSpeed],
//     "--neon-pulse-intensity": pulseIntensities[pulseIntensity],
//     "--neon-shadow-color": colors.shadowColor,
//     "--neon-glow-color": colors.glowColor,
//     "--neon-gradient": gradientString,
//   } as React.CSSProperties;

//   return (
//     <button
//       className={`neon-glow-button ${className}`}
//       style={baseStyles}
//       onClick={handleClick}
//       disabled={disabled}
//       {...props}
//     >
//       <span className="button-text">{children}</span>
//     </button>
//   );
// };

// export default NeonGlowButton;

import React, {
  useState,
  MouseEvent,
  ButtonHTMLAttributes,
  ReactNode,
  useEffect,
} from "react";

// Type definitions for color schemes
export type ColorScheme = {
  gradient: string[];
  shadowColor: string;
  textColor: string;
  glowColor: string;
};

// Predefined color schemes
export const COLOR_SCHEMES = {
  fire: {
    gradient: ["#ff9a56", "#ff6b35", "#ff4757", "#ff3742"],
    shadowColor: "rgba(255, 107, 53, 0.6)",
    textColor: "#ffffff",
    glowColor: "rgba(255, 107, 53, 0.4)",
  },
  gold: {
    gradient: ["#d4af37", "#f4e4a6", "#e6d06f", "#b8860b"],
    shadowColor: "rgba(212, 175, 55, 0.6)",
    textColor: "#ffffff",
    glowColor: "rgba(212, 175, 55, 0.4)",
  },
  ocean: {
    gradient: ["#667eea", "#764ba2", "#5a67d8", "#4c51bf"],
    shadowColor: "rgba(102, 126, 234, 0.6)",
    textColor: "#ffffff",
    glowColor: "rgba(102, 126, 234, 0.4)",
  },
  emerald: {
    gradient: ["#27ae60", "#2ecc71", "#58d68d", "#16a085"],
    shadowColor: "rgba(46, 204, 113, 0.6)",
    textColor: "#ffffff",
    glowColor: "rgba(46, 204, 113, 0.4)",
  },
  sunset: {
    gradient: ["#ff9a9e", "#fecfef", "#ff6b9d", "#ee5a6f"],
    shadowColor: "rgba(255, 154, 158, 0.6)",
    textColor: "#ffffff",
    glowColor: "rgba(255, 154, 158, 0.4)",
  },
  purple: {
    gradient: ["#667eea", "#764ba2", "#8e44ad", "#9b59b6"],
    shadowColor: "rgba(142, 68, 173, 0.6)",
    textColor: "#ffffff",
    glowColor: "rgba(142, 68, 173, 0.4)",
  },
  greenMist: {
    gradient: ["#cae6d5", "#a8d5ba", "#6bbf8d", "#4fae78"],
    shadowColor: "rgba(255, 255, 255, 0.2)", // updated
    textColor: "#ffffff",
    glowColor: "rgba(255, 255, 255, 0.15)", // updated
  },
} satisfies Record<string, ColorScheme>;

export type PresetColorScheme = keyof typeof COLOR_SCHEMES;
export type ButtonSize = "small" | "medium" | "large";

export interface NeonGlowButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  children: ReactNode;
  colorScheme?: PresetColorScheme | ColorScheme;
  size?: ButtonSize;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  pulseIntensity?: "low" | "medium" | "high";
  animationSpeed?: "slow" | "medium" | "fast";
}

interface SizeConfig {
  padding: string;
  fontSize: string;
  borderRadius: string;
  borderWidth: string;
}

let globalStylesInjected = false;

const injectGlobalStyles = () => {
  if (typeof document === "undefined" || globalStylesInjected) return;

  const styleElement = document.createElement("style");
  styleElement.textContent = `
    @keyframes neonPulse {
      0%, 100% {
        box-shadow:
          inset 0 0 20px var(--neon-glow-color),
          0 0 20px var(--neon-shadow-color),
          0 0 40px var(--neon-glow-color),
          0 0 80px var(--neon-shadow-color);
      }
      50% {
        box-shadow:
          inset 0 0 30px var(--neon-glow-color),
          0 0 40px var(--neon-shadow-color),
          0 0 80px var(--neon-glow-color),
          0 0 120px var(--neon-shadow-color);
      }
    }

    @keyframes borderFlow {
      0% { background-position: 0% 50%; transform: rotate(0deg); }
      25% { background-position: 100% 50%; }
      50% { background-position: 100% 50%; transform: rotate(180deg); }
      75% { background-position: 0% 50%; }
      100% { background-position: 0% 50%; transform: rotate(360deg); }
    }

    @keyframes rippleEffect {
      0% { transform: scale(0); opacity: 1; }
      100% { transform: scale(4); opacity: 0; }
    }

    .neon-glow-button {
      animation: neonPulse var(--neon-animation-duration, 2s) ease-in-out infinite;
      backdrop-filter: blur(10px);
      position: relative;
      overflow: hidden;
    }

    .neon-glow-button::before {
      content: '';
      position: absolute;
      top: -2px; left: -2px; right: -2px; bottom: -2px;
      background: linear-gradient(45deg, var(--neon-gradient));
      background-size: 400% 400%;
      border-radius: inherit;
      z-index: -2;
      animation: borderFlow calc(var(--neon-animation-duration, 2s) * 1.5) linear infinite;
    }

    .neon-glow-button::after {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      border-radius: inherit;
      z-index: -1;
    }

    .neon-glow-button:hover {
      transform: translateY(-3px) scale(1.02);
      animation-duration: calc(var(--neon-animation-duration, 2s) * 0.5);
    }

    .neon-glow-button:hover::before {
      animation-duration: calc(var(--neon-animation-duration, 2s) * 0.8);
    }

    .neon-glow-button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
      animation: none;
    }

    .neon-glow-button:disabled::before {
      animation: none;
    }

    .neon-glow-button:disabled:hover {
      transform: none;
    }

    .neon-glow-button:active {
      transform: translateY(-1px) scale(0.98);
    }

    .neon-glow-button .button-text {
      position: relative;
      z-index: 1;
      text-shadow:
        0 0 10px currentColor,
        0 0 20px currentColor,
        0 0 30px currentColor;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  `;
  document.head.appendChild(styleElement);
  globalStylesInjected = true;
};

const NeonGlowButton: React.FC<NeonGlowButtonProps> = ({
  children,
  colorScheme = "gold",
  size = "medium",
  onClick,
  disabled = false,
  className = "",
  pulseIntensity = "medium",
  animationSpeed = "medium",
  ...props
}) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    injectGlobalStyles();
  }, []);

  const colors: ColorScheme =
    typeof colorScheme === "string" ? COLOR_SCHEMES[colorScheme] : colorScheme;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;

    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);

    const button = e.currentTarget;
    const ripple = document.createElement("div");
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - 30;
    const y = e.clientY - rect.top - 30;

    ripple.style.cssText = `
      position: absolute;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: radial-gradient(circle, ${colors.glowColor} 0%, transparent 70%);
      pointer-events: none;
      animation: rippleEffect 0.8s ease-out;
      left: ${x}px;
      top: ${y}px;
      z-index: 2;
    `;

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 800);

    if (onClick) onClick(e);
  };

  const sizeStyles: Record<ButtonSize, SizeConfig> = {
    small: {
      padding: "12px 28px",
      fontSize: "12px",
      borderRadius: "8px",
      borderWidth: "2px",
    },
    medium: {
      padding: "16px 32px",
      fontSize: "14px",
      borderRadius: "12px",
      borderWidth: "3px",
    },
    large: {
      padding: "20px 40px",
      fontSize: "16px",
      borderRadius: "16px",
      borderWidth: "4px",
    },
  };

  const pulseIntensities = {
    low: "0.3",
    medium: "0.6",
    high: "1.0",
  };

  const animationSpeeds = {
    slow: "3s",
    medium: "2s",
    fast: "1s",
  };

  const gradientString = colors.gradient.join(", ");

  const baseStyles: React.CSSProperties = {
    background: "transparent",
    color: colors.textColor,
    border: `${sizeStyles[size].borderWidth} solid transparent`,
    ...sizeStyles[size],
    cursor: disabled ? "not-allowed" : "pointer",
    position: "relative",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    fontFamily: "'Orbitron', 'Courier New', monospace",
    transform: isClicked ? "translateY(-1px) scale(0.98)" : "",
    "--neon-animation-duration": animationSpeeds[animationSpeed],
    "--neon-pulse-intensity": pulseIntensities[pulseIntensity],
    "--neon-shadow-color": colors.shadowColor,
    "--neon-glow-color": colors.glowColor,
    "--neon-gradient": gradientString,
  } as React.CSSProperties;

  return (
    <button
      className={`neon-glow-button ${className}`}
      style={baseStyles}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      <span className="button-text">{children}</span>
    </button>
  );
};

export default NeonGlowButton;
