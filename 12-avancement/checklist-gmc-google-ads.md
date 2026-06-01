# ✅ CHECKLIST PRÉ-LANCEMENT GMC & GOOGLE ADS — SERENIGHT
> Zéro case vide avant de lancer les campagnes
> Chaque case cochée = une suspension évitée

---

## PARTIE 1 — CHECKLIST GOOGLE MERCHANT CENTER

### BLOC A — Compte et accès (J-15 minimum)

```
[ ] 1. Compte GMC créé sur merchants.google.com
        → Utiliser une adresse Gmail dédiée (pas personnelle)
        → Nom du compte marchand : "Serenight"
        → Pays principal : France

[ ] 2. Compte Google Ads créé et LIÉ au GMC
        → GMC → Paramètres → Comptes liés → Google Ads
        → Entrer l'identifiant client Google Ads (10 chiffres)
        → Accepter l'invitation dans Google Ads

[ ] 3. Domaine vérifié dans GMC
        → GMC → Paramètres → Informations sur l'entreprise → Site web
        → Méthode recommandée : balise HTML dans Shopify
        → Shopify → Boutique en ligne → Préférences → Google Analytics
        → Coller la balise GMC dans "Balises supplémentaires"
        → Cliquer "Vérifier" dans GMC → attendre 24-48h

[ ] 4. Domaine revendiqué (après vérification)
        → GMC → Site web → "Revendiquer ce site web"
```

### BLOC B — Informations entreprise

```
[ ] 5. Adresse physique complète renseignée
        → Votre adresse personnelle (pas nécessairement un local commercial)
        → Code postal, ville, pays : France

[ ] 6. Numéro de téléphone professionnel (obligatoire)
        → Votre numéro ou un numéro dédié (ex : Google Voice)

[ ] 7. Email de service client renseigné
        → contact@serenight.fr (doit être fonctionnel)

[ ] 8. Fuseau horaire et devise correctement configurés
        → Europe/Paris · EUR (€)
```

### BLOC C — Pages légales (obligatoires GMC)

```
[ ] 9. CGV accessible depuis le footer
        → URL : serenight.fr/pages/cgv
        → Vérifier avec l'outil de robots Google : googlebot peut y accéder

[ ] 10. Politique de retours accessible depuis le footer
         → URL : serenight.fr/pages/retours
         → DOIT mentionner : délai de retour, procédure, conditions de remboursement

[ ] 11. Politique de confidentialité accessible depuis le footer
         → URL : serenight.fr/pages/confidentialite

[ ] 12. Mentions légales accessibles depuis le footer
         → URL : serenight.fr/pages/mentions-legales

[ ] 13. Email de contact visible sur toutes les pages
         → contact@serenight.fr dans le footer ET sur la page Contact

[ ] 14. Informations de livraison claires
         → Délai, transporteur, zone géographique
         → Visibles AVANT la finalisation du panier (pas seulement dans les CGV)
```

### BLOC D — Site web (critères techniques GMC)

```
[ ] 15. HTTPS actif sur toutes les pages
         → Shopify gère ça automatiquement → vérifier cadenas vert dans le navigateur

[ ] 16. Site accessible par Googlebot
         → Désactiver le mot de passe Shopify : Admin → Boutique en ligne → Préférences
         → "Protéger avec un mot de passe" → désactiver

[ ] 17. Prix identiques site et flux GMC
         → CRITIQUE : si le prix dans le flux ≠ prix sur le site → suspension immédiate
         → Vérifier : Classic 8kg = 89€ partout

[ ] 18. Disponibilité stock identique site et flux
         → Si produit en rupture dans le flux mais disponible sur le site → erreur GMC

[ ] 19. Bouton "Ajouter au panier" fonctionnel sur chaque fiche produit
         → Tester en navigation privée sur mobile ET desktop

[ ] 20. Bandeau cookies conforme (CNIL)
         → Bouton "Refuser" aussi visible que "Accepter"
         → Tester via navigation privée → le bandeau apparaît bien
```

### BLOC E — Flux produits

```
[ ] 21. App "Google & YouTube" installée dans Shopify
         → Shopify App Store → "Google & YouTube" (app officielle Google)
         → Connecter au compte GMC créé précédemment

[ ] 22. Flux produits soumis et validé dans GMC
         → GMC → Produits → Flux → Vérifier statut "Actif"
         → Délai de traitement initial : 24-72h

[ ] 23. Attribut "identifier_exists" configuré à FALSE
         → Dans l'app Google & YouTube Shopify
         → Produits sans GTIN (EAN/barcode) → identifier_exists = FALSE
         → SANS ça : tous vos produits seront refusés

[ ] 24. Images produit conformes GMC
         → Fond blanc pur OBLIGATOIRE pour l'image principale
         → Minimum 800×800px · Maximum 64MP · Pas de filigrane
         → Pas de texte sur l'image principale

[ ] 25. Titres produits conformes (vérifier dans le flux)
         → Max 150 caractères
         → Pas de majuscules excessives, pas de ! ou de caractères spéciaux
         → Format : [Marque] + [Produit] + [Caractéristiques clés]

[ ] 26. Zéro erreur rouge dans GMC → Produits → Diagnostics
         → Les erreurs oranges (avertissements) sont acceptables au lancement
         → Les erreurs rouges = produits refusés = 0 impression Shopping
```

