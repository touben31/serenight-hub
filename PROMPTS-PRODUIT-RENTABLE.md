# 🎯 SYSTÈME DE PROMPTS COMPLET — TROUVER UN PRODUIT RENTABLE
## Méthode Ecom Durability (Yass Fox) — Version extraite de serenight-hub
> Copier-coller chaque prompt dans Claude dans l'ordre exact.
> Chaque prompt construit sur le précédent. Ne pas sauter d'étape.

---

## COMMENT UTILISER CE DOCUMENT

**Règle 1 :** Remplis les [CROCHETS] avec ton contexte avant d'envoyer.
**Règle 2 :** Chaque réponse devient le contexte du prompt suivant.
**Règle 3 :** Si une étape donne 0 bons résultats → recommence l'étape, pas le document entier.
**Règle 4 :** Capital minimum requis pour que ça vaille le coup : 3 500€+
**Règle 5 :** L'objectif est de trouver 1 seul produit. Pas 10. 1.

---

# ═══════════════════════════════════════
# PHASE 1 — GÉNÉRATION DE NICHES
# ═══════════════════════════════════════

## PROMPT 1.1 — Génération de 20 niches candidates

```
Tu es un expert en e-commerce D2C spécialisé dans la méthode Ecom Durability (Yass Fox).

Je cherche mon prochain produit à vendre en France via une boutique Shopify + Google Ads Shopping.

MON PROFIL :
- Capital disponible : [MONTANT]€
- Stratégie visée : [F-Cash / Durability / High Ticket]
- Centres d'intérêt personnels : [TES INTÉRÊTS]
- Expérience e-commerce : [DÉBUTANT / INTERMÉDIAIRE / AVANCÉ]
- Temps disponible par semaine : [HEURES]h
- Je veux éviter les niches : [NICHES À ÉVITER]

CRITÈRES OBLIGATOIRES (méthode Fox) :
1. Marge nette minimum 40% (après toutes les charges)
2. Prix de vente entre 50€ et 300€ (sweetspot Google Ads)
3. Produit physique, pas digital, pas service
4. Fournisseur possible sur Alibaba ou Europe
5. Saisonnalité acceptable (pas 100% été ou 100% hiver)
6. Problème réel résolu pour un avatar précis
7. Produit qui peut s'améliorer avec un quiz / personnalisation
8. Compatible Google Merchant Center (pas de produits interdits)
9. Pas de marque déposée dominante impossible à contourner
10. Pas d'industrie ultra-réglementée (médical, pharmaceutique, armes...)

Génère 20 niches. Pour chacune :
- Nom du produit principal
- Problème résolu (1 phrase)
- Avatar client (âge, genre, situation)
- Fourchette de prix vente estimée
- Note /10 sur le potentiel (sois honnête, ne flatte pas)
- 1 risque fatal immédiat

Format : tableau markdown.
```

---

## PROMPT 1.2 — Filtrage brutal

```
Voici les 20 niches générées :

[COPIER-COLLER LE TABLEAU DU PROMPT 1.1]

Applique maintenant le filtre de destruction :

ÉLIMINE IMMÉDIATEMENT toute niche qui a :
- Un marché dominé par Amazon Basics ou IKEA sur le mot-clé principal
- Des barrières réglementaires (CE, médical device, ANSM, autorisation spéciale)
- Un CPC Google Ads estimé > 1,50€ sur le mot-clé principal
- Un produit avec taux de retour naturel > 15% (vêtements, chaussures, électronique complexe)
- Un sourcing impossible sans usine propre ou MOQ > 500 unités
- Une tendance Google Trends en baisse sur 3 ans
- Un budget stock initial > [CAPITAL]€ × 70% pour la première commande

Il doit rester entre 3 et 8 niches après filtrage.
Pour chacune des survivantes, donne une note /100 selon ce barème :
- Taille marché + tendance : 30 pts
- Marge nette potentielle : 25 pts
- Difficulté acquisition Google Ads : 20 pts
- Différenciation possible : 15 pts
- Complexité opérationnelle : 10 pts

Classe par note décroissante.
```

---

## PROMPT 1.3 — Choix final de la niche

```
Voici les niches survivantes avec leurs scores :

[COPIER-COLLER LES RÉSULTATS DU PROMPT 1.2]

Recommande-moi LA MEILLEURE niche pour mon profil.
Justifie en 5 arguments concrets (pas de généralités).
Cite 2 marques concurrentes existantes qui prouvent que le marché est réel.
Dis-moi également la 2ème niche en réserve si la première échoue aux audits suivants.

Donne aussi :
- Le nom de domaine idéal (disponible, .fr ou .com)
- 3 idées de nom de marque premium
- Le prix de vente optimal pour commencer
```

---

# ═══════════════════════════════════════
# PHASE 2 — AUDIT DE DEMANDE RÉELLE
# (Module 5 Serenight)
# ═══════════════════════════════════════

## PROMPT 2.1 — Analyse Google Trends

