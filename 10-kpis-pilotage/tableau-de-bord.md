# 📊 Tableau de Bord KPIs — Serenight

---

## KPIs à surveiller — Targets par phase

| KPI | Mois 1 (cible) | Mois 3 (cible) | Mois 6 (cible) | Outil |
|-----|----------------|----------------|----------------|-------|
| CPC moyen | < 0,80€ | < 0,55€ | < 0,45€ | Google Ads |
| CTR Shopping | > 1,5% | 2-3% | 3-4% | Google Ads |
| Taux de conversion | > 1,0% | 2,0-2,5% | 3,0%+ | GA4 + Shopify |
| ROAS | > 1,5x | > 4x | > 6x | Google Ads |
| Panier moyen (AOV) | 89€ | 95-105€ | 110-120€ | Shopify |
| Taux d'ajout au panier | 5-8% | 8-12% | 12-18% | GA4 |
| Taux d'abandon panier | 75-80% | 65-75% | 60-70% | GA4 |
| Coût par acquisition (CPA) | < 60€ | < 35€ | < 25€ | Google Ads |
| Marge nette mensuelle | -400€ à +200€ | 3 500-5 000€ | 10 000€+ | Excel |
| Taux de retour produits | < 15% | < 10% | < 8% | Shopify |
| Note Trustpilot / Judge.me | 4,2+ | 4,5+ | 4,7+ | Judge.me |
| Taux ouverture email | 30%+ | 35%+ | 40%+ | Klaviyo |
| Revenue email / CA total | 5% | 15-20% | 25-30% | Klaviyo |

---

## Actions correctives selon les KPIs

| Si ce KPI est mauvais... | Cause probable | Action immédiate |
|--------------------------|----------------|-----------------|
| CTR Shopping < 1% | Image produit ou titre GMC faible | Tester 3 nouvelles photos + revoir titre |
| CVR < 1% | Page produit non convaincante | Ajouter avis + garantie visible + quiz |
| CPA > 60€ | CPC trop élevé ou CVR trop faible | Réduire enchère max OU améliorer page |
| ROAS < 2x | Budget trop élevé vs revenus | Baisser à 10€/j jusqu'à CVR > 1,5% |
| Taux retour > 15% | Mauvais ciblage ou produit non conforme | Revoir quiz + vérifier qualité produit |
| Panier abandonné > 80% | Frais livraison surprise OU confiance faible | Afficher livraison offerte + badge sécurité |

---

## Roadmap 12 mois — Paliers de scaling

| Palier | CA/mois | Actions prioritaires | KPIs cibles |
|--------|---------|---------------------|-------------|
| 🌱 Palier 1 | **1 000€/mois** | Valider couverture 8kg. Budget 10€/j Shopping. Welcome + panier email flows. | ROAS > 4 \| AOV > 89€ |
| 🔥 Palier 2 | **10 000€/mois** | Ajouter couettes + packs + accessoires. Lancer abonnement box. | ROAS > 4,5 \| MRR box > 1K€ |
| 🚀 Palier 3 | **50 000€/mois** | Marque privée. Influenceurs bien-être. Expansion enfants. PMax. | ROAS > 4 \| LTV > 180€ \| Abonnés > 300 |
| 🏆 Palier 4 | **100 000€/mois** | Europe (Belgique, Suisse). B2B cliniques, hôtels. META Ads. | Marge nette > 28% \| MRR > 7K€ |

---

## Checklist GMC — 10 points à valider à 100% avant toute campagne

- [ ] Pages légales complètes (CGV + Retours 30j + ML + RGPD)
- [ ] Prix boutique = Prix flux GMC à l'euro près
- [ ] Photos fond blanc/neutre, sans texte
- [ ] Politique retour explicitement visible en footer
- [ ] Email + n° téléphone ou formulaire contact visible
- [ ] Aucun cookie wall bloquant sans option de refus
- [ ] Toutes variantes avec stock > 0 ou désactivées
- [ ] identifier_exists=false pour nos produits marque propre
- [ ] Aucune allégation médicale dans titres/descriptions
- [ ] Tester checkout complet en navigation privée

---

## Tracking — Événements GA4 prioritaires

| Événement GA4 | Déclencheur | Priorité |
|---------------|-------------|----------|
| page_view | Chaque page | Auto |
| view_item | Page produit vue | 🔴 CRITIQUE |
| add_to_cart | Clic "Ajouter au panier" | 🔴 CRITIQUE |
| begin_checkout | Entrée page checkout | 🔴 CRITIQUE |
| **purchase** | **Commande confirmée** | 🔴 ABSOLU |
| view_item_list | Vue collection | Important |
| quiz_completed | Fin du quiz perso | Important |

> ⚠️ Le tracking doit être configuré AVANT de lancer les campagnes — pas après.