### BLOC F — Politique livraison et retours dans GMC

```
[ ] 27. Politique de livraison configurée dans GMC
         → GMC → Livraison → Paramètres de livraison
         → Service : France métropolitaine
         → Délai : 24-48h (ou "2 jours ouvrés")
         → Tarif : Offerte (0€)

[ ] 28. Politique de retours configurée dans GMC
         → GMC → Retours → Créer une politique
         → Délai de retour : 30 jours
         → Remboursement : intégral
         → Frais de retour : pris en charge par le marchand
```

### BLOC G — Termes interdits (vérifier dans toutes les descriptions)

```
[ ] 29. Aucun terme médical interdit dans les titres et descriptions du flux
         INTERDITS : traite · guérit · soigne · cliniquement prouvé
         · médicalement approuvé · thérapeutique · diagnostiqué
         AUTORISÉS : favorise · conçu pour · inspiré de · bien-être

[ ] 30. Aucune allégation de prix trompeuse
         INTERDIT : "Prix cassé" "Meilleur prix" sans preuve
         → Si pas de prix barré réel → ne pas mettre de prix comparatif
```

### SCORE GMC AVANT LANCEMENT

```
Cases cochées : ___ / 30

DÉCISION :
28-30 : ✅ LANCER les campagnes
24-27 : ⚠️ Corriger les points manquants avant lancement (max 48h)
< 24  : ❌ NE PAS lancer — risque de suspension compte

VÉRIFICATION FINALE :
→ GMC → Vue d'ensemble → Score "Santé du compte" doit être vert
→ GMC → Produits → Tous les produits → 100% "Actifs" (pas "Refusés")
```

---

## PARTIE 2 — CHECKLIST PRÉ-LANCEMENT GOOGLE ADS

### BLOC A — Structure du compte

```
[ ] 1. Compte Google Ads créé et lié au GMC
        → ads.google.com → Créer un compte → Mode expert
        → Passer en mode Expert IMMÉDIATEMENT (sinon Smart campaigns par défaut)
        → Lier au GMC : Outils → Comptes liés → Google Merchant Center

[ ] 2. Informations de facturation renseignées
        → Outils → Facturation → Paramètres de paiement
        → Carte bancaire ou virement SEPA
        → Seuil de facturation : commencer à 200€

[ ] 3. Conversion tracking configuré (OBLIGATOIRE avant de lancer)
        → Google Ads → Outils → Conversions → Créer une conversion
        → Type : Achat · Source : Shopify
        
        MÉTHODE SHOPIFY :
        → Shopify Admin → Boutique en ligne → Préférences
        → "Google Analytics" → coller l'ID de conversion Google Ads
        OU
        → Via Google Tag Manager (plus fiable mais plus complexe)
        
        TESTER :
        → Faire une commande test → vérifier dans Google Ads
        → Outils → Conversions → Statut doit passer à "Enregistrement des conversions"

[ ] 4. Remarketing configuré
        → Google Ads → Outils → Gestionnaire d'audience
        → Créer : "Visiteurs du site" · "Visiteurs page panier" · "Acheteurs"
        → Tag Google installé sur le site (automatique via Shopify + app Google)
```

### BLOC B — Campagne Shopping Standard M1

```
[ ] 5. Campagne 1 créée : "Shopping — All Products"
        → Type : Shopping · Sous-type : Standard
        → Budget : 10€/jour
        → Réseau : Google Search uniquement (décocher "Réseau Display")
        → Enchères : CPC Manuel
        → Enchère max : 0,55€
        → Pays : France uniquement
        → Langue : Français

[ ] 6. Groupe d'annonces créé : "Tous les produits"
        → Subdivision : PAS de subdivision au départ (trop tôt)
        → Enchère groupe : 0,55€

[ ] 7. Mots-clés négatifs ajoutés AVANT le lancement
        LISTE NÉGATIVE OBLIGATOIRE :
        → gratuit · offert · cadeau
        → occasion · reconditionné · reconditionnée
        → avis (évite de payer pour "avis couverture lestée" sans intention d'achat)
        → notice · comment utiliser · tuto
        → fabrication · fabriquer · faire
        → amazon · action · ikea · lidl · maisons du monde
        → wholesale · grossiste · en gros
        → "couverture lestée danger" · "couverture lestée contre-indication"

        → Google Ads → Outils → Bibliothèque partagée → Listes de mots clés à exclure
        → Créer liste "Exclusions Serenight" → Appliquer à la campagne
```

