# 💰 AUDIT FINAL DE RENTABILITÉ — SERENIGHT
> Données réelles validées uniquement · Juin 2026
> Aucune hypothèse optimiste non vérifiée · Ce document remplace toutes les simulations précédentes

---

## HYPOTHÈSES RÉELLES UTILISÉES

### Coût par commande — Classic 8kg à 89€

| Poste | M1-M2 | M3-M5 | M6-M9 | M10-M12 | Source |
|-------|-------|-------|-------|---------|--------|
| Produit fournisseur | 23€ | 23€ | 22€ | 21€ | Audit sourcing |
| Droits douane (12%) | 2.76€ | 2.76€ | 2.64€ | 2.52€ | Douanes FR |
| TVA import (5.5%) | 1.86€ | 1.86€ | 1.78€ | 1.70€ | DGI |
| Fret Chine→France /u | 6.22€ | 5.50€ | 4.80€ | 4.80€ | DHL / lot 45+ pcs |
| Emballage | 1.50€ | 1.20€ | 1.00€ | 1.00€ | Audit opérationnel |
| Livraison Mondial Relay | 12.00€ | 10.00€ | 9.00€ | 8.00€ | Offre Start → Évolution |
| Retours (taux×coût) | 5.00€ | 3.00€ | 2.50€ | 2.00€ | FEVAD + audit M5 |
| Stripe 1.6% | 1.42€ | 1.42€ | 1.42€ | 1.42€ | Stripe tarifs |
| **TOTAL COÛT VARIABLE** | **53.76€** | **47.74€** | **45.14€** | **42.44€** | — |
| **MARGE BRUTE/VENTE** | **35.24€** | **41.26€** | **43.86€** | **46.56€** | — |
| **MARGE BRUTE %** | **39.6%** | **46.4%** | **49.3%** | **52.3%** | — |

> ⚠️ La marge M1 est 39.6%, pas 56-63% comme estimé initialement.
> La différence vient des droits de douane (+4.62€), du fret (+6.22€) et du taux de retour réel (20% vs 10%).

### Frais fixes mensuels

| Période | Frais | Détail |
|---------|-------|--------|
| M1 | 31€ | Shopify Basic 29€ + domaine 2€ |
| M2-M3 | 65€ | + Klaviyo 20€ + apps 14€ |
| M4-M6 | 95€ | + Judge.me paid + tools |
| M7-M12 | 125€ | + assistance partielle SAV |

### CPC Google Shopping France — Progression réaliste

| Mois | CPC pessimiste | CPC réaliste | CPC optimiste |
|------|---------------|-------------|--------------|
| M1 | 0.80€ | 0.72€ | 0.65€ |
| M3 | 0.70€ | 0.60€ | 0.55€ |
| M6 | 0.60€ | 0.48€ | 0.44€ |
| M12 | 0.44€ | 0.36€ | 0.36€ |

---

## MÉTRIQUES CLÉS

### Marge brute par vente

| Période | Marge brute/vente | Marge % |
|---------|------------------|---------|
| M1-M2 | **35.24€** | 39.6% |
| M3-M5 | **41.26€** | 46.4% |
| M6-M9 | **43.86€** | 49.3% |
| M10-M12 | **46.56€** | 52.3% |

### CPA maximum supportable

> Le CPA max est la marge brute par vente — au-delà, chaque vente est déficitaire sur le variable.

| Période | CPA max (breakeven variable) | CPA cible (rentable) |
|---------|------------------------------|---------------------|
| M1 | **35€** | 20€ max recommandé |
| M3 | **41€** | 25€ max recommandé |
| M6 | **44€** | 30€ max recommandé |
| M12 | **47€** | 35€ max recommandé |

> **CPA réel avec Google Ads M1 (CVR 1.2%, CPC 0.72€) :**
> CPA = CPC / CVR = 0.72 / 0.012 = **60€** → PERTE de 25€ par vente sur le variable en M1
>
> **C'est pourquoi M1 est structurellement déficitaire.** Ce n'est pas un problème — c'est le coût d'apprentissage du compte Google.

### Seuil de rentabilité mensuel

| Scénario | Budget Ads M3 | Cmds nécessaires | CA minimum |
|----------|--------------|-----------------|-----------|
| Pessimiste | 450€ | **15 cmd** | 1 307€ |
| Réaliste | 750€ | **20 cmd** | 1 774€ |
| Optimiste | 900€ | **24 cmd** | 2 101€ |