```
Je vais auditer la demande réelle pour le produit suivant :

PRODUIT : [NOM DU PRODUIT]
NICHE : [NICHE CHOISIE]
MARCHÉ CIBLE : France

Fais une recherche Google Trends approfondie pour ce produit.

Analyse :
1. Tendance sur 5 ans (en hausse / stable / en baisse ?)
2. Pic saisonnier (quel mois ? quelle intensité ?)
3. Mois creux (valeur plancher)
4. Comparaison avec les 3 mots-clés concurrents les plus proches
5. Segments émergents (nouveaux termes associés en croissance)
6. Régions de France les plus demandeuses
7. Comparaison France vs Allemagne vs Royaume-Uni (le marché est-il universel ?)

Donne un verdict : est-ce que la demande est suffisante pour générer
au minimum 10 commandes/jour en haute saison avec 30€/j de budget Ads ?

Sois précis. Utilise des données réelles si possible.
```

---

## PROMPT 2.2 — Analyse données marché

```
Cherche les données de marché suivantes pour [PRODUIT] :

1. Taille du marché mondial (en milliards $, source et année)
2. CAGR prévu (croissance annuelle %)
3. Part du marché européen / français
4. Volume de recherches mensuelles France (Google Keyword Planner estimé)
5. Volume Amazon : combien d'unités vendues/mois pour le top 3 produits ?
6. Prix moyen constaté sur Amazon France pour [PRODUIT]
7. Nombre d'avis sur les top produits Amazon (proxy du volume réel)
8. Y a-t-il des marques D2C françaises sur ce segment ? Lesquelles ?
9. Y a-t-il des marques D2C étrangères qui ont percé en France ?
10. Quelle est la valeur de commande typique (panier moyen) dans cette niche ?

Synthèse : note la demande /10 avec justification.
```

---

## PROMPT 2.3 — Recherche des vrais acheteurs

```
Pour le produit [PRODUIT] :

Identifie les 5 segments d'acheteurs réels, classés par volume d'achat.
Pour chaque segment :
- Âge, genre, situation de vie
- Problème précis qui déclenche l'achat
- Moment exact où ils cherchent le produit
- Vocabulaire qu'ils utilisent dans leurs recherches Google
- Objection n°1 avant d'acheter
- Ce qu'ils lisent / regardent (reddit, youtube, forums spécialisés)

Quel segment est le plus facile à toucher avec Google Ads à CPC raisonnable ?
Quel segment a le panier moyen le plus élevé ?
```

---

# ═══════════════════════════════════════
# PHASE 3 — AUDIT DE DESTRUCTION
# (Module 1 Serenight)
# ═══════════════════════════════════════

## PROMPT 3.1 — Les 10 risques fatals

```
Tu es un investisseur hostile. Tu veux DÉTRUIRE ce projet avant qu'il commence.

PROJET : Boutique D2C Shopify + Google Ads Shopping vendant [PRODUIT] en France.
CAPITAL : [MONTANT]€
STRATÉGIE : [F-CASH / DURABILITY]

Identifie les 10 risques les plus graves pour ce projet spécifique.
Pour chaque risque :
- Probabilité en % (sois réaliste, pas catastrophiste)
- Impact financier chiffré (perte potentielle en euros)
- Gravité (CRITIQUE / ÉLEVÉ / MOYEN / FAIBLE)
- Mécanisme exact (pourquoi ça peut arriver)
- Plan de prévention en 3 actions concrètes
- Plan B si ça arrive quand même

Classe par (probabilité × impact). Le risque 1 doit être le plus dangereux réellement.

Focus particulier sur :
- Risques spécifiques à ce produit (pas génériques)
- Risques liés à Google Merchant Center
- Risques liés au fournisseur
- Risques liés au capital disponible
```

---

## PROMPT 3.2 — Audit GMC anticipé

```
Pour le produit [PRODUIT] vendu à [PRIX]€ :

Audit préventif Google Merchant Center :

1. Ce produit peut-il être refusé par GMC ? Pour quelle raison exacte ?
2. Y a-t-il des claims à éviter absolument (médicaux, scientifiques non prouvés) ?
3. Les photos standards de ce produit sont-elles conformes GMC ? (fond blanc requis ?)
4. Y a-t-il des catégories GMC spécifiques à utiliser ? (cherche le bon product_type)
5. Faut-il des certifications spéciales ? (CE, RoHS, REACH, etc.)
6. Le produit est-il dans la liste des produits restreints GMC ?
7. Quels attributs du flux sont obligatoires pour ce type de produit ?
8. Y a-t-il des concurrents sur ce segment qui se font suspendre régulièrement ?

Donne un score de risque GMC : FAIBLE / MOYEN / ÉLEVÉ / CRITIQUE
```

---

## PROMPT 3.3 — Analyse des barrières à l'entrée

