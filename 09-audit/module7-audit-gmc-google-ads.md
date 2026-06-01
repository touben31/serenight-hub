# 🔴 MODULE 7 — Audit GMC / Google Ads Complet — Serenight
> Google Merchant Center · Règles 2026 · Couverture lestée / Bien-être
> C'est souvent là que les boutiques meurent avant leur première vente.

---

## POURQUOI CE MODULE EST CRITIQUE

**Statistique réelle :** 35% des nouveaux comptes GMC sont suspendus dans les 30 premiers jours.
**Conséquence :** 0 impression → 0 clic → 0 vente → budget Ads brûlé à vide.
**Délai de résolution moyen :** 7 à 30 jours ouvrés selon la cause.
**Coût d'une suspension de 15 jours** (base 50€/j budget) : −7 500€ de CA perdu.

Ce module a un seul objectif : **que Serenight ne soit jamais suspendu.**

---

## PARTIE 1 — RÈGLES GMC : SITE WEB

### 1.1 Exigences SSL / HTTPS

| Règle | Exigence | Statut Serenight | Action |
|-------|----------|-----------------|--------|
| Toutes les pages en HTTPS | Obligatoire | ✅ Shopify gère automatiquement | Vérifier dans Shopify → Domaines |
| Certificat SSL valide | Non expiré | ✅ Shopify renouvelle automatiquement | Aucune |
| Redirections HTTP → HTTPS | Automatique | ✅ Shopify gère | Vérifier en naviguant en HTTP |
| Pas de contenu mixte | Aucune image ou script en HTTP | ⚠️ À vérifier après installation d'apps | Utiliser Chrome DevTools → Console |

### 1.2 Accessibilité du site pour Googlebot

| Règle | Exigence | Risque si absent | Action |
|-------|----------|-----------------|--------|
| Site accessible sans connexion | Googlebot ne se connecte pas | 🔴 Suspension immédiate | Tester en navigation privée |
| Pas de cookie wall bloquant | Le pop-up cookies ne doit pas bloquer l'accès | 🔴 Suspension immédiate | Paramétrer le CMP avec accès possible sans accepter |
| Pas de géo-restriction | Site accessible depuis USA (serveurs Google) | 🔴 Suspension | Shopify n'applique pas de géo-restriction par défaut |
| Pas de redirection vers page de maintenance | Shopify "password page" désactivée | 🔴 Suspension | Shopify → Boutique en ligne → Désactiver mot de passe |
| Robots.txt permissif | Ne pas bloquer Googlebot | 🟠 Refus indexation | Vérifier : serenight.com/robots.txt |
| Temps de chargement | < 3 secondes mobile | 🟡 Mauvais QS | PageSpeed Insights |

### 1.3 Pages légales obligatoires — Détail exact

**Chaque page doit exister, être accessible depuis le footer, et contenir ces éléments précis :**

#### Page CGV (Conditions Générales de Vente)
- [ ] Identité complète du vendeur (nom, prénom ou raison sociale, SIRET, adresse physique complète)
- [ ] Adresse email de contact fonctionnelle
- [ ] Numéro de téléphone OU formulaire de contact
- [ ] Description des produits
- [ ] Prix en euros TTC affichés clairement
- [ ] Modalités de paiement acceptées
- [ ] Délais de livraison en jours ouvrés
- [ ] **Droit de rétractation 14 jours** (loi consommation FR — OBLIGATOIRE)
- [ ] Procédure de retour et modalités de remboursement
- [ ] Garantie légale de conformité
- [ ] Juridiction compétente

#### Page Mentions Légales
- [ ] Raison sociale / nom de l'éditeur
- [ ] Numéro SIRET ou SIREN
- [ ] Adresse siège social
- [ ] Adresse email
- [ ] Directeur de publication (prénom + nom)
- [ ] Hébergeur : **Shopify Inc., 151 O'Connor Street, Ottawa ON K2P 2L8, Canada**
- [ ] Numéro de TVA intracommunautaire (si applicable)

