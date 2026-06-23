import {
  pZapphire,
  pMdaas,
  pRjolad,
  pUqd,
  pCoptic,
  pWellpath,
  pOando,
  pClinalancet,
  pReliance,
  pDownload,
  pGrandville,
  pVoice,
  pAmazon,
  pLeadway,
  pHygeia,
} from '../assets'

const logos = [
  { src: pZapphire, alt: 'Zapphire Events' },
  { src: pMdaas, alt: 'MDaaS Global' },
  { src: pRjolad, alt: 'R-Jolad Hospital' },
  { src: pUqd, alt: 'Partner' },
  { src: pCoptic, alt: 'Coptic Hospital' },
  { src: pWellpath, alt: 'Wellpath' },
  { src: pOando, alt: 'Oando' },
  { src: pClinalancet, alt: 'Clinalancet' },
  { src: pReliance, alt: 'Reliance HMO' },
  { src: pDownload, alt: 'Partner' },
  { src: pGrandville, alt: 'Grandville' },
  { src: pVoice, alt: 'The Voice' },
  { src: pAmazon, alt: 'Amazon Studios' },
  { src: pLeadway, alt: 'Leadway Assurance' },
  { src: pHygeia, alt: 'Hygeia HMO' },
]

export default function PartnerLogos() {
  return (
    <>
      <div className="h-1 w-full bg-ink-50" />
      <section className="group w-full overflow-hidden bg-white py-9">
        {/*
          Single track holding the logos twice. The track is 2x the content
          width; animating it to translateX(-50%) scrolls exactly one full set,
          so the loop is seamless. Pauses on hover.
        */}
        <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={i < logos.length ? logo.alt : ''}
              aria-hidden={i >= logos.length}
              className="mr-[60px] h-9 w-auto shrink-0 object-contain mix-blend-darken"
            />
          ))}
        </div>
      </section>
    </>
  )
}
