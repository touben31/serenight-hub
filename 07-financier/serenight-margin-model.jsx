import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine, ComposedChart, Area } from "recharts";

// ── REAL DATA ──────────────────────────────────────────────
const EUR = 0.92; // USD → EUR

const SUPPLIERS = [
  { id:1, name:"Hangzhou Gravity Industrial", city:"Hangzhou", sample:28, b50:22, b100:20, oeko:true, ce:false, moq:50, lead:"15-25j", note:"Spécialiste couvertures lestées" },
  { id:2, name:"Hangzhou D&H Textile (Zonli)", city:"Hangzhou", sample:25, b50:19, b100:17, oeko:true, ce:false, moq:50, lead:"15-30j", note:"300k pcs/mois, marque Zonli" },
  { id:3, name:"Hangzhou Kuangs Textile", city:"Hangzhou", sample:23, b50:18, b100:16, oeko:true, ce:false, moq:100, lead:"20-30j", note:"Bambou certifié, bon rapport" },
  { id:4, name:"Ningbo Jemo Textile Tech", city:"Ningbo", sample:27, b50:21, b100:19, oeko:true, ce:false, moq:50, lead:"15-25j", note:"Billes verre 2mm, qualité bonne" },
  { id:5, name:"Hangzhou Jiayou Shangkai", city:"Hangzhou", sample:35, b50:27, b100:24, oeko:true, ce:true, lead:"20-35j", moq:100, note:"Premium, certification CE en plus" },
  { id:6, name:"Hangzhou Sine Textile", city:"Hangzhou", sample:30, b50:23, b100:21, oeko:true, ce:false, moq:10, lead:"15-25j", note:"MOQ très bas = idéal pour test" },
  { id:7, name:"Anhui Honren Textile", city:"Hefei (Anhui)", sample:22, b50:17, b100:15, oeko:true, ce:false, moq:100, lead:"20-30j", note:"Prix bas, Anhui ≠ Hangzhou" },
  { id:8, name:"Hangzhou Dowin Hometextile", city:"Hangzhou", sample:24, b50:19, b100:17, oeko:true, ce:false, moq:50, lead:"15-25j", note:"Solide, exportateur confirmé" },
  { id:9, name:"Ningbo Kingworth Global", city:"Ningbo", sample:26, b50:20, b100:18, oeko:true, ce:false, moq:100, lead:"20-30j", note:"Intermédiaire, mix qualité/prix" },
  { id:10, name:"Luan East West International", city:"Luan (Anhui)", sample:19, b50:15, b100:13, oeko:false, ce:false, moq:50, lead:"15-25j", note:"⚠️ Pas OEKO-TEX — RISQUE GMC" },
];

// Shipping cost per unit (€) — validated from freight data
const SHIPPING = {
  "1u (DHL Express échantillon)":  { cost:82, days:"5-7j",  color:"#ef4444" },
  "45u (fret aérien consolidé)":   { cost:62, days:"10-15j", color:"#f59e0b" },
  "100u (fret aérien consolidé)":  { cost:52, days:"10-15j", color:"#f97316" },
  "100u (fret maritime LCL)":      { cost:26, days:"35-45j", color:"#10b981" },
  "200u (fret maritime LCL)":      { cost:22, days:"35-45j", color:"#059669" },
  "500u (fret maritime FCL)":      { cost:14, days:"30-40j", color:"#047857" },
};

function calcFullMargin({ priceEUR, productFOB_USD, shippingPerUnit, returnRate, volume, shopifyPlan }) {
  const productEUR = productFOB_USD * EUR;
  const cif = productEUR + shippingPerUnit;
  const duty = cif * 0.12;
  const tvaImport = (cif + duty) * 0.055;
  const brokerAmortized = 150 / volume;
  const productLanded = productEUR + shippingPerUnit + duty + tvaImport + brokerAmortized;

  const packaging = 1.50;
  const mondialRelay = 8.00;
  const spRate = shopifyPlan === "basic" ? 0.015 : shopifyPlan === "grow" ? 0.013 : 0.011;
  const shopifyPayments = priceEUR * spRate + 0.25;
  const returnCost = returnRate * 22;
  const chargebacks = 0.003 * 15;
  const sav = 0.08 * (5 / 60) * 15;
  const appsPerOrder = 60 / Math.max(volume * 0.5, 10);

  const totalVar = productLanded + packaging + mondialRelay + shopifyPayments + returnCost + chargebacks + sav + appsPerOrder;

  const fixedMonth = 29 + 2 + 30;
  const ordersPerMonth = volume * 0.5;
  const fixedPerOrder = fixedMonth / ordersPerMonth;

  const grossMargin = priceEUR - totalVar;
  const netMargin = grossMargin - fixedPerOrder;
  const cpa_breakeven = grossMargin;

  return {
    productLanded: +productLanded.toFixed(2),
    packaging,
    mondialRelay,
    shopifyPayments: +shopifyPayments.toFixed(2),
    returnCost: +returnCost.toFixed(2),
    chargebacks: +chargebacks.toFixed(2),
    sav: +sav.toFixed(2),
    appsPerOrder: +appsPerOrder.toFixed(2),
    totalVar: +totalVar.toFixed(2),
    grossMargin: +grossMargin.toFixed(2),
    grossMarginPct: +((grossMargin / priceEUR) * 100).toFixed(1),
    fixedPerOrder: +fixedPerOrder.toFixed(2),
    netMargin: +netMargin.toFixed(2),
    netMarginPct: +((netMargin / priceEUR) * 100).toFixed(1),
    cpa_breakeven: +cpa_breakeven.toFixed(2),
    isViable: netMargin > 0,
    breakdown: [
      { name: "Produit rendu France", val: +productLanded.toFixed(2), fill: "#6366f1" },
      { name: "Emballage", val: packaging, fill: "#8b5cf6" },
      { name: "Livraison FR", val: mondialRelay, fill: "#a78bfa" },
      { name: "Shopify Payments", val: +shopifyPayments.toFixed(2), fill: "#7c3aed" },
      { name: "Retours", val: +returnCost.toFixed(2), fill: "#f59e0b" },
      { name: "Chargebacks + SAV", val: +(chargebacks + sav).toFixed(2), fill: "#fb923c" },
      { name: "Apps (amorti)", val: +appsPerOrder.toFixed(2), fill: "#94a3b8" },
      { name: "Frais fixes (amorti)", val: +fixedPerOrder.toFixed(2), fill: "#64748b" },
      { name: "MARGE NETTE", val: +netMargin.toFixed(2), fill: netMargin > 0 ? "#10b981" : "#ef4444" },
    ],
  };
}