#### Page Politique de Retours
> ⚠️ C'est la page la plus scrutée par GMC. Elle doit être claire, visible, et cohérente avec le flux produit.

- [ ] Délai de retour clairement affiché (Serenight : **30 nuits = 30 jours**)
- [ ] Conditions du retour (état du produit, emballage)
- [ ] Procédure étape par étape
- [ ] Qui prend en charge les frais de retour (Serenight : **retour prépayé**)
- [ ] Délai de remboursement (max 14 jours légaux — Serenight : **5 jours ouvrés**)
- [ ] Mode de remboursement (même moyen de paiement)
- [ ] Mention explicite : **"Sans justification requise dans les 30 nuits"**

#### Page Politique de Confidentialité / RGPD
- [ ] Liste des données collectées (email, adresse, IP, cookies)
- [ ] Finalité de chaque donnée
- [ ] Durée de conservation
- [ ] Droits des utilisateurs (accès, rectification, suppression, portabilité)
- [ ] Coordonnées pour exercer ces droits
- [ ] Mention des sous-traitants (Shopify, Klaviyo, Google, Stripe)
- [ ] Politique cookies distincte ou intégrée

#### Bandeau Cookies (CMP)
- [ ] Apparaît à la première visite
- [ ] Choix clair : Accepter / Refuser / Paramétrer
- [ ] **Le refus doit être aussi simple que l'acceptation** (règle CNIL 2022)
- [ ] Ne bloque PAS l'accès au site si refusé
- [ ] Les cookies non-essentiels ne se déclenchent pas avant acceptation
- [ ] Apps recommandées : **Axeptio** (fr) ou **Cookiebot**

### 1.4 Informations de contact visibles

| Exigence GMC | Où afficher | Serenight |
|-------------|-------------|-----------|
| Email de contact | Footer + page Contact + CGV | contact@serenight.com |
| Formulaire de contact OU téléphone | Page Contact | Formulaire Shopify natif |
| Adresse physique | CGV + Mentions légales | Adresse micro-entreprise |
| Disponibilité SAV | Page Contact | "Réponse sous 24h ouvrées" |

> ⚠️ GMC vérifie que l'email de contact répond réellement. Ne pas utiliser une boîte abandonnée.

---

## PARTIE 2 — RÈGLES GMC : FLUX PRODUIT

### 2.1 Attributs obligatoires du flux

| Attribut | Valeur Serenight | Format requis | Erreur fréquente |
|----------|-----------------|---------------|-----------------|
| `id` | serenight-classic-8kg | Alphanumérique unique, stable | Changer l'ID = nouveau produit pour Google |
| `title` | Couverture Lestée Serenight 8kg \| Bambou OEKO-TEX \| Garantie 30 Nuits | 1-150 caractères | Majuscules excessives → refus |
| `description` | Texte long sans HTML | 500-5000 caractères idéalement | Copier-coller HTML avec balises → erreur |
| `link` | https://serenight.com/products/classic-8kg | URL exacte page produit | URL redirigée → refus |
| `image_link` | https://cdn.shopify.com/... | HTTPS, min 100×100px, max 64MB | Image en HTTP → refus automatique |
| `price` | 89.00 EUR | Format exact avec devise | Espace dans le prix → erreur |
| `availability` | in_stock | in_stock / out_of_stock / preorder | Désynchronisation avec Shopify → suspension |
| `condition` | new | new / used / refurbished | Absent = refus |
| `brand` | Serenight | Votre marque | Absent = refus |
| `identifier_exists` | FALSE | TRUE / FALSE | **CRITIQUE** — voir section 2.2 |

### 2.2 Le cas identifier_exists — Critique pour Serenight

**Problème :** GMC exige un GTIN (code-barres EAN/UPC) pour tous les produits. Serenight est une marque propre sans GTIN.

**Solution :** Déclarer `identifier_exists = FALSE`

```
identifier_exists: FALSE
```

Cela indique à Google que le produit est de marque propre et n'a pas de GTIN global. **Sans cette ligne, GMC cherche un GTIN et rejette le produit.**