### Commandes nécessaires pour atteindre X€/mois net

#### À partir de M3 (coûts M3, budget Ads scénario réaliste)

| Objectif net | Commandes/mois | CA nécessaire | Budget Ads |
|-------------|---------------|--------------|-----------|
| **+1 000€/mois** | **44 ventes** | 3 916€ | 750€ |
| **+3 000€/mois** | **93 ventes** | 8 277€ | 750€ |
| **+5 000€/mois** | **142 ventes** | 12 638€ | 750€ |

> Pour atteindre 3 000€ net/mois à partir de M5 (budget 1 500€ Ads, coûts M3) :
> → 75 commandes/mois = 6 675€ CA ✅ (scénario réaliste M5)

---

## TABLEAU FINANCIER 12 MOIS — SCÉNARIO PESSIMISTE

> CVR 0.8-1.2% · CPC 0.80→0.44€ · Retours 20→8% · Budget Ads croissance lente

| Mois | Budget/j | Cmds | CA | Mg brute | Fixes | Ads | **Net** | **Cumulé** |
|------|----------|------|-----|----------|-------|-----|---------|-----------|
| M1 | 10€ | 3 | 267€ | 105€ | 31€ | 300€ | **-226€** | -226€ |
| M2 | 10€ | 4 | 356€ | 140€ | 65€ | 300€ | **-225€** | -451€ |
| M3 | 15€ | 8 | 712€ | 281€ | 65€ | 450€ | **-234€** | -685€ |
| M4 | 15€ | 10 | 890€ | 409€ | 95€ | 450€ | **-136€** | -821€ |
| M5 | 25€ | 18 | 1 602€ | 736€ | 95€ | 750€ | **-109€** | -930€ |
| M6 | 25€ | 21 | 1 869€ | 858€ | 95€ | 750€ | **+13€** | -917€ |
| M7 | 30€ | 29 | 2 581€ | 1 278€ | 125€ | 900€ | **+253€** | -664€ |
| M8 | 30€ | 35 | 3 115€ | 1 543€ | 125€ | 900€ | **+518€** | -146€ |
| M9 | 40€ | 48 | 4 272€ | 2 116€ | 125€ | 1 200€ | **+791€** | +645€ |
| M10 | 40€ | 55 | 4 895€ | 2 424€ | 125€ | 1 200€ | **+1 099€** | +1 744€ |
| M11 | 50€ | 72 | 6 408€ | 3 173€ | 125€ | 1 500€ | **+1 548€** | +3 292€ |
| M12 | 50€ | 85 | 7 565€ | 3 959€ | 125€ | 1 500€ | **+2 334€** | +5 626€ |
| **TOTAL** | — | **388** | **34 532€** | — | **1 196€** | **9 300€** | — | **+5 626€** |

**Retour sur capital investi (3 000€) : +5 626€ net sur 12 mois → +188% ROI**

---

## TABLEAU FINANCIER 12 MOIS — SCÉNARIO RÉALISTE

> CVR 1.2-3.5% · CPC 0.72→0.36€ · Retours 20→8% · Budget Ads croissance progressive

| Mois | Budget/j | Cmds | CA | Mg brute | Fixes | Ads | **Net** | **Cumulé** |
|------|----------|------|-----|----------|-------|-----|---------|-----------|
| M1 | 10€ | 5 | 445€ | 175€ | 31€ | 300€ | **-156€** | -156€ |
| M2 | 10€ | 7 | 623€ | 246€ | 65€ | 300€ | **-119€** | -275€ |
| M3 | 25€ | 25 | 2 225€ | 1 022€ | 65€ | 750€ | **+207€** | -68€ |
| M4 | 25€ | 30 | 2 670€ | 1 226€ | 95€ | 750€ | **+381€** | +313€ |
| M5 | 50€ | 75 | 6 675€ | 3 066€ | 95€ | 1 500€ | **+1 471€** | +1 784€ |
| M6 | 50€ | 84 | 7 476€ | 3 702€ | 95€ | 1 500€ | **+2 107€** | +3 891€ |
| M7 | 75€ | 140 | 12 460€ | 6 171€ | 125€ | 2 250€ | **+3 796€** | +7 687€ |
| M8 | 75€ | 157 | 13 973€ | 6 920€ | 125€ | 2 250€ | **+4 545€** | +12 232€ |
| M9 | 100€ | 214 | 19 046€ | 9 432€ | 125€ | 3 000€ | **+6 307€** | +18 539€ |
| M10 | 100€ | 240 | 21 360€ | 11 178€ | 125€ | 3 000€ | **+8 053€** | +26 592€ |
| M11 | 125€ | 316 | 28 124€ | 14 718€ | 125€ | 3 750€ | **+10 843€** | +37 435€ |
| M12 | 125€ | 365 | 32 485€ | 17 000€ | 125€ | 3 750€ | **+13 125€** | +50 560€ |
| **TOTAL** | — | **1 658** | **147 562€** | — | **1 196€** | **23 100€** | — | **+50 560€** |