```
Pour le marché [PRODUIT] en France :

1. Quelles certifications sont requises par la loi ? (pas optionnelles — légalement requises)
2. Qui vérifie le respect de ces certifications ? (DGCCRF, Douanes, autre ?)
3. Quelle est la pénalité en cas de non-conformité ?
4. Les concurrents Amazon actuels sont-ils tous conformes ? Ou beaucoup ne le sont pas ?
5. Est-ce un avantage concurrentiel de SE différencier par la conformité ?
6. Y a-t-il des acteurs dominants avec brevet ou marque déposée ?
   Recherche sur : data.inpi.fr + euipo.europa.eu
7. Le coût de la mise en conformité totale est-il estimable ? Chiffre-le.
8. Quelle est la durée pour être 100% en règle avant lancement ?
```

---

# ═══════════════════════════════════════
# PHASE 4 — PRÉ-MORTEM
# (Module 2 Serenight)
# ═══════════════════════════════════════

## PROMPT 4.1 — L'échec programmé

```
Exercice de pré-mortem. Méthode Gary Klein.

CONTEXTE : Ma boutique [NOM IMAGINAIRE] vendant [PRODUIT] a fermé en [ANNÉE+3].
Elle est morte. C'est fini. Je dois comprendre pourquoi.

Génère 15 scénarios d'échec réalistes, classés en 3 catégories :

CATÉGORIE A — Erreurs avant le lancement (fondations)
CATÉGORIE B — Erreurs d'acquisition (trafic et Ads)
CATÉGORIE C — Erreurs opérationnelles (produit, logistique, finance)

Pour chaque scénario :
- Titre de l'échec (accrocheur)
- Ce qui s'est passé exactement (storytelling de 5 lignes)
- Signal d'alerte que j'aurais dû voir
- Comment éviter ça concrètement avant que ça arrive

Les scénarios doivent être SPÉCIFIQUES à [PRODUIT] et à la France.
Pas de généralités. Des situations réelles et précises.
```

---

## PROMPT 4.2 — Immunisation post-prémort

```
Voici les 15 scénarios d'échec identifiés :

[COPIER-COLLER LES RÉSULTATS DU PROMPT 4.1]

Maintenant crée le "système immunitaire" de mon projet.

Pour chaque catégorie (A, B, C), donne-moi :
1. Les 3 règles non-négociables à mettre en place AVANT le lancement
2. Les indicateurs de surveillance hebdomadaire (KPIs d'alerte précoce)
3. Le seuil d'alerte (à partir de quand je dois agir)
4. L'action à prendre si le seuil est atteint

Format : tableau avec colonnes : Règle | KPI de surveillance | Seuil d'alerte | Action si dépassé
```

---

# ═══════════════════════════════════════
# PHASE 5 — ANALYSE DES LEADERS
# (Module 3 Serenight)
# ═══════════════════════════════════════

## PROMPT 5.1 — Décorticage des top boutiques

```
Analyse les 5 meilleures boutiques D2C françaises ou européennes vendant [PRODUIT].

Pour chaque boutique :
1. URL + nom
2. Fourchette de CA estimé (utilise SimilarWeb, Semrush ou autres données publiques)
3. Prix de vente (entrée de gamme / best-seller / premium)
4. Leur argument de vente principal (USP)
5. Canal d'acquisition principal (Google Ads ? Meta ? SEO ? TikTok ?)
6. Leur point faible (là où je peux les battre)
7. Leur point fort (là où je dois m'en inspirer)
8. Nombre d'avis vérifiés et note moyenne
9. Politique de retours
10. Packaging / présentation du produit

Synthèse : quels sont les 3 patterns communs à tous les leaders ?
Et quelle est la faille que PERSONNE n'a encore exploitée ?
```

---

## PROMPT 5.2 — Analyse des mots-clés et annonces

```
Pour la niche [PRODUIT] sur Google France :

1. Recherche les 20 mots-clés principaux avec volume mensuel estimé
   Format : Mot-clé | Volume/mois | Intention d'achat | CPC estimé | Difficulté

2. Identifie les 5 mots-clés "sweet spot" :
   Volume correct + intention achat + CPC < 1€ + marque propre possible

3. Analyse les annonces Google Shopping actuelles :
   - Quels sont les titres les plus fréquents ?
   - Quelles images reviennent (fond blanc ? lifestyle ?)
   - Quels prix sont affichés ?
   - Qui manque dans les résultats Shopping ? (opportunité)

4. Existe-t-il des mots-clés à longue traîne peu concurrentiels ?
   (ex : "[produit] pour [profil spécifique]" / "[produit] [matière premium]")

5. Quel est le niveau de compétition Google Shopping de 1 à 10 ?
   1 = aucune concurrence, 10 = Amazon + leaders impossible à battre
```

---

# ═══════════════════════════════════════
# PHASE 6 — FOSSÉ CONCURRENTIEL (MOAT)
# (Module 4 Serenight)
# ═══════════════════════════════════════

## PROMPT 6.1 — Construire l'avantage défendable