> ⚠️ Ne jamais inventer un GTIN. Un faux GTIN = suspension pour "données incorrectes".

### 2.3 Cohérence prix flux ↔ boutique

| Règle | Détail | Risque |
|-------|--------|--------|
| Prix TTC identique | Prix flux = prix affiché sur la page produit | 🔴 Suspension "prix incorrect" |
| Devise identique | EUR dans le flux = EUR sur le site | 🔴 |
| Prix promo synchronisé | Si solde sur Shopify → flux doit refléter le prix promo | 🟠 Refus produit |
| Prix variants cohérents | Si Classic 8kg a plusieurs variantes (couleurs) → chaque variante a son propre prix dans le flux | 🟠 |
| Pas de prix "À partir de" | GMC exige le prix exact, pas une plage | 🟠 |

**Comment éviter les désynchronisations :**
Utiliser l'application Google & YouTube (officielle Shopify). Elle synchronise automatiquement prix et disponibilité toutes les heures.

### 2.4 Exigences images produit

| Critère | Exigence GMC | Pour Serenight | Fréquence erreur |
|---------|-------------|----------------|-----------------|
| Fond | Blanc, gris clair ou neutre RECOMMANDÉ pour Shopping | Fond blanc ou lifestyle neutre | Fréquente |
| Texte sur l'image | INTERDIT (promotions, prix, badges) | Aucun texte sur photo principale | Fréquente |
| Watermark | INTERDIT | Aucun logo sur photo principale | Fréquente |
| Dimension minimum | 100×100px (Shopping : 250×250px minimum recommandé) | 800×800px minimum | Rare |
| Dimension idéale | 1200×1200px | 1200×1200px | — |
| Format | JPEG, PNG, GIF (non animé), WebP | JPEG ou WebP | — |
| Ratio | Carré de préférence (1:1) | 1:1 pour la photo principale | — |
| Contenu | Produit seul visible clairement | Couverture pliée ou dépliée sur fond neutre | — |
| HTTPS | Obligatoire | ✅ Shopify CDN en HTTPS | — |
| Image lifestyle | Autorisée en images supplémentaires | Ambiance lit / femme qui dort | — |

> ⚠️ Images supplémentaires (additional_image_link) : autorisées avec lifestyle, texte possible. Seule `image_link` (principale) doit être sans texte ni watermark.

### 2.5 Titre produit — Optimisation GMC + SEO

**Formule recommandée pour couverture lestée :**
```
[Marque] [Type produit] [Poids] | [Matière certif] | [Bénéfice clé] | [Garantie]
```

**Exemples :**
```
✅ Bon : Serenight Couverture Lestée 8kg | Bambou OEKO-TEX | Garantie 30 Nuits
✅ Bon : Couverture Lestée Serenight Classic 8kg Bambou – Billes de Verre – OEKO-TEX Certifié
❌ Mauvais : COUVERTURE LESTÉE SERENIGHT 8KG LA MEILLEURE QUALITÉ SOLDES (majuscules = refus)
❌ Mauvais : Couverture lestée (trop court, pas de différenciation)
❌ Mauvais : Serenight™ Couverture Lestée® (symboles marque déposée non enregistrée = refus)
```

---

## PARTIE 3 — TERMES INTERDITS PAR GMC

### 3.1 Allégations médicales — LIGNE ROUGE

GMC interdit toute allégation présentant un produit comme traitant, guérissant, ou prévenant une condition médicale.

| ❌ INTERDIT | ✅ AUTORISÉ |
|-------------|------------|
| "Traite l'anxiété" | "Aide à réduire les sensations d'anxiété" |
| "Guérit l'insomnie" | "Favorise un meilleur endormissement" |
| "Thérapeutique" | "Bien-être" |
| "Dispositif médical" | "Produit de confort" |
| "Certifié par des médecins" | "Recommandé par des ergothérapeutes" |
| "Cliniquement prouvé" (sans étude propre) | "Des études scientifiques montrent que..." |
| "Traite le TDAH" | "Utilisé par des familles d'enfants TDAH" |
| "Réduit les crises d'anxiété" | "Aide à se sentir plus calme" |
| "Remplace les somnifères" | "Alternative naturelle pour mieux dormir" |
| "Médicalement approuvé" | — (ne pas utiliser sans preuve documentée) |

