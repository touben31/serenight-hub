# 🧭 NAVIGATION & FOOTER — SERENIGHT SHOPIFY
> Copier-coller dans Dawn → Personnaliser → Navigation

---

## MENU PRINCIPAL (nav)

```
Shopify Admin → Boutique en ligne → Navigation → Menu principal

Éléments dans l'ordre :
1. Couvertures → /collections/couvertures-lestees
2. Quiz → /pages/quiz-trouver-mon-poids-parfait
3. Notre Garantie → /pages/retours-et-remboursements
4. FAQ → (ajouter ancre #faq sur homepage ou page dédiée)
```

## MENU FOOTER

```
Shopify Admin → Boutique en ligne → Navigation → Pied de page

Colonne "Service client" :
1. Retours & Échanges → /pages/retours-et-remboursements
2. FAQ → /pages/faq (à créer si besoin)
3. Suivi de commande → https://www.mondialrelay.fr/
4. Contact → /pages/contact

Colonne "Légal" :
1. CGV → /pages/conditions-generales-de-vente
2. Mentions légales → /pages/mentions-legales
3. Confidentialité → /pages/politique-de-confidentialite
4. Cookies → (lien Axeptio – paramétrer dans Axeptio)
```

---

## CONFIGURATION THÈME DAWN

```
Shopify Admin → Boutique en ligne → Thèmes → Personnaliser

COULEURS :
Couleur 1 (fond) :       #F0F4FF
Couleur 2 (accents) :    #0D1B3E
Couleur des boutons :    #0D1B3E
Texte des boutons :      #FFFFFF
Texte des liens :        #3B6FB5

TYPOGRAPHIE :
Titres → DM Sans Bold (Google Fonts)
Corps  → DM Sans Regular
Taille corps : 16px

BOUTONS :
Rayon des coins : 4px
Bouton principal : Plein (filled)
Bouton secondaire : Contour (outline)

HEADER :
Style : Transparent sur fond → Plein au scroll
Logo : texte "Serenight" (jusqu'à avoir un vrai logo SVG)
Couleur header sticky : #0D1B3E
```

---

## HOMEPAGE — SECTIONS DAWN À CRÉER

```
Dans Personnaliser → Homepage → Ajouter des sections dans l'ordre :

1. Diaporama (hero)
   → Titre : "Le seul système qui vous garantit le bon poids dès la première commande."
   → Sous-titre : "Quiz personnalisé · Poids certifié OEKO-TEX · Échange offert si erreur."
   → CTA : "Trouver mon poids parfait" → /pages/quiz-trouver-mon-poids-parfait
   → Image : placeholder jusqu'aux photos échantillons

2. Annonce/Bandeau texte défilant
   → Texte : "OEKO-TEX Standard 100 · 30 nuits d'essai · Retour prépayé offert · Livraison France offerte"

3. Bloc texte + image (quiz CTA)
   → Titre : "Quelle couverture est faite pour vous ?"
   → Texte : "Le mauvais poids est la cause n°1 des retours. Notre quiz calcule le poids idéal en 30 secondes."
   → CTA : "Commencer le quiz – Gratuit" → /pages/quiz-trouver-mon-poids-parfait

4. Collection produits en vedette
   → Sélectionner : collection "Couvertures Lestées"
   → Nombre de produits : 3
   → Style : Grille

5. Bloc texte 3 colonnes (Comment ça marche)
   → Col 1 : "Quiz 30s" / "3 questions → poids idéal calculé"
   → Col 2 : "Livraison 48h" / "Expédié sous 2j · France offerte"
   → Col 3 : "Échange offert" / "Mauvais poids ? On échange gratuitement"

6. Bloc image + texte (garantie)
   → Titre : "30 nuits d'essai — Zéro risque."
   → Points : 30 nuits · Retour prépayé · Échange poids offert · Garantie 5 ans

7. Avis clients (Judge.me widget)
   → Installer Judge.me puis ajouter la section

8. FAQ (accordéon)
   → Voir les 5 questions dans homepage-finale.md

9. CTA final
   → Titre : "Prêt à mieux dormir ?"
   → CTA : "Trouver mon poids parfait"
```

---

## PARAMÈTRES LIVRAISON

```
Admin → Paramètres → Expédition et livraison → Profils de livraison

Profil "France métropolitaine" :
Zone de livraison : France métropolitaine
Tarif : "Livraison offerte" → 0,00€ (sans condition)
Transporteurs affichés : Mondial Relay + Colissimo

Supprimer : tous les autres tarifs existants par défaut
```

---

## APPS À INSTALLER (dans l'ordre)

```
1. Google & YouTube (officielle Google)
   → Connecter au compte GMC après création
   → Activer flux Shopping

2. Klaviyo
   → Connecter avec clé API Klaviyo
   → Activer tracking panier abandonné

3. Judge.me Reviews
   → Plan gratuit
   → Email de demande d'avis : J+7 post-livraison

4. Axeptio (cookies CNIL)
   → Gratuit < 5 000 visiteurs/mois
   → Configurer GA4 + Google Ads

5. Microsoft Clarity
   → Gratuit
   → Heatmaps + sessions recording
```