```
Pour le produit [PRODUIT] dans la niche [NICHE] :

Identifie 5 "fossés concurrentiels" (moats) que je peux construire
pour rendre ma boutique difficile à copier.

Pour chaque fossé :
- Description de l'avantage
- Temps pour le construire (semaines ou mois)
- Coût estimé (€)
- Difficulté pour un concurrent de le répliquer (1-10)
- Comment je le communique aux clients

Exemples de fossés à explorer pour ce produit :
1. Certification exclusive ou combinaison unique de certifications
2. Quiz / outil de personnalisation qui génère du premier commande
3. Contenu éducatif qui positionne comme expert référence
4. Communauté / programme fidélité
5. Système de garantie supérieur au marché
6. Partenariats avec professionnels (thérapeutes, médecins...)
7. Marque privée avec packaging distinctif
8. Formule exclusive ou matière première différente

Quels 2 ou 3 fossés sont les plus faisables dans les 90 premiers jours ?
```

---

## PROMPT 6.2 — Positionnement prix et offre

```
Pour [PRODUIT] dans ma boutique :

Je veux construire une structure de prix multi-SKU.
Le principe : le delta de coût fournisseur entre les niveaux est faible,
mais le delta de prix de vente est fort.

Propose une structure optimale :
1. SKU entrée de gamme (attirer + volume)
2. SKU best-seller (80% des ventes, marge max)
3. SKU premium (10% des ventes, marge absolue max)
4. Bundle / pack (AOV élevé)
5. Abonnement si applicable

Pour chaque SKU :
- Nom / description
- Prix de vente recommandé
- Coût fournisseur estimé (FOB Chine ou Europe)
- Marge brute estimée
- Argument de vente vs le SKU inférieur

Calcule ensuite l'AOV moyen si la distribution est :
40% entrée de gamme / 40% best-seller / 15% premium / 5% bundle
```

---

# ═══════════════════════════════════════
# PHASE 7 — SCORE FINAL PRODUIT
# ═══════════════════════════════════════

## PROMPT 7.1 — Notation sur 100 points

```
Voici toutes les données collectées sur [PRODUIT] :

DEMANDE : [RÉSUMÉ PHASE 2]
RISQUES : [RÉSUMÉ PHASE 3]
PRÉ-MORTEM : [RÉSUMÉ PHASE 4]
CONCURRENTS : [RÉSUMÉ PHASE 5]
MOAT : [RÉSUMÉ PHASE 6]

Note ce produit sur 100 points selon la grille Ecom Durability :

| Critère | Pondération | Ta note | Justification |
|---------|-------------|---------|---------------|
| Taille + tendance marché | 20 pts | /20 | |
| Marge nette potentielle | 20 pts | /20 | |
| Différenciation possible | 15 pts | /15 | |
| Facilité d'acquisition (Ads) | 15 pts | /15 | |
| Risques fatals identifiés | 15 pts | /15 | |
| Complexité opérationnelle | 10 pts | /10 | |
| Potentiel multi-SKU | 5 pts | /5 | |
| TOTAL | 100 pts | /100 | |

Règles d'interprétation :
- 80+ : GO sans hésiter
- 65-79 : GO avec prudence (plan B nécessaire)
- 50-64 : ATTENDRE (trop de risques, chercher un meilleur produit)
- < 50 : NO GO (passer au produit suivant)

VERDICT FINAL : GO / GO PRUDENT / ATTENDRE / NO GO
```

---

# ═══════════════════════════════════════
# PHASE 8 — IDENTITÉ DE MARQUE
# ═══════════════════════════════════════

## PROMPT 8.1 — 3 identités de marque

```
Mon produit retenu : [PRODUIT]
Score obtenu : [X]/100
Prix de vente : [PRIX]€
Avatar principal : [DESCRIPTION AVATAR]

Crée 3 identités de marque distinctes pour ce produit.
Chacune doit viser un positionnement différent.

Pour chaque identité :
1. Nom de marque (prononçable, mémorisable, domaine disponible probablement)
2. Tagline principale (max 5 mots)
3. Palette de couleurs (3 couleurs hex)
4. Ton de communication (5 adjectifs)
5. Cible principale (avatar précis)
6. Prix de vente recommandé avec ce positionnement
7. Canal de distribution principal (D2C / marketplace / physique ?)
8. Ce qui rend cette marque unique vs les concurrents
9. Score potentiel /10

Compare les 3 sur un tableau final.
Recommande la meilleure avec justification.
```

---

## PROMPT 8.2 — Mécanisme avatar (le système de personnalisation)

```
Inspiré du "Système de Garantie du Poids Parfait" de Serenight :

Pour mon produit [PRODUIT] et ma marque [NOM MARQUE] :

Invente un MÉCANISME AVATAR — c'est-à-dire un système de personnalisation
qui justifie le prix premium, réduit les retours et crée une barrière à l'entrée.

Exemples de mécanismes avatars réussis :
- Serenight : Quiz 3 questions → poids garanti → échange offert
- Blissim (birchbox) : Profil beauté → box personnalisée mensuelle
- Mister Auto : Immatriculation → pièces compatibles garanties

Propose 3 mécanismes avatars adaptés à [PRODUIT] :
- Nom du mécanisme (accrocheur, brevetable par le nom)
- Comment ça fonctionne (5 étapes max)
- Ce que le client reçoit à la fin
- Pourquoi ça réduit les retours
- Comment ça se communique dans les Ads Google
- Comment ça se traduit dans le quiz Shopify
- Coût de mise en place (temps + argent)

Recommande le meilleur des 3.
```