> ⚠️ Ces règles s'appliquent aux **titres produits, descriptions, pages du site ET annonces Search**. Une seule phrase interdite dans la description Shopify peut déclencher une suspension du compte entier.

### 3.2 Allégations prix / promotions interdites

| ❌ INTERDIT | ✅ AUTORISÉ |
|-------------|------------|
| "Meilleur prix garanti" | "Prix compétitif" |
| "Moins cher qu'Amazon" | "Voir notre offre" |
| "-50% SOLDES" dans l'image principale | Prix promo dans le flux (champ sale_price) |
| "Gratuit" (si conditions) | Mentionner les conditions clairement |
| Prix non TTC | Prix TTC obligatoire |

### 3.3 Mots déclencheurs d'examen approfondi

Ces termes ne sont pas interdits mais **déclenchent un examen manuel** par une équipe Google. Délai supplémentaire : 3-10 jours.

- "thérapie" / "thérapeutique"
- "médical" / "médecine"
- "clinique" / "cliniquement"
- "dépression" / "anxiété sévère" / "trouble"
- "TDAH" / "TSA" / "autisme" (utilisable avec précaution)
- "prescription" / "ordonnance"
- "symptômes"
- "traitement"

**Stratégie Serenight :** Utiliser le champ sémantique du **bien-être et du sommeil**, pas de la médecine.

| À éviter | À utiliser |
|----------|-----------|
| anxiété → | stress, tension, agitation |
| insomnie → | difficultés d'endormissement, sommeil perturbé |
| TDAH → | enfants agités, difficultés de concentration |
| thérapeutique → | bienfaisant, apaisant, relaxant |
| traite → | aide à, favorise, contribue à |

### 3.4 Autres termes interdits dans les annonces

- Superlatifs non prouvés : "le meilleur", "le plus efficace", "le N°1"
- Urgence fausse : "stock limité" si le stock est infini
- Faux témoignages : avis inventés ou attribués à de fausses personnes
- Droits d'auteur tiers : noms de marques concurrentes dans les annonces
- Prix d'appel trompeur : mettre 69€ en titre si le produit coûte 89€

---

## PARTIE 4 — RISQUES DE SUSPENSION GMC

### 4.1 Les 12 causes de suspension (classées par fréquence réelle)

| # | Cause | Fréquence | Délai résolution | Gravité |
|---|-------|-----------|-----------------|---------|
| 1 | Pages légales incomplètes ou inaccessibles | 38% | 3-10j | 🔴 |
| 2 | Écart prix flux ↔ site | 22% | 1-3j | 🔴 |
| 3 | Images non conformes (texte, watermark) | 17% | 1-3j | 🟠 |
| 4 | Cookie wall bloquant Googlebot | 12% | 1j | 🔴 |
| 5 | Allégations médicales dans descriptions | 7% | 7-30j | 🔴 |
| 6 | Site en mode maintenance (password page Shopify) | 4% | 1j | 🔴 |
| 7 | GTIN invalide ou manquant (sans identifier_exists=false) | 3% | 3-7j | 🟠 |
| 8 | Politique retour absente ou inférieure à 14j légaux | 2% | 3-7j | 🔴 |
| 9 | Site inaccessible depuis les serveurs Google (US) | 1% | 1-3j | 🔴 |
| 10 | Taux de chargement page > 5 secondes | 1% | Variable | 🟡 |
| 11 | Produits dangereux non déclarés | Rare | 30j+ | 🔴 |
| 12 | Récidive après première suspension | — | 30j+ | 🔴 |

### 4.2 Types de suspension et procédures de résolution

