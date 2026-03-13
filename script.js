        :root {
            --bg-deep: #2c040d;
            --accent-main: #f3c6d1;
            --accent-alt: #e1abb9;
            --accent-premium: #c88d9c;
            --text-main: #fff0f3;
            --text-muted: #b8989e;
            --glass-base: rgba(44, 4, 13, 0.85);
        }

        /* NEW: Scroll Progress Bar */
        #scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 4px;
            background: var(--accent-main);
            z-index: 10001;
            box-shadow: 0 0 10px var(--accent-main);
            transition: width 0.2s ease-out;
        }

        #petal-container {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none; z-index: 5; overflow: hidden;
        }
        .petal {
    position: absolute;
    background-color: var(--accent-main);
    border-radius: 150% 0 150% 0;
    opacity: 0.3; 
    filter: blur(1px);
    pointer-events: none;
    animation: fall linear forwards;
    /* ADD THIS LINE for smooth mouse reaction */
    transition: transform 0.2s ease-out, opacity 0.3s; 
}
        .petal {
            border-radius: 150% 0 150% 0;
            opacity: 0.3; filter: blur(1px);
            animation: fall linear forwards;
        }
        /* NEW: Heart Confetti Style */
        .heart-confetti {
            font-size: 20px;
            user-select: none;
            animation: heartFall 3s linear forwards;
        }

       
        .particle {
            position: fixed;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1; /* Behind the text, but above the background */
            background: radial-gradient(circle, var(--accent-main) 0%, transparent 70%);
            opacity: 0.4;
            transition: transform 0.1s ease-out; /* Smooth movement */
        }
        #startOverlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: var(--bg-deep);
            display: flex; justify-content: center; align-items: center;
            z-index: 9999; transition: opacity 1s ease;
        }
        #startBtn {
            padding: 20px 40px; background: transparent;
            color: var(--accent-main); border: 2px solid var(--accent-main);
            font-family: 'Playfair Display', serif; font-size: 1.5rem;
            cursor: pointer; letter-spacing: 2px; transition: 0.3s;
        }
        #startBtn:hover { background: var(--accent-main); color: var(--bg-deep); }

        body, html {
            margin: 0; padding: 0; background-color: var(--bg-deep);
            color: var(--text-main); font-family: 'Work Sans', sans-serif;
            font-weight: 300; overflow-x: hidden; scroll-behavior: smooth;
        }

        .sound-control {
            position: fixed; top: 20px; right: 20px; z-index: 1000;
            background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px);
            padding: 10px; border-radius: 50%; cursor: pointer;
            border: 1px solid rgba(255, 255, 255, 0.2); display: flex;
            transition: 0.3s;
        }
        .sound-control:hover { background: rgba(255, 255, 255, 0.2); transform: scale(1.1); }
        .sound-control svg { width: 24px; height: 24px; fill: var(--accent-main); }

        .cover {
            height: 100vh; width: 100%; display: flex; flex-direction: column;
            justify-content: center; align-items: center; text-align: center;
            position: sticky; top: 0; z-index: 1;
            background: radial-gradient(circle at center, #4a0e1c 0%, var(--bg-deep) 100%);
            background-size: 200% 200%; animation: drift 15s infinite alternate ease-in-out;
        }
        .cover h1 {
            font-family: 'Playfair Display', serif; font-size: clamp(2.4rem, 8vw, 5.5rem);
            letter-spacing: -1px; margin: 0; padding: 0 10px; display: inline-block;
            border-right: 3px solid var(--accent-main); white-space: nowrap;
            overflow: hidden; width: fit-content;
        }
        /* --- NEW: Interactive Text Glow Effects --- */

/* Targets the main typewriter title and section headers */
h1, h2, .stage-meta {
    transition: text-shadow 0.4s ease, color 0.4s ease;
    cursor: default;
}

h1:hover, h2:hover {
    color: #fff; /* Brightens slightly */
    text-shadow: 0 0 10px var(--accent-main),
                 0 0 20px var(--accent-alt),
                 0 0 30px var(--accent-main);
}

/* Specific glow for the Stage Meta (the "PART 1 //" text) */
.stage-meta:hover {
    color: var(--accent-main);
    text-shadow: 0 0 8px var(--accent-premium);
}

/* Smooth transition for the confession question */
#offer p {
    transition: all 0.5s ease;
}