---

## PROMPT 8.3 — Top 20 objections et réponses

```
Pour le produit [PRODUIT] vendu [PRIX]€ sous la marque [NOM MARQUE] :

Liste les 20 objections les plus fréquentes avant l'achat.
Pour chaque objection :
- L'objection exacte (telle que le client la pense)
- Intensité : CRITIQUE / HAUTE / MOYENNE / FAIBLE
- La réponse parfaite de [NOM MARQUE] (directe, honnête, avec preuve)
- Comment l'intégrer sur la fiche produit ou la homepage

Classe par intensité décroissante.
Les 5 premières doivent être traitées sur la fiche produit.
Les 10 suivantes dans la FAQ.
Les 5 dernières dans les emails post-achat.
```

---

# ═══════════════════════════════════════
# PHASE 9 — MODÈLE FINANCIER RÉEL
# ═══════════════════════════════════════

## PROMPT 9.1 — Trouver les fournisseurs Alibaba

```
Pour le produit [PRODUIT] (spécifications : [DESCRIPTION PRÉCISE]) :

Recherche 10 fournisseurs Alibaba réels.
Pour chaque fournisseur :
1. Nom exact de l'entreprise
2. Ville / région en Chine
3. Prix FOB pour 1 échantillon
4. Prix FOB pour 50 unités
5. Prix FOB pour 100 unités
6. Certifications disponibles (et numéro vérifiable si possible)
7. MOQ (quantité minimum)
8. Délai de fabrication
9. Note Alibaba + nombre de transactions
10. Trade Assurance disponible ? (OUI/NON — si NON : éliminer)

Classe par rapport qualité/prix.
Identifie les 3 fournisseurs à contacter en priorité.

Donne le message exact à envoyer en anglais pour demander un échantillon.
```

---

## PROMPT 9.2 — Calcul de la marge nette réelle

```
Calcule la marge nette réelle pour [PRODUIT] avec ces données :

PRODUIT :
- Prix de vente : [PRIX]€
- Coût FOB fournisseur × 100u : $[MONTANT]
- Taux de change : 1 USD = 0,92 EUR

LIVRAISON CHINE → FRANCE :
- Mode choisi : [AÉRIEN / MARITIME LCL]
- Quantité : [NOMBRE] unités
- Coût fret/unité : [MONTANT]€ (si pas connu : utiliser 26€/u pour maritime 100u)

IMPORT :
- Droits de douane : [TAUX]% (si pas connu : utiliser 12% pour textile, 3,7% pour électronique)
- TVA import : 5,5% (produits de confort) ou 20% (luxe, électronique)
- Courtier douane amorti : 150€ / [NOMBRE] unités

FRAIS VARIABLES PAR VENTE :
- Emballage : [MONTANT]€
- Livraison France (Mondial Relay pro) : 8,00€
- Shopify Payments (Basic) : prix × 1,5% + 0,25€
- Taux de retours estimé : [%]% × 22€ de coût de retour
- Chargebacks (0,3%) × 15€ (frais Shopify)
- SAV (8% des commandes × 5 min × 15€/h)
- Apps Shopify amorties : 1,00€/commande

FRAIS FIXES MENSUELS :
- Shopify Basic : 29€
- Domaine : 2€
- Applications : [MONTANT]€

Calcule :
1. Coût rendu France par unité (décomposé ligne par ligne)
2. Total coûts variables par vente
3. Marge brute
4. Marge nette (après frais fixes amorti sur [X] commandes/mois estimées)
5. Marge %
6. CPA maximum supportable (pour Google Ads)
7. À quel ROAS minimum la campagne est-elle rentable ?

Si la marge nette < 30% : recommande une action corrective immédiate.
```

---

## PROMPT 9.3 — Capital requis et plan de financement

```
Pour lancer [BOUTIQUE] vendant [PRODUIT] :

Calcule le capital requis pour 4 scénarios de volume initial :
30 unités / 50 unités / 75 unités / 100 unités

Pour chaque scénario :
1. Coût stock total (rendu France, toutes charges incluses)
2. Frais pré-lancement (domaine, échantillons, Shopify, divers)
3. Budget Google Ads M1 (10€/j × 30j)
4. Frais opérations M1 (Shopify + apps + logistique)
5. Buffer sécurité 10%
6. TOTAL CAPITAL REQUIS
7. Gap depuis [MON CAPITAL DISPONIBLE]€
8. Cash restant après achat du stock (pour les Ads)

Puis :
9. Marge nette par vente à [PRIX]€ pour chaque volume
10. Nombre de ventes nécessaires pour récupérer l'investissement initial
11. Estimation du nombre de mois avant break-even (hypothèse : [X] ventes/mois)

Verdict final : quel volume est faisable avec mon capital ?
```