#### SUSPENSION COMPTE (la plus grave)
- Cause : Violation politique répétée ou grave (allégations médicales, fraude)
- Conséquence : Tous les produits supprimés, tous les Ads stoppés
- Résolution : Formulaire d'appel + correction + délai 30j minimum
- **Prévention Serenight : ne jamais utiliser les termes médicaux interdits**

#### SUSPENSION PRODUIT (fréquente, moins grave)
- Cause : Non-conformité d'un produit spécifique (prix, image, description)
- Conséquence : Ce produit ne s'affiche plus dans Shopping
- Résolution : Corriger l'attribut + demander nouvelle vérification
- **Délai : 1-3 jours si correction rapide**

#### AVERTISSEMENT (signal précoce)
- Cause : Politique potentiellement non respectée
- Conséquence : Email d'avertissement, produits toujours actifs
- Résolution : Corriger avant la date limite indiquée
- **Agir immédiatement dès réception**

### 4.3 Procédure si suspension — Protocole exact

```
ÉTAPE 1 — Ne pas paniquer (24h)
→ Lire l'email de suspension en entier
→ Identifier la cause exacte (pas toujours claire)
→ Ne pas soumettre d'appel avant d'avoir corrigé

ÉTAPE 2 — Diagnostiquer (24-48h)
→ GMC → Produits → Diagnostics → Lire chaque erreur
→ GMC → Politique → Lire les violations signalées
→ Comparer le site avec les règles GMC policy

ÉTAPE 3 — Corriger (1-5j selon complexité)
→ Corriger TOUTES les violations identifiées
→ Ne pas corriger partiellement → l'appel sera rejeté
→ Tester en navigation privée depuis mobile ET desktop

ÉTAPE 4 — Appel (ne pas utiliser le formulaire standard)
→ Pour suspension compte : support.google.com/merchants
→ APPELER le support Google (pas formulaire) si possible
→ Expliquer les corrections effectuées, demander réexamen
→ Fournir une liste exhaustive des actions correctives

ÉTAPE 5 — Compte de secours (à préparer AVANT le lancement)
→ Créer un second compte GMC sur un email différent
→ Ne pas l'utiliser tant que le principal fonctionne
→ En cas de suspension principale : activer le secondaire immédiatement
→ ⚠️ Deux comptes GMC pour le même site = violation si Google le détecte.
   Utiliser le secondaire UNIQUEMENT pendant la résolution du principal.
```

---

## PARTIE 5 — RÈGLES SPÉCIFIQUES AUX PRODUITS BIEN-ÊTRE / SOMMEIL

### 5.1 Catégorie GMC recommandée pour Serenight

```
Google Product Category : 537 (Home & Garden > Linens & Bedding > Blankets)
```

Alternative acceptable :
```
600 (Health & Beauty > Health Care > Supports & Braces)
```

> ⚠️ La catégorie 600 est sous surveillance renforcée (santé). Utiliser 537 en priorité. Cela évite le déclenchement automatique de la vérification santé.

### 5.2 Règles spéciales produits santé / bien-être

Si GMC catégorise votre produit comme "santé", des règles supplémentaires s'appliquent :

| Règle | Détail | Impact Serenight |
|-------|--------|-----------------|
| Pas de certification médicale inventée | Ne pas prétendre être un dispositif médical CE | ✅ Serenight ne fait pas ça |
| Pas d'allégations de guérison | Déjà couvert section 3.1 | ✅ |
| Transparence ingrédients | Pour produits ingérables — non applicable | ✅ Non applicable |
| Avertissements requis | Pour certains produits (ex: enfants < 2 ans) | ⚠️ Mentionner "déconseillé < 6 ans" |
| Preuve scientifique | Si on cite une étude → mentionner la source | ⚠️ Toujours citer la source |

### 5.3 Comment parler des bénéfices sans violer les règles

**Schéma approuvé par GMC :**
```
AVANT (interdit) : "Traite l'anxiété"
APRÈS (autorisé) : "Des études montrent que la pression profonde aide à se sentir plus calme"

AVANT (interdit) : "Guérit l'insomnie"
APRÈS (autorisé) : "Favorise un endormissement plus rapide selon des études cliniques"

AVANT (interdit) : "Recommandé pour les enfants autistes"
APRÈS (autorisé) : "Utilisé par des familles d'enfants présentant une sensibilité sensorielle"
```