#offer p:hover {
    color: var(--accent-main);
    text-shadow: 0 0 5px rgba(243, 198, 209, 0.5);
}

/* Adding a subtle glow to the buttons when hovered */
#yesBtn:hover, #noBtn:hover {
    box-shadow: 0 0 20px var(--accent-main);
    transform: translateY(-2px);
}

.name-inputs {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}

.name-inputs label {
    color: var(--text-main);
    font-family: 'Work Sans', sans-serif;
    font-size: 1rem;
    margin-bottom: 5px;
}

.name-inputs input {
    padding: 10px;
    border: 2px solid var(--accent-alt);
    border-radius: 5px;
    background: rgba(44, 4, 13, 0.8);
    color: var(--text-main);
    font-family: 'Work Sans', sans-serif;
    font-size: 1rem;
    width: 250px;
    text-align: center;
    transition: 0.3s;
}

.name-inputs input:focus {
    outline: none;
    border-color: var(--accent-main);
    box-shadow: 0 0 10px var(--accent-main);
}

.certificate {
    margin-top: 30px;
    padding: 20px;
    background: linear-gradient(135deg, var(--glass-base), rgba(243, 198, 209, 0.1));
    border: 3px double var(--accent-main);
    border-radius: 15px;
    text-align: center;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 0 20px rgba(243, 198, 209, 0.3);
    position: relative;
    overflow: hidden;
}

.certificate::before {
    content: 'R&R';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 8rem;
    font-weight: 700;
    color: var(--accent-main);
    opacity: 0.05;
    pointer-events: none;
    z-index: 0;
}

.certificate h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--accent-main);
    margin-bottom: 14px;
    position: relative;
    z-index: 1;
}

.certificate p {
    font-family: 'Work Sans', sans-serif;
    font-size: 1.05rem;
    color: var(--text-main);
    margin: 10px 0;
    position: relative;
    z-index: 1;
}

.certificate .names {
    text-shadow: 0 0 10px rgba(243, 198, 209, 0.3); /* Subtle glow */
    font-family: 'Dancing Script', cursive;
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: 0.3px;
    color: var(--accent-main);
    position: relative;
    z-index: 1;
}

.certificate .date {
    font-size: 1.35rem;
    font-weight: 700;
    color: rgba(255, 225, 205, 1);
    text-shadow: 0 0 10px rgba(255, 220, 180, 0.7);
    position: relative;
    z-index: 1;
}

.certificate button {
    margin-top: 20px;
    padding: 12px 24px;
    background: rgba(243, 198, 209, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: var(--text-main);
    border: 1px solid rgba(243, 198, 209, 0.3);
    border-radius: 8px;
    font-family: 'Work Sans', sans-serif;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s;
    position: relative;
    z-index: 1;
    overflow: hidden;
}
.certificate .names {
    display: block;
    margin: 15px 0;
    font-size: 2.2rem; /* Making it slightly larger than the surrounding text */
    letter-spacing: 1px;
    color: var(--accent-main);
    text-shadow: 0 0 10px rgba(249, 194, 207, 0.3); /* Subtle glow */
}
/* Button animation + loading */
#downloadBtn {
    padding-left: 50px;
}

#downloadBtn::before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border: 2px solid rgba(255, 255, 255, 0.75);
    border-top-color: transparent;
    border-radius: 50%;
    top: 50%;
    left: 18px;
    transform: translate(0, -50%) scale(0);
    opacity: 0;
    transition: opacity 0.2s ease, transform 0.2s ease;
}

#downloadBtn.loading {
    background-color: rgba(243, 198, 209, 0.25);
    background-image: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%);
    background-repeat: no-repeat;
    background-size: 200% 100%;
    animation: shimmer 1.5s linear infinite;
}

#downloadBtn.loading::before {
    opacity: 1;
    transform: translate(0, -50%) scale(1);
    animation: spin 1s linear infinite;
}

@keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
}

#downloadBtn::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
}