---

# ═══════════════════════════════════════
# PHASE 10 — EXÉCUTION SHOPIFY
# ═══════════════════════════════════════

## PROMPT 10.1 — Structure complète de la boutique

```
Je lance [NOM BOUTIQUE] vendant [PRODUIT] à [PRIX]€.
Avatar principal : [DESCRIPTION].
USP : [USP CHOISIE].
Mécanisme avatar : [NOM DU MÉCANISME].

Crée la structure complète de ma boutique Shopify :

1. PAGES OBLIGATOIRES
   - Homepage (liste les 10 sections dans l'ordre optimal)
   - Fiche produit [SKU 1] (structure des éléments dans l'ordre)
   - Fiche produit [SKU 2]
   - Page Quiz (logique des questions)
   - CGV conformes DGCCRF
   - Mentions légales
   - Politique retours (garantie [X] nuits)
   - Politique confidentialité (RGPD)

2. NAVIGATION (menu principal)
   - Liens dans l'ordre optimal pour le CVR

3. FOOTER (liens obligatoires GMC)

4. APPS RECOMMANDÉES
   - Pour le quiz (option gratuite + option payante)
   - Pour les avis (Judge.me ou autre)
   - Pour les emails (Klaviyo)
   - Pour les cookies (Axeptio)
   - Pour l'analytics (Clarity)

5. PARAMÈTRES CRITIQUES
   - Shopify Payments activation
   - Livraison offerte (configuration)
   - Klarna 3× (activation)
```

---

## PROMPT 10.2 — Fiches produits finales

```
Pour [NOM BOUTIQUE], crée les fiches produits Shopify complètes pour :

SKU 1 : [NOM PRODUIT 1] — [PRIX]€
SKU 2 : [NOM PRODUIT 2] — [PRIX]€
SKU 3 : [NOM PRODUIT 3] — [PRIX]€

Pour chaque fiche :
1. Titre Shopify (max 150 caractères, optimisé Google Shopping)
2. Description HTML complète (prêt à copier dans Shopify)
   - Accroche émotionnelle (2 phrases)
   - Bénéfices (liste ul/li, pas de caractéristiques)
   - Caractéristiques techniques (tableau)
   - Certifications (avec comment vérifier)
   - Ce qui est inclus
   - Notre garantie (détaillée)
   - Disclaimer médical si nécessaire
3. Titre Google Shopping (max 150 car.) — optimisé Shopping
4. Description SEO (155 caractères)
5. Tags Shopify (10 tags pertinents)

Règles impératives :
- AUCUN claim médical ou thérapeutique non prouvé
- AUCUN chiffre inventé ("90% de nos clients...")
- Vocabulaire autorisé : favorise / conçu pour / inspiré de / peut aider
```

---

## PROMPT 10.3 — Homepage et quiz

```
Pour [NOM BOUTIQUE] / [PRODUIT] / [PRIX]€ :

PARTIE A — HOMEPAGE
Crée le copy complet de la homepage en 10 sections :
1. Hero (titre H1 + sous-titre + CTA + rassurances)
2. Bande de preuves sociales (4 chiffres clés)
3. Section quiz CTA (accroche + bouton + rassurances)
4. Produit phare (image + bénéfices + CTA)
5. Comment ça marche (3 étapes)
6. 3 objections levées (style Q&A)
7. Garantie (bloc complet)
8. Avis clients (placeholder pour Judge.me)
9. FAQ (5 questions essentielles)
10. Footer CTA (dernière chance de convertir)

PARTIE B — QUIZ
Crée le quiz de personnalisation [MÉCANISME AVATAR] :
- Question 1 : [VARIABLE CLÉ 1]
- Question 2 : [VARIABLE CLÉ 2]
- Question 3 : [VARIABLE CLÉ 3]
- Logique de recommandation (tableau décision)
- Copy des 3 résultats possibles
- Code HTML natif pour l'intégrer dans une page Shopify
```

---

## PROMPT 10.4 — Pages légales complètes

```
Génère les 5 pages légales pour [NOM BOUTIQUE] :

INFORMATIONS À INTÉGRER :
- Prénom Nom : [TON NOM]
- SIRET : [TON SIRET]
- Adresse : [TON ADRESSE]
- Email : contact@[tondomaine].fr
- Produit vendu : [PRODUIT]
- Prix : de [PRIX MIN]€ à [PRIX MAX]€
- Garantie retour : [X] nuits
- Livraison : offerte France métropolitaine
- Délai livraison : [X] jours ouvrés

Pages à générer :
1. CGV (Conditions Générales de Vente) — complètes et conformes DGCCRF
2. Mentions Légales
3. Politique de retours et remboursements
4. Politique de confidentialité (RGPD)
5. Procédure installation Axeptio (cookies)

Règles :
- Format : prêt à copier dans Shopify
- Français juridique correct
- Compléter uniquement les [CHAMPS ENTRE CROCHETS]
```