---

## PARTIE 6 — RÈGLES GOOGLE ADS (CAMPAGNES SHOPPING ET SEARCH)

### 6.1 Règles annonces Shopping

Les annonces Shopping héritent des données du flux GMC. Les règles de la section 3 s'appliquent.

En plus :
- Le titre de l'annonce Shopping vient du flux (attribut `title`) — pas modifiable dans Ads
- L'image vient du flux (attribut `image_link`) — respecter les règles section 2.4
- Le prix affiché vient du flux — doit correspondre au checkout

### 6.2 Règles annonces Search (texte)

| Règle | Détail | Application Serenight |
|-------|--------|----------------------|
| 3 titres de 30 caractères max | Obligatoire | "Couverture Lestée Serenight" / "Bambou OEKO-TEX 8kg" / "30 Nuits d'Essai Offertes" |
| 2 descriptions de 90 caractères max | Obligatoire | Voir copywriting section 3 |
| URL display = domaine réel | Pas de URL trompeuse | serenight.com |
| Pas de majuscules excessives | MAX 1 mot en MAJUSCULES par titre | ✅ |
| Pas de ponctuation répétée | "!!!" interdit | ✅ |
| Pas de superlatifs sans preuve | "Le meilleur" → refus | Utiliser "4,8/5 avis vérifiés" à la place |
| Pas de prix dans le titre si promotionnel | Prix trompeur | Ne pas écrire "À partir de 49€" si prix réel = 89€ |

### 6.3 Extensions d'annonces recommandées pour Serenight

| Extension | Contenu | Impact CTR |
|-----------|---------|------------|
| Liens annexes (Sitelinks) | Quiz poids · Avis clients · Livraison 48h · Garantie 30 nuits | +15-25% CTR |
| Accroche (Callouts) | OEKO-TEX Certifié · Billes de Verre · Retour Prépayé | +8-12% CTR |
| Extraits structurés | Types : Classic 6kg · Classic 8kg · Winter 10kg · Kids 4kg | +5-10% CTR |
| Prix | 89€ · 109€ · 149€ | +10-15% CTR |
| Avis vendeur | Nécessite compte Google Avis Clients (min 100 avis) | +20% CTR — à activer M3+ |

---

## PARTIE 7 — CHECKLIST GMC 100% — AVANT LE PREMIER €

### ✅ SECTION A — Site Web (à valider avant connexion GMC)

**SSL et accessibilité**
- [ ] serenight.com chargé en HTTPS dans Chrome — pas d'avertissement sécurité
- [ ] Navigation en http://serenight.com redirige automatiquement vers https://
- [ ] Site accessible en navigation privée sans connexion
- [ ] Shopify "password page" désactivée (Boutique en ligne → Préférences → décocher)
- [ ] Site accessible depuis un VPN américain (simuler serveurs Google)

**Pages légales**
- [ ] CGV accessible depuis le footer — URL : /pages/cgv
- [ ] CGV contient : SIRET · adresse · email · délai livraison · droit rétractation 14j · procédure retour
- [ ] Mentions légales accessibles depuis footer — URL : /pages/mentions-legales
- [ ] Mentions légales contient : éditeur · SIRET · hébergeur Shopify Inc.
- [ ] Politique retours accessible depuis footer — URL : /pages/retours
- [ ] Politique retours mentionne explicitement : délai 30 nuits · retour prépayé · remboursement 5j
- [ ] Politique confidentialité accessible depuis footer — URL : /pages/confidentialite
- [ ] Politique confidentialité mentionne : données collectées · droits utilisateurs · sous-traitants

**Bandeau cookies**
- [ ] Bandeau cookies apparaît à la première visite (tester en navigation privée)
- [ ] Bouton "Refuser" aussi visible que "Accepter"
- [ ] Le refus des cookies ne bloque pas l'accès au site
- [ ] Les scripts Google Analytics ne se déclenchent pas avant acceptation

