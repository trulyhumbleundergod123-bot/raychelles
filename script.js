        const startBtn = document.getElementById('startBtn');
        const startOverlay = document.getElementById('startOverlay');
        const typewriterElement = document.getElementById('typewriter');
        const bgMusic = document.getElementById('bgMusic');
        const muteBtn = document.getElementById('muteBtn');
        const audioIcon = document.getElementById('audioIcon');
        const progressBar = document.getElementById('scroll-progress');
        let charIndex = 0;
        const textToType = "A Story Shared.";

        // --- IMPROVED AUDIO: Fade In Logic ---
        function fadeInAudio(audio, targetVolume, duration) {
            audio.volume = 0;
            const step = targetVolume / (duration / 50);
            const fade = setInterval(() => {
                if (audio.volume < targetVolume) {
                    audio.volume = Math.min(targetVolume, audio.volume + step);
                } else {
                    clearInterval(fade);
                }
            }, 50);
        }

        muteBtn.addEventListener('click', () => {
            if (bgMusic.muted) {
                bgMusic.muted = false;
                audioIcon.innerHTML = '<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>';
            } else {
                bgMusic.muted = true;
                audioIcon.innerHTML = '<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>';
            }
        });

        // --- IMPROVED STORY FLOW: Scroll Progress + Ribbon Parallax ---
        const ribbonBg = document.querySelector('.ribbon-bg');
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + "%";

            // Move ribbon for parallax effect
            ribbonBg.style.transform = `translateY(${winScroll * 0.5}px)`;
        });

        function typeWriter() {
            if (charIndex < textToType.length) {
                if (charIndex >= 8) {
                    typewriterElement.innerHTML = `A Story <i>${textToType.substring(8, charIndex + 1)}</i>`;
                } else {
                    typewriterElement.innerHTML = textToType.substring(0, charIndex + 1);
                }
                charIndex++;
                setTimeout(typeWriter, 120);
            } else {
                setTimeout(() => typewriterElement.style.borderRight = "none", 1500);
            }
        }

        const activePetals = []; // Array to track falling petals

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    // Random starting stats
    const startX = Math.random() * 100;
    petal.style.left = startX + 'vw';
    petal.style.width = Math.random() * 15 + 10 + 'px';
    petal.style.height = petal.style.width;
    
    const duration = Math.random() * 3 + 5;
    petal.style.animationDuration = duration + 's';
    
    document.getElementById('petal-container').appendChild(petal);
    activePetals.push(petal);

    // Remove from array and DOM when finished falling
    setTimeout(() => {
        const index = activePetals.indexOf(petal);
        if (index > -1) activePetals.splice(index, 1);
        petal.remove();
    }, duration * 1000);
}