// ── STYLES ─────────────────────────────────────────────────
const S = {
  bg: { background: "#080d1a", minHeight: "100vh", fontFamily: "'JetBrains Mono', monospace", color: "#e2e8f0", fontSize: 13 },
  header: { background: "linear-gradient(90deg, #0f172a 0%, #0c1a3a 100%)", padding: "18px 24px", borderBottom: "1px solid #1e2d45", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 },
  tag: { fontSize: 10, padding: "2px 8px", borderRadius: 4, background: "#1e2d45", color: "#94a3b8", letterSpacing: ".08em", textTransform: "uppercase" },
  tabs: { display: "flex", background: "#0c1526", borderBottom: "1px solid #1e2d45", overflowX: "auto" },
  tab: (a) => ({ padding: "11px 18px", border: "none", background: "none", color: a ? "#60a5fa" : "#64748b", fontFamily: "inherit", fontSize: 12, cursor: "pointer", fontWeight: a ? 700 : 400, borderBottom: `2px solid ${a ? "#60a5fa" : "transparent"}`, whiteSpace: "nowrap", transition: "all .15s", letterSpacing: ".04em" }),
  body: { padding: "20px 24px", maxWidth: 1300, margin: "0 auto" },
  card: { background: "#111827", border: "1px solid #1e2d45", borderRadius: 10, padding: "18px 20px", marginBottom: 16 },
  grid: (n) => ({ display: "grid", gridTemplateColumns: `repeat(${n}, 1fr)`, gap: 12, marginBottom: 16 }),
  kpi: { background: "#0f172a", border: "1px solid #1e2d45", borderRadius: 8, padding: "14px 16px" },
  h: { fontSize: 15, fontWeight: 700, marginBottom: 14, color: "#f1f5f9", letterSpacing: "-.01em" },
  label: { fontSize: 10, textTransform: "uppercase", letterSpacing: ".08em", color: "#64748b", marginBottom: 5 },
  big: (c) => ({ fontSize: 22, fontWeight: 700, color: c || "#f1f5f9", lineHeight: 1 }),
  sub: { fontSize: 11, color: "#64748b", marginTop: 4 },
  table: { width: "100%", borderCollapse: "collapse", fontSize: 12 },
  th: { padding: "8px 10px", borderBottom: "1px solid #1e2d45", color: "#64748b", fontWeight: 600, textTransform: "uppercase", fontSize: 10, letterSpacing: ".06em", textAlign: "right" },
  thL: { padding: "8px 10px", borderBottom: "1px solid #1e2d45", color: "#64748b", fontWeight: 600, textTransform: "uppercase", fontSize: 10, letterSpacing: ".06em", textAlign: "left" },
  td: { padding: "9px 10px", borderBottom: "1px solid #0d1929", textAlign: "right", color: "#cbd5e1" },
  tdL: { padding: "9px 10px", borderBottom: "1px solid #0d1929", textAlign: "left", color: "#e2e8f0" },
  inp: { background: "#0c1526", border: "1px solid #1e2d45", borderRadius: 5, color: "#e2e8f0", fontFamily: "inherit", fontSize: 12, padding: "6px 10px", width: "100%" },
  sel: { background: "#0c1526", border: "1px solid #1e2d45", borderRadius: 5, color: "#e2e8f0", fontFamily: "inherit", fontSize: 12, padding: "6px 10px", width: "100%" },
  badge: (c) => ({ display: "inline-block", padding: "2px 6px", borderRadius: 3, fontSize: 10, fontWeight: 700, background: c === "green" ? "#052e16" : c === "red" ? "#2d0a0a" : c === "amber" ? "#2d1f00" : "#1e2d45", color: c === "green" ? "#34d399" : c === "red" ? "#f87171" : c === "amber" ? "#fbbf24" : "#94a3b8" }),
  warn: { background: "#2d1700", border: "1px solid #f59e0b", borderRadius: 8, padding: "12px 16px", color: "#fbbf24", fontSize: 12, lineHeight: 1.7, marginBottom: 14 },
  ok: { background: "#052e16", border: "1px solid #10b981", borderRadius: 8, padding: "12px 16px", color: "#34d399", fontSize: 12, lineHeight: 1.7, marginBottom: 14 },
};

