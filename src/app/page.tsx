"use client";

import dynamic from "next/dynamic";
import {
  Container,
  Section,
  Title,
  Text,
  Button,
  Columns,
  Column,
  Card,
  CardContent,
  CardImage,
  Box,
  Link,
  Divider,
  Icon,
  IconName,
} from "@trilogy-ds/react";
import "./responsive.css";

// Import dynamique pour l'Accordion (évite erreur hydratation)
const Accordion = dynamic(
  () => import("@trilogy-ds/react").then((mod) => mod.Accordion),
  { ssr: false }
);
const AccordionItem = dynamic(
  () => import("@trilogy-ds/react").then((mod) => mod.AccordionItem),
  { ssr: false }
);
const AccordionHeader = dynamic(
  () => import("@trilogy-ds/react").then((mod) => mod.AccordionHeader),
  { ssr: false }
);
const AccordionBody = dynamic(
  () => import("@trilogy-ds/react").then((mod) => mod.AccordionBody),
  { ssr: false }
);

export default function ReparationPage() {
  // Style pour centrer et limiter la largeur du contenu
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1.5rem",
  };

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="hero-section" style={{
        backgroundColor: "#25465F",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center"
      }}>
        <div className="hero-container" style={{
          width: "100%",
          maxWidth: "1440px",
          display: "flex",
          alignItems: "center",
          gap: "57px",
          padding: "32px 160px",
          boxSizing: "border-box"
        }}>
          {/* Partie texte */}
          <div className="hero-text" style={{
            width: "515px",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}>
            <h1 style={{
              color: "#FFFFFF",
              fontSize: "38px",
              lineHeight: "46px",
              fontWeight: 700,
              fontStyle: "italic",
              letterSpacing: "0px",
              marginBottom: "1.5rem",
              marginTop: 0
            }}>
              Réparation de votre téléphone
            </h1>
            <Text style={{
              color: "#FFFFFF",
              fontSize: "16px",
              lineHeight: "20px",
              fontWeight: 400,
              letterSpacing: "0"
            }}>
              Un smartphone cassé ou en panne, ça arrive à tout le monde.
            </Text>
            <Text style={{
              color: "#FFFFFF",
              fontSize: "16px",
              lineHeight: "20px",
              fontWeight: 400,
              letterSpacing: "0",
              marginTop: "1rem"
            }}>
              Heureusement, que vous soyez sous garantie ou non,<br />
              on a des{" "}
              <a href="#" style={{
                color: "#FFFFFF",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "16px",
                lineHeight: "20px"
              }}>
                solutions de réparation
              </a>{" "}
              pour vous !
            </Text>
          </div>
          {/* Partie image */}
          <div className="hero-image" style={{
            width: "548px",
            height: "340px",
            flexShrink: 0
          }}>
            <img
              src="/hero-phone.png"
              alt="Téléphone cassé"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "8px"
              }}
            />
          </div>
        </div>
      </section>

      {/* ========== ONGLETS NAVIGATION ========== */}
      <section className="hide-mobile" style={{
        backgroundColor: "#fff",
        borderBottom: "1px solid #e0e0e0",
        display: "flex",
        justifyContent: "center"
      }}>
        <div className="nav-tabs" style={{
          width: "100%",
          maxWidth: "1440px",
          padding: "16px 45px 4px 45px",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px"
        }}>
          <a
            href="#"
            style={{
              color: "#1a3a4f",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "18px",
              letterSpacing: "0",
              textAlign: "center",
              textDecoration: "none",
              borderBottom: "3px solid #1a3a4f",
              paddingBottom: "0.5rem"
            }}
          >
            WeFix
          </a>
          <a href="#" style={{
            color: "#666",
            textDecoration: "none",
            fontSize: "14px",
            lineHeight: "18px",
            fontWeight: 400,
            letterSpacing: "0",
            textAlign: "center"
          }}>
            Réparation express en boutique
          </a>
          <a href="#" style={{
            color: "#666",
            textDecoration: "none",
            fontSize: "14px",
            lineHeight: "18px",
            fontWeight: 400,
            letterSpacing: "0",
            textAlign: "center"
          }}>
            Avec l&apos;espace client
          </a>
          <a href="#" style={{
            color: "#666",
            textDecoration: "none",
            fontSize: "14px",
            lineHeight: "18px",
            fontWeight: 400,
            letterSpacing: "0",
            textAlign: "center"
          }}>
            Forfaits
          </a>
          <a href="#" style={{
            color: "#666",
            textDecoration: "none",
            fontSize: "14px",
            lineHeight: "18px",
            fontWeight: 400,
            letterSpacing: "0",
            textAlign: "center"
          }}>
            L&apos;assurance
          </a>
          <a href="#" style={{
            color: "#666",
            textDecoration: "none",
            fontSize: "14px",
            lineHeight: "18px",
            fontWeight: 400,
            letterSpacing: "0",
            textAlign: "center"
          }}>
            Une question ?
          </a>
        </div>
      </section>

      {/* ========== SECTION WEFIX ========== */}
      <section className="wefix-section" style={{ backgroundColor: "#f5f5f5", padding: "4rem 0" }}>
        <div style={containerStyle}>
          <h2 style={{
            textAlign: "center",
            color: "#25465F",
            fontSize: "34px",
            lineHeight: "42px",
            fontWeight: 700,
            letterSpacing: "0px",
            marginBottom: "3rem",
            marginTop: 0,
            maxWidth: "1120px",
            margin: "0 auto 3rem auto"
          }}>
            Le choix d&apos;un partenaire expert pour votre téléphone
          </h2>
          <Columns verticalAlign="ALIGNED_CENTER">
            <Column size={5}>
              <img
                src="/wefix.png"
                alt="WeFix"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Column>
            <Column size={7}>
              <div style={{
                paddingLeft: "2rem",
                width: "521px",
                minHeight: "170px",
                display: "flex",
                flexDirection: "column",
                gap: "40px"
              }}>
                <h3 style={{
                  color: "#25465F",
                  fontSize: "16px",
                  lineHeight: "20px",
                  fontWeight: 600,
                  letterSpacing: "0",
                  margin: 0
                }}>
                  WeFix, filiale de Fnac Darty, est le leader français de la réparation de smartphones
                </h3>
                <Text style={{ color: "#333", lineHeight: "1.7", margin: 0 }}>
                  Quelle que soit la réparation, WeFix a la solution : écran, batterie,
                  WiFi, haut-parleur, écouteurs, appareil photo, connecteur de charge,
                  avec des pièces compatibles.
                </Text>
                <a href="#" style={{
                  color: "#0C7B91",
                  textDecoration: "underline",
                  fontWeight: 500
                }}>
                  Visiter WeFix
                </a>
              </div>
            </Column>
          </Columns>
        </div>
      </section>

      {/* ========== SECTION RÉPARATION EXPRESS (BLEU FONCÉ) ========== */}
      <section style={{ backgroundColor: "#1a3a4f", padding: "4rem 0" }}>
        <div style={{ ...containerStyle, textAlign: "center" }}>
          {/* Icône en haut */}
          <Icon name={"tri-tools" as IconName} size="large" style={{ color: "#5bc500" }} />

          <h2 style={{
            color: "#FFFFFF",
            marginTop: "1rem",
            fontSize: "34px",
            lineHeight: "42px",
            fontWeight: 700,
            fontStyle: "italic",
            letterSpacing: "0px",
            textAlign: "center",
            maxWidth: "1120px",
            margin: "1rem auto 0 auto"
          }}>
            Bénéficiez du service<br />de réparation express en boutique*
          </h2>

          <Button
            variant="PRIMARY"
            style={{
              marginTop: "1.5rem",
              backgroundColor: "#0a6e7c",
              borderColor: "#0a6e7c"
            }}
          >
            Trouver ma boutique
          </Button>

          {/* Box avec bordure et titre qui chevauche */}
          <div style={{
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "8px",
            marginTop: "3rem",
            padding: "3rem 2rem 2rem",
            position: "relative"
          }}>
            {/* Titre qui chevauche la bordure */}
            <div style={{
              position: "absolute",
              top: "-14px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#1a3a4f",
              padding: "0 1.5rem",
              whiteSpace: "nowrap"
            }}>
              <span style={{
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: "24px",
                lineHeight: "29px",
                letterSpacing: "0px",
                textAlign: "center"
              }}>
                Avec Bouygues Telecom, la réparation c&apos;est...
              </span>
            </div>

            {/* 4 colonnes avec icônes - Carousel sur mobile */}
            <div className="carousel-container">
              <div className="carousel-items">
                <div className="carousel-item">
                  <Icon name={"tri-users" as IconName} size="medium" style={{ color: "#5bc500" }} />
                  <h5 style={{
                    marginTop: "1rem",
                    color: "#FFFFFF",
                    fontSize: "22px",
                    lineHeight: "27px",
                    fontWeight: 600,
                    letterSpacing: "0px",
                    textAlign: "center",
                    marginBottom: 0
                  }}>Ouvert à tous</h5>
                  <p style={{
                    color: "#FFFFFF",
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: 400,
                    letterSpacing: "0",
                    textAlign: "center",
                    marginTop: "0.5rem",
                    marginBottom: 0
                  }}>
                    Que vous soyez client Bouygues Telecom ou non !
                  </p>
                </div>
                <div className="carousel-item">
                  <Icon name={"tri-france" as IconName} size="medium" style={{ color: "#5bc500" }} />
                  <h5 style={{
                    marginTop: "1rem",
                    color: "#FFFFFF",
                    fontSize: "22px",
                    lineHeight: "27px",
                    fontWeight: 600,
                    letterSpacing: "0px",
                    textAlign: "center",
                    marginBottom: 0
                  }}>Partout en France</h5>
                  <p style={{
                    color: "#FFFFFF",
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: 400,
                    letterSpacing: "0",
                    textAlign: "center",
                    marginTop: "0.5rem",
                    marginBottom: 0
                  }}>
                    Le service est accessible dans toutes nos boutiques
                  </p>
                </div>
                <div className="carousel-item">
                  <Icon name={"tri-calendar" as IconName} size="medium" style={{ color: "#5bc500" }} />
                  <h5 style={{
                    marginTop: "1rem",
                    color: "#FFFFFF",
                    fontSize: "22px",
                    lineHeight: "27px",
                    fontWeight: 600,
                    letterSpacing: "0px",
                    textAlign: "center",
                    marginBottom: 0
                  }}>Express</h5>
                  <p style={{
                    color: "#FFFFFF",
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: 400,
                    letterSpacing: "0",
                    textAlign: "center",
                    marginTop: "0.5rem",
                    marginBottom: 0
                  }}>
                    Entre 1 et 5 jours, et pour près d&apos;un client sur 2, la réparation est réalisée en 24h !
                  </p>
                </div>
                <div className="carousel-item">
                  <Icon name={"tri-mobile-tools" as IconName} size="medium" style={{ color: "#5bc500" }} />
                  <h5 style={{
                    marginTop: "1rem",
                    color: "#FFFFFF",
                    fontSize: "22px",
                    lineHeight: "27px",
                    fontWeight: 600,
                    letterSpacing: "0px",
                    textAlign: "center",
                    marginBottom: 0
                  }}>Garantie de qualité</h5>
                  <p style={{
                    color: "#FFFFFF",
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: 400,
                    letterSpacing: "0",
                    textAlign: "center",
                    marginTop: "0.5rem",
                    marginBottom: 0
                  }}>
                    Réparation réalisée par notre partenaire WiFix et garantie 1 an (i)
                  </p>
                </div>
              </div>
              <div className="carousel-dots">
                <span className="carousel-dot active"></span>
                <span className="carousel-dot"></span>
                <span className="carousel-dot"></span>
                <span className="carousel-dot"></span>
              </div>
            </div>
          </div>

          <p style={{
            color: "#FFFFFF",
            marginTop: "1.5rem",
            fontSize: "10px",
            lineHeight: "12px",
            fontWeight: 500,
            letterSpacing: "0",
            textAlign: "center",
            maxWidth: "1120px",
            margin: "1.5rem auto 0 auto"
          }}>
            * Retrouvez les conditions et informations détaillées du service de réparation dans la FAQ accessible en bas de page. Kit-mains libre recommandé.
          </p>
        </div>
      </section>

      {/* ========== SECTION AVANTAGES CLIENT ========== */}
      <section style={{
        backgroundColor: "#F4F4F4",
        display: "flex",
        justifyContent: "center"
      }}>
        <div className="section-container" style={{
          width: "100%",
          maxWidth: "1440px",
          padding: "56px 160px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "44px"
        }}>
          <h2 className="section-title" style={{
            textAlign: "center",
            color: "#25465F",
            fontSize: "38px",
            lineHeight: "46px",
            fontWeight: 700,
            fontStyle: "italic",
            letterSpacing: "0px",
            maxWidth: "1120px",
            margin: 0
          }}>
            Et encore plus d&apos;avantages si vous êtes client<br />
            Bouygues Telecom !
          </h2>
          {/* Cartes empilées sur mobile */}
          <div className="cards-row" style={{ display: "flex", gap: "24px", justifyContent: "center" }}>
            {/* Carte 1 */}
            <div className="card-third" style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              padding: "24px",
              boxShadow: "0 0 8px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              textAlign: "center"
            }}>
              <Icon name={"tri-sun-euro" as IconName} size="medium" style={{ color: "#1a3a4f" }} />
              <h4 style={{
                color: "#25465F",
                fontSize: "22px",
                lineHeight: "27px",
                fontWeight: 600,
                letterSpacing: "0px",
                textAlign: "center",
                margin: 0,
                maxWidth: "330px"
              }}>
                -30% de remise* valables sur toutes les réparations
              </h4>
              <p style={{
                color: "#666",
                fontSize: "16px",
                lineHeight: "20px",
                fontWeight: 400,
                letterSpacing: "0",
                textAlign: "center",
                margin: 0,
                maxWidth: "330px"
              }}>
                soit 20% de réduction sur toutes les réparations effectuées dans le réseau WeFix et dans nos boutiques
              </p>
            </div>
            {/* Carte 2 */}
            <div className="card-third" style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              padding: "24px",
              boxShadow: "0 0 8px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              textAlign: "center"
            }}>
              <Icon name={"tri-mobile" as IconName} size="medium" style={{ color: "#1a3a4f" }} />
              <h4 style={{
                color: "#25465F",
                fontSize: "22px",
                lineHeight: "27px",
                fontWeight: 600,
                letterSpacing: "0px",
                textAlign: "center",
                margin: 0,
                maxWidth: "330px"
              }}>
                On vous prête un smartphone
              </h4>
              <p style={{
                color: "#666",
                fontSize: "16px",
                lineHeight: "20px",
                fontWeight: 400,
                letterSpacing: "0",
                textAlign: "center",
                margin: 0,
                maxWidth: "330px"
              }}>
                le temps de la réparation (i)
              </p>
            </div>
            {/* Carte 3 */}
            <div className="card-third" style={{
              backgroundColor: "#E4EAED",
              borderRadius: "8px",
              padding: "24px",
              boxShadow: "0 0 8px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              textAlign: "center"
            }}>
              <Icon name={"tri-users" as IconName} size="medium" style={{ color: "#1a3a4f" }} />
              <h4 style={{
                color: "#25465F",
                fontSize: "22px",
                lineHeight: "27px",
                fontWeight: 600,
                letterSpacing: "0px",
                textAlign: "center",
                margin: 0,
                maxWidth: "330px"
              }}>
                Faites profiter de la remise de 30% à un proche
              </h4>
              <p style={{
                color: "#666",
                fontSize: "16px",
                lineHeight: "20px",
                fontWeight: 400,
                letterSpacing: "0",
                textAlign: "center",
                margin: 0,
                maxWidth: "330px"
              }}>
                que le téléphone ait été acheté chez Bouygues Telecom ou ailleurs !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION FORFAITS (BLEU FONCÉ) ========== */}
      <section style={{
        backgroundColor: "#E4EAED",
        display: "flex",
        justifyContent: "center"
      }}>
        <div className="section-container" style={{
          width: "100%",
          maxWidth: "1440px",
          minHeight: "552px",
          padding: "56px 160px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "44px"
        }}>
          <h2 className="section-title" style={{
            textAlign: "center",
            color: "#25465F",
            fontSize: "38px",
            lineHeight: "46px",
            fontWeight: 700,
            fontStyle: "italic",
            letterSpacing: "0px",
            maxWidth: "1120px",
            margin: 0
          }}>
            Nos forfaits, pour vous
          </h2>
          <div className="cards-row" style={{ display: "flex", gap: "24px", justifyContent: "center" }}>
            {/* Carte 1 */}
            <div className="card-half" style={{
              width: "432.5px",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              padding: "32px",
              boxShadow: "0 0 8px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "32px",
              textAlign: "center"
            }}>
              <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}>
                <Icon name={"tri-sim-card" as IconName} size="large" style={{ color: "#1a3a4f" }} />
                <Icon name={"tri-mobile" as IconName} size="large" style={{ color: "#1a3a4f" }} />
              </div>
              <h4 style={{
                color: "#25465F",
                fontSize: "22px",
                lineHeight: "27px",
                fontWeight: 600,
                letterSpacing: "0px",
                textAlign: "center",
                margin: 0,
                maxWidth: "368.5px"
              }}>
                Découvrir nos forfaits Bouygues Telecom
              </h4>
              <Text style={{ color: "#666", margin: 0, flex: 1 }}>
                Bénéficiez d&apos;un réseau mobile de qualité, d&apos;avantages exclusifs et d&apos;un service client premium
              </Text>
              <div style={{ marginTop: "auto" }}>
                <Button variant="CONVERSION">En profiter</Button>
              </div>
            </div>
            {/* Carte 2 */}
            <div className="card-half" style={{
              width: "432.5px",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              padding: "32px",
              boxShadow: "0 0 8px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "32px",
              textAlign: "center"
            }}>
              <Icon name={"tri-sim-card" as IconName} size="large" style={{ color: "#1a3a4f" }} />
              <h4 style={{
                color: "#25465F",
                fontSize: "22px",
                lineHeight: "27px",
                fontWeight: 600,
                letterSpacing: "0px",
                textAlign: "center",
                margin: 0,
                maxWidth: "368.5px"
              }}>
                Découvrir nos forfaits B&YOU sans engagement
              </h4>
              <Text style={{ color: "#666", margin: 0, flex: 1 }}>
                Profitez de la qualité de notre réseau avec nos forfaits B&YOU sans engagement
              </Text>
              <div style={{ marginTop: "auto" }}>
                <Button variant="CONVERSION">En profiter</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION GARANTIE ========== */}
      <section style={{
        backgroundColor: "#0C7B91",
        display: "flex",
        justifyContent: "center"
      }}>
        <div className="section-container" style={{
          width: "100%",
          maxWidth: "1440px",
          padding: "56px 160px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "44px"
        }}>
          <h2 className="section-title" style={{
            textAlign: "center",
            color: "#FFFFFF",
            fontSize: "38px",
            lineHeight: "46px",
            fontWeight: 700,
            fontStyle: "italic",
            letterSpacing: "0px",
            maxWidth: "1120px",
            margin: 0
          }}>
            Quel que soit le problème, nous avons la solution
          </h2>
          <div className="cards-row" style={{ display: "flex", gap: "24px", justifyContent: "center", width: "100%" }}>
            {/* Carte 1 - Hors garantie */}
            <div className="card-half" style={{
              flex: 1,
              maxWidth: "548px",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              padding: "32px",
              boxShadow: "0 0 8px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "16px"
            }}>
              <Icon name={"tri-mobile-broken" as IconName} size="medium" />
              <h4 style={{
                color: "#25465F",
                fontSize: "22px",
                lineHeight: "27px",
                fontWeight: 600,
                letterSpacing: "0px",
                margin: 0
              }}>
                Mon téléphone n&apos;est plus sous garantie
              </h4>
              <p style={{
                color: "#25465F",
                fontSize: "16px",
                lineHeight: "20px",
                fontWeight: 400,
                letterSpacing: "0",
                margin: 0
              }}>
                Si le téléphone que nous vous avons vendu n&apos;est plus garanti et n&apos;est pas assuré ou si vous n&apos;avez pas acheté votre téléphone chez nous, vous pouvez bénéficier d&apos;une <strong>réparation en boutique</strong>, et <strong>à prix réduit</strong> si vous détenez un forfait Bouygues Telecom.
              </p>
              <a href="#" style={{
                color: "#0F7587",
                fontSize: "16px",
                lineHeight: "20px",
                fontWeight: 500,
                textDecoration: "none",
                marginTop: "8px"
              }}>
                Trouver ma boutique
              </a>
            </div>
            {/* Carte 2 - Sous garantie */}
            <div className="card-half" style={{
              flex: 1,
              maxWidth: "548px",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              padding: "32px",
              boxShadow: "0 0 8px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "16px"
            }}>
              <Icon name={"tri-hand-mobile" as IconName} size="medium" />
              <h4 style={{
                color: "#25465F",
                fontSize: "22px",
                lineHeight: "27px",
                fontWeight: 600,
                letterSpacing: "0px",
                margin: 0
              }}>
                Mon téléphone est sous garantie
              </h4>
              <p style={{
                color: "#25465F",
                fontSize: "16px",
                lineHeight: "20px",
                fontWeight: 400,
                letterSpacing: "0",
                margin: 0
              }}>
                <a href="#" style={{ color: "#0F7587", textDecoration: "underline" }}>Tous nos téléphones</a> sont <strong>garantis 2 ans</strong>. Si vos téléphone tombe en panne pendant ce délais et qu&apos;il s&apos;agit d&apos;un défaut couvert par les garanties légales (par exemple, un défaut de fabrication), <strong>sa réparation est prise en charge gratuitement</strong> par Bouygues Telecom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION ASSURANCE ========== */}
      <section style={{
        backgroundColor: "#F4F4F4",
        display: "flex",
        justifyContent: "center"
      }}>
        <div className="section-container" style={{
          width: "100%",
          maxWidth: "1440px",
          padding: "56px 160px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "44px"
        }}>
          <h2 className="section-title" style={{
            textAlign: "center",
            color: "#25465F",
            fontSize: "38px",
            lineHeight: "46px",
            fontWeight: 700,
            fontStyle: "italic",
            letterSpacing: "0px",
            maxWidth: "1120px",
            margin: 0
          }}>
            L&apos;assurance, la formule tout confort pour votre mobile
          </h2>
          <div className="two-column" style={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
            width: "100%"
          }}>
            {/* Image */}
            <div className="hide-mobile" style={{ flex: "0 0 auto", width: "676px", height: "324px" }}>
              <img src="/assurance.jpg" alt="Assurance" style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px"
              }} />
            </div>
            {/* Content - Cards container */}
            <div style={{
              width: "420px",
              display: "flex",
              flexDirection: "column",
              gap: "24px"
            }}>
              {/* Card 1 */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
                width: "100%",
                backgroundColor: "#FFFFFF",
                padding: "24px",
                borderRadius: "8px",
                boxSizing: "border-box"
              }}>
                <Icon name={"tri-sun-euro" as IconName} size="medium" />
                <h5 style={{
                  color: "#25465F",
                  fontSize: "18px",
                  lineHeight: "22px",
                  fontWeight: 600,
                  margin: 0
                }}>Aucune dépense</h5>
                <p style={{
                  color: "#25465F",
                  fontSize: "16px",
                  lineHeight: "20px",
                  margin: 0
                }}>à débourser en cas d&apos;incident</p>
              </div>
              {/* Card 2 */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
                width: "100%",
                backgroundColor: "#FFFFFF",
                padding: "24px",
                borderRadius: "8px",
                boxSizing: "border-box"
              }}>
                <Icon name={"tri-hand-mobile" as IconName} size="medium" />
                <h5 style={{
                  color: "#25465F",
                  fontSize: "18px",
                  lineHeight: "22px",
                  fontWeight: 600,
                  margin: 0
                }}>Téléphone assuré</h5>
                <p style={{
                  color: "#25465F",
                  fontSize: "16px",
                  lineHeight: "20px",
                  margin: 0
                }}>en cas de vol, casse, dommages ou oxydation</p>
              </div>
            </div>
          </div>
          {/* Button */}
          <button style={{
            backgroundColor: "#0C7891",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "4px",
            padding: "0 16px",
            height: "44px",
            fontSize: "16px",
            fontWeight: 600,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px"
          }}>
            L&apos;assurance en détail
          </button>
        </div>
      </section>

      {/* ========== SECTION ENVIRONNEMENT (TEAL) ========== */}
      <section style={{
        backgroundColor: "#25465F",
        display: "flex",
        justifyContent: "center"
      }}>
        <div className="section-container" style={{
          width: "100%",
          maxWidth: "1440px",
          padding: "56px 160px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "44px",
          textAlign: "center"
        }}>
          {/* Icon */}
          <div style={{ color: "#5bc500" }}>
            <Icon name={"tri-mobile" as IconName} size="large" style={{ color: "#5bc500" }} />
          </div>

          {/* Title */}
          <h2 className="section-title" style={{
            color: "#FFFFFF",
            fontSize: "38px",
            lineHeight: "46px",
            fontWeight: 700,
            fontStyle: "italic",
            letterSpacing: "0px",
            margin: 0,
            maxWidth: "1120px"
          }}>
            Réparer son téléphone, c&apos;est aussi un geste<br />pour l&apos;environnement
          </h2>

          {/* Subtitle */}
          <p style={{
            color: "#FFFFFF",
            fontSize: "24px",
            lineHeight: "29px",
            fontWeight: 600,
            margin: 0,
            maxWidth: "1120px"
          }}>
            Prolonger la durée de vie d&apos;un an d&apos;un téléphone permettrait de réduire son empreinte carbone de 30% environ*
          </p>

          {/* Comment Box */}
          <div style={{
            width: "100%",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "8px",
            padding: "32px",
            position: "relative"
          }}>
            {/* Title floating on border */}
            <div style={{
              position: "absolute",
              top: "-14px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#25465F",
              padding: "0 16px"
            }}>
              <span style={{
                color: "#FFFFFF",
                fontSize: "24px",
                lineHeight: "29px",
                fontWeight: 600
              }}>Comment ?</span>
            </div>

            {/* Two columns */}
            <div className="env-columns" style={{
              display: "flex",
              justifyContent: "center",
              gap: "48px",
              marginTop: "24px"
            }}>
              {/* Column 1 - Environnement */}
              <div className="env-column" style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                maxWidth: "473px"
              }}>
                <Icon name={"tri-mobile" as IconName} size="medium" style={{ color: "#5bc500" }} />
                <h5 style={{
                  color: "#FFFFFF",
                  fontSize: "22px",
                  lineHeight: "27px",
                  fontWeight: 600,
                  margin: 0
                }}>Environnement</h5>
                <p style={{
                  color: "#FFFFFF",
                  fontSize: "14px",
                  lineHeight: "18px",
                  fontWeight: 400,
                  margin: 0,
                  textAlign: "center"
                }}>
                  En évitant la production d&apos;un nouveau mobile et ses conséquences sur l&apos;environnement.
                </p>
              </div>

              {/* Column 2 - Recyclage */}
              <div className="env-column" style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                maxWidth: "473px"
              }}>
                <Icon name={"tri-recycle" as IconName} size="medium" style={{ color: "#5bc500" }} />
                <h5 style={{
                  color: "#FFFFFF",
                  fontSize: "22px",
                  lineHeight: "27px",
                  fontWeight: 600,
                  margin: 0
                }}>Recyclage</h5>
                <p style={{
                  color: "#FFFFFF",
                  fontSize: "14px",
                  lineHeight: "18px",
                  fontWeight: 400,
                  margin: 0,
                  textAlign: "center"
                }}>
                  En permettant le <a href="#" style={{ color: "#FFFFFF", textDecoration: "underline" }}>recyclage</a> des pièces changées suite à la réparation de votre téléphone.
                </p>
              </div>
            </div>
          </div>

          {/* Source */}
          <p style={{
            color: "#FFFFFF",
            fontSize: "12px",
            lineHeight: "14px",
            margin: 0,
            opacity: 0.7
          }}>
            *Source : Green Alliance
          </p>
        </div>
      </section>

      {/* ========== SECTION DURABILITÉ ========== */}
      <section style={{
        backgroundColor: "#F4F4F4",
        display: "flex",
        justifyContent: "center"
      }}>
        <div className="section-container" style={{
          width: "100%",
          maxWidth: "1440px",
          padding: "56px 160px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "44px"
        }}>
          {/* Title */}
          <h2 className="section-title" style={{
            color: "#25465F",
            fontSize: "38px",
            lineHeight: "46px",
            fontWeight: 700,
            fontStyle: "italic",
            letterSpacing: "0px",
            margin: 0,
            textAlign: "center"
          }}>
            Ensemble, faisons durer nos smartphones plus longtemps
          </h2>

          {/* White Card */}
          <div className="two-column" style={{
            width: "100%",
            backgroundColor: "#FFFFFF",
            borderRadius: "8px",
            padding: "32px",
            display: "flex",
            alignItems: "center",
            gap: "40px"
          }}>
            {/* Image */}
            <div style={{ flex: "0 0 auto", width: "280px" }}>
              <img src="/durabilite.png" alt="Solutions Smartphone Durable" style={{ width: "100%" }} />
            </div>
            {/* Content */}
            <div style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "16px"
            }}>
              <h3 style={{
                color: "#25465F",
                fontSize: "22px",
                lineHeight: "27px",
                fontWeight: 600,
                margin: 0
              }}>
                Nos téléphones ont une place particulière dans notre quotidien, en nous accompagnant partout et tout le temps
              </h3>
              <p style={{
                color: "#25465F",
                fontSize: "16px",
                lineHeight: "20px",
                margin: 0
              }}>
                Alors pour s&apos;en séparer le plus tard possible, on lance les <strong>Solutions Smartphone Durable</strong> : 4 façons de prolonger la vie de nos mobiles tout en faisant un geste pour la planète.
              </p>
              <a href="#" style={{
                color: "#0C7B91",
                fontSize: "16px",
                fontWeight: 500,
                textDecoration: "underline",
                marginTop: "8px"
              }}>
                Découvrir nos solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION FAQ ========== */}
      <section style={{
        backgroundColor: "#FFFFFF",
        display: "flex",
        justifyContent: "center"
      }}>
        <div className="faq-layout section-container" style={{
          width: "100%",
          maxWidth: "1440px",
          padding: "56px 160px",
          boxSizing: "border-box",
          display: "flex",
          gap: "44px"
        }}>
          {/* Left - Title */}
          <div className="faq-title" style={{ flex: "0 0 auto", width: "528px" }}>
            <h2 className="section-title" style={{
              color: "#25465F",
              fontSize: "38px",
              lineHeight: "46px",
              fontWeight: 700,
              fontStyle: "italic",
              letterSpacing: "0px",
              margin: 0
            }}>
              Toutes vos questions sur la réparation de téléphone
            </h2>
          </div>
          {/* Right - Accordion */}
          <div style={{ flex: 1 }} className="faq-accordion">
            <Accordion>
              <AccordionItem id="q1">
                <AccordionHeader>
                  Comment faire réparer son téléphone chez Bouygues Telecom ?
                </AccordionHeader>
                <AccordionBody>
                  <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem id="q2">
                <AccordionHeader>
                  Quels types de réparations proposez-vous ?
                </AccordionHeader>
                <AccordionBody>
                  <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem id="q3">
                <AccordionHeader>
                  Combien de temps prend la réparation de mon téléphone ?
                </AccordionHeader>
                <AccordionBody>
                  <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem id="q4">
                <AccordionHeader>
                  La réparation est-elle garantie ?
                </AccordionHeader>
                <AccordionBody>
                  <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem id="q5">
                <AccordionHeader>
                  Quels sont les avantages de faire réparer mon téléphone chez Bouygues Telecom ?
                </AccordionHeader>
                <AccordionBody>
                  <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem id="q6">
                <AccordionHeader>
                  Quelles marques de téléphones sont réparables ?
                </AccordionHeader>
                <AccordionBody>
                  <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* ========== SECTION ASTUCES ========== */}
      <section style={{
        backgroundColor: "#F4F4F4",
        display: "flex",
        justifyContent: "center"
      }}>
        <div className="section-container" style={{
          width: "100%",
          maxWidth: "1440px",
          padding: "56px 160px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "44px"
        }}>
          <h2 className="section-title" style={{
            color: "#25465F",
            fontSize: "38px",
            lineHeight: "46px",
            fontWeight: 700,
            fontStyle: "italic",
            letterSpacing: "0px",
            margin: 0,
            textAlign: "center"
          }}>
            Nos astuces pour prendre soin de votre mobile
          </h2>
          {/* Cards container - Carousel on mobile */}
          <div className="astuces-carousel">
            <div className="astuces-carousel-items">
              {/* Card 1 */}
              <div className="astuces-carousel-card" style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 0 8px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column"
              }}>
                <img src="/astuce-1.jpg" alt="Astuce 1" style={{
                  width: "100%",
                  height: "218px",
                  objectFit: "cover",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px"
                }} />
                <div style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>
                  <h5 style={{
                    color: "#25465F",
                    fontSize: "18px",
                    lineHeight: "22px",
                    fontWeight: 600,
                    margin: 0
                  }}>Comment prolonger la vie de son smartphone ?</h5>
                  <a href="#" style={{
                    color: "#0C7B91",
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: 500,
                    textDecoration: "underline",
                    marginTop: "auto"
                  }}>Visiter WeFix</a>
                </div>
              </div>
              {/* Card 2 */}
              <div className="astuces-carousel-card" style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 0 8px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column"
              }}>
                <img src="/astuce-2.jpg" alt="Astuce 2" style={{
                  width: "100%",
                  height: "218px",
                  objectFit: "cover",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px"
                }} />
                <div style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>
                  <h5 style={{
                    color: "#25465F",
                    fontSize: "18px",
                    lineHeight: "22px",
                    fontWeight: 600,
                    margin: 0
                  }}>Comment protéger son smartphone de l&apos;oxydation ?</h5>
                  <a href="#" style={{
                    color: "#0C7B91",
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: 500,
                    textDecoration: "underline",
                    marginTop: "auto"
                  }}>Visiter WeFix</a>
                </div>
              </div>
              {/* Card 3 */}
              <div className="astuces-carousel-card" style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 0 8px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column"
              }}>
                <img src="/astuce-3.jpg" alt="Astuce 3" style={{
                  width: "100%",
                  height: "218px",
                  objectFit: "cover",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px"
                }} />
                <div style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>
                  <h5 style={{
                    color: "#25465F",
                    fontSize: "18px",
                    lineHeight: "22px",
                    fontWeight: 600,
                    margin: 0
                  }}>Les conseils à suivre avant d&apos;envoyer votre téléphone en réparation</h5>
                  <a href="#" style={{
                    color: "#0C7B91",
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: 500,
                    textDecoration: "underline",
                    marginTop: "auto"
                  }}>Visiter WeFix</a>
                </div>
              </div>
            </div>
            {/* Carousel dots - visible on mobile only */}
            <div className="astuces-carousel-dots">
              <span className="astuces-carousel-dot active"></span>
              <span className="astuces-carousel-dot"></span>
              <span className="astuces-carousel-dot"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}