### BLOC C — Campagne Shopping Priority (produit phare)

```
[ ] 8. Campagne 2 créée : "Shopping — Classic 8kg Priority"
        → Type : Shopping · Sous-type : Standard
        → Budget : 5€/jour supplémentaires (total 15€/j dès M1)
        → Priorité campagne : ÉLEVÉE (permet de surpasser la campagne "All")
        → Enchère max : 0,70€
        → Filtre produit : SKU = SRN-CLS-8KG uniquement

        → Cette campagne garantit que le Classic 8kg (produit phare)
          gagne TOUJOURS les enchères quand il est en concurrence
          avec lui-même dans "All Products"
```

### BLOC D — Paramètres avancés

```
[ ] 9. Rotations d'annonces : "Ne pas optimiser" (pour l'instant)
        → Permet de collecter des données équitablement

[ ] 10. Planification des annonces configurée
         → Désactiver entre minuit et 6h du matin (peu de conversions, budget inutile)
         → Google Ads → Paramètres campagne → Planification des annonces
         → Appliquer une réduction d'enchère de -100% de 0h à 6h

[ ] 11. Appareils : ajustement enchères mobile
         → Commencer à 0% (pas d'ajustement)
         → Après 100 clics : vérifier CVR mobile vs desktop
         → Ajuster si mobile convertit moins bien

[ ] 12. Localisation : France métropolitaine uniquement
         → Exclure DOM-TOM si la livraison ne couvre pas
```

### BLOC E — Suivi et alertes

```
[ ] 13. Alertes automatiques configurées
         → Google Ads → Outils → Règles automatisées
         → Alerte si CPC moyen > 0,90€ → Email
         → Alerte si CTR < 0,5% après 200 impressions → Email

[ ] 14. Google Analytics 4 lié à Google Ads
         → Google Ads → Outils → Comptes liés → Google Analytics
         → Importer les audiences GA4 dans Google Ads

[ ] 15. Tableau de bord quotidien configuré
         → Google Ads → Colonnes personnalisées
         → Ajouter : Impressions · Clics · CTR · CPC moyen · Conversions · CPA · ROAS
```

### BLOC F — VÉRIFICATIONS FINALES (J-1 avant lancement)

```
[ ] 16. Test de recherche manuel
         → Chercher "couverture lestée" sur google.fr
         → Vos produits apparaissent-ils dans l'onglet Shopping ?
         → Si NON : vérifier flux GMC + statut campagne

[ ] 17. URL de destination vérifiée
         → Cliquer sur votre annonce Shopping (simulée)
         → Arriver sur la bonne fiche produit en < 2 secondes
         → Pas de page 404 · Pas de redirection cassée

[ ] 18. Prix dans l'annonce = prix sur le site
         → Classic 8kg : 89,00€ dans l'annonce = 89,00€ sur la fiche produit

[ ] 19. Fond de trésorerie Ads disponible
         → Vérifier que la carte bancaire liée est approvisionnée
         → Premier prélèvement : ~200€ (seuil de facturation)

[ ] 20. Journal de bord Day 1 préparé
         Format recommandé :
         
         DATE : ___________
         Budget dépensé : ___€
         Impressions : ___
         Clics : ___
         CTR : ___%
         CPC moyen : ___€
         Conversions : ___
         CPA : ___€
         Notes : _______________________
```

### PLANNING OPTIMISATION M1

```
J1-J3   : Observer sans toucher (collecter des données brutes)
J4-J7   : Première analyse CTR — si CTR < 0.5% → améliorer photo principale
J8-J14  : Première analyse CPC — si CPC > 0.80€ → vérifier quality score
J15     : Bilan mi-mois · Ajuster budget si CVR < 1%
J20-J25 : Ajouter mots-clés négatifs issus des termes de recherche
J30     : Bilan complet M1 · Décision scale ou optimiser
```

### RÈGLE D'OR — QUAND SCALER

```
✅ Scaler uniquement si TOUTES ces conditions sont réunies :
   → CVR page produit > 2%
   → ROAS actuel > 2 (pour 1€ de pub → 2€ de CA)
   → Stock suffisant pour absorber la demande
   → SAV opérationnel (vous pouvez répondre en < 24h)

❌ NE PAS scaler si :
   → Première semaine de campagne (pas assez de données)
   → CVR < 1.5%
   → Stock insuffisant (< 20 unités)
   → Problème SAV ou logistique non résolu
```
