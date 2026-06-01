# 🎯 QUIZ SERENIGHT — COMPLET
> Logique + Copy + Intégration Shopify
> Objectif : recommander le bon poids · Réduire retours de 22% à 10%

---

## OPTION A — QUIZ INTÉGRÉ SHOPIFY (Recommandé pour lancer vite)

**App Shopify :** Jebbit (gratuit jusqu'à 250 réponses/mois) ou Typeform embed
**URL quiz :** /pages/quiz
**Temps de création :** 2-3 heures

---

## LOGIQUE DU QUIZ — 3 QUESTIONS

### QUESTION 1 — Poids corporel

```
Titre : "Pour commencer, quel est approximativement votre poids ?"

Options :
○ Moins de 50 kg
○ 50 à 60 kg
○ 60 à 70 kg
○ 70 à 80 kg
○ 80 à 90 kg
○ Plus de 90 kg
○ Je préfère ne pas répondre → (afficher Q2 quand même, recommander Classic par défaut)

Design : Grande police · Options en carte cliquable · Pas de champ texte libre
```

### QUESTION 2 — Type de dormeur

```
Titre : "Comment dormez-vous ?"

Options (avec emoji) :
○ 🥵 J'ai souvent chaud la nuit
○ 🥶 J'ai souvent froid la nuit
○ ✅ Ma température est équilibrée
○ 🔄 Ça varie selon les saisons

Note : Question utilisée pour recommander bambou (chaud) vs coton (froid/neutre)
```

### QUESTION 3 — Objectif

```
Titre : "Qu'est-ce que vous cherchez principalement ?"

Options :
○ 😴 Mieux m'endormir
○ 💤 Moins me réveiller la nuit
○ 😰 Réduire le stress et l'anxiété
○ 🧘 Me sentir plus enveloppé et calme
○ 👶 Pour mon enfant (6-12 ans)

Si réponse "Pour mon enfant" → aller directement à résultat Kids 4kg
```

---

## LOGIQUE DE RECOMMANDATION

```python
# Pseudo-code de la logique de recommandation

def recommander(poids, chaleur, objectif):

    # Cas enfant
    if objectif == "enfant":
        return "KIDS_4KG"

    # Recommandation adulte par poids
    if poids in ["moins_50kg", "50_60kg"]:
        produit = "ESSENTIAL_6KG"
    elif poids in ["60_70kg", "70_80kg", "80_90kg"]:
        produit = "CLASSIC_8KG"
    elif poids == "plus_90kg":
        produit = "CLASSIC_8KG"  # 8kg = max disponible au lancement
        note = "Nous développons bientôt une version 10kg pour les plus de 90kg."
    elif poids == "ne_sais_pas":
        produit = "CLASSIC_8KG"  # valeur par défaut

    return produit
```

---

## RÉSULTATS PAR PROFIL — COPY COMPLET

### RÉSULTAT : Essential 6kg (poids < 60 kg)

```
🎯 VOTRE COUVERTURE PARFAITE :

Serenight Essential 6kg

Pourquoi le 6kg pour vous :
Votre poids idéal de couverture se situe entre 5 et 7 kg.
La pression douce de l'Essential est calibrée exactement pour
favoriser la relaxation sans sensation d'écrasement.

[IMAGE produit Essential]

Prix : 79€ — Livraison offerte

[BOUTON PRINCIPAL] → Commandez l'Essential 6kg — 79€
[BOUTON SECONDAIRE] → Voir tous les produits

Rassurance :
✓ 30 nuits d'essai    ✓ Retour prépayé    ✓ OEKO-TEX certifié
```

### RÉSULTAT : Classic 8kg (poids 60-90 kg)

```
🎯 VOTRE COUVERTURE PARFAITE :

Serenight Classic 8kg ⭐

Pourquoi le 8kg pour vous :
À votre poids, le 8kg représente environ 8 à 11% de votre masse corporelle —
la plage idéale pour ressentir la pression sans inconfort.
[Si chaleur = "j'ai chaud"] Le bambou thermorégulant est parfait pour vous.

[IMAGE produit Classic]

Prix : 89€ — Livraison offerte

[BOUTON PRINCIPAL] → Commandez la Classic 8kg — 89€
[BOUTON SECONDAIRE] → Voir tous les produits

Rassurance :
✓ 30 nuits d'essai    ✓ Échange poids offert    ✓ OEKO-TEX certifié
```

### RÉSULTAT : Kids 4kg (enfant 6-12 ans)

```
🎯 LA COUVERTURE ADAPTÉE À VOTRE ENFANT :

Serenight Kids 4kg

Conçue pour les enfants de 6 à 12 ans,
certifiée OEKO-TEX Standard 100 — sans substance nocive.

[IMAGE produit Kids]

Prix : 59€ — Livraison offerte

[BOUTON PRINCIPAL] → Commandez la Kids 4kg — 59€

Précaution :
Consultez l'ergothérapeute ou le médecin de votre enfant
avant utilisation. Déconseillée aux moins de 3 ans.
```

---

## INTÉGRATION SHOPIFY — ÉTAPES EXACTES

### Option A — Jebbit (plus simple)

```
ÉTAPE 1 — Créer le compte
→ jebbit.com → Sign up → Plan gratuit (250 réponses/mois)
→ Créer un "Quiz" → choisir template "Product Recommender"

ÉTAPE 2 — Configurer les questions
→ Ajouter Q1 (poids), Q2 (chaleur), Q3 (objectif)
→ Configurer la logique de branchement (voir tableau ci-dessus)

ÉTAPE 3 — Configurer les résultats
→ Résultat 1 → Essential 6kg → URL produit Shopify
→ Résultat 2 → Classic 8kg → URL produit Shopify
→ Résultat 3 → Kids 4kg → URL produit Shopify

ÉTAPE 4 — Intégration Shopify
→ Jebbit → Share → Embed code → Copier le code HTML
→ Shopify → Pages → Nouvelle page → Titre "Quiz" → URL /quiz
→ Dans l'éditeur : basculer en mode HTML → Coller le code Jebbit

ÉTAPE 5 — Lier le quiz depuis la homepage
→ Tous les boutons "Quiz" de la homepage pointent vers /pages/quiz
→ Menu navigation → Ajouter "Quiz" comme lien principal
```

### Option B — HTML Natif (sans app, plus rapide)

```html
<!-- QUIZ SERENIGHT — Version HTML minimale -->
<!-- Coller dans une page Shopify en mode HTML -->

<div id="quiz-serenight" style="max-width:600px;margin:0 auto;font-family:inherit">

  <!-- ÉTAPE 1 -->
  <div id="q1" class="quiz-step">
    <h2 style="font-size:22px;margin-bottom:16px">Quel est approximativement votre poids ?</h2>
    <div class="quiz-options">
      <button onclick="setAnswer('poids','moins50');nextStep('q1','q2')" class="quiz-btn">Moins de 50 kg</button>
      <button onclick="setAnswer('poids','50_60');nextStep('q1','q2')" class="quiz-btn">50 à 60 kg</button>
      <button onclick="setAnswer('poids','60_70');nextStep('q1','q2')" class="quiz-btn">60 à 70 kg</button>
      <button onclick="setAnswer('poids','70_80');nextStep('q1','q2')" class="quiz-btn">70 à 80 kg</button>
      <button onclick="setAnswer('poids','80_90');nextStep('q1','q2')" class="quiz-btn">80 à 90 kg</button>
      <button onclick="setAnswer('poids','plus90');nextStep('q1','q2')" class="quiz-btn">Plus de 90 kg</button>
    </div>
  </div>

  <!-- ÉTAPE 2 -->
  <div id="q2" class="quiz-step" style="display:none">
    <h2 style="font-size:22px;margin-bottom:16px">Comment dormez-vous ?</h2>
    <div class="quiz-options">
      <button onclick="setAnswer('chaleur','chaud');nextStep('q2','q3')" class="quiz-btn">🥵 J'ai souvent chaud la nuit</button>
      <button onclick="setAnswer('chaleur','froid');nextStep('q2','q3')" class="quiz-btn">🥶 J'ai souvent froid la nuit</button>
      <button onclick="setAnswer('chaleur','neutre');nextStep('q2','q3')" class="quiz-btn">✅ Ma température est équilibrée</button>
    </div>
  </div>

  <!-- ÉTAPE 3 -->
  <div id="q3" class="quiz-step" style="display:none">
    <h2 style="font-size:22px;margin-bottom:16px">Qu'est-ce que vous cherchez principalement ?</h2>
    <div class="quiz-options">
      <button onclick="setAnswer('objectif','endormissement');showResult()" class="quiz-btn">😴 Mieux m'endormir</button>
      <button onclick="setAnswer('objectif','reveils');showResult()" class="quiz-btn">💤 Moins me réveiller</button>
      <button onclick="setAnswer('objectif','stress');showResult()" class="quiz-btn">😰 Réduire le stress</button>
      <button onclick="setAnswer('objectif','calme');showResult()" class="quiz-btn">🧘 Me sentir plus calme</button>
      <button onclick="setAnswer('objectif','enfant');showResult()" class="quiz-btn">👶 Pour mon enfant (6-12 ans)</button>
    </div>
  </div>

  <!-- RÉSULTATS -->
  <div id="result" style="display:none;padding:24px;background:#f0f4ff;border-radius:12px;text-align:center">
    <p style="font-size:13px;text-transform:uppercase;letter-spacing:.08em;color:#666;margin-bottom:8px">🎯 VOTRE RECOMMANDATION PERSONNALISÉE</p>
    <h2 id="result-title" style="font-size:24px;margin-bottom:8px"></h2>
    <p id="result-why" style="color:#444;margin-bottom:20px"></p>
    <a id="result-cta" href="#" style="display:inline-block;background:#0D1B3E;color:#fff;padding:14px 28px;border-radius:6px;text-decoration:none;font-weight:700;font-size:16px"></a>
    <p style="font-size:12px;color:#888;margin-top:12px">✓ 30 nuits d'essai · ✓ Retour prépayé · ✓ OEKO-TEX certifié</p>
  </div>

</div>

<style>
.quiz-btn{display:block;width:100%;text-align:left;padding:14px 18px;margin-bottom:8px;background:#fff;border:2px solid #e2e8f0;border-radius:8px;font-size:15px;cursor:pointer;transition:all .15s}
.quiz-btn:hover{border-color:#0D1B3E;background:#f0f4ff}
.quiz-options{display:flex;flex-direction:column}
</style>

<script>
var answers = {};
function setAnswer(k,v){answers[k]=v;}
function nextStep(hide,show){
  document.getElementById(hide).style.display='none';
  document.getElementById(show).style.display='block';
}
function showResult(){
  document.getElementById('q3').style.display='none';
  var r=document.getElementById('result');
  r.style.display='block';
  var t='',w='',url='',cta='';

  if(answers.objectif==='enfant'){
    t='Serenight Kids 4kg';
    w='Conçue pour les enfants de 6 à 12 ans. Certifiée OEKO-TEX Standard 100.';
    url='/products/serenight-kids-4kg';
    cta='Commander la Kids 4kg — 59€';
  } else if(['moins50','50_60'].includes(answers.poids)){
    t='Serenight Essential 6kg';
    w='Le 6kg est idéal pour votre morphologie — pression douce et enveloppante, sans sensation d\'écrasement.';
    url='/products/serenight-essential-6kg';
    cta='Commander l\'Essential 6kg — 79€';
  } else {
    t='Serenight Classic 8kg ⭐';
    w='Le 8kg représente 8-10% de votre poids — la plage idéale. Notre plus populaire.';
    url='/products/serenight-classic-8kg';
    cta='Commander la Classic 8kg — 89€';
  }

  document.getElementById('result-title').textContent=t;
  document.getElementById('result-why').textContent=w;
  document.getElementById('result-cta').href=url;
  document.getElementById('result-cta').textContent=cta;
}
</script>
```

---

## COLLECTE EMAIL SUR LE RÉSULTAT

```
Ajouter AVANT le bouton CTA du résultat :

"Recevez votre recommandation par email + guide sommeil offert"

[Champ email] [→ Recevoir mon résultat]

→ Connecté à Klaviyo → Liste "Quiz Serenight"
→ Déclenche le flow "Post-Quiz" :
   Email 1 (immédiat) : Ton résultat + lien produit recommandé
   Email 2 (J+2) : "Ton guide sommeil offert" (PDF)
   Email 3 (J+5) : Rappel + témoignage client
```

---

## EMPLACEMENT DU QUIZ DANS LA BOUTIQUE

```
✅ Page dédiée : /pages/quiz (URL principale)
✅ Homepage : 2 boutons "Quiz" (hero + section dédiée)
✅ Fiches produits : lien "Pas sûr ? Faites le quiz →"
✅ Menu navigation : "Quiz" en 2ème position (après "Couvertures")
✅ Email bienvenue : "Commencez par le quiz"
✅ Abandoned cart : "Pas sûr du poids ? Faites le quiz"
```
