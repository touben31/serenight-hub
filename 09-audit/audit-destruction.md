# ☠️ Audit de Destruction — Serenight

> *"Je joue le rôle d'un investisseur qui cherche à détruire le projet."*  
> 10 catégories de risques · Probabilités · Impacts financiers · Plans de prévention

---

## Les 10 plus gros risques

| # | Risque | Prob. | Impact financier | Gravité |
|---|--------|-------|-----------------|---------|
| R1 | Suspension Google Merchant Center dès le lancement | 35% | -100% revenus pendant 7-30j = -1 500 à -6 000€ | 🔴 CRITIQUE |
| R2 | Capital insuffisant — abandon avant le point mort | 45% | -2 000 à -3 000€ investis perdus | 🔴 CRITIQUE |
| R3 | Fournisseur envoie produit sans vraie certification OEKO-TEX | 30% | Problème DGCCRF + retours massifs + avis 1 étoile = -5 000€+ | 🔴 CRITIQUE |
| R4 | Taux de retour > 20% | 20% | 16€ × 20% × 100 cmd = -320€/mois + spirale mort | 🟠 ÉLEVÉ |
| R5 | CPC monte à 1€+ suite à concurrence accrue | 25% | ROAS 6→2,5x, bénéfice mois 3 chute à 800€ | 🟠 ÉLEVÉ |
| R6 | Stripe/PayPal suspend le compte paiement | 15% | -100% revenus pendant 3-14j + fonds bloqués | 🟠 ÉLEVÉ |
| R7 | Avis 1 étoile viral au lancement (lot défectueux) | 20% | CVR chute à 0,3% → ROAS < 1 → pertes immédiates | 🟠 ÉLEVÉ |
| R8 | Erreur TVA/comptabilité = redressement fiscal | 50% | Redressement 6-18 mois + pénalités = 2 000-15 000€ | 🟡 MOYEN |
| R9 | Changement algorithme Google Shopping | 15% | -30 à -60% trafic overnight | 🟡 MOYEN |
| R10 | Fournisseur unique en rupture de stock au pic de ventes | 30% | Zéro vente 3-6 semaines = -6 000 à -15 000€ manque à gagner | 🟡 MOYEN |

---

## Plan de prévention R1 — Suspension GMC

- [ ] Pages légales complètes AVANT toute connexion GMC (CGV + Retours 30j + ML + RGPD)
- [ ] Politique retour > 14j explicitement mentionnée
- [ ] Photos produit fond blanc/neutre, SANS texte promo, SANS watermark, min 800×800px
- [ ] Prix TTC identiques boutique, flux GMC et checkout — tester avant lancement
- [ ] Ajouter identifier_exists=false dans flux pour produits marque propre (pas de GTIN)
- [ ] Désactiver tout cookie wall bloquant avant indexation Googlebot (tester navigation privée)
- [ ] Vérifier flux dans GMC Diagnostics — corriger 100% des erreurs avant Ads
- [ ] Avoir un compte GMC de secours sur email différent

---

## Plan de prévention R2 — Capital insuffisant

- Capital minimum requis : **3 000€ disponibles AVANT de commencer** (pas de crédit)
- Budget Ads phase 1 : **10€/j max** — ne scaler qu'après CVR > 1,5% confirmé
- Point mort réaliste : **mois 3** avec 50€/j si CVR > 2%
- Plan B si capitaux épuisés : baisser à 5€/j au lieu d'arrêter — maintenir le QS Google
- Suivi hebdomadaire : tableau de trésorerie — alerter si capital < 1 000€

---

## Plan de prévention R3 — OEKO-TEX falsifié