// Updated Mouse Interaction
// --- CONSOLIDATED MOUSE MOVEMENT ---
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;

    // Petal interaction
    activePetals.forEach(petal => {
        const rect = petal.getBoundingClientRect();
        const petalX = rect.left + rect.width / 2;
        const petalY = rect.top + rect.height / 2;

        const dx = mouseX - petalX;
        const dy = mouseY - petalY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
            const pushFactor = (150 - distance) / 10;
            const moveX = (dx / distance) * -pushFactor * 5;
            const moveY = (dy / distance) * -pushFactor * 5;
            petal.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${distance}deg)`;
            petal.style.opacity = "0.8";
        } else {
            petal.style.transform = 'translate(0, 0)';
            petal.style.opacity = "0.3";
        }
    });

    // Parallax image effect
    const imgs = document.querySelectorAll('.parallax-img');
    imgs.forEach(img => {
        if (img.classList.contains('zoom')) {
            img.style.transform = `scale(1.1) translate(${x}px, ${y}px) rotateY(${x/2}deg)`;
        }
    });
});
        // --- NEW: Heart Confetti Celebration ---
        function createHeart() {
            const heart = document.createElement('div');
            heart.classList.add('heart-confetti');
            heart.innerHTML = '♥';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.color = ['#f3c6d1', '#e1abb9', '#ff4d6d'][Math.floor(Math.random() * 3)];
            heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 3000);
        }

        // --- CONSOLIDATED START EXPERIENCE ---
        startBtn.addEventListener('click', () => {
            if (typeof createConstellation === 'function') {
                createConstellation();
            }
            startOverlay.style.opacity = '0';
            setTimeout(() => { startOverlay.style.display = 'none'; typeWriter(); }, 1000);
            bgMusic.play();
            fadeInAudio(bgMusic, 0.4, 3000); // 3-second fade in
            setInterval(createPetal, 400);
        });

        const stageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const content = entry.target.querySelector('.stage-content');
                const img = entry.target.querySelector('img');
                const focusImg = entry.target.querySelector('#focus-img');

                if (entry.isIntersecting) {
                    content?.classList.add('visible');
                    if (img) img.classList.add('zoom');
                    if (focusImg) focusImg.style.filter = 'blur(0px)';
                } else {
                    content?.classList.remove('visible');
                    if (img) img.classList.remove('zoom');
                    if (focusImg) focusImg.style.filter = 'blur(15px)';
                }

                const bar = entry.target.querySelector('#compatibility-bar');
                const percentText = entry.target.querySelector('#percent-text');
                if (entry.isIntersecting && bar && percentText && bar.style.width !== '99.9%') {
                    bar.style.width = '99.9%';
                    let count = 0;
                    const interval = setInterval(() => {
                        if (count >= 99.9) {
                            percentText.textContent = '99.9%';
                            clearInterval(interval);
                        } else {
                            count += 1.1;
                            percentText.textContent = Math.floor(count) + '%';
                        }
                    }, 30);
                }
            });
        }, { threshold: 0.2 });
        document.querySelectorAll('.stage').forEach(s => stageObserver.observe(s));

        // --- IMPROVED YES INTERACTION ---
        document.getElementById('yesBtn').addEventListener('click', () => {
            // Get input values
            const yourName = 'Raymond';
            const partnerName = document.getElementById('partnerName').value.trim() || 'Partner\'s Name';
            const meetingDate = document.getElementById('meetingDate').value;

            // Populate certificate
            document.getElementById('certYourName').textContent = yourName;
            document.getElementById('certPartnerName').textContent = partnerName;
            document.getElementById('sigYourName').textContent = yourName;
            document.getElementById('sigPartnerName').textContent = partnerName;
            document.getElementById('certDate').textContent = meetingDate ? new Date(meetingDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }) : new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            document.getElementById('offer').style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
            setTimeout(() => document.getElementById('successPhoto').classList.add('reveal'), 100);

            // Celebration!
            const celebration = setInterval(createHeart, 100);
            setTimeout(() => clearInterval(celebration), 5000); // Burst for 5 seconds
        });

        // --- DOWNLOAD CERTIFICATE ---
        const downloadBtn = document.getElementById('downloadBtn');
        const originalDownloadText = downloadBtn.textContent;

        function setDownloadState(state) {
            downloadBtn.classList.remove('loading', 'success', 'ripple');
            downloadBtn.textContent = state.text;

            if (state.loading) downloadBtn.classList.add('loading');
            if (state.ripple) downloadBtn.classList.add('ripple');
            if (state.success) downloadBtn.classList.add('success');
        }

        let isDownloading = false;

        downloadBtn.addEventListener('click', () => {
            if (isDownloading) return;
            isDownloading = true;

            // Ripple + loading UI
            setDownloadState({ text: 'SAVING MEMORY...', loading: true, ripple: true });

            const timeoutId = setTimeout(() => {
                if (isDownloading) {
                    isDownloading = false;
                    setDownloadState({ text: originalDownloadText });
                    alert('Took too long to generate the certificate. Please try again.');
                }
            }, 8000);

            // Give time for the ripple animation to start
            setTimeout(() => {
                const certificate = document.getElementById('certificate');

                // Hide the spinner/ripple in the capture while keeping it visible to the user
                document.body.classList.add('no-spinner');
                html2canvas(certificate, {
                    backgroundColor: '#2c040d',
                    scale: 2,
                    useCORS: true
                }).then(canvas => {
                    const link = document.createElement('a');
                    link.download = 'relationship-certificate.png';
                    link.href = canvas.toDataURL();
                    link.click();

                    // Burst micro-interaction (heart/sparkle)
                    const burst = document.createElement('span');
                    burst.className = 'burst';
                    burst.textContent = '✨';
                    downloadBtn.appendChild(burst);
                    setTimeout(() => burst.remove(), 900);

                    // Success state
                    setDownloadState({ text: '✔ SAVED TO GALLERY', success: true });
                    clearTimeout(timeoutId);
                    setTimeout(() => {
                        // Reset to original after a short pause
                        setDownloadState({ text: originalDownloadText });
                        isDownloading = false;
                    }, 3000);
                }).catch(err => {
                    console.error('Error generating certificate:', err);
                    alert('Sorry, there was an error generating your certificate. Please try again.');
                    setDownloadState({ text: originalDownloadText });
                    clearTimeout(timeoutId);
                    isDownloading = false;
                }).finally(() => {
                    document.body.classList.remove('no-spinner');
                });
            }, 350);
        });

        // --- IMPROVED NO INTERACTION (Playful & Less Chaotic) ---
        const noBtn = document.getElementById('noBtn');
        let noCount = 0;
        const noTexts = ["Stay as Allies", "Are you sure?", "Think again!", "You clicked the wrong one?", "Maybe Yes?"];

        noBtn.addEventListener('mouseover', () => {
            if (window.innerWidth > 850) {
                // Change text first
                if (noCount < noTexts.length - 1) {
                    noCount++;
                    noBtn.innerText = noTexts[noCount];
                }

                // Move button gracefully
                const btnWidth = noBtn.offsetWidth;
                const btnHeight = noBtn.offsetHeight;

                // Keep it within visible bounds
                const newX = Math.random() * (window.innerWidth - btnWidth - 40) + 20;
                const newY = Math.random() * (window.innerHeight - btnHeight - 40) + 20;

                noBtn.style.position = 'fixed';
                noBtn.style.left = `${newX}px`;
                noBtn.style.top = `${newY}px`;
                noBtn.style.zIndex = "1000";
            }
        });

        // --- POLAROID CLICK: only one active at a time ---
        const polaroids = document.querySelectorAll('.polaroid');
        polaroids.forEach(p => {
            p.addEventListener('click', () => {
                const isActive = p.classList.contains('active');
                polaroids.forEach(x => x.classList.remove('active'));
                if (!isActive) p.classList.add('active');
            });
        });

        // --- HEARTBEAT SENTIMENT CARD ---
        const sentimentCard = document.getElementById('sentimentCard');
        const sentimentText = document.getElementById('sentimentText');
        let sentimentSynced = false;

        function syncSentiment() {
            if (sentimentSynced) return;
            sentimentSynced = true;
            sentimentText.textContent = 'SENTIMENT: SYNCHRONIZED';
            sentimentCard?.classList.add('synced');
        }

        if (sentimentCard) {
            sentimentCard.addEventListener('pointerdown', syncSentiment);
            sentimentCard.addEventListener('click', syncSentiment);
        }

        // --- INTERACTIVE MEMORY SPARKS --- 
        const canvas = document.getElementById('spark-canvas');
        const memoryTextDisplay = document.getElementById('memory-text-display');
        const sparkContainer = document.getElementById('memory-spark-container');

        if (sparkContainer && canvas && memoryTextDisplay) { // Check if elements exist
            const ctx = canvas.getContext('2d');
            let sparks = [];
            let mouse = { x: undefined, y: undefined };

            // --- ENHANCEMENT: Spark Color Palette ---
            const sparkColors = [
                'rgba(255, 223, 186, 0.9)', // Soft Gold
                'rgba(243, 198, 209, 0.9)', // Soft Pink
                'rgba(255, 255, 255, 0.8)', // White
                'rgba(225, 218, 255, 0.9)'  // Soft Lavender
            ];

            const memories = [
                "...a shared laugh.",
                "...a late-night talk.",
                "...an inside joke.",
                "...the way you smile.",
                "...a comfortable silence.",
                "...that one song.",
                "...a knowing glance.",
                "...our first real conversation."
            ];

            function resizeCanvas() {
                canvas.width = sparkContainer.clientWidth;
                canvas.height = sparkContainer.clientHeight;
            }

            class Spark {
                constructor(x, y) {
                    this.x = x;
                    this.y = y;
                    this.size = Math.random() * 7 + 3;
                    this.life = 1;
                    // Make sparks slower and less aggressive
                    this.vx = (Math.random() - 0.5) * 1.5;
                    this.vy = (Math.random() - 0.5) * 1.5;
                    this.color = sparkColors[Math.floor(Math.random() * sparkColors.length)];
                    // FIX: Correctly get the base color for alpha animation
                    this.baseColor = this.color.substring(0, this.color.lastIndexOf(',') + 1);
                }

                update() {
                    this.x += this.vx;
                    this.y += this.vy;
                    // Make sparks fade slower
                    this.life -= 0.01;
                    this.size *= 0.98;
                    // FIX: Apply the decreasing alpha to the base color
                    this.color = `${this.baseColor} ${Math.max(0, this.life)})`;
                }

                draw() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fillStyle = this.color;
                    ctx.fill();
                }
            }

            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // --- ENHANCEMENT: Draw custom cursor orb ---
                if (mouse.x !== undefined) {
                    const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 5, mouse.x, mouse.y, 25);
                    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
                    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
                    
                    ctx.beginPath();
                    ctx.arc(mouse.x, mouse.y, 25, 0, Math.PI * 2);
                    ctx.fillStyle = gradient;
                    ctx.fill();

                    ctx.beginPath();
                    ctx.arc(mouse.x, mouse.y, 15, 0, Math.PI * 2);
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }

                for (let i = sparks.length - 1; i >= 0; i--) {
                    const s = sparks[i];
                    s.update();
                    s.draw();
                    if (s.life <= 0) {
                        sparks.splice(i, 1);
                    }
                }
                requestAnimationFrame(animate);
            }

            function handleMouseMove(e) {
                const rect = canvas.getBoundingClientRect();
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;

                // Reduce the number of sparks generated and add a cap
                if (sparks.length < 100) {
                    sparks.push(new Spark(mouse.x, mouse.y));
                }
            }

            function handleMouseClick(e) {
                const rect = canvas.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const clickY = e.clientY - rect.top;

                let clickedOnSpark = false;
                for (let i = sparks.length - 1; i >= 0; i--) {
                    const s = sparks[i];
                    const distance = Math.sqrt(Math.pow(clickX - s.x, 2) + Math.pow(clickY - s.y, 2));
                    if (distance < s.size + 10) {
                        clickedOnSpark = true;
                        sparks.splice(i, 1);
                    }
                }

                if (clickedOnSpark) {
                    const randomMemory = memories[Math.floor(Math.random() * memories.length)];
                    memoryTextDisplay.textContent = randomMemory;
                    
                    // --- ENHANCEMENT: Trigger burst animation ---
                    memoryTextDisplay.classList.remove('burst'); // Reset animation
                    void memoryTextDisplay.offsetWidth; // Trigger reflow
                    memoryTextDisplay.classList.add('burst');

                    // The animation now handles the fade-out
                }
            }

            const sparkObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        resizeCanvas();
                        sparkContainer.addEventListener('mousemove', handleMouseMove);
                        sparkContainer.addEventListener('click', handleMouseClick);
                        if (sparks.length === 0) {
                            animate();
                        }
                    } else {
                        sparkContainer.removeEventListener('mousemove', handleMouseMove);
                        sparkContainer.removeEventListener('click', handleMouseClick);
                    }
                });
            }, { threshold: 0.1 });

            sparkObserver.observe(sparkContainer);
        }
