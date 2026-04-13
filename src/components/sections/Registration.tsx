import { useEffect, useMemo } from "react";
import { Section } from "../Section";

const ZOHO_EMBED_DIV_ID =
  "zf_div_JK6jJvqrDWtr25TlB49gxM1Llnh7LfXXSJvNJXOt7so";

const ZOHO_FORM_IFRAME_SRC =
  "https://forms.zohopublic.com/stephenstephen1/form/AICLASS/formperma/JK6jJvqrDWtr25TlB49gxM1Llnh7LfXXSJvNJXOt7so?zf_rszfm=1";

function buildIframeSrcWithUtm(ifrmSrc: string): string {
  try {
    const w = window as Window & {
      ZFAdvLead?: {
        utmPNameArr: string[];
        isSameDomian?: boolean;
        utmcustPNameArr?: string[];
      };
      zfutm_zfAdvLead?: { zfautm_gC_enc: (name: string) => string | undefined };
      ZFLead?: { utmPNameArr: string[] };
      zfutm_zfLead?: { zfutm_gC_enc: (name: string) => string | undefined };
    };

    if (typeof w.ZFAdvLead !== "undefined" && typeof w.zfutm_zfAdvLead !== "undefined") {
      for (let prmIdx = 0; prmIdx < w.ZFAdvLead.utmPNameArr.length; prmIdx++) {
        let utmPm = w.ZFAdvLead.utmPNameArr[prmIdx];
        utmPm =
          w.ZFAdvLead.isSameDomian &&
          w.ZFAdvLead.utmcustPNameArr?.indexOf(utmPm) === -1
            ? "zf_" + utmPm
            : utmPm;
        const utmVal = w.zfutm_zfAdvLead.zfautm_gC_enc(
          w.ZFAdvLead.utmPNameArr[prmIdx]
        );
        if (typeof utmVal !== "undefined" && utmVal !== "") {
          ifrmSrc =
            ifrmSrc.indexOf("?") > 0
              ? ifrmSrc + "&" + utmPm + "=" + utmVal
              : ifrmSrc + "?" + utmPm + "=" + utmVal;
        }
      }
    }

    if (typeof w.ZFLead !== "undefined" && typeof w.zfutm_zfLead !== "undefined") {
      for (let prmIdx = 0; prmIdx < w.ZFLead.utmPNameArr.length; prmIdx++) {
        const utmPm = w.ZFLead.utmPNameArr[prmIdx];
        const utmVal = w.zfutm_zfLead.zfutm_gC_enc(w.ZFLead.utmPNameArr[prmIdx]);
        if (typeof utmVal !== "undefined" && utmVal !== "") {
          ifrmSrc =
            ifrmSrc.indexOf("?") > 0
              ? ifrmSrc + "&" + utmPm + "=" + utmVal
              : ifrmSrc + "?" + utmPm + "=" + utmVal;
        }
      }
    }
  } catch {
    /* ignore */
  }
  return ifrmSrc;
}

function onZohoIframeMessage(ev: MessageEvent) {
  const evntData = ev.data;
  if (!evntData || typeof evntData !== "string") return;

  const zf_ifrm_data = evntData.split("|");
  if (zf_ifrm_data.length !== 2 && zf_ifrm_data.length !== 3) return;

  const container = document.getElementById(ZOHO_EMBED_DIV_ID);
  if (!container) return;

  const iframe = container.getElementsByTagName("iframe")[0];
  if (!iframe) return;

  const zf_perma = zf_ifrm_data[0];
  const zf_ifrm_ht_nw = parseInt(zf_ifrm_data[1], 10) + 15 + "px";

  if (
    iframe.src.indexOf("formperma") > 0 &&
    iframe.src.indexOf(zf_perma) > 0
  ) {
    const prevIframeHeight = iframe.style.height;
    let zf_tout = false;
    if (zf_ifrm_data.length === 3) {
      iframe.scrollIntoView();
      zf_tout = true;
    }

    if (prevIframeHeight !== zf_ifrm_ht_nw) {
      if (zf_tout) {
        setTimeout(() => {
          iframe.style.height = zf_ifrm_ht_nw;
        }, 500);
      } else {
        iframe.style.height = zf_ifrm_ht_nw;
      }
    }
  }
}

export function Registration() {
  const iframeSrc = useMemo(() => {
    if (typeof window === "undefined") return ZOHO_FORM_IFRAME_SRC;
    return buildIframeSrcWithUtm(ZOHO_FORM_IFRAME_SRC);
  }, []);

  useEffect(() => {
    window.addEventListener("message", onZohoIframeMessage, false);
    return () => {
      window.removeEventListener("message", onZohoIframeMessage, false);
    };
  }, []);

  return (
    <Section id="register" className="bg-paper py-14 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-20">
          <div className="max-w-xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-gold sm:text-[13px]">
              Registration
            </p>
            <h2 className="mt-3 text-[1.35rem] font-semibold leading-snug tracking-tight text-ink sm:mt-4 sm:text-[1.5rem]">
              Reserve your free spot
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted sm:mt-4 sm:text-[17px]">
              Free live session · Your details are used only for access and
              reminders.
            </p>
          </div>

          <div className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-card sm:border-black/[0.06]">
              <div className="border-b border-black/[0.06] bg-paper-soft/80 px-4 py-3.5 sm:px-5 sm:py-4">
                <p className="text-center text-[13px] font-medium text-ink sm:text-[14px]">
                  Sign up — free · live session
                </p>
              </div>

              {/* Zoho expects this id + iframe child for postMessage resize */}
              <div className="px-0 sm:px-1 md:px-2">
                <div
                  id={ZOHO_EMBED_DIV_ID}
                  className="flex w-full justify-center"
                >
                  <iframe
                    src={iframeSrc}
                    title="Reserve Your Free Spot"
                    aria-label="Reserve Your Free Spot"
                    className="mx-auto block w-full max-w-full border-0 transition-all duration-500 ease-in-out sm:w-[92%] sm:max-w-full md:w-[90%]"
                    style={{
                      height: "1190px",
                      maxWidth: "100%",
                    }}
                  />
                </div>
              </div>

              <p className="border-t border-black/[0.05] px-4 py-4 text-center text-[12px] leading-relaxed text-ink-muted sm:px-5 sm:text-[13px]">
                We respect your privacy. Your details are used only for webinar
                access and reminders. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