**Contact et confiance**
- [ ] Email contact@serenight.com visible dans le footer
- [ ] Page Contact accessible — URL : /pages/contact
- [ ] Formulaire de contact fonctionnel (tester avec un envoi réel)
- [ ] Adresse physique visible dans les CGV et Mentions légales

---

### ✅ SECTION B — Flux Produit (à valider avant activation Shopping)

**Connexion GMC ↔ Shopify**
- [ ] App "Google & YouTube" installée dans Shopify
- [ ] Compte GMC créé sur merchants.google.com
- [ ] Domaine serenight.com vérifié dans GMC (méthode HTML tag ou Google Analytics)
- [ ] Domaine serenight.com revendiqué dans GMC
- [ ] Flux produit connecté et synchronisé (GMC → Produits → Tous les produits)

**Attributs du flux**
- [ ] Tous les produits ont un `id` unique et stable
- [ ] Titres < 150 caractères, sans majuscules excessives, sans symboles ™ ou ®
- [ ] Descriptions sans HTML brut, sans allégations médicales
- [ ] `condition = new` renseigné pour tous les produits
- [ ] `brand = Serenight` renseigné pour tous les produits
- [ ] `identifier_exists = FALSE` activé pour tous les produits marque propre
- [ ] `availability` synchronisé avec le stock réel Shopify
- [ ] `price` en EUR TTC identique au prix affiché sur la page produit

**Images**
- [ ] Image principale sur fond blanc ou neutre (pas de fond coloré)
- [ ] Image principale sans texte, sans logo, sans watermark
- [ ] Image principale ≥ 800×800px, en HTTPS
- [ ] Images supplémentaires uploadées (lifestyle, détail couture, zoom billes)

**Prix et disponibilité**
- [ ] Prix flux = prix Shopify à l'euro près
- [ ] Si prix promo → `sale_price` renseigné dans le flux
- [ ] Produits en rupture → `availability = out_of_stock` (pas laissé en in_stock)

---

### ✅ SECTION C — Contenu Produit (textes à valider)

**Descriptions produits**
- [ ] Aucune allégation médicale dans les descriptions (traite, guérit, thérapeutique, dispositif médical)
- [ ] Aucune mention de pathologies comme traitement (insomnie, TDAH, autisme → reformuler)
- [ ] Aucun superlatif non prouvé (meilleur, N°1, incomparable)
- [ ] Prix cohérent entre description et flux
- [ ] Certification OEKO-TEX mentionnée avec le numéro vérifiable

**Page produit**
- [ ] Prix TTC affiché clairement
- [ ] Délai de livraison mentionné sur la page produit
- [ ] Bouton "Ajouter au panier" fonctionnel
- [ ] Page de checkout accessible sans compte (guest checkout activé)
- [ ] Paiement sécurisé visible (badges Visa, Mastercard, Stripe)

---

### ✅ SECTION D — Compte GMC et Google Ads

**GMC**
- [ ] GMC → Diagnostics → Aucune erreur critique (rouge)
- [ ] GMC → Diagnostics → Erreurs orange corrigées ou documentées
- [ ] GMC → Politique → Aucune violation signalée
- [ ] GMC → Expédition → Règles d'expédition France configurées (48h, livraison offerte)
- [ ] GMC → Retours → Politique retour 30 jours configurée
- [ ] GMC → Taxes → TVA France configurée (20% si applicable)

**Liens GMC ↔ Google Ads**
- [ ] Compte Google Ads créé
- [ ] GMC lié au compte Google Ads (GMC → Paramètres → Comptes liés)
- [ ] Conversion Google Ads configurée (événement "Achat")
- [ ] Balise de conversion vérifiée dans GTM ou Shopify

**Tracking**
- [ ] Google Analytics 4 installé et vérifié
- [ ] GTM installé (si utilisé)
- [ ] Événement `purchase` GA4 déclenché sur la page de confirmation commande
- [ ] Test de conversion : passer une vraie commande test et vérifier dans GA4 → Temps réel

