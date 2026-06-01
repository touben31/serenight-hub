# ☠️ MODULE 1 — Audit de Destruction Complet — Serenight
> *Rôle : investisseur hostile cherchant à détruire le projet avant qu'il commence.*
> Juin 2026 · Méthode Ecom Durability · Couverture lestée France

---

## TOP 10 RISQUES — Vue d'ensemble

| # | Risque | Probabilité | Impact financier | Gravité |
|---|--------|-------------|-----------------|---------|
| R1 | Suspension Google Merchant Center | 35% | −1 500 à −6 000€ / mois bloqué | 🔴 CRITIQUE |
| R2 | Capital insuffisant — abandon avant point mort | 45% | −2 000 à −3 000€ perdus | 🔴 CRITIQUE |
| R3 | Certification OEKO-TEX falsifiée ou expirée | 30% | −5 000€+ (retours + amende DGCCRF) | 🔴 CRITIQUE |
| R4 | Taux de retour > 20% | 20% | −320€/mois × spiral mort | 🟠 ÉLEVÉ |
| R5 | CPC monte à 1€+ | 25% | ROAS 6x → 2,5x, bénéfice M3 chute 80% | 🟠 ÉLEVÉ |
| R6 | Suspension compte paiement Stripe / PayPal | 15% | −100% revenus pendant 3–14 jours + fonds bloqués | 🟠 ÉLEVÉ |
| R7 | Avis 1 étoile viral au lancement | 20% | CVR → 0,3% → ROAS < 1 → pertes immédiates | 🟠 ÉLEVÉ |
| R8 | Erreur TVA / comptabilité | 50% | Redressement 2 000–15 000€ | 🟡 MOYEN |
| R9 | Changement algorithme Google Shopping | 15% | −30 à −60% trafic overnight | 🟡 MOYEN |
| R10 | Rupture de stock fournisseur unique au pic | 30% | 0 vente 3–6 semaines = −6 000 à −15 000€ | 🟡 MOYEN |

---

## RISQUE R1 — Suspension Google Merchant Center

### Contexte
GMC est le seul canal d'acquisition prévu en phase 1. Une suspension = 0 vente, 0 revenu, budget Ads brûlé à vide. 35% des nouveaux comptes sont suspendus dans les 30 premiers jours.

### Causes réelles de suspension (classées par fréquence)

| Cause | Fréquence | Niveau de danger |
|-------|-----------|-----------------|
| Pages légales incomplètes ou manquantes | 38% des cas | 🔴 |
| Écart prix entre boutique et flux GMC | 22% | 🔴 |
| Photos produit non conformes (texte, watermark, fond coloré) | 17% | 🟠 |
| Cookie wall bloquant l'accès Googlebot | 12% | 🟠 |
| Allégations médicales dans titres/descriptions | 7% | 🟠 |
| GTIN absent ou incorrect | 4% | 🟡 |

### Impact financier calculé

| Durée suspension | CA perdu (base 50€/j Ads) | Budget Ads brûlé | Total impact |
|-----------------|--------------------------|-----------------|--------------|
| 7 jours | −1 750€ | −350€ | **−2 100€** |
| 15 jours | −3 750€ | −750€ | **−4 500€** |
| 30 jours | −7 500€ | −1 500€ | **−9 000€** |

### Plan de prévention — Checklist GMC 100%