- Demander le numéro de certificat OEKO-TEX au fournisseur
- Vérifier sur [oeko-tex.com](https://www.oeko-tex.com/en/apply-here/oeko-tex-databases/label-check) avec le numéro fourni
- Tests indépendants si doute : laboratoire Intertek ou SGS (~200-400€)
- Ne JAMAIS écrire "certifié OEKO-TEX" sans avoir le certificat en main
- Contrat fournisseur avec clause certification — engagement écrit

---

## Les 10 erreurs les plus fréquentes (80% des échecs)

| # | Erreur | Conséquence | Solution Serenight |
|---|--------|-------------|-------------------|
| E1 | Pas de quiz personnalisation | Retours 18-25%, avis négatifs "pas le bon poids" | Quiz 3 questions obligatoire |
| E2 | Mauvaises photos produit | CTR < 0,8%, refus GMC | Photo fond blanc 800×800px + lifestyle |
| E3 | Fournisseur unique | Zéro vente 4-6 semaines au pic Q4 | Minimum 2 fournisseurs actifs |
| E4 | Ignorer conformité GMC | Suspension = ZÉRO ventes 7-30j = -3 000 à -8 000€ | Checklist GMC 100% avant lancement |
| E5 | Lancer sans aucun avis | CVR 0,3-0,5% = jamais rentable | 10 produits offerts micro-influenceurs avant J1 |
| E6 | Sous-estimer le poids des colis | Livraison 5,50€ prévu vs 8€ réel = -2,50€/commande | Calcul basé sur 8€ Mondial Relay |
| E7 | Positionnement trop médical | GMC refuse, DGCCRF intervient | Utiliser "aide à mieux dormir" jamais "traite" |
| E8 | Mauvais timing de lancement | Vendre en juin = volume ×0,3 vs automne | Lancer en août pour être rodé en septembre |
| E9 | Scale trop tôt | Budget brûlé à CVR 0,8% = ROAS 1,5x = pertes | Règle : CVR > 2% confirmé sur 7 jours minimum |
| E10 | Ignorer email marketing | Chaque client coûte 35€ CAC et n'est utilisé qu'une fois | Email = +20-30% de CA gratuit, flows J7 vital |

---

## Pourquoi les concurrents échouent

| Cause | Pourquoi | Impact | Solution Serenight |
|-------|----------|--------|-------------------|
| Pas de différenciation | Revendre exactement le même produit Amazon | Guerre des prix → marges < 40% | Mécanisme DPT-Pro + quiz + billes verre |
| CTR Shopping < 1% | Photos médiocres, titre générique | Budget brûlé sans retour | Photos pro + titre optimisé keyword |
| Abandon avant point mort | Mois 1-2 déficitaires → panique | Tous les investissements perdus | Capital 3 000€ + plan 90 jours documenté |
| GMC suspendu sans plan B | Pages légales incomplètes | Arrêt immédiat | Checklist + compte GMC backup |
| Zéro catalogue | Une seule couverture 8kg | AOV faible, LTV nulle | 5 collections, 10 produits, bundles |
| Mauvaise saison | Lancer en mars → croire que ça ne marche pas | Abandonnent avant la saison forte | Lancement août → boom sept-janvier |

---

## Pourquoi les clients demandent un remboursement

| Raison | Fréquence | Citation verbatim | Prévention Serenight |
|--------|-----------|-------------------|---------------------|
| Mauvais poids | 35% des retours | "J'ai pris 8kg mais c'est trop lourd, je me sens enfermée" | Quiz obligatoire + option échange poids |
| Trop chaud | 20% | "Je transpire sous la couverture" | Bambou thermorégulant + FAQ été/hiver |
| Dimensions trop petites | 15% | "Elle ne couvre pas les côtés du matelas" | Tableau correspondance taille/lit |
| Odeur chimique | 10% | "Forte odeur à l'ouverture" | OEKO-TEX + conseil aérer 24h avant |
| Qualité couture | 8% | "Des billes sortent après 2 lavages" | Vérification lot + garantie 5 ans |
| Billes bruyantes | 7% | "Quand je bouge, j'entends les billes" | Billes de verre 2mm silencieuses |
| Pas d'effet | 5% | "Je vois aucune différence sur mon sommeil" | Garantie 30 nuits gère ce cas |

---

## Verdict final — Investisseur hostile

> ✅ **SERENIGHT PASSE L'AUDIT DE DESTRUCTION**
>
> Les risques existent et sont réels — mais chaque risque critique a une parade concrète. Le seul risque non mitigeable à 100% est le **manque de capital** : si l'entrepreneur démarre avec moins de 3 000€ ou panique aux mois 1-2 déficitaires, le projet meurt. Tous les autres risques sont prévisibles et évitables avec les bonnes procédures.
>
> ✅ Marché réel (27 100 recherches/mois)  
> ✅ CPC exceptionnellement bas (0,36€)  
> ✅ Niche sous-exploitée en Google Ads  
> ✅ Différenciation solide (DPT-Pro + quiz + OEKO-TEX)  
> ⚠️ Condition sine qua non : checklist GMC + vérification OEKO-TEX AVANT de dépenser.