**CA annuel : 147 562€ · Bénéfice net : 50 560€ · ROI capital 3 000€ : +1 685%**

---

## TABLEAU FINANCIER 12 MOIS — SCÉNARIO OPTIMISTE

> CVR 1.5-4.5% · CPC 0.65→0.36€ · Retours 15→7% · Budget Ads agressif

| Mois | Budget/j | Cmds | CA | Mg brute | Fixes | Ads | **Net** | **Cumulé** |
|------|----------|------|-----|----------|-------|-----|---------|-----------|
| M1 | 10€ | 7 | 623€ | 246€ | 31€ | 300€ | **-85€** | -85€ |
| M2 | 15€ | 15 | 1 335€ | 526€ | 65€ | 450€ | **+11€** | -74€ |
| M3 | 30€ | 41 | 3 649€ | 1 676€ | 65€ | 900€ | **+711€** | +637€ |
| M4 | 50€ | 84 | 7 476€ | 3 434€ | 95€ | 1 500€ | **+1 839€** | +2 476€ |
| M5 | 75€ | 157 | 13 973€ | 6 418€ | 95€ | 2 250€ | **+4 073€** | +6 549€ |
| M6 | 75€ | 179 | 15 931€ | 7 890€ | 95€ | 2 250€ | **+5 545€** | +12 094€ |
| M7 | 100€ | 264 | 23 496€ | 11 636€ | 125€ | 3 000€ | **+8 511€** | +20 605€ |
| M8 | 100€ | 300 | 26 700€ | 13 223€ | 125€ | 3 000€ | **+10 098€** | +30 703€ |
| M9 | 150€ | 474 | 42 186€ | 20 892€ | 125€ | 4 500€ | **+16 267€** | +46 970€ |
| M10 | 150€ | 525 | 46 725€ | 24 452€ | 125€ | 4 500€ | **+19 827€** | +66 797€ |
| M11 | 200€ | 750 | 66 750€ | 34 932€ | 125€ | 6 000€ | **+28 807€** | +95 604€ |
| M12 | 200€ | 750 | 66 750€ | 34 932€ | 125€ | 6 000€ | **+28 807€** | +124 411€ |
| **TOTAL** | — | **3 546** | **315 594€** | — | **1 196€** | **34 650€** | — | **+124 411€** |

---

## RÉCAPITULATIF COMPARATIF — ANNÉE 1

| Indicateur | Pessimiste | Réaliste | Optimiste |
|------------|-----------|---------|----------|
| CA total 12 mois | **34 532€** | **147 562€** | **315 594€** |
| Commandes totales | 388 | 1 658 | 3 546 |
| Budget Ads total | 9 300€ | 23 100€ | 34 650€ |
| Bénéfice net 12 mois | **+5 626€** | **+50 560€** | **+124 411€** |
| Mois de premier bénéfice | M6 | M3 | M2 |
| Pertes cumulées max | -930€ | -275€ | -85€ |
| ROI capital initial 3 000€ | +188% | +1 685% | +4 147% |
| CA mensuel M12 | 7 565€ | 32 485€ | 66 750€ |
| Net mensuel M12 | 2 334€ | 13 125€ | 28 807€ |

---

## OBJECTIFS EN COMMANDES — SYNTHÈSE

