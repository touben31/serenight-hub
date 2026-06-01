# 📧 KLAVIYO — GUIDE DE CONFIGURATION COMPLET
> Procédure étape par étape · Utiliser le copy dans klaviyo-email-copy.md

---

## ÉTAPE 1 — CRÉER LE COMPTE (10 min)

```
1. klaviyo.com → "Start free"
2. Email : contact@serenight.fr (ou ftouben@yahoo.fr si pas encore créé)
3. Nom de la marque : Serenight
4. URL boutique : https://fytuq3-i0.myshopify.com
5. Plan gratuit : jusqu'à 500 contacts + 500 emails/mois ✅

NE PAS payer immédiatement — le plan gratuit suffit pour démarrer.
```

---

## ÉTAPE 2 — INSTALLER L'APP SHOPIFY (5 min)

```
Shopify Admin → Apps → Rechercher "Klaviyo"
→ Installer l'app Klaviyo officielle
→ Connecter avec votre compte Klaviyo
→ Autoriser les accès requis (commandes, clients, produits)
```

---

## ÉTAPE 3 — CONFIGURER LE DOMAINE EMAIL (20 min)

```
Klaviyo → Paramètres → Sender profiles → Ajouter un profil

Nom d'expéditeur : Serenight
Email expéditeur : contact@serenight.fr
Email de réponse : contact@serenight.fr

RECORDS DNS À AJOUTER (chez OVH après achat domaine) :
→ Klaviyo → Settings → Email domains → "Add sending domain"
→ Copier les 3 records DNS fournis (SPF, DKIM, DMARC)
→ Les ajouter dans OVH → Domaines → Zone DNS

⚠️ SANS CES RECORDS : vos emails tombent en spam
```

---

## ÉTAPE 4 — CRÉER LES LISTES (5 min)

```
Klaviyo → Audiences → Listes & Segments → Créer une liste

Listes à créer :
1. "Newsletter Serenight" → pour les abonnés généraux
2. "Quiz Completers" → pour les personnes ayant fait le quiz
3. "Clients" → alimentée automatiquement par Shopify

NE PAS fusionner les listes — garder séparées.
```

---

## ÉTAPE 5 — CRÉER LES FLOWS (2h total)

### FLOW 1 : Welcome Series (déclencheur : ajout à "Newsletter Serenight")

```
Klaviyo → Flows → Create flow → Welcome Series
Déclencheur : "Someone subscribes to a list" → Newsletter Serenight

Email 1 → Immédiat → Objet : "Bienvenue chez Serenight 🌙"
Email 2 → J+2 → Objet : "Pourquoi le poids calme l'anxiété"
Email 3 → J+5 → Objet : "Ce que disent nos premiers clients"
Email 4 → J+8 → Objet : "{{ first_name }}, une question directe"

COPY COMPLET : voir klaviyo-email-copy.md → FLOW 1
```

### FLOW 2 : Panier Abandonné (déclencheur : Shopify)

```
Klaviyo → Flows → Create flow → Abandoned Cart
Déclencheur : "Started Checkout" (depuis Shopify)
Filtre : "Hasn't placed order in last 0 days"

Email 1 → 1h après → "Votre panier vous attend"
Email 2 → 24h après → "{{ first_name }}, j'ai quelque chose pour vous"
Email 3 → 48h après → "Dernière relance (promis)"

COPY COMPLET : voir klaviyo-email-copy.md → FLOW 2
```

### FLOW 3 : Post-Quiz (déclencheur : propriété profil)

```
Klaviyo → Flows → Create flow → Custom
Déclencheur : "Profile property changed" → "quiz_completed = true"

Email 1 → Immédiat → Recommandation personnalisée
Email 2 → J+3 → Relance si pas acheté

COPY COMPLET : voir klaviyo-email-copy.md → FLOW 3
```

### FLOW 4 : Post-Achat (déclencheur : Shopify order placed)

```
Klaviyo → Flows → Create flow → Post-Purchase
Déclencheur : "Placed Order" (depuis Shopify)

Email 1 → J+1 → "Votre couverture est en route"
Email 2 → J+7 → "Comment s'est passée la première semaine ?"
Email 3 → J+30 → Cross-sell (housse bambou premium)

COPY COMPLET : voir klaviyo-email-copy.md → FLOW 4
```

### FLOW 5 : Win-Back (déclencheur : inactivité 90 jours)

```
Klaviyo → Flows → Create flow → Win Back
Déclencheur : "Customer at risk of churn" (90j sans achat)

Email 1 → Immédiat → "{{ first_name }}, on vous a perdu de vue"
Email 2 → J+7 → Offre de réactivation

COPY COMPLET : voir klaviyo-email-copy.md → FLOW 5
```

---

## ÉTAPE 6 — CONNECTER AU QUIZ (15 min)

```
Le quiz Shopify doit envoyer les données à Klaviyo quand quelqu'un complète le quiz.

Méthode simple (sans code) :
→ Ajouter un champ email avant le résultat du quiz
→ L'email soumis déclenche l'ajout à la liste "Quiz Completers"
→ Le Flow 3 se déclenche automatiquement

Méthode avec Klaviyo JS (si quiz sur page Shopify) :
→ Ajouter le tracking Klaviyo dans le HTML du quiz
→ Déclencher klaviyo.push(['track', 'Quiz Completed', {...}])
```

---

## ÉTAPE 7 — PARAMÉTRER LES EMAILS TRANSACTIONNELS

```
Shopify Admin → Paramètres → Notifications
Déléguer à Klaviyo :
→ Confirmation de commande → Klaviyo template
→ Confirmation d'expédition → Klaviyo template (avec tracking)
→ Annulation → Shopify par défaut (ok pour commencer)
```

---

## ÉTAPE 8 — TESTER AVANT LE LANCEMENT

```
Pour chaque flow :
1. Klaviyo → Flows → Sélectionner le flow
2. "Preview" sur chaque email
3. "Send test email" → envoyer à ftouben@yahoo.fr
4. Vérifier affichage mobile + desktop
5. Vérifier que les liens fonctionnent
6. Activer le flow (toggle ON) seulement si boutique live
```

---

## CHECKLIST KLAVIYO AVANT LANCEMENT

```
[ ] Compte Klaviyo créé
[ ] App Shopify connectée
[ ] Domaine email configuré (SPF + DKIM validés)
[ ] 3 listes créées (Newsletter, Quiz, Clients)
[ ] Flow Welcome créé et testé
[ ] Flow Panier Abandonné créé et testé
[ ] Flow Post-Quiz créé et testé
[ ] Flow Post-Achat créé et testé
[ ] Flow Win-Back créé et testé
[ ] Email test envoyé pour chaque flow
[ ] Todos les flows en mode "DRAFT" (pas actifs avant boutique live)
```

---

## MÉTRIQUES À SURVEILLER (dès M1)

| Métrique | Objectif M1 | Objectif M3 |
|----------|------------|------------|
| Taux d'ouverture Welcome | > 40% | > 50% |
| Taux de clic Welcome | > 5% | > 8% |
| Taux récupération panier abandonné | > 5% | > 8% |
| Revenu attribué à Klaviyo | > 15% du CA | > 25% du CA |
