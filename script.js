:root {
    --celeste: #87CEEB;
    --verde: #98FF98;
    --testo: #333333;
    --sfondo: #FAFAFA;
    --bianco: #FFFFFF;
    --cono: #d4a373;
    --cono-scuro: #bc8a5f;
    --cioccolato: #4e342e;
    --fragola: #ff85a1;
    --crema: #fdf0d5;
}

* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; }

body { background-color: var(--sfondo); color: var(--testo); overflow-x: hidden; overflow-y: hidden; }
body.loaded { overflow-y: auto !important; }

#loader-wrapper {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background-color: var(--sfondo); display: flex; justify-content: center; align-items: center;
    z-index: 9999; transition: opacity 0.8s ease;
}
#loader-wrapper.hidden { opacity: 0; visibility: hidden; }

.choco-wave {
    position: absolute; bottom: -100%; left: 0; width: 100%; height: 100%;
    background: var(--cioccolato); border-radius: 50% 50% 0 0;
    transition: bottom 1s cubic-bezier(0.175, 0.885, 0.32, 1.275); z-index: 1; opacity: 0.15;
}
.show-wave .choco-wave { bottom: -40%; }

.scoop-real {
    width: 80px; height: 80px; background-color: var(--crema);
    border-radius: 50%; margin: 0 auto -15px; position: relative;
    animation: changeFlavor 3s infinite steps(1), bounce 1s infinite alternate;
}
.cone-real {
    width: 60px; height: 90px; background: var(--cono); margin: 0 auto;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
    background-image: linear-gradient(45deg, var(--cono-scuro) 25%, transparent 25%), 
                      linear-gradient(-45deg, var(--cono-scuro) 25%, transparent 25%);
    background-size: 10px 10px;
}
.loader-text { margin-top:20px; font-weight:700; color:#aaa; letter-spacing:1px; text-transform: uppercase; }

@keyframes changeFlavor { 
    0% { background-color: var(--crema); } 
    33% { background-color: var(--cioccolato); } 
    66% { background-color: var(--fragola); } 
}
@keyframes bounce { from { transform: translateY(0); } to { transform: translateY(-10px); } }

.gen-nav {
    background: var(--celeste); display: flex; align-items: center; justify-content: space-between;
    padding: 0 40px; height: 85px; position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
    width: 95%; max-width: 1100px; z-index: 2000; border-radius: 50px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}
.gen-logo-text { color: white; font-size: 1.5rem; font-weight: 700; text-decoration: none; letter-spacing: 2px; cursor: pointer; }
#gen-menu { display: flex; list-style: none; align-items: center; }

.nav-img-btn {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    padding: 5px 12px; text-decoration: none; color: white; cursor: pointer;
    transition: all 0.3s ease;
}
.nav-img-btn img { width: 24px; height: 24px; margin-bottom: 4px; filter: brightness(0) invert(1); transition: transform 0.3s ease; }
.nav-img-btn span { font-size: 9px; text-transform: uppercase; font-weight: 600; }
.nav-img-btn:hover { transform: translateY(-5px); }

.button {
    background: #00ccff; color: #1a1a2e; font-size: 16px; font-weight: 600; 
    border-radius: 50px; padding: 12px 24px; transition: all 0.3s ease; 
    cursor: pointer; border: none;
}
.button:hover { transform: translateY(-3px); background: #e94560; color: #ffffff; }

.page-section { display: none; min-height: 100vh; padding-top: 130px; animation: fadeIn 0.5s ease; }
.page-section.active { display: block; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

.hero {
    background: linear-gradient(135deg, var(--celeste) 0%, var(--verde) 100%);
    height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; color: white; margin-top: -130px;
}
.hero h1 { font-size: 4rem; text-align: center; }

.section-title { text-align:center; font-size: 3rem; color: var(--celeste); margin-bottom: 2rem; }

.prezzi-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; padding: 20px 10%; max-width: 1200px; margin: 0 auto; }
.prezzo-card { background: white; padding: 40px 20px; border-radius: 30px; text-align: center; box-shadow: 0 10px 20px rgba(0,0,0,0.05); position: relative; transition: 0.4s; cursor: pointer; }
.prezzo-card:hover { background: var(--celeste); color: white; transform: scale(1.05); }
.prezzo-card:hover .prezzo-tag { color: white; }
.prezzo-card.featured { background: var(--celeste); color: white; transform: scale(1.1); z-index: 2; }
.prezzo-card.featured .prezzo-tag { color: white; }
.prezzo-badge { position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: var(--verde); color: #333; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; }
.prezzo-tag { font-size: 2.5rem; font-weight: 700; color: var(--celeste); margin-top: 10px; transition: 0.3s; }

.gusti-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2.5rem; padding: 2rem 10%; }
.gusto-card-img { background: white; border-radius: 25px; overflow: hidden; box-shadow: 0 15px 35px rgba(0,0,0,0.1); text-align: center; transition: 0.4s; cursor: pointer; border-bottom: 5px solid transparent; }
.gusto-card-img:hover { transform: translateY(-10px); border-color: var(--verde); }
.img-container { width: 100%; height: 200px; overflow: hidden; }
.img-container img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
.gusto-card-img:hover img { transform: scale(1.1); }
.gusto-card-img h3 { padding: 20px; font-size: 1.2rem; transition: 0.3s; }
.gusto-card-img:hover h3 { color: var(--celeste); }

.about-container { max-width: 800px; margin: 0 auto; text-align: center; padding: 0 5%; }
.contact-container { display: flex; flex-wrap: wrap; gap: 2rem; max-width: 1100px; margin: 0 auto; padding: 5%; }
.contact-info { flex: 1; background: var(--celeste); color: white; padding: 3rem; border-radius: 30px; }
.contact-form { flex: 1; background: white; padding: 3rem; border-radius: 30px; }
.contact-form input, .contact-form textarea { width: 100%; padding: 15px; margin-bottom: 1rem; border: 1px solid #eee; border-radius: 10px; }
.submit-btn { background: var(--verde); border:none; padding:15px; width:100%; border-radius:10px; font-weight:700; cursor:pointer; }

footer { background: var(--testo); color: white; text-align: center; padding: 2rem; }

@media (max-width: 768px) {
    .gen-nav { width: 95%; height: 70px; padding: 0 10px; top: 10px; }
    .gen-logo-text { font-size: 1rem; }
    .nav-img-btn span { display: none; }
    .nav-img-btn img { width: 22px; height: 22px; }
    .hero h1 { font-size: 2.2rem; }
    .prezzi-container, .gusti-grid { grid-template-columns: 1fr; padding: 20px 5%; }
    .prezzo-card.featured { transform: scale(1); margin: 10px 0; }
    .section-title { font-size: 2rem; }
    .contact-container { flex-direction: column; }
    .page-section { padding-top: 100px; }
}