#downloadBtn.ripple::after {
    opacity: 0.2;
    animation: ripple 0.6s ease-out forwards;
}

/* Hide the spinner/ripple when exporting the certificate */
.no-spinner #downloadBtn::before,
.no-spinner #downloadBtn::after {
    display: none !important;
}

#downloadBtn.success {
    background: rgba(255, 215, 210, 0.35);
    border-color: rgba(255, 180, 170, 0.5);
    box-shadow: 0 0 20px rgba(255, 155, 140, 0.55);
    color: rgba(20, 10, 12, 0.95);
}

@keyframes spin {
    to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes ripple {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 0.4; }
    60% { transform: translate(-50%, -50%) scale(2.8); opacity: 0.2; }
    100% { transform: translate(-50%, -50%) scale(4); opacity: 0; }
}

@keyframes burst {
    0% { transform: translate(-50%, -50%) scale(0.1); opacity: 0; }
    40% { transform: translate(-50%, -80%) scale(1.2); opacity: 1; }
    100% { transform: translate(-50%, -140%) scale(1.5); opacity: 0; }
}

.burst {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.2rem;
    pointer-events: none;
    opacity: 0;
    animation: burst 0.9s ease-out forwards;
}

.certificate button:hover {
    background: rgba(243, 198, 209, 0.3);
    box-shadow: 0 0 20px rgba(243, 198, 209, 0.6);
    transform: translateY(-2px);
}


        .cursor-blink { animation: blink 0.8s step-end infinite; }
        @keyframes blink { from, to { border-color: transparent } 50% { border-color: var(--accent-main); } }

        .journey-wrapper { background-color: var(--bg-deep); position: relative; z-index: 2; padding-bottom: 25vh; }

        .stage { height: 120vh; width: 100%; display: flex; align-items: center; position: relative; margin-bottom: 10vh; }
        .stage.reverse { justify-content: flex-end; }
        .stage-image {
            width: 60%; height: 70%; overflow: hidden; position: absolute; top: 15%; z-index: 1;
            box-shadow: 0 15px 50px rgba(0,0,0,0.6); background-color: #1a0208;
            /* Added perspective for parallax */
            perspective: 1000px;
        }
        .stage.normal .stage-image { left: 0; border-radius: 0 12px 12px 0; }
        .stage.reverse .stage-image { right: 0; border-radius: 12px 0 0 12px; }
        .stage-image img {
            width: 100%; height: 100%; object-fit: cover; opacity: 0.7;
            transition: transform 0.5s ease-out, opacity 3s, filter 2.5s ease;
        }
        .stage-image img.zoom { opacity: 0.9; }

        .stage-content {
            width: 40%; background: var(--glass-base); backdrop-filter: blur(25px);
            padding: 50px; border-radius: 16px; z-index: 2; position: relative;
            box-shadow: 0 20px 60px rgba(0,0,0,0.4); opacity: 0; transform: translateY(60px);
            transition: 1.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .stage-content p {
    text-align: justify;
    text-justify: inter-word;
    font-variant-ligatures: common-ligatures; /* Makes text look more like a printed book */
    letter-spacing: 0.2px;
}
        .stage.normal .stage-content { left: 52%; }
        .stage.reverse .stage-content { right: 52%; }
        .stage-content.visible { opacity: 1; transform: translateY(0); }

        .stage-meta { color: var(--accent-premium); letter-spacing: 3px; text-transform: uppercase; font-size: 0.75rem; margin-bottom: 20px; display: block; }
        .stage h2 { font-family: 'Playfair Display', serif; font-size: 2.5rem; margin: 0 0 20px 0; }

        .chat-container { display: flex; flex-direction: column; gap: 12px; margin-top: 25px; }
        .bubble {
            max-width: 85%; padding: 12px 16px; border-radius: 18px; font-size: 0.9rem;
            opacity: 0; transform: scale(0.9); transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .visible .bubble { opacity: 1; transform: scale(1); }
        .bubble.them { align-self: flex-start; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15); border-bottom-left-radius: 4px; }
        .bubble.me { align-self: flex-end; background: var(--accent-main); color: var(--bg-deep); border-bottom-right-radius: 4px; font-weight: 600; }
        .bubble:nth-child(1) { transition-delay: 0.8s; }
        .bubble:nth-child(2) { transition-delay: 1.8s; }
        .bubble:nth-child(3) { transition-delay: 2.8s; }
        .bubble:nth-child(4) { transition-delay: 3.8s; }

        .polaroid-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; margin-top: 30px; }
        .polaroid {
            background: white; padding: 10px 10px 25px 10px; box-shadow: 0 10px 20px rgba(0,0,0,0.3);
            width: 130px; transition: 0.4s; cursor: pointer; position: relative; z-index: 1;
        }
        .polaroid:nth-child(odd) { transform: rotate(-4deg); }
        .polaroid:nth-child(even) { transform: rotate(4deg); }
        .polaroid img { width: 100%; height: 110px; object-fit: cover; }
        .polaroid span { display: block; font-family: 'Playfair Display', serif; font-style: italic; font-size: 0.65rem; color: #333; text-align: center; margin-top: 8px; }
        .polaroid.active { transform: scale(1.6) rotate(0deg) !important; z-index: 100; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }

        .sentiment-card {
            margin-top: 30px;
            padding: 18px 22px;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(243, 198, 209, 0.3);
            border-radius: 14px;
            box-shadow: 0 0 15px rgba(255, 100, 100, 0.1);
            cursor: pointer;
            transition: filter 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }
        .sentiment-card:hover, .sentiment-card:active, .sentiment-card.synced {
            filter: brightness(1.05) saturate(1.2) drop-shadow(0 0 18px rgba(255, 90, 90, 0.35));
        }

        .sentiment-text {
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 1.4px;
            color: var(--accent-premium);
            opacity: 0.85;
            font-weight: 600;
        }

        .pulse-line {
            width: 60px;
            height: 2px;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 1px;
            transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        .sentiment-card.synced .pulse-line {
            background: rgba(255, 60, 60, 1);
            box-shadow: 0 0 12px rgba(255, 40, 40, 0.8);
        }

        .confession-section {
            min-height: 100vh; width: 100%; background: linear-gradient(180deg, var(--bg-deep) 0%, #3e0b1a 100%);
            display: flex; justify-content: center; align-items: center; flex-direction: column; text-align: center;
            padding: 20px; box-sizing: border-box;
        }
        .btn-group { margin-top: 60px; display: flex; gap: 25px; min-height: 60px; position: relative; }
        button { padding: 15px 45px; border-radius: 4px; border: none; cursor: pointer; letter-spacing: 2px; transition: 0.4s; }
        #yesBtn { background-color: var(--accent-main); color: var(--bg-deep); font-weight: 600; animation: pulseGlow 2s infinite; }
        #noBtn { background: transparent; color: var(--text-muted); border: 1px solid rgba(255,255,255,0.15); transition: 0.2s; }

        #successMessage { display: none; animation: fadeIn 2s ease; }
        .success-photo-wrapper { width: clamp(280px, 80%, 400px); margin: 40px auto; border-radius: 12px; overflow: hidden; opacity: 0; transition: 2s; }
        .success-photo-wrapper.reveal { opacity: 1; }
        .heart { color: var(--accent-main); animation: heartBeat 1.5s infinite; font-size: 3rem; }

        @keyframes fall { to { transform: translateY(110vh) rotate(360deg); } }
        @keyframes heartFall {
            0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes drift { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }
        @keyframes heartBeat { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.2); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes pulseGlow { 0% { box-shadow: 0 0 0 0 rgba(243, 198, 209, 0.4); } 70% { box-shadow: 0 0 0 20px rgba(243, 198, 209, 0); } 100% { box-shadow: 0 0 0 0 rgba(243, 198, 209, 0); } }

        @media (max-width: 850px) {
            .stage { height: auto; flex-direction: column; margin-bottom: 80px; }
            .stage-image { position: relative; width: 100%; height: 300px; border-radius: 12px; }
            .stage-content { width: 90%; margin: -50px auto 0; padding: 30px 20px; left: auto !important; right: auto !important; }
            .btn-group { flex-direction: column; height: auto; align-items: center; width: 100%; }
            #noBtn { position: static !important; } /* Disable moving on mobile for better UX */
        }