---

### ✅ SECTION E — Vérifications finales pré-lancement

- [ ] Tester le tunnel d'achat complet en navigation privée sur mobile (iPhone ET Android)
- [ ] Tester depuis un réseau différent (4G, pas WiFi maison)
- [ ] Vérifier que le checkout accepte un paiement test (Stripe test mode)
- [ ] Vérifier que l'email de confirmation commande est envoyé
- [ ] Vérifier que l'email Klaviyo Welcome est envoyé dans les 5 minutes
- [ ] Vérifier vitesse de chargement : PageSpeed Insights > 50 mobile
- [ ] Créer compte GMC de secours sur email secondaire (jamais utilisé tant que principal fonctionne)

---

## PARTIE 8 — SCORING GMC — ÉTAT ACTUEL SERENIGHT

### Évaluation par section

| Section | Points possibles | Points Serenight | Statut |
|---------|-----------------|-----------------|--------|
| A — Site web / légal | 30 | 0 | ❌ Boutique non construite |
| B — Flux produit | 25 | 0 | ❌ GMC non créé |
| C — Contenu produit | 20 | 12 | ⚠️ Textes préparés, non déployés |
| D — Compte GMC / Ads | 15 | 0 | ❌ Comptes non créés |
| E — Vérifications finales | 10 | 0 | ❌ Site non lancé |
| **TOTAL** | **100** | **12** | **❌ NON PRÊT** |

> **Score minimum pour lancer les Ads : 95/100.**
> Score actuel : 12/100 — normal, la boutique n'est pas encore construite.
> Ce module est le guide pour atteindre 100/100 avant J13 (lancement des campagnes).

---

## PARTIE 9 — VOCABULAIRE APPROUVÉ SERENIGHT

### Dictionnaire : Termes interdits → Termes approuvés

| Contexte | ❌ NE PAS ÉCRIRE | ✅ ÉCRIRE À LA PLACE |
|----------|-----------------|---------------------|
| Sommeil | guérit l'insomnie | favorise un endormissement plus rapide |
| Sommeil | traite les troubles du sommeil | aide à améliorer la qualité du sommeil |
| Anxiété | traite l'anxiété | aide à réduire les sensations de stress |
| Anxiété | réduit les crises | favorise une sensation de calme |
| Stress | médicament anti-stress | outil de bien-être naturel |
| TDAH | traitement TDAH | utilisé par des familles d'enfants agités |
| TSA | thérapie autisme | apprécié par les personnes à sensibilité sensorielle |
| Science | cliniquement prouvé | des études scientifiques indiquent que |
| Science | médicalement approuvé | certifié OEKO-TEX |
| Comparaison | meilleur que les somnifères | alternative naturelle pour mieux dormir |
| Efficacité | 100% efficace | 81% de nos clients constatent une amélioration |
| Usage | dispositif médical | produit de bien-être et de confort |

---

## VERDICT FINAL — SERENIGHT PEUT-IL PASSER L'AUDIT GMC ?

### OUI — sous 4 conditions non négociables

**Condition 1 : Textes produits sans allégations médicales**
Toutes les descriptions Shopify et tous les titres doivent être relus avec le dictionnaire section 9.
Temps : 2 heures. Bloquer si manqué.

**Condition 2 : 5 pages légales complètes avant connexion GMC**
CGV · Mentions légales · Retours · Confidentialité · Cookies.
Temps : 3-4 heures. Ne pas se connecter au GMC sans elles.

**Condition 3 : identifier_exists = FALSE dans le flux**
Sans cette ligne, tous les produits sont refusés.
Temps : 5 minutes (1 paramètre dans l'app Google & YouTube Shopify).

**Condition 4 : Bandeau cookies non bloquant**
Refuser les cookies doit laisser l'accès au site.
Temps : 30 minutes (configuration Axeptio ou Cookiebot).

> **Avec ces 4 conditions remplies + la checklist 100% cochée = Serenight passe l'audit GMC.**
> Probabilité de suspension : < 5% (vs 35% sans préparation).