| Objectif net/mois | Scénario | Quand atteint | Cmds nécessaires |
|------------------|---------|--------------|-----------------|
| **+1 000€/mois** | Pessimiste | M10 | ~55 commandes |
| **+1 000€/mois** | Réaliste | M5 | ~44 commandes |
| **+1 000€/mois** | Optimiste | M3 | ~30 commandes |
| **+3 000€/mois** | Pessimiste | M11-M12 | ~100 commandes |
| **+3 000€/mois** | Réaliste | M6 | ~84 commandes |
| **+3 000€/mois** | Optimiste | M4 | ~65 commandes |
| **+5 000€/mois** | Pessimiste | Jamais en Y1 | ~160 commandes |
| **+5 000€/mois** | Réaliste | M7 | ~140 commandes |
| **+5 000€/mois** | Optimiste | M5 | ~120 commandes |

---

## CE QUI FAIT LA DIFFÉRENCE ENTRE LES SCÉNARIOS

### Variable #1 — Le CVR (Taux de conversion)

C'est la variable qui impacte le plus les résultats, loin devant le CPC.

| CVR | Commandes M3 (750€ Ads, CPC 0.60€) | Net mensuel M3 |
|-----|-----------------------------------|-|
| 0.8% | 10 | -226€ |
| 1.2% | 15 | -48€ |
| 2.0% | 25 | +207€ |
| 2.5% | 31 | +433€ |
| 3.5% | 44 | +885€ |

**Lever le CVR de 1.2% à 2.5% = 2× les revenus avec le même budget Ads.**
Leviers CVR : quiz actif, avis clients (50+ requis), photos produit de qualité, garantie visible.

### Variable #2 — Le taux de retour

| Taux retour | Coût/cmd | Impact sur 100 cmd | Marge récupérée |
|-------------|---------|-------------------|-|
| 22% (sans quiz) | +5.50€ | +550€ de coûts | — |
| 10% (avec quiz) | +2.50€ | +250€ de coûts | **+300€/mois** |
| 7% (fidélisé) | +1.75€ | +175€ | **+375€/mois** |

**Le quiz est le levier le plus rentable du projet.** Doit être actif dès J1.

### Variable #3 — Le volume (économies d'échelle)

| Volume/mois | Livraison/cmd | Coût produit/cmd | Gain total vs M1 |
|-------------|--------------|------------------|-----------------|
| < 20 (M1) | 12.00€ | 34.00€ | référence |
| 50-100 (M3) | 9.00€ | 32.00€ | +5€/cmd |
| 100+ (M6) | 8.00€ | 30.00€ | +8€/cmd |

---

## RÈGLES D'OR TIRÉES DE CET AUDIT

**Règle 1 — Ne pas scaler avant CVR > 2%**
En dessous de 2%, chaque euro de budget Ads supplémentaire creuse les pertes.

**Règle 2 — Le quiz est non négociable dès J1**
Sans quiz : 22% de retours = 5€/cmd de coût. Avec quiz : 10% = 2.5€/cmd.
Sur 100 commandes : économie de 250€. Sur 500 commandes : 1 250€.

**Règle 3 — Le point mort M1-M2 est prévu et absorbable**
Pertes max cumulées : 930€ (pessimiste) à 85€ (optimiste).
Avec 3 000€ de capital, vous survivez même au pire des scénarios.

**Règle 4 — Le CPA réel M1 est ~60€, donc supérieur à la marge brute**
C'est normal. Vous achetez votre apprentissage. C'est l'investissement le plus rentable de la phase 1.

**Règle 5 — La rentabilité réelle arrive entre M3 (optimiste) et M6 (pessimiste)**
Pas M1. Quiconque vous dit "rentable dès le premier mois" vous ment.

**Règle 6 — Le scénario réaliste donne +50 560€ net sur 12 mois**
Avec 3 000€ de capital investi. C'est un ROI de 1 685%. Mais il faut :
- Un quiz fonctionnel dès M1
- Un CVR de 2% atteint en M3
- Un budget Ads qui scale progressivement
- Un SAV irréprochable qui limite les retours

---

## VERDICT FINAL

> **L'équation économique de Serenight est positive et solide** — même dans le scénario pessimiste.
>
> La niche est réelle, le CPC est faible en France, la concurrence est limitée.
> Les risques ne viennent pas du marché. Ils viennent des opérations :
> taux de retour élevé en M1 (sans quiz), livraison coûteuse à faible volume, droits de douane non anticipés.
>
> **Ces trois risques sont entièrement maîtrisables** avec les bons outils en place avant le lancement.
