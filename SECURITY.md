# 🔐 SECURITY.md — SERENIGHT
> Politique de sécurité du projet · Dernière mise à jour : Juin 2026

---

## RÈGLES ABSOLUES

```
1. JAMAIS de token GitHub dans le chat ou dans les fichiers
2. JAMAIS de clé API (Shopify, Klaviyo, Google, Anthropic) dans les fichiers
3. JAMAIS de mot de passe dans les fichiers
4. JAMAIS de SIRET, RIB, données bancaires dans les fichiers
5. JAMAIS de données clients dans les fichiers
```

---

## SECRETS À NE JAMAIS COMMITTER

```
❌ GitHub Personal Access Tokens (ghp_...)
❌ Shopify API keys / Access tokens
❌ Klaviyo Private API keys
❌ Google Ads Customer ID
❌ Google Analytics Measurement ID (G-XXXXXXXX)
❌ GMC Merchant ID
❌ Clés Stripe ou Shopify Payments
❌ Identifiants SIRET / données bancaires
❌ Adresse personnelle complète
❌ Numéros de téléphone personnels
```

---

## VÉRIFICATION AVANT CHAQUE PUSH

```bash
# Vérifier qu'aucun secret n'est présent
grep -r "ghp_" . --include="*.md" --include="*.json"
grep -r "sk_live" . --include="*.md"
grep -r "pk_live" . --include="*.md"
grep -r "shpat_" . --include="*.md"
grep -rE "[0-9]{14}" . --include="*.md"  # SIRET
```

---

## FICHIERS SENSIBLES — À NE JAMAIS POUSSER

Ajouter dans `.gitignore` si créés :
```
.env
.env.local
*.pem
secrets.json
config/secrets.yml
shopify-credentials.json
klaviyo-keys.txt
```

---

## PERMISSIONS APPLICATIONS SHOPIFY

| App | Scopes accordés | Niveau de risque |
|-----|----------------|-----------------|
| Google & YouTube | read_products, read_orders | Faible |
| Klaviyo | read_customers, read_orders | Faible |
| Judge.me | read_products, write_metafields | Faible |
| Axeptio | Injection script | Faible |
| Clarity | Injection script (analytics) | Faible |

**Règle :** N'installer que des apps avec > 4 étoiles + 500+ reviews dans le Shopify App Store.

---

## AUTHENTIFICATION À DEUX FACTEURS (2FA)

Activer le 2FA sur TOUS ces comptes :

```
✅ GitHub        → github.com/settings/security
✅ Shopify       → Admin → Paramètres → Sécurité
✅ Google (GMC)  → myaccount.google.com/security
✅ Klaviyo       → App → Settings → Security
✅ Alibaba       → Account → Security → 2-step verification
✅ Email (Gmail) → myaccount.google.com
```

---

## GESTION DES TOKENS GITHUB

```
1. Créer un token par session de travail (expiration courte : 7-30j)
2. NE JAMAIS coller le token dans le chat (révocation automatique)
3. Utiliser git push depuis le terminal local avec le token
4. Révoquer immédiatement tout token exposé :
   github.com/settings/tokens → Revoke
```

---

## BOUTIQUE SHOPIFY — SÉCURITÉ

```
État actuel (01/06/2026) :
✅ Boutique protégée par mot de passe (mode maintenance)
✅ HTTPS actif (Shopify gère automatiquement)
⬜ 2FA Shopify → À activer
⬜ Email vendeur → changer vers contact@serenight.fr dès création domaine
⬜ Shopify Payments → vérification d'identité requise (SIRET + pièce d'identité)
```

---

## DONNÉES CLIENTS

```
Quand la boutique sera live :
- Données stockées dans Shopify (conforme RGPD)
- Klaviyo : opt-in explicite uniquement
- Google Analytics : anonymisation IP activée
- Axeptio : consentement avant tout tracking
- Conservation : 10 ans (obligations légales)
```

---

## SIGNALEMENT D'UNE FAILLE

Si vous détectez une faille de sécurité :
→ Email : contact@serenight.fr
→ Objet : [SECURITY] Description courte
→ Ne pas publier publiquement avant correction

---

## VÉRIFICATION GITHUB — AUCUN SECRET DÉTECTÉ

Dernière vérification : 01/06/2026
Résultat : ✅ Aucun token, clé API, mot de passe ou donnée sensible dans le dépôt.