---

# ═══════════════════════════════════════
# PHASE 11 — GOOGLE ADS + GMC
# ═══════════════════════════════════════

## PROMPT 11.1 — Checklist GMC complète

```
Avant de lancer les campagnes Google Ads pour [NOM BOUTIQUE] / [PRODUIT] :

Génère une checklist exhaustive de 30 points GMC.
Pour chaque point :
- Description de l'action à faire
- Où l'effectuer (URL ou chemin exact dans GMC ou Shopify)
- Comment vérifier que c'est bien fait
- Priorité : BLOQUANT / IMPORTANT / RECOMMANDÉ

Sections :
A. Compte GMC (6 points)
B. Domaine et site (4 points)
C. Pages légales (5 points)
D. Flux produits (8 points)
E. Politique livraison + retours dans GMC (4 points)
F. Mots interdits et claims (3 points)

Score final : si < 28/30 cochés → NE PAS LANCER
```

---

## PROMPT 11.2 — Structure campagnes Google Ads

```
Pour [NOM BOUTIQUE] vendant [PRODUIT] à [PRIX]€, budget M1 : [X]€/jour :

Crée la structure complète des campagnes Google Ads pour les 3 premiers mois.

MOIS 1 — Apprentissage (budget [X]€/j)
- Campagne 1 : Shopping Standard "Tous produits"
  → Budget / Enchères / Priorité / Mots-clés négatifs à ajouter dès J1

- Campagne 2 : Shopping Priority "[SKU PHARE]"
  → Budget / Enchères / Priorité haute / Produit filtré

MOIS 2 — Optimisation (budget [X × 1,5]€/j)
- Que doit-on faire si CTR < 0,5% après J14 ?
- Que doit-on faire si CPC > [Y]€ après J7 ?
- Quand ajouter la campagne Search ?

MOIS 3 — Scale (budget [X × 3]€/j)
- Critères pour scaler (CVR, ROAS, stock)
- Quand introduire Performance Max ?

LISTE NÉGATIVE COMPLÈTE :
Donne la liste de 30 mots-clés négatifs à exclure avant le premier lancement,
spécifique à [PRODUIT].

JOURNAL DE BORD QUOTIDIEN :
Template des métriques à suivre chaque jour (5 lignes max par jour).
```

---

## PROMPT 11.3 — Flows email Klaviyo

```
Pour [NOM BOUTIQUE] / [PRODUIT] :

Crée la structure complète de 5 flows Klaviyo prioritaires :

FLOW 1 — Welcome (nouveau subscriber)
J+0 / J+2 / J+5 : objet + body outline + CTA

FLOW 2 — Post-Quiz (a fait le quiz sans acheter)
J+0 (immédiat) / J+2 / J+5 : objet + body outline + CTA

FLOW 3 — Panier abandonné
J+1h / J+24h / J+72h : objet + body outline + CTA + urgence

FLOW 4 — Post-achat J+7
Demande d'avis + guide d'utilisation + cross-sell

FLOW 5 — Win-back (client inactif 90j)
J+0 / J+7 : offre de réactivation

Pour chaque email :
- Objet (max 50 caractères, sans emoji pour livraison optimale)
- Preheader (max 90 caractères)
- Structure du corps (pas le texte complet — la structure)
- CTA principal
- CTA secondaire si applicable
```

---

# ═══════════════════════════════════════
# PROMPTS BONUS — ACCÉLÉRATEURS
# ═══════════════════════════════════════

## PROMPT B1 — Trouver les micro-influenceurs

```
Pour [NOM BOUTIQUE] / [PRODUIT] en France :

Identifie le type de micro-influenceurs parfaits (10k-100k abonnés) pour
une collaboration de lancement.

Donne-moi :
1. Les 5 catégories d'influenceurs à cibler (thèmes, pas des noms)
2. Les 3 plateformes prioritaires (Instagram / TikTok / YouTube)
3. Le message exact à envoyer pour une collaboration "gifting"
4. Ce que je dois inclure dans le colis envoyé
5. Les métriques à vérifier avant de contacter (engagement rate, audience qualité)
6. Comment mesurer le ROI de chaque collaboration
7. Quelle relation de long terme proposer après le premier test
```

---

## PROMPT B2 — Stratégie de contenu SEO

```
Pour [NOM BOUTIQUE] / [PRODUIT] — stratégie SEO 6 mois :

1. Identifie les 20 mots-clés SEO à cibler (volume + intention + difficulté)
   Format : Mot-clé | Volume/mois | Difficulté (1-100) | Type de contenu

2. Crée le calendrier éditorial :
   - 4 articles de blog/mois
   - Sujets des 24 premiers articles (6 mois)
   - Structure de chaque article (H1, H2, H3, questions FAQ intégrées)

3. Optimisation technique Shopify :
   - Balises title + meta description de la homepage
   - Schema.org Product markup pour les fiches
   - Structure des URLs

4. Stratégie de backlinks :
   - 5 types de sites à cibler pour des liens entrants
   - Message de prospection pour les articles "guest post"
```