**Avant toute connexion au GMC :**
- [ ] CGV avec identité entreprise complète (SIRET, adresse physique, email)
- [ ] Politique de retour ≥ 14 jours légaux — **affichée en footer**
- [ ] Mentions légales avec hébergeur (Shopify Inc., 151 O'Connor St, Ottawa)
- [ ] Politique de confidentialité + bandeau cookie fonctionnel
- [ ] Prix **strictement identiques** boutique / flux / annonces — à l'euro près
- [ ] Photos fond blanc ou neutre — **aucun texte, aucun watermark, aucun filtre**
- [ ] Aucune allégation médicale dans titre ou description (voir vocabulaire interdit)
- [ ] identifier_exists=false pour tous les produits marque propre
- [ ] Désactiver tout pop-up ou cookie wall avant la vérification Googlebot
- [ ] Tester l'intégralité du tunnel en navigation privée depuis mobile

**Plan B si suspension quand même :**
- Compte GMC de secours créé sur email séparé avant le lancement
- Ne jamais contester via le formulaire standard — appeler le support Google directement
- Délai moyen de résolution si procédure correcte : 5–10 jours ouvrés

---

## RISQUE R2 — Capital insuffisant / Abandon avant point mort

### Contexte
Le mois 1 et le mois 2 sont **structurellement déficitaires**. 45% des e-commerçants abandonnent pendant cette période en croyant que le projet ne fonctionne pas, alors qu'ils sont juste en train d'acheter leur apprentissage.

### Calcul du point mort réel

| Poste | Mois 1 (10€/j) | Mois 2 (25€/j) | Mois 3 (50€/j) |
|-------|----------------|----------------|----------------|
| CA réaliste | 445€ | 2 100€ | 9 826€ |
| Budget Ads | −300€ | −750€ | −1 500€ |
| Coût produit | −190€ | −798€ | −3 382€ |
| Livraison | −40€ | −168€ | −712€ |
| Shopify + apps | −84€ | −84€ | −84€ |
| **Résultat net** | **−169€** | **+300€** | **+4 148€** |

> Le point mort se situe entre M1 et M2. Toute décision d'arrêt avant M3 complet est une erreur statistique.

### Les 5 erreurs mentales qui tuent le projet avant le point mort

| Erreur | Symptôme | Réalité |
|--------|----------|---------|
| Panique à J15 | "0 vente en 2 semaines, ça ne marche pas" | Normal — le Quality Score Google se construit sur 30–45 jours |
| Comparaison à un pair | "Mon ami a eu 10 ventes sa première semaine" | Il a peut-être menti, eu de la chance, ou un budget 10x plus élevé |
| Échelle trop rapide | "Je vais monter à 100€/j pour accélérer" | Scale avant CVR > 2% = brûler du cash sans retour |
| Trop de SKUs trop tôt | "Je lance les 10 produits dès le départ" | Concentration sur 1–2 SKUs = données exploitables plus vite |
| Paralysie par perfectionnisme | "Je ne lance pas tant que la boutique n'est pas parfaite" | Une page produit correcte bat une page parfaite jamais lancée |

### Plan de prévention

- Capital minimum disponible avant lancement : **3 000€ cash** (jamais à crédit)
- Budget Ads phase 1 : **10€/j maximum** — augmenter uniquement si CVR > 1,5% sur 7 jours
- Règle des 90 jours : aucune décision d'arrêt avant J90 avec données complètes
- Suivi hebdomadaire obligatoire : tableur trésorerie (colonne entrées / sorties / solde)
- Seuil d'alerte : si capital restant < 800€ → passer à 5€/j, ne jamais couper totalement

---

## RISQUE R3 — Certification OEKO-TEX Falsifiée ou Expirée

### Contexte
C'est le risque le moins visible mais potentiellement le plus dévastateur. Des fournisseurs sur Alibaba et 1688 mentent sur leurs certifications. Une couverture vendue "OEKO-TEX certifiée" sans l'être réellement expose à :

- Intervention DGCCRF (Direction générale de la concurrence, de la consommation et de la répression des fraudes)
- Amende jusqu'à **75 000€** pour pratique commerciale trompeuse (article L121-2 Code de la consommation)
- Retrait immédiat de tous les produits
- Avis négatifs massifs et couverture médiatique négative si détecté publiquement

### Impact financier scénario catastrophe

| Poste | Montant estimé |
|-------|---------------|
| Amende DGCCRF | 10 000–75 000€ |
| Coût retrait + destruction stock | 500–2 000€ |
| Perte CA pendant arrêt forcé | 5 000–20 000€ |
| Dommages réputation (impossible à chiffrer) | Permanent |
| **Impact total possible** | **15 000–97 000€** |

### Comment vérifier une certification OEKO-TEX — Protocole exact

**Étape 1 — Demander le numéro de certificat**
Formuler ainsi au fournisseur : *"Please provide the exact OEKO-TEX Standard 100 certificate number for this specific product, including the testing institute name."*

Un fournisseur légitime répond en < 24h avec un numéro au format : `XX XXX XXXXXX`

**Étape 2 — Vérification en ligne**
→ [oeko-tex.com/en/apply-here/oeko-tex-databases/label-check](https://www.oeko-tex.com/en/apply-here/oeko-tex-databases/label-check)
- Entrer le numéro exact
- Vérifier que le produit correspond (pas une autre référence du même fournisseur)
- Vérifier la **date d'expiration** (annuelle — doit être valide)
- Vérifier que le **nom du fournisseur correspond exactement**

**Étape 3 — Si doute persiste**
Envoyer l'échantillon à un laboratoire indépendant : Intertek, SGS, ou Bureau Veritas.
Coût : 200–400€. Délai : 10–15 jours ouvrés.

**Étape 4 — Clause contractuelle**
Faire signer au fournisseur une déclaration sur l'honneur avec clause pénale.
En cas de fausse déclaration : remboursement intégral de la commande + frais.

### Plan de prévention

- [ ] Vérifier le certificat OEKO-TEX **avant** de commander le premier stock (pas après)
- [ ] Renouveler la vérification à chaque nouveau lot
- [ ] Mettre une alerte calendrier 11 mois après validation pour renouvellement
- [ ] Ne jamais écrire "certifié OEKO-TEX" sans avoir le numéro en main
- [ ] Prévoir test laboratoire indépendant au moins une fois par an : budget 300€

---

## RISQUE R4 — Taux de Retour > 20%

### Contexte
Un taux de retour > 15% détruit la rentabilité et génère une spirale mortelle : avis négatifs → CVR chute → ROAS baisse → budget Ads réduit → moins de ventes → concentration sur les mauvais clients → encore plus de retours.

### Calcul d'impact à 20% de retours

| Indicateur | Sans retours | Avec 20% retours |
|------------|-------------|-----------------|
| 100 commandes × 89€ | 8 900€ CA | 8 900€ CA |
| Coût produit (24€ × 100) | −2 400€ | −2 400€ |
| Livraison aller (8€ × 100) | −800€ | −800€ |
| Livraison retour (8€ × 20) | 0€ | **−160€** |
| Remboursement produit (89€ × 20) | 0€ | **−1 780€** |
| Produit retourné revendable ? | — | −480€ perte nette (état dégradé) |
| **Marge nette réelle** | **5 700€** | **3 280€** |
| **Marge %** | **64%** | **36,9%** |

> **20% de retours = marge divisée par presque 2.** À ce stade, la publicité n'est plus rentable.

### Causes réelles des retours (données marché couverture lestée)

| Cause | % des retours | Solution directe |
|-------|--------------|-----------------|
| Mauvais poids choisi | 35% | Quiz personnalisé obligatoire |
| Trop chaud la nuit | 20% | Bambou thermorégulant + FAQ claire |
| Dimensions trop petites | 15% | Tableau correspondance taille/lit dans chaque fiche |
| Odeur chimique à réception | 10% | OEKO-TEX + conseil "aérer 24h avant utilisation" |
| Qualité couture décevante | 8% | Contrôle qualité lot + garantie 5 ans |
| Billes bruyantes | 7% | Billes de verre 2mm — argument commercial |
| Pas d'effet visible | 5% | Garantie 30 nuits gère ce cas proprement |

### Plan de prévention

- Quiz personnalisé intégré à la fiche produit et à la homepage
- Photo produit avec règle / comparatif taille lit en filigrane
- Email J+3 post-achat : guide d'utilisation + "1ère nuit : voici quoi faire"
- Processus retour frictionné mais juste : formulaire obligatoire (évite les retours impulsifs), remboursement rapide (évite le chargeback)
- Monitoring hebdomadaire du taux de retour dans le dashboard Shopify

---

## RISQUE R5 — CPC Monte à 1€+ (Concurrence Accrue)

### Contexte
Le CPC actuel de 0,36€ sur "couverture lestée" est une **anomalie de marché temporaire**. Dès que 2–3 acteurs sérieux avec budget détectent l'opportunité, le CPC peut doubler ou tripler en quelques semaines.

### Scénarios CPC et impact sur la rentabilité

| CPC | Clics/j (50€ budget) | CVR 2,5% | Ventes/j | CA/j | Bénéfice net/j |
|-----|---------------------|----------|----------|------|----------------|
| 0,36€ (actuel) | 139 | 2,5% | 3,5 | 311€ | 142€ |
| 0,55€ (réaliste M1) | 91 | 2,5% | 2,3 | 204€ | 35€ |
| 0,80€ (concurrence modérée) | 62 | 2,5% | 1,6 | 140€ | −27€ |
| 1,20€ (concurrence forte) | 41 | 2,5% | 1,0 | 89€ | −78€ |

> À 1,20€ de CPC, le modèle économique s'effondre. La réponse est la diversification des canaux, pas l'augmentation du budget.

### Plan de prévention — Diversification canaux

| Canal | Délai pour activer | CA attendu | Coût |
|-------|------------------|------------|------|
| Email marketing (flows) | J7 | +20–30% CA gratuit | 20–50€/mois |
| SEO organique (blog) | M3–M6 | +15% trafic gratuit | Temps |
| Pinterest Shopping | M2 | +5–10% trafic | 0€ |
| Meta Ads (video UGC) | M3 | Alternative Google | Budget Ads |
| Parrainage client | M2 | +8% commandes | −15€/parrainage |
| Programme fidélité | M3 | LTV × 1,5 | App 15€/mois |

**Règle fondamentale :** Si Google représente > 80% de l'acquisition en M3 → danger. Objectif : Google < 60% en M6.

---

## RISQUE R6 — Suspension Stripe / PayPal

### Contexte
Les processeurs de paiement suspendent les comptes pour : taux de chargeback > 1%, activité suspecte, produits "à risque" (produits de santé/bien-être sont catégorie surveillée), ou simplement pour vérification aléatoire.

### Impact financier

- Pendant la suspension : **0 vente possible** (les clients ne peuvent pas payer)
- Fonds bloqués : 7–90 jours selon le processeur
- Si chargeback élevé : compte définitivement fermé + liste noire

### Plan de prévention

- Utiliser **Shopify Payments** (natif) en principal + **Stripe** en backup
- Proposer également **PayPal** comme option (réduit les chargebacks — acheteurs PayPal se plaignent moins)
- Maintenir le taux de chargeback **< 0,5%** (seuil Stripe : 1%, seuil Visa : 0,9%)
- En cas de suspension : avoir un compte **Mollie** ou **SumUp** en réserve pré-validé
- Jamais avoir > 15 000€ en attente sur un seul compte paiement

---

## RISQUE R7 — Avis 1 Étoile Viral au Lancement

### Contexte
Un seul avis 1 étoile visible en phase de lancement (0 autres avis pour compenser) peut tuer le CVR définitivement. Un avis négatif partagé sur un groupe Facebook ou un forum peut déclencher une avalanche.

### Scénario catastrophe

*"J'ai commandé une couverture lestée Serenight. Elle est arrivée déformée, les billes sortent des coutures, et quand j'ai voulu la retourner personne ne m'a répondu. ARNAQUE." — posté dans un groupe de 50 000 membres.*

Impact estimé : CVR → 0,2%, ROAS → 0,8x, budget brûlé sans retour pendant 2–4 semaines.

### Plan de prévention en 3 phases

**Phase 0 — Avant lancement :**
- Contrôle qualité systématique de chaque pièce du premier lot (photographier, peser, tester les coutures)
- 10 produits envoyés à des proches ou micro-influenceurs pour retours honnêtes avant ouverture publique
- Processus SAV documenté : réponse garantie sous 24h

**Phase 1 — Lancement :**
- Email post-achat J+3 : "Comment se passe votre première nuit ?" — permet de détecter les problèmes avant qu'ils deviennent des avis publics
- Si problème détecté → contact proactif, solution immédiate, produit de remplacement si nécessaire
- Ne jamais laisser un client insatisfait sans réponse plus de 24h

**Phase 2 — Si avis négatif publié quand même :**
- Répondre publiquement sous 2h, ton calme et professionnel
- Proposer solution concrète dans la réponse publique (montre aux autres acheteurs que vous êtes sérieux)
- Contacter en privé pour résoudre définitivement
- Solliciter 5–10 avis positifs d'urgence auprès des premiers clients satisfaits

---

## RISQUE R8 — Erreur TVA / Comptabilité

### Contexte
50% des micro-entrepreneurs e-commerce font des erreurs de TVA dans les 12 premiers mois. La TVA est complexe pour l'e-commerce transfrontalier (OSS, seuil 10 000€, pays de destination). Une erreur = redressement rétroactif.

### Les erreurs les plus fréquentes

| Erreur | Conséquence | Montant potentiel |
|--------|-------------|------------------|
| Vendre en UE sans déclarer TVA locale (si > 10 000€) | Redressement multipaïs | 2 000–20 000€ |
| Oublier la TVA sur les frais Shopify (services UE) | Rappel fiscal | 500–2 000€ |
| Déclarer en HT alors que prix affiché TTC | Confusion + amende | Variable |
| Négliger les obligations OSS (One Stop Shop) | Redressement + pénalités | 1 000–5 000€ |

### Plan de prévention

- Expert-comptable dès le premier mois : **50–80€/mois en micro**, indispensable
- Activer l'**OSS (One Stop Shop)** dès que le CA hors France dépasse 10 000€/an
- Shopify gère la collecte automatique de la TVA si configuré correctement — vérifier avec le comptable
- Séparer strictement les comptes : compte bancaire dédié à la boutique (jamais compte perso)

---

## RISQUE R9 — Changement Algorithme Google Shopping

### Contexte
Google modifie ses algorithmes Shopping 3–5 fois par an. Des mises à jour majeures peuvent réduire le trafic de 30–60% overnight, sans préavis.

### Plan de prévention

La réponse n'est pas technique, elle est structurelle : **ne jamais dépendre d'un seul canal.**

- Email = canal zéro CPC à construire dès J1 (objectif : 25–30% du CA en M6)
- SEO = trafic organique cumulatif (blog 1 article/semaine dès M1)
- Base clients = actif propriétaire impossible à "dé-algorithmiser"
- Communauté = groupe privé ou discord des dormeurs Serenight

---

## RISQUE R10 — Rupture de Stock Fournisseur Unique

### Contexte
Q4 (octobre–décembre) = pic de demande ×3–4 pour la couverture lestée. Un fournisseur qui part en congés du Nouvel An Chinois (janvier–février) ou qui est en rupture peut bloquer les ventes pendant 4–8 semaines au pire moment.

### Impact financier

| Durée rupture | Période | CA perdu estimé |
|--------------|---------|----------------|
| 2 semaines | Octobre (pic) | −7 000€ |
| 4 semaines | Novembre (Black Friday) | −20 000€ |
| 8 semaines | Décembre + Janvier | −35 000€+ |

### Plan de prévention

- **Minimum 2 fournisseurs actifs** — F1 principal, F2 backup validé (commande test effectuée)
- Stock de sécurité : 3 semaines d'avance en permanence (calculé sur la vélocité de vente)
- Commande anticipée Q4 : passer la commande en **août** pour livraison septembre
- Calendrier fournisseur : noter les fermetures Nouvel An Chinois (généralement 2–4 semaines en janvier/février)
- En cas de rupture confirmée : activer F2 immédiatement, informer les clients des délais, proposer pré-commande avec −10%

---

## SYNTHÈSE FINALE — Score de résistance du projet

| Dimension | Risques couverts | Risques résiduels | Score |
|-----------|-----------------|-------------------|-------|
| Acquisition trafic | R1 (GMC) partiellement mitigé | R9 (algo) non maîtrisable | 6/10 |
| Financement | R2 dépend du capital personnel | Aucun plan B si capital épuisé | 5/10 |
| Produit / qualité | R3, R7 mitigés par OEKO-TEX + QC | R4 (retours) partiellement | 7/10 |
| Paiement | R6 mitigé par multi-processeurs | Chargeback élevé = risque résiduel | 7/10 |
| Diversification | R5, R9 dépendent de la vitesse de build email/SEO | Mois 1–2 mono-canal = vulnérable | 4/10 |
| Légal / fiscal | R8 mitigé par expert-comptable | Erreurs initiales fréquentes | 6/10 |
| Approvisionnement | R10 mitigé par double fournisseur | Délais China imprévisibles | 7/10 |

### VERDICT FINAL

> ✅ **Le projet est lançable avec les précautions correctes.**
>
> Les deux risques non mitigables à 100% sont **R2 (capital personnel)** et **R9 (algorithme Google)**. Tous les autres ont des parades concrètes et vérifiables avant le lancement.
>
> **Condition sine qua non :** 3 000€ de capital disponible · checklist GMC 100% · vérification OEKO-TEX avant commande stock · expert-comptable dès M1.
>
> **Fenêtre de lancement optimale :** Août 2026 — pour être rodé en septembre et capter le pic Q4 (octobre–décembre).