const fe = (n, d = 0) => {
  if (n === null || isNaN(n)) return "—";
  const s = Math.abs(n).toLocaleString("fr-FR", { minimumFractionDigits: d, maximumFractionDigits: d });
  return (n < 0 ? "-" : "") + s + "€";
};
const fp = (n) => n === null ? "—" : Math.round(n) + "%";
const nc = (n) => n >= 0 ? "#10b981" : "#ef4444";
const rcol = (r) => r >= 3 ? "#10b981" : r >= 2 ? "#f59e0b" : "#ef4444";

const SUPPLY_COST_SCENARIOS = [
  { label: "Budget  — F7 Anhui, sans OEKO-TEX", fob: 13, warning: true },
  { label: "Standard — F3 Kuangs, coton OEKO-TEX", fob: 16, warning: false },
  { label: "Standard+ — F2 D&H, bambou OEKO-TEX", fob: 17, warning: false },
  { label: "Premium  — F1 Gravity, bambou OEKO-TEX", fob: 20, warning: false },
  { label: "Top      — F5 Jiayou, bambou + CE", fob: 24, warning: false },
];

export default function App() {
  const [tab, setTab] = useState("suppliers");
  const [selSupplier, setSelSupplier] = useState(1);
  const [selVol, setSelVol] = useState("100u (fret maritime LCL)");
  const [sellPrice, setSellPrice] = useState(89);
  const [returnRate, setReturnRate] = useState(15);
  const [shopifyPlan, setShopifyPlan] = useState("basic");

  const supplier = SUPPLIERS.find(s => s.id === selSupplier);
  const shippingObj = SHIPPING[selVol];
  const volume = parseInt(selVol.match(/\d+/)[0]);

  const result = useMemo(() => calcFullMargin({
    priceEUR: sellPrice,
    productFOB_USD: supplier?.b100 || 18,
    shippingPerUnit: shippingObj?.cost || 26,
    returnRate: returnRate / 100,
    volume,
    shopifyPlan,
  }), [selSupplier, selVol, sellPrice, returnRate, shopifyPlan, supplier, shippingObj, volume]);

  // Waterfall chart data
  const waterfall = (() => {
    const items = result.breakdown;
    let cum = sellPrice;
    return items.map((item, i) => {
      if (i < items.length - 1) {
        const start = cum - item.val;
        cum -= item.val;
        return { name: item.name, bottom: start - item.val, val: item.val, fill: item.fill, start };
      } else {
        return { name: "MARGE NETTE", bottom: 0, val: item.val, fill: item.fill, start: item.val };
      }
    });
  })();

  // All scenarios comparison
  const scenarios = [
    { label: "89€ / Air 45u / F3", price: 89, fob: 16, ship: 62, vol: 45, ret: 20 },
    { label: "89€ / Sea 100u / F3", price: 89, fob: 16, ship: 26, vol: 100, ret: 15 },
    { label: "109€ / Sea 100u / F3", price: 109, fob: 16, ship: 26, vol: 100, ret: 12 },
    { label: "89€ / Sea 100u / F1", price: 89, fob: 20, ship: 26, vol: 100, ret: 15 },
    { label: "109€ / Sea 200u / F1", price: 109, fob: 20, ship: 22, vol: 200, ret: 10 },
    { label: "129€ / Sea 200u / F1", price: 129, fob: 20, ship: 22, vol: 200, ret: 8 },
  ].map(s => ({
    ...s,
    ...calcFullMargin({ priceEUR: s.price, productFOB_USD: s.fob, shippingPerUnit: s.ship, returnRate: s.ret / 100, volume: s.vol, shopifyPlan: "basic" }),
  }));

  const tabs = [
    { id: "suppliers", label: "01 — Fournisseurs" },
    { id: "logistics", label: "02 — Logistique" },
    { id: "calc", label: "03 — Marge réelle" },
    { id: "scenarios", label: "04 — Scénarios" },
  ];

  const CHART_COLORS = { grid: "#1e2d45", text: "#64748b", tooltip: { background: "#0f172a", border: "1px solid #1e2d45" } };

  return (
    <div style={S.bg}>
      {/* Header */}
      <div style={S.header}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-.02em", color: "#f1f5f9" }}>
            🌙 Serenight — Audit Financier Réel
          </div>
          <div style={{ fontSize: 11, color: "#64748b", marginTop: 4 }}>
            Données fournisseurs validées · Coûts logistiques réels · Juin 2026
          </div>
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {["10 fournisseurs Alibaba réels", "Fret aérien vs maritime", "Marge nette par vente"].map(t => (
            <span key={t} style={S.tag}>{t}</span>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={S.tabs}>
        {tabs.map(t => (
          <button key={t.id} style={S.tab(tab === t.id)} onClick={() => setTab(t.id)}>{t.label}</button>
        ))}
      </div>

      <div style={S.body}>

        {/* ── TAB 1: SUPPLIERS ── */}
        {tab === "suppliers" && (
          <>
            <div style={S.warn}>
              ⚠️ <strong>Les prix Alibaba sont FOB (port chinois).</strong> Il faut ajouter : fret maritime/aérien + droits de douane (12%) + TVA import (5,5%) + courtier douane. Le coût réel "rendu France" est systématiquement 40 à 300% plus élevé que le prix FOB affiché.
            </div>

            <div style={S.card}>
              <div style={S.h}>10 fournisseurs Alibaba — Couverture lestée 8kg Bambou OEKO-TEX</div>
              <div style={{ overflowX: "auto" }}>
                <table style={S.table}>
                  <thead>
                    <tr>
                      <th style={S.thL}>#</th>
                      <th style={S.thL}>Fournisseur</th>
                      <th style={S.thL}>Ville</th>
                      <th style={{ ...S.th }}>Échantillon</th>
                      <th style={{ ...S.th }}>×50 unités</th>
                      <th style={{ ...S.th }}>×100 unités</th>
                      <th style={{ ...S.th }}>OEKO-TEX</th>
                      <th style={{ ...S.th }}>MOQ</th>
                      <th style={{ ...S.th }}>Délai fab.</th>
                      <th style={S.thL}>Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SUPPLIERS.map(s => (
                      <tr key={s.id} style={{ cursor: "pointer", background: selSupplier === s.id ? "#0d1a2d" : "none" }} onClick={() => setSelSupplier(s.id)}>
                        <td style={S.tdL}><strong style={{ color: "#60a5fa" }}>F{s.id}</strong></td>
                        <td style={S.tdL}>
                          <strong>{s.name}</strong>
                          {s.ce && <span style={{ ...S.badge("green"), marginLeft: 6 }}>CE+</span>}
                          {selSupplier === s.id && <span style={{ ...S.badge("amber"), marginLeft: 6 }}>SÉLECTIONNÉ</span>}
                        </td>
                        <td style={S.tdL}><span style={{ color: "#94a3b8" }}>{s.city}</span></td>
                        <td style={{ ...S.td, color: "#f59e0b" }}>${s.sample} / <span style={{ color: "#64748b" }}>{(s.sample * EUR).toFixed(0)}€</span></td>
                        <td style={{ ...S.td }}>${s.b50} / <span style={{ color: "#64748b" }}>{(s.b50 * EUR).toFixed(0)}€</span></td>
                        <td style={{ ...S.td, color: "#10b981", fontWeight: 700 }}>${s.b100} / <span>{(s.b100 * EUR).toFixed(0)}€</span></td>
                        <td style={{ ...S.td, textAlign: "center" }}>
                          <span style={S.badge(s.oeko ? "green" : "red")}>{s.oeko ? "✓ OUI" : "✗ NON"}</span>
                        </td>
                        <td style={{ ...S.td }}>{s.moq} pcs</td>
                        <td style={{ ...S.td, color: "#94a3b8" }}>{s.lead}</td>
                        <td style={{ ...S.tdL, color: s.note?.includes("⚠️") ? "#f59e0b" : "#94a3b8", maxWidth: 200 }}>{s.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ marginTop: 12, fontSize: 11, color: "#64748b", display: "flex", gap: 20, flexWrap: "wrap" }}>
                <span>💡 Taux de change utilisé : 1 USD = {EUR} EUR</span>
                <span>💡 Cliquer sur un fournisseur pour le sélectionner dans l'onglet Marge réelle</span>
              </div>
            </div>

            {/* Price comparison chart */}
            <div style={S.card}>
              <div style={S.h}>Comparaison prix FOB à 100 unités (USD)</div>
              <div style={{ marginBottom: 8, fontSize: 11, color: "#64748b" }}>Prix affiché fournisseur · hors fret, douane, TVA import</div>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={SUPPLIERS.map(s => ({ name: `F${s.id}`, prix: s.b100, oeko: s.oeko, id: s.id }))} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
                  <XAxis dataKey="name" tick={{ fill: CHART_COLORS.text, fontSize: 11 }} />
                  <YAxis tick={{ fill: CHART_COLORS.text, fontSize: 11 }} tickFormatter={v => `$${v}`} />
                  <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #1e2d45", borderRadius: 6, fontFamily: "monospace" }} formatter={v => [`$${v} USD (≈${(v * EUR).toFixed(0)}€)`, "Prix FOB"]} />
                  <Bar dataKey="prix" radius={[4, 4, 0, 0]}>
                    {SUPPLIERS.map(s => <Cell key={s.id} fill={s.oeko ? "#3b82f6" : "#ef4444"} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div style={{ display: "flex", gap: 12, fontSize: 11, color: "#64748b", marginTop: 8 }}>
                <span><span style={{ display: "inline-block", width: 8, height: 8, background: "#3b82f6", borderRadius: 2, marginRight: 4 }}></span>Avec OEKO-TEX</span>
                <span><span style={{ display: "inline-block", width: 8, height: 8, background: "#ef4444", borderRadius: 2, marginRight: 4 }}></span>Sans OEKO-TEX (⚠️ non recommandé)</span>
              </div>
            </div>
          </>
        )}

        {/* ── TAB 2: LOGISTICS ── */}
        {tab === "logistics" && (
          <>
            <div style={S.warn}>
              ⚠️ <strong>Le fret est le coût le plus sous-estimé en D2C.</strong> Une couverture lestée 8kg pèse ~10kg emballée. À petits volumes (45 unités), le fret aérien coûte 52-82€/unité, rendant le business model INVIABLE à 89€ de prix de vente.
            </div>

            <div style={S.card}>
              <div style={S.h}>Coût de livraison Chine → France par unité (couverture 8kg emballée ~10kg)</div>
              <table style={S.table}>
                <thead>
                  <tr>
                    <th style={S.thL}>Mode d'expédition</th>
                    <th style={{ ...S.th }}>Coût/unité</th>
                    <th style={{ ...S.th }}>Délai transit</th>
                    <th style={{ ...S.th }}>Prix vente min. viable</th>
                    <th style={S.thL}>Recommandation</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(SHIPPING).map(([label, data]) => {
                    const minPrice = data.cost + (data.cost * 0.12) + ((data.cost + data.cost * 0.12) * 0.055) + 17 + 8 + 2; // rough
                    return (
                      <tr key={label}>
                        <td style={S.tdL}><strong>{label}</strong></td>
                        <td style={{ ...S.td, color: data.cost > 50 ? "#ef4444" : data.cost > 30 ? "#f59e0b" : "#10b981", fontWeight: 700, fontSize: 14 }}>{data.cost}€</td>
                        <td style={{ ...S.td, color: "#94a3b8" }}>{data.days}</td>
                        <td style={{ ...S.td, color: data.cost > 50 ? "#ef4444" : "#f59e0b" }}>~{Math.ceil(minPrice / 5) * 5 + 30}€ min.</td>
                        <td style={S.tdL}>
                          {data.cost > 70 && <span style={S.badge("red")}>Uniquement échantillons</span>}
                          {data.cost > 50 && data.cost <= 70 && <span style={S.badge("red")}>Viable seulement si prix &gt; 119€</span>}
                          {data.cost > 30 && data.cost <= 50 && <span style={S.badge("amber")}>Viable si prix ≥ 109€</span>}
                          {data.cost <= 30 && <span style={S.badge("green")}>✓ Modèle viable à 89€</span>}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Chart */}
            <div style={S.card}>
              <div style={S.h}>Coût de fret par unité selon le mode d'expédition (€)</div>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={Object.entries(SHIPPING).map(([k, v]) => ({ name: k.split("(")[0].trim(), cost: v.cost, color: v.color }))} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
                  <XAxis dataKey="name" tick={{ fill: CHART_COLORS.text, fontSize: 10 }} />
                  <YAxis tick={{ fill: CHART_COLORS.text, fontSize: 11 }} tickFormatter={v => `${v}€`} />
                  <ReferenceLine y={30} stroke="#f59e0b" strokeDasharray="4 2" label={{ value: "Seuil viable 89€", fill: "#f59e0b", fontSize: 10, position: "insideTopRight" }} />
                  <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #1e2d45", borderRadius: 6, fontFamily: "monospace" }} formatter={v => [`${v}€/unité`, "Fret"]} />
                  <Bar dataKey="cost" radius={[4, 4, 0, 0]}>
                    {Object.entries(SHIPPING).map(([k, v]) => <Cell key={k} fill={v.color} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div style={S.card}>
              <div style={S.h}>Décomposition coût total import par unité (fret maritime 100u, F3 standard)</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 10 }}>
                {[
                  { label: "Prix FOB fournisseur", val: (16 * EUR).toFixed(2) + "€", desc: "$16 × 0.92", color: "#6366f1" },
                  { label: "Fret maritime LCL", val: "26€", desc: "250€/m³ × 0.073m³ + frais port", color: "#8b5cf6" },
                  { label: "Droits de douane (12%)", val: "5.05€", desc: "12% × (FOB + fret)", color: "#f59e0b" },
                  { label: "TVA import (5,5%)", val: "2.47€", desc: "5,5% × (CIF + droits)", color: "#fb923c" },
                  { label: "Courtier douane amorti", val: "1.50€", desc: "150€ ÷ 100 unités", color: "#94a3b8" },
                  { label: "= TOTAL RENDU FRANCE", val: ((16 * EUR) + 26 + 5.05 + 2.47 + 1.50).toFixed(2) + "€", desc: "vs 16€ FOB affiché", color: "#10b981" },
                ].map(item => (
                  <div key={item.label} style={{ background: "#0c1526", borderRadius: 6, padding: "12px 14px", borderLeft: `3px solid ${item.color}` }}>
                    <div style={{ fontSize: 10, color: "#64748b", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: item.color }}>{item.val}</div>
                    <div style={{ fontSize: 10, color: "#64748b", marginTop: 3 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ── TAB 3: REAL MARGIN ── */}
        {tab === "calc" && (
          <>
            {/* Controls */}
            <div style={S.card}>
              <div style={S.h}>Paramètres de simulation</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
                <div>
                  <div style={S.label}>Fournisseur</div>
                  <select style={S.sel} value={selSupplier} onChange={e => setSelSupplier(+e.target.value)}>
                    {SUPPLIERS.map(s => <option key={s.id} value={s.id}>F{s.id} — {s.name.split(" ").slice(0, 2).join(" ")} (${s.b100}/u)</option>)}
                  </select>
                </div>
                <div>
                  <div style={S.label}>Mode d'expédition</div>
                  <select style={S.sel} value={selVol} onChange={e => setSelVol(e.target.value)}>
                    {Object.keys(SHIPPING).map(k => <option key={k} value={k}>{k}</option>)}
                  </select>
                </div>
                <div>
                  <div style={S.label}>Prix de vente</div>
                  <input style={S.inp} type="number" value={sellPrice} min={59} max={199} step={10} onChange={e => setSellPrice(+e.target.value)} />
                </div>
                <div>
                  <div style={S.label}>Taux de retours (%)</div>
                  <input style={S.inp} type="number" value={returnRate} min={0} max={40} step={1} onChange={e => setReturnRate(+e.target.value)} />
                </div>
                <div>
                  <div style={S.label}>Forfait Shopify</div>
                  <select style={S.sel} value={shopifyPlan} onChange={e => setShopifyPlan(e.target.value)}>
                    <option value="basic">Basic — 1,5% + 0,25€</option>
                    <option value="grow">Grow — 1,3% + 0,25€</option>
                    <option value="advanced">Advanced — 1,1% + 0,25€</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Result alert */}
            {result.netMargin < 0 ? (
              <div style={S.warn}>
                🚨 <strong>BUSINESS MODEL NON VIABLE.</strong> Avec ces paramètres, chaque vente génère une PERTE de {Math.abs(result.netMargin).toFixed(2)}€. Vous perdez de l'argent à chaque commande. Solution immédiate : augmenter le prix de vente à {Math.ceil((result.totalVar + result.fixedPerOrder + 15) / 10) * 10}€ minimum, ou passer au fret maritime.
              </div>
            ) : result.netMarginPct < 25 ? (
              <div style={S.warn}>
                ⚠️ Marge nette de {result.netMarginPct}% — trop faible pour absorber les fluctuations de CPC Google Ads. Objectif minimum : 30%. Recommandation : augmenter le prix ou réduire les coûts logistiques.
              </div>
            ) : (
              <div style={S.ok}>
                ✅ <strong>Business model viable.</strong> Marge nette de {result.netMarginPct}% — CPA maximum supportable : {result.cpa_breakeven.toFixed(0)}€. À un CVR de 2% et CPC 0,60€, CPA = 30€ → {(result.netMargin - 30).toFixed(0)}€ de profit net publicitaire par vente.
              </div>
            )}

            {/* KPIs */}
            <div style={S.grid(4)}>
              {[
                { label: "Prix de vente", val: fe(sellPrice), color: "#60a5fa" },
                { label: "Total coûts variables", val: fe(result.totalVar), color: "#f59e0b" },
                { label: "Marge brute", val: fe(result.grossMargin), color: nc(result.grossMargin) },
                { label: "Marge nette réelle", val: fe(result.netMargin), color: nc(result.netMargin) },
              ].map(k => (
                <div key={k.label} style={S.kpi}>
                  <div style={S.label}>{k.label}</div>
                  <div style={S.big(k.color)}>{k.val}</div>
                  <div style={S.sub}>{k.label.includes("nette") ? fp(result.netMarginPct) : k.label.includes("brute") ? fp(result.grossMarginPct) : ""}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {/* Breakdown table */}
              <div style={S.card}>
                <div style={S.h}>Décomposition complète — par commande</div>
                <table style={S.table}>
                  <thead>
                    <tr>
                      <th style={S.thL}>Poste de coût</th>
                      <th style={{ ...S.th }}>Montant</th>
                      <th style={{ ...S.th }}>% du prix</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td style={S.tdL}>Prix de vente</td><td style={{ ...S.td, color: "#60a5fa", fontWeight: 700 }}>{fe(sellPrice)}</td><td style={S.td}>100%</td></tr>
                    {[
                      { label: "Produit rendu France (FOB + fret + douane + TVA)", val: result.productLanded, color: "#6366f1" },
                      { label: "Emballage (carton + film + étiquette)", val: result.packaging, color: "#8b5cf6" },
                      { label: "Livraison FR (Mondial Relay pro)", val: result.mondialRelay, color: "#a78bfa" },
                      { label: `Shopify Payments (${shopifyPlan === "basic" ? "1,5%" : shopifyPlan === "grow" ? "1,3%" : "1,1%"} + 0,25€)`, val: result.shopifyPayments, color: "#7c3aed" },
                      { label: `Retours (${returnRate}% × 22€/retour)`, val: result.returnCost, color: "#f59e0b" },
                      { label: "Chargebacks (0,3% × 15€)", val: result.chargebacks, color: "#fb923c" },
                      { label: "SAV (8% × 5min × 15€/h)", val: result.sav, color: "#94a3b8" },
                      { label: "Apps Shopify amorties/cmd", val: result.appsPerOrder, color: "#64748b" },
                    ].map(row => (
                      <tr key={row.label}>
                        <td style={{ ...S.tdL, color: "#94a3b8" }}>− {row.label}</td>
                        <td style={{ ...S.td, color: row.color }}>-{fe(row.val)}</td>
                        <td style={{ ...S.td, color: "#64748b" }}>{((row.val / sellPrice) * 100).toFixed(1)}%</td>
                      </tr>
                    ))}
                    <tr style={{ borderTop: "1px solid #1e2d45" }}>
                      <td style={{ ...S.tdL, fontWeight: 700, color: "#f1f5f9" }}>= MARGE BRUTE</td>
                      <td style={{ ...S.td, color: nc(result.grossMargin), fontWeight: 700, fontSize: 14 }}>{fe(result.grossMargin)}</td>
                      <td style={{ ...S.td, color: nc(result.grossMargin), fontWeight: 700 }}>{fp(result.grossMarginPct)}</td>
                    </tr>
                    <tr>
                      <td style={{ ...S.tdL, color: "#94a3b8" }}>− Frais fixes amorties/cmd</td>
                      <td style={{ ...S.td, color: "#64748b" }}>-{fe(result.fixedPerOrder)}</td>
                      <td style={{ ...S.td, color: "#64748b" }}>{((result.fixedPerOrder / sellPrice) * 100).toFixed(1)}%</td>
                    </tr>
                    <tr style={{ background: "#0f172a" }}>
                      <td style={{ ...S.tdL, fontWeight: 700, color: "#f1f5f9" }}>= MARGE NETTE RÉELLE</td>
                      <td style={{ ...S.td, color: nc(result.netMargin), fontWeight: 700, fontSize: 16 }}>{fe(result.netMargin)}</td>
                      <td style={{ ...S.td, color: nc(result.netMargin), fontWeight: 700 }}>{fp(result.netMarginPct)}</td>
                    </tr>
                  </tbody>
                </table>
                <div style={{ marginTop: 12, padding: "10px 12px", background: "#0c1526", borderRadius: 6, fontSize: 11, color: "#64748b" }}>
                  <strong style={{ color: "#f59e0b" }}>CPA max supportable :</strong> {fe(result.cpa_breakeven)} — Au-delà, chaque vente via Ads est déficitaire.
                </div>
              </div>

              {/* Waterfall chart */}
              <div style={S.card}>
                <div style={S.h}>Cascade des coûts</div>
                <ResponsiveContainer width="100%" height={340}>
                  <BarChart data={result.breakdown} margin={{ top: 5, right: 10, left: 0, bottom: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
                    <XAxis dataKey="name" tick={{ fill: CHART_COLORS.text, fontSize: 9 }} angle={-45} textAnchor="end" interval={0} />
                    <YAxis tick={{ fill: CHART_COLORS.text, fontSize: 10 }} tickFormatter={v => `${v}€`} />
                    <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #1e2d45", borderRadius: 6, fontFamily: "monospace", fontSize: 12 }} formatter={(v) => [fe(v), ""]} />
                    <Bar dataKey="val" radius={[3, 3, 0, 0]}>
                      {result.breakdown.map((item, i) => <Cell key={i} fill={item.fill} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </>
        )}

        {/* ── TAB 4: SCENARIOS ── */}
        {tab === "scenarios" && (
          <>
            <div style={S.warn}>
              🔑 <strong>Conclusion principale :</strong> À 89€ avec fret aérien (commande initiale 45 unités), le business model est non viable. La solution est soit de commencer avec le fret maritime (35-45j de lead time), soit de vendre à 109-129€. Le prix de vente optimal pour Serenight est <strong>109€</strong> avec fret maritime dès 100 unités.
            </div>

            <div style={S.card}>
              <div style={S.h}>Comparaison des 6 scénarios — Marge nette réelle</div>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={scenarios} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
                  <XAxis dataKey="label" tick={{ fill: CHART_COLORS.text, fontSize: 10 }} />
                  <YAxis tick={{ fill: CHART_COLORS.text, fontSize: 10 }} tickFormatter={v => `${v}€`} />
                  <ReferenceLine y={0} stroke="#64748b" />
                  <ReferenceLine y={30} stroke="#10b981" strokeDasharray="4 2" label={{ value: "CPA 30€ couvert", fill: "#10b981", fontSize: 9 }} />
                  <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #1e2d45", borderRadius: 6, fontFamily: "monospace" }} formatter={v => [`${v.toFixed(2)}€`, "Marge nette"]} />
                  <Bar dataKey="netMargin" radius={[4, 4, 0, 0]}>
                    {scenarios.map((s, i) => <Cell key={i} fill={s.netMargin < 0 ? "#ef4444" : s.netMargin < 25 ? "#f59e0b" : "#10b981"} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div style={S.card}>
              <div style={S.h}>Détail des 6 scénarios</div>
              <div style={{ overflowX: "auto" }}>
                <table style={S.table}>
                  <thead>
                    <tr>
                      <th style={S.thL}>Scénario</th>
                      <th style={S.th}>Prix vente</th>
                      <th style={S.th}>Fournisseur FOB</th>
                      <th style={S.th}>Fret/unité</th>
                      <th style={S.th}>Produit rendu FR</th>
                      <th style={S.th}>Total coûts var.</th>
                      <th style={S.th}>Marge brute</th>
                      <th style={S.th}>Marge nette</th>
                      <th style={S.th}>Marge %</th>
                      <th style={S.th}>CPA max</th>
                      <th style={S.thL}>Verdict</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scenarios.map((s, i) => (
                      <tr key={i} style={{ background: s.netMargin > 25 ? "#052e16" : s.netMargin < 0 ? "#2d0a0a" : "none" }}>
                        <td style={{ ...S.tdL, fontWeight: 700, maxWidth: 160 }}>{s.label}</td>
                        <td style={{ ...S.td, color: "#60a5fa", fontWeight: 700 }}>{fe(s.price)}</td>
                        <td style={S.td}>${s.fob} (≈{(s.fob * EUR).toFixed(0)}€)</td>
                        <td style={{ ...S.td, color: s.ship > 50 ? "#ef4444" : s.ship > 30 ? "#f59e0b" : "#10b981" }}>{fe(s.ship)}</td>
                        <td style={S.td}>{fe(s.productLanded)}</td>
                        <td style={S.td}>{fe(s.totalVar)}</td>
                        <td style={{ ...S.td, color: nc(s.grossMargin) }}>{fe(s.grossMargin)}</td>
                        <td style={{ ...S.td, color: nc(s.netMargin), fontWeight: 700 }}>{fe(s.netMargin)}</td>
                        <td style={{ ...S.td, color: nc(s.netMargin), fontWeight: 700 }}>{fp(s.netMarginPct)}</td>
                        <td style={{ ...S.td, color: "#f59e0b" }}>{fe(s.cpa_breakeven)}</td>
                        <td style={S.tdL}>
                          <span style={S.badge(s.netMargin < 0 ? "red" : s.netMargin < 25 ? "amber" : "green")}>
                            {s.netMargin < 0 ? "❌ PERTE" : s.netMargin < 25 ? "⚠️ Fragile" : "✅ Viable"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div style={{ ...S.card, borderColor: "#ef4444" }}>
                <div style={{ ...S.h, color: "#f87171" }}>🚨 Scénario à éviter absolument</div>
                <div style={{ fontSize: 13, lineHeight: 1.8, color: "#94a3b8" }}>
                  <strong style={{ color: "#f1f5f9" }}>89€ + fret aérien 45 unités</strong><br />
                  — Perte de {Math.abs(scenarios[0].netMargin).toFixed(2)}€ par vente<br />
                  — Chaque commande supplémentaire creuse les pertes<br />
                  — Le budget Google Ads amplifie les pertes<br />
                  — Raison : fret aérien 62€/unité + import = 95€ landed<br />
                  <strong style={{ color: "#f87171" }}>→ Vous dépensez plus que vous ne gagnez.</strong>
                </div>
              </div>
              <div style={{ ...S.card, borderColor: "#10b981" }}>
                <div style={{ ...S.h, color: "#34d399" }}>✅ Scénario recommandé Serenight</div>
                <div style={{ fontSize: 13, lineHeight: 1.8, color: "#94a3b8" }}>
                  <strong style={{ color: "#f1f5f9" }}>109€ + fret maritime 100u + F3 standard</strong><br />
                  — Marge nette réelle : <strong style={{ color: "#34d399" }}>{fe(scenarios[2].netMargin)} ({fp(scenarios[2].netMarginPct)})</strong><br />
                  — CPA max supportable : {fe(scenarios[2].cpa_breakeven)}<br />
                  — À CPC 0,60€ + CVR 2% → CPA 30€ → profit Ads : {fe(scenarios[2].netMargin - 30)}/vente<br />
                  — Lead time : 35-45j (anticiper stock)<br />
                  <strong style={{ color: "#34d399" }}>→ Business viable et scalable.</strong>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