---

## PROMPT B3 — Revue mensuelle automatisée

```
C'est la fin du mois [X] pour [NOM BOUTIQUE].

Voici mes données du mois :
- CA total : [MONTANT]€
- Commandes : [NOMBRE]
- Budget Ads dépensé : [MONTANT]€
- Taux de retours : [%]%
- Marge nette réalisée : [MONTANT]€
- ROAS moyen : [X]
- CVR boutique : [%]%
- Note moyenne produits : [X]/5

Analyse ces résultats selon la méthode Ecom Durability.
Réponds à ces 5 questions :
1. Suis-je dans les benchmarks attendus pour ce stade ? (OUI / NON + pourquoi)
2. Quelle est la priorité absolue du mois prochain ?
3. Dois-je scaler, maintenir ou réduire le budget Ads ? Pourquoi ?
4. Quel est l'indicateur le plus préoccupant ? Comment le corriger ?
5. Quelles sont les 3 actions à faire dans les 7 prochains jours ?

Comparatif : où devrais-je en être selon la méthode Fox à ce stade ?
```

---

## PROMPT B4 — Négociation fournisseur

```
Je veux négocier avec le fournisseur [NOM] sur Alibaba pour [PRODUIT].

Il m'a proposé :
- Prix échantillon : $[X]
- Prix × 50u : $[X]
- Prix × 100u : $[X]
- MOQ : [X] unités
- Délai : [X] jours

Je veux obtenir :
- Prix × 50u : $[OBJECTIF] (réduction de [X]%)
- Prix × 100u : $[OBJECTIF]
- Private label (mon logo) dès [X] unités
- Certificat [OEKO-TEX / CE / autre] fourni et vérifiable
- Délai réduit à [X] jours

Rédige le message de négociation parfait en anglais.
Stratégie : je dois lui montrer que je suis un acheteur sérieux avec un plan long terme,
pas un opportuniste qui cherche le moins cher.
Je commande en petite quantité maintenant, mais j'ai l'intention de commander
[X] unités/mois d'ici 6 mois si le produit est validé.
```

---

## PROMPT B5 — Décision GO / NO-GO final

```
Voici le résumé complet de mon étude de marché pour [PRODUIT] :

SCORE PRODUIT : [X]/100
CAPITAL DISPONIBLE : [X]€
CAPITAL REQUIS MIN VIABLE : [X]€
MARGE NETTE ESTIMÉE : [X]€ ([X]%)
RISQUE FATAL PRINCIPAL : [DESCRIPTION]
CONCURRENT LE PLUS DANGEREUX : [NOM + POURQUOI]
POINT DE DIFFÉRENCIATION UNIQUE : [DESCRIPTION]
MÉCANISME AVATAR : [NOM]
DATE DE LANCEMENT PRÉVUE : [DATE]

Sur la base de tous ces éléments, donne-moi ta décision finale :

1. GO / NO GO (avec niveau de conviction en %)
2. Si GO : les 5 premières actions à faire dans les 7 prochains jours
3. Si NO GO : quelle est la condition manquante à remplir pour revenir en GO ?
4. Quel est le risque résiduel le plus sous-estimé que je n'ai peut-être pas vu ?
5. Dans 12 mois, à quoi ressemble ce projet s'il réussit ?
   (CA mensuel estimé, marge, nombre de SKUs, prochaine étape)
```

---

# ═══════════════════════════════════════
# RÉSUMÉ — ORDRE D'UTILISATION
# ═══════════════════════════════════════

```
SEMAINE 1 :
1.1 → 1.2 → 1.3    Trouver la niche
2.1 → 2.2 → 2.3    Valider la demande

SEMAINE 2 :
3.1 → 3.2 → 3.3    Audit des risques
4.1 → 4.2          Pré-mortem

SEMAINE 3 :
5.1 → 5.2          Analyser les leaders
6.1 → 6.2          Construire le moat
7.1                 Score final → décision

SEMAINE 4 :
8.1 → 8.2 → 8.3    Créer la marque
9.1 → 9.2 → 9.3    Modèle financier
B4                  Négocier les fournisseurs

MOIS 2 — EXÉCUTION :
10.1 → 10.2 → 10.3 → 10.4   Construire la boutique
11.1 → 11.2 → 11.3           Lancer les Ads + Emails
B1 → B2                       Influenceurs + SEO

CHAQUE MOIS :
B3                  Revue mensuelle
B5                  Décision d'escalade ou pivot
```

---

> **Note finale :** Ces prompts sont extraits et généralisés de la méthodologie appliquée pour Serenight (couverture lestée). La même logique fonctionne pour tout produit physique D2C entre 50€ et 300€. Le travail d'audit prend 3-4 semaines. Ne pas sauter d'étape. Le score final /100 est non-négociable : en dessous de 65, chercher un autre produit.